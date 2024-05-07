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

type DataLoanDetailCorpApi struct {
}

func (api *DataLoanDetailCorpApi) CreateLoanDetailCorp(c *gin.Context) {
	var LoanDetailCorp data.DataLoanDetailCorp
	err := c.ShouldBindJSON(&LoanDetailCorp)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err := DataDALBranchService.CreateDALBranch(&LoanDetailCorp); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

func (api *DataLoanDetailCorpApi) FindLoanDetailCorp(c *gin.Context) {
	var LoanGet dataReq.DataDALBranchGet
	var reLoanDetailCorp data.DataLoanDetailCorp
	err := c.ShouldBindQuery(&LoanGet)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	fmt.Println(utils.GetUserInfo(c))
	if err := DataDALBranchService.GetDALBranch(LoanGet.Branch, LoanGet.Date, &reLoanDetailCorp); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reLoanDetailCorp": reLoanDetailCorp}, c)
	}
}

func (api *DataLoanDetailCorpApi) GetLoanDetailCorp(c *gin.Context) {
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
	var list = make([]data.DataLoanDetailCorp, pageInfo.PageSize)
	if total, err := DataDALBranchService.GetDALBranchInfoList(pageInfo, data.DataLoanDetailCorp{}, &list); err != nil {
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