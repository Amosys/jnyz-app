package request

import (
	"jnyz-app/server/model/app"
	"jnyz-app/server/model/common/request"
)

// av分页条件查询及排序结构体
type SearchSpeakerParams struct {
	app.AppSpeaker
	request.PageInfo
	OrderKey string `json:"orderKey"` // 排序
	Desc     bool   `json:"desc"`     // 排序方式:升序false(默认)|降序true
}
type QueryParams struct {
	SN           string `json:"sn"  form:"sn"`
	CustomerId   string `json:"customerId" form:"customerId"`
	CustomerName string `json:"customerName" form:"customerName"`
	StoreId      string `json:"storeId" form:"storeId"`
	StoreName    string `json:"storeName" form:"storeName"`
	Institution  string `json:"institution" form:"institution"`
	Limit        int    `query:"limit" form:"limit"`
	Offset       int    `query:"offset" form:"offset"`
}
