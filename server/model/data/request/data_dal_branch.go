package request

import (
	"jnyz-app/server/model/common/request"
)

type DataDALBranchSearch struct {
	StartDate uint `json:"startDate" form:"startDate"`
	EndDate   uint `json:"endDate" form:"endDate"`
	Branch    uint `json:"branch" form:"branch" `
	request.PageInfo
}

type DataDALBranchGet struct {
	Date   uint `json:"date" form:"date"`
	Branch uint `json:"branch" form:"branch" `
}
