// 自动生成模板AppCloudSpeaker
package app

import (
	"jnyz-app/server/global"
	
	
)

// 云音响 结构体  AppCloudSpeaker
type AppCloudSpeaker struct {
      global.GVA_MODEL
      SN  string `json:"sn" form:"sn" gorm:"column:sn;comment:;"binding:"required"`  //序列号 
      HwSN  string `json:"hwSn" form:"hwSn" gorm:"column:hw_sn;comment:;"`  //硬件序列号 
      Factory  string `json:"factory" form:"factory" gorm:"column:factory;comment:;"`  //厂商 
      SType  string `json:"sType" form:"sType" gorm:"column:s_type;comment:;"`  //音响类型 
      Mode  string `json:"mode" form:"mode" gorm:"column:mode;comment:;"`  //音响模式 
      CustomerId  string `json:"customerId" form:"customerId" gorm:"column:customer_id;comment:;"`  //商户ID 
      CustomerName  string `json:"customerName" form:"customerName" gorm:"column:customer_name;comment:;"`  //商户名称 
      StoreId  string `json:"storeId" form:"storeId" gorm:"column:store_id;comment:;"`  //门店ID 
      StoreName  string `json:"storeName" form:"storeName" gorm:"column:store_name;comment:;"`  //门店名称 
      Region  string `json:"region" form:"region" gorm:"column:region;comment:;"`  //地区 
      Institution  string `json:"institution" form:"institution" gorm:"column:institution;comment:;"`  //所属机构 
      CreatedBy  uint   `gorm:"column:created_by;comment:创建者"`
      UpdatedBy  uint   `gorm:"column:updated_by;comment:更新者"`
      DeletedBy  uint   `gorm:"column:deleted_by;comment:删除者"`
}


// TableName 云音响 AppCloudSpeaker自定义表名 app_cloudSpeaker
func (AppCloudSpeaker) TableName() string {
  return "app_cloudSpeaker"
}

