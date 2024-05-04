package data

import (
	v1 "jnyz-app/server/api/v1"
	"jnyz-app/server/middleware"

	"github.com/gin-gonic/gin"
)

type DataDALBankRouter struct {
}

func (s *DataDALBankRouter) InitDataDALBankRouter(Router *gin.RouterGroup) {
	router := Router.Group("data").Use(middleware.OperationRecord())
	var DepositBankApi = v1.ApiGroupApp.DataApiGroup.DataDepositBankApi
	{
		router.POST("depositBank", DepositBankApi.CreateDepositBank)
		router.GET("depositBank", DepositBankApi.FindDepositBank)
		router.GET("depositBankList", DepositBankApi.GetDepositBank)
	}

	var DepositTrandsApi = v1.ApiGroupApp.DataApiGroup.DataDepositTrandsApi
	{
		router.POST("depositTrands", DepositTrandsApi.CreateDepositTrands)
		router.GET("depositTrands", DepositTrandsApi.FindDepositTrands)
		router.GET("depositTrandsList", DepositTrandsApi.GetDepositTrands)
	}

	var DepositTop50Api = v1.ApiGroupApp.DataApiGroup.DataDepositTop50Api
	{
		router.POST("depositTop50", DepositTop50Api.CreateDepositTop50)
		router.GET("depositTop50List", DepositTop50Api.GetDepositTop50)
	}

	var LoanBankApi = v1.ApiGroupApp.DataApiGroup.DataLoanBankApi
	{
		router.POST("loanBank", LoanBankApi.CreateLoanBank)
		router.GET("loanBank", LoanBankApi.FindLoanBank)
		router.GET("loanBankList", LoanBankApi.GetLoanBank)
	}

	var LoanTrandsApi = v1.ApiGroupApp.DataApiGroup.DataLoanTrandsApi
	{
		router.POST("loanTrands", LoanTrandsApi.CreateLoanTrands)
		router.GET("loanTrands", LoanTrandsApi.FindLoanTrands)
		router.GET("loanTrandsList", LoanTrandsApi.GetLoanTrands)
	}
}
