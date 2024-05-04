package data

import (
	"jnyz-app/server/global"
	dataReq "jnyz-app/server/model/data/request"
)

type DataDALBranchService struct {
}

// CreateDataDALBranch 创建数据记录
// Author [piexlmax](https://github.com/piexlmax)
func (DALBranchService *DataDALBranchService) CreateDALBranch(value interface{}) (err error) {
	err = global.GVA_DB.Create(value).Error
	return err
}

// GetDataDALBranch 根据Branch获取数据记录
// Author [piexlmax](https://github.com/piexlmax)
func (DALBranchService *DataDALBranchService) GetDALBranch(branch uint, date uint, tp interface{}) (err error) {
	err = global.GVA_DB.Model(tp).Where("BRANCH = ?", branch).Where("DT = ?", date).First(&tp).Error
	return
}

// GetDataDALBranchInfoList 分页获取数据记录
// Author [piexlmax](https://github.com/piexlmax)
func (DALBranchService *DataDALBranchService) GetDALBranchInfoList(info dataReq.DataDALBranchSearch, value interface{}, list interface{}) (total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(value)
	db = db.Where("DT BETWEEN ? AND ?", info.StartDate, info.EndDate).Where("BRANCH = ?", info.Branch)
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
