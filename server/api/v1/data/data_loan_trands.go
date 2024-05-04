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

type DataLoanTrandsApi struct {
}

func (api *DataLoanTrandsApi) CreateLoanTrands(c *gin.Context) {
	var LoanTrands data.DataLoanTrands
	err := c.ShouldBindJSON(&LoanTrands)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err := DataDALBankService.CreateDALBank(&LoanTrands); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

func (api *DataLoanTrandsApi) FindLoanTrands(c *gin.Context) {
	var LoanGet dataReq.DataDALBankGet
	var reLoanTrands data.DataLoanTrands
	err := c.ShouldBindQuery(&LoanGet)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	fmt.Println(utils.GetUserInfo(c))
	if err := DataDALBankService.GetDALBank(LoanGet.Date, &reLoanTrands); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reLoanTrands": reLoanTrands}, c)
	}
}

func (api *DataLoanTrandsApi) GetLoanTrands(c *gin.Context) {
	var pageInfo dataReq.DataDALBankSearch
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
	var list = make([]data.DataLoanTrands, pageInfo.PageSize)
	if total, err := DataDALBankService.GetDALBankInfoList(pageInfo, data.DataLoanTrands{}, &list); err != nil {
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
