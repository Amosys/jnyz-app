package system

import (
	"jnyz-app/server/global"
	"jnyz-app/server/model/common/request"
	"jnyz-app/server/model/common/response"
	"jnyz-app/server/model/system"
	systemRes "jnyz-app/server/model/system/response"
	"jnyz-app/server/utils"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type InstitutionApi struct{}

// CreateInstitution
// @Tags      Institution
// @Summary   创建机构
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Param     data  body      system.SysInstitution                                                true  "权限id, 权限名, 父机构id"
// @Success   200   {object}  response.Response{data=systemRes.SysInstitutionResponse,msg=string}  "创建机构,返回包括系统机构详情"
// @Router    /institution/createInstitution [post]
func (a *InstitutionApi) CreateInstitution(c *gin.Context) {
	var institution, instBack system.SysInstitution
	var err error

	if err = c.ShouldBindJSON(&institution); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err = utils.Verify(institution, utils.InstitutionVerify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if instBack, err = InstitutionService.CreateInstitution(institution); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败"+err.Error(), c)
		return
	}
	response.OkWithDetailed(systemRes.SysInstitutionResponse{Institution: instBack}, "创建成功", c)
}

// DeleteInstitution
// @Tags      Institution
// @Summary   删除机构
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Param     data  body      system.SysInstitution            true  "删除机构"
// @Success   200   {object}  response.Response{msg=string}  "删除机构"
// @Router    /institution/deleteInstitution [post]
func (a *InstitutionApi) DeleteInstitution(c *gin.Context) {
	var institution system.SysInstitution
	var err error
	if err = c.ShouldBindJSON(&institution); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err = utils.Verify(institution, utils.InstitutionIdVerify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	// 删除机构之前需要判断是否有用户正在使用此机构
	if err = InstitutionService.DeleteInstitution(&institution); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败"+err.Error(), c)
		return
	}
	_ = casbinService.FreshCasbin()
	response.OkWithMessage("删除成功", c)
}

// UpdateInstitution
// @Tags      Institution
// @Summary   更新机构信息
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Param     data  body      system.SysInstitution                                                true  "权限id, 权限名, 父机构id"
// @Success   200   {object}  response.Response{data=systemRes.SysInstitutionResponse,msg=string}  "更新机构信息,返回包括系统机构详情"
// @Router    /institution/updateInstitution [post]
func (a *InstitutionApi) UpdateInstitution(c *gin.Context) {
	var auth system.SysInstitution
	err := c.ShouldBindJSON(&auth)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = utils.Verify(auth, utils.InstitutionVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	institution, err := InstitutionService.UpdateInstitution(auth)
	if err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败"+err.Error(), c)
		return
	}
	response.OkWithDetailed(systemRes.SysInstitutionResponse{Institution: institution}, "更新成功", c)
}

// GetInstitutionList
// @Tags      Institution
// @Summary   分页获取机构列表
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Param     data  body      request.PageInfo                                        true  "页码, 每页大小"
// @Success   200   {object}  response.Response{data=response.PageResult,msg=string}  "分页获取机构列表,返回包括列表,总数,页码,每页数量"
// @Router    /institution/getInstitutionList [post]
func (a *InstitutionApi) GetInstitutionList(c *gin.Context) {
	var pageInfo request.PageInfo
	err := c.ShouldBindJSON(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = utils.Verify(pageInfo, utils.PageInfoVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	list, total, err := InstitutionService.GetInstitutionInfoList(pageInfo)
	if err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败"+err.Error(), c)
		return
	}
	response.OkWithDetailed(response.PageResult{
		List:     list,
		Total:    total,
		Page:     pageInfo.Page,
		PageSize: pageInfo.PageSize,
	}, "获取成功", c)
}
