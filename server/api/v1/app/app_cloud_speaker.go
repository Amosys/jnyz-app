package app

import (
	"jnyz-app/server/global"
    "jnyz-app/server/model/app"
    appReq "jnyz-app/server/model/app/request"
    "jnyz-app/server/model/common/response"
    "jnyz-app/server/service"
    "github.com/gin-gonic/gin"
    "go.uber.org/zap"
    "jnyz-app/server/utils"
)

type AppCloudSpeakerApi struct {
}

var CloudSpeakerService = service.ServiceGroupApp.AppServiceGroup.AppCloudSpeakerService


// CreateAppCloudSpeaker 创建云音响
// @Tags AppCloudSpeaker
// @Summary 创建云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body app.AppCloudSpeaker true "创建云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /CloudSpeaker/createAppCloudSpeaker [post]
func (CloudSpeakerApi *AppCloudSpeakerApi) CreateAppCloudSpeaker(c *gin.Context) {
	var CloudSpeaker app.AppCloudSpeaker
	err := c.ShouldBindJSON(&CloudSpeaker)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
    CloudSpeaker.CreatedBy = utils.GetUserID(c)

	if err := CloudSpeakerService.CreateAppCloudSpeaker(&CloudSpeaker); err != nil {
        global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteAppCloudSpeaker 删除云音响
// @Tags AppCloudSpeaker
// @Summary 删除云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body app.AppCloudSpeaker true "删除云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CloudSpeaker/deleteAppCloudSpeaker [delete]
func (CloudSpeakerApi *AppCloudSpeakerApi) DeleteAppCloudSpeaker(c *gin.Context) {
	id := c.Query("ID")
    	userID := utils.GetUserID(c)
	if err := CloudSpeakerService.DeleteAppCloudSpeaker(id,userID); err != nil {
        global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteAppCloudSpeakerByIds 批量删除云音响
// @Tags AppCloudSpeaker
// @Summary 批量删除云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /CloudSpeaker/deleteAppCloudSpeakerByIds [delete]
func (CloudSpeakerApi *AppCloudSpeakerApi) DeleteAppCloudSpeakerByIds(c *gin.Context) {
	ids := c.QueryArray("ids[]")
    userID := utils.GetUserID(c)
	if err := CloudSpeakerService.DeleteAppCloudSpeakerByIds(ids,userID); err != nil {
        global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateAppCloudSpeaker 更新云音响
// @Tags AppCloudSpeaker
// @Summary 更新云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body app.AppCloudSpeaker true "更新云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /CloudSpeaker/updateAppCloudSpeaker [put]
func (CloudSpeakerApi *AppCloudSpeakerApi) UpdateAppCloudSpeaker(c *gin.Context) {
	var CloudSpeaker app.AppCloudSpeaker
	err := c.ShouldBindJSON(&CloudSpeaker)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
    CloudSpeaker.UpdatedBy = utils.GetUserID(c)

	if err := CloudSpeakerService.UpdateAppCloudSpeaker(CloudSpeaker); err != nil {
        global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindAppCloudSpeaker 用id查询云音响
// @Tags AppCloudSpeaker
// @Summary 用id查询云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query app.AppCloudSpeaker true "用id查询云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /CloudSpeaker/findAppCloudSpeaker [get]
func (CloudSpeakerApi *AppCloudSpeakerApi) FindAppCloudSpeaker(c *gin.Context) {
	id := c.Query("ID")
	if reCloudSpeaker, err := CloudSpeakerService.GetAppCloudSpeaker(id); err != nil {
        global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reCloudSpeaker": reCloudSpeaker}, c)
	}
}

// GetAppCloudSpeakerList 分页获取云音响列表
// @Tags AppCloudSpeaker
// @Summary 分页获取云音响列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query appReq.AppCloudSpeakerSearch true "分页获取云音响列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /CloudSpeaker/getAppCloudSpeakerList [get]
func (CloudSpeakerApi *AppCloudSpeakerApi) GetAppCloudSpeakerList(c *gin.Context) {
	var pageInfo appReq.AppCloudSpeakerSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := CloudSpeakerService.GetAppCloudSpeakerInfoList(pageInfo); err != nil {
	    global.GVA_LOG.Error("获取失败!", zap.Error(err))
        response.FailWithMessage("获取失败", c)
    } else {
        response.OkWithDetailed(response.PageResult{
            List:     list,
            Total:    total,
            Page:     pageInfo.Page,
            PageSize: pageInfo.PageSize,
        }, "获取成功", c)
    }
}
