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

type DataDepositSubApi struct {
}

func (api *DataDepositSubApi) CreateDepositSub(c *gin.Context) {
	var DepositSub data.DataDepositSub
	err := c.ShouldBindJSON(&DepositSub)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err := DataDALBranchService.CreateDALBranch(&DepositSub); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

func (api *DataDepositSubApi) FindDepositSub(c *gin.Context) {
	var DepositGet dataReq.DataDALBranchGet
	var reDepositSub data.DataDepositSub
	err := c.ShouldBindJSON(&DepositGet)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	fmt.Println(utils.GetUserInfo(c))
	if err := DataDALBranchService.GetDALBranch(DepositGet.Branch, DepositGet.Date, &reDepositSub); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reDepositSub": reDepositSub}, c)
	}
}

func (api *DataDepositSubApi) GetDepositSub(c *gin.Context) {
	var pageInfo dataReq.DataDALBranchSearch
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
	var list = make([]data.DataDepositSub, pageInfo.PageSize)
	if total, err := DataDALBranchService.GetDALBranchInfoList(pageInfo, data.DataDepositSub{}, &list); err != nil {
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
