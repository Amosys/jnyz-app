package app

import (
	"jnyz-app/server/global"
)

type AppSpeaker struct {
	global.GVA_MODEL
	SN           string `json:"sn" gorm:"comment:序列号"`
	HwSN         string `json:"hwSn" gorm:"comment:硬件序列号"`
	Factory      string `json:"factory" gorm:"comment:厂商"`
	SType        string `json:"sType" gorm:"comment:音响类型"`
	Mode         string `json:"mode" gorm:"comment:模式"`
	CustomerId   string `json:"customerId" gorm:"comment:商户ID"`
	CustomerName string `json:"customerName" gorm:"comment:商户名称"`
	StoreId      string `json:"storeId" gorm:"comment:门店ID"`
	StoreName    string `json:"storeName" gorm:"comment:门店名称"`
	Region       string `json:"region" gorm:"comment:所属地区"`
	Institution  string `json:"institution" gorm:"comment:所属机构"`
}

func (AppSpeaker) TableName() string {
	return "app_speakers"
}
