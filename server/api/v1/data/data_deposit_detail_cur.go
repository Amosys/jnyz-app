package data

import (
	"fmt"
	"jnyz-app/server/global"
	"jnyz-app/server/model/common/response"
	"jnyz-app/server/model/data"
	dataReq "jnyz-app/server/model/data/request"

	"jnyz-app/server/utils"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type DataDepositDetailCurApi struct {
}

func (api *DataDepositDetailCurApi) CreateDepositDetailCur(c *gin.Context) {
	var DepositDetailCur data.DataDepositDetailCur
	err := c.ShouldBindJSON(&DepositDetailCur)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err := DataDALBranchService.CreateDALBranch(&DepositDetailCur); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

func (api *DataDepositDetailCurApi) FindDepositDetailCur(c *gin.Context) {
	var DepositGet dataReq.DataDALBranchGet
	var reDepositDetailCur data.DataDepositDetailCur
	err := c.ShouldBindQuery(&DepositGet)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	fmt.Println(utils.GetUserInfo(c))
	if err := DataDALBranchService.GetDALBranch(DepositGet.Branch, DepositGet.Date, &reDepositDetailCur); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reDepositDetailCur": reDepositDetailCur}, c)
	}
}

func (api *DataDepositDetailCurApi) GetDepositDetailCur(c *gin.Context) {
	var pageInfo dataReq.DataDALBranchSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = utils.Verify(pageInfo, utils.PageInfoVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	var list = make([]data.DataDepositDetailCur, pageInfo.PageSize)
	if total, err := DataDALBranchService.GetDALBranchInfoList(pageInfo, data.DataDepositDetailCur{}, &list); err != nil {
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
