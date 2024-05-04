package data

import (
	v1 "jnyz-app/server/api/v1"
	"jnyz-app/server/middleware"

	"github.com/gin-gonic/gin"
)

type DataDALBranchRouter struct {
}

func (s *DataDALBranchRouter) InitDataDALBranchRouter(Router *gin.RouterGroup) {
	router := Router.Group("data").Use(middleware.OperationRecord())
	var DepositSubApi = v1.ApiGroupApp.DataApiGroup.DataDepositSubApi
	{
		router.POST("depositSub", DepositSubApi.CreateDepositSub)
		router.GET("depositSub", DepositSubApi.FindDepositSub)
		router.GET("depositSubList", DepositSubApi.GetDepositSub)
	}

	var DepositDetailCorpApi = v1.ApiGroupApp.DataApiGroup.DataDepositDetailCorpApi
	{
		router.POST("depositDetailCorp", DepositDetailCorpApi.CreateDepositDetailCorp)
		router.GET("depositDetailCorp", DepositDetailCorpApi.FindDepositDetailCorp)
		router.GET("depositDetailCorpList", DepositDetailCorpApi.GetDepositDetailCorp)
	}

	var DepositDetailCurpApi = v1.ApiGroupApp.DataApiGroup.DataDepositDetailCurApi
	{
		router.POST("depositDetailCur", DepositDetailCurpApi.CreateDepositDetailCur)
		router.GET("depositDetailCur", DepositDetailCurpApi.FindDepositDetailCur)
		router.GET("depositDetailCurList", DepositDetailCurpApi.GetDepositDetailCur)
	}

	var DepositDetailSaveApi = v1.ApiGroupApp.DataApiGroup.DataDepositDetailSaveApi
	{
		router.POST("depositDetailSave", DepositDetailSaveApi.CreateDepositDetailSave)
		router.GET("depositDetailSave", DepositDetailSaveApi.FindDepositDetailSave)
		router.GET("depositDetailSaveList", DepositDetailSaveApi.GetDepositDetailSave)
	}

	var LoanSubApi = v1.ApiGroupApp.DataApiGroup.DataLoanSubApi
	{
		router.POST("loanSub", LoanSubApi.CreateLoanSub)
		router.GET("loanSub", LoanSubApi.FindLoanSub)
		router.GET("loanSubList", LoanSubApi.GetLoanSub)
	}

	var LoanDetailCorpApi = v1.ApiGroupApp.DataApiGroup.DataLoanDetailCorpApi
	{
		router.POST("loanDetailCorp", LoanDetailCorpApi.CreateLoanDetailCorp)
		router.GET("loanDetailCorp", LoanDetailCorpApi.FindLoanDetailCorp)
		router.GET("loanDetailCorpList", LoanDetailCorpApi.GetLoanDetailCorp)
	}

	var LoanDetailPersApi = v1.ApiGroupApp.DataApiGroup.DataLoanDetailPersApi
	{
		router.POST("loanDetailPers", LoanDetailPersApi.CreateLoanDetailPers)
		router.GET("loanDetailPers", LoanDetailPersApi.FindLoanDetailPers)
		router.GET("loanDetailPersList", LoanDetailPersApi.GetLoanDetailPers)
	}
}
