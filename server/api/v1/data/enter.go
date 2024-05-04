package data

import (
	"jnyz-app/server/service"
)

type ApiGroup struct {
	DataDepositSubApi
	DataDepositDetailCorpApi
	DataDepositDetailCurApi
	DataDepositDetailSaveApi
	DataDepositBankApi
	DataDepositTrandsApi
	DataDepositTop50Api
	DataLoanSubApi
	DataLoanDetailCorpApi
	DataLoanDetailPersApi
	DataLoanBankApi
	DataLoanTrandsApi
}

var DataDALBranchService = service.ServiceGroupApp.DataServiceGroup.DataDALBranchService
var DataDALBankService = service.ServiceGroupApp.DataServiceGroup.DataDALBankService
