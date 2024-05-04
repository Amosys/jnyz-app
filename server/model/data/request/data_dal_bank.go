package request

import (
	"jnyz-app/server/model/common/request"
)

type DataDALBankSearch struct {
	StartDate uint `json:"startDate" form:"startDate"`
	EndDate   uint `json:"endDate" form:"endDate"`
	request.PageInfo
}

type DataDALBankGet struct {
	Date uint `json:"date" form:"date"`
}
