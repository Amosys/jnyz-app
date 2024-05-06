package data

import (
	"jnyz-app/server/global"
	dataReq "jnyz-app/server/model/data/request"
)

type DataDALBankService struct {
}

// CreateDataDALBank 创建数据记录
// Author [piexlmax](https://github.com/piexlmax)
func (DALBankService *DataDALBankService) CreateDALBank(value interface{}) (err error) {
	err = global.GVA_DB.Create(value).Error
	return err
}

// GetDataDALBank 根据DT获取单条数据记录
// Author [piexlmax](https://github.com/piexlmax)
func (DALBankService *DataDALBankService) GetDALBank(date uint, tp interface{}) (err error) {
	db := global.GVA_DB.Model(tp)
	if date != 0 {
		db = db.Where("DT = ?", date)
	}
	err = db.Order("id desc").First(&tp).Error
	return
}

// GetDataDALBankInfoList 分页获取数据记录
// Author [piexlmax](https://github.com/piexlmax)
func (DALBankService *DataDALBankService) GetDALBankInfoList(info dataReq.DataDALBankSearch, value interface{}, list interface{}) (total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(value)
	db = db.Where("DT BETWEEN ? AND ?", info.StartDate, info.EndDate)
	err = db.Count(&total).Error
	if err != nil {
		return
	}

	if limit != 0 {
		db = db.Limit(limit).Offset(offset)
	}

	err = db.Find(list).Error
	return total, err
}
