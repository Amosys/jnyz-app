package app

import (
	"jnyz-app/server/global"
	"jnyz-app/server/model/app"
    appReq "jnyz-app/server/model/app/request"
    "gorm.io/gorm"
)

type AppCloudSpeakerService struct {
}

// CreateAppCloudSpeaker 创建云音响记录
// Author [piexlmax](https://github.com/piexlmax)
func (CloudSpeakerService *AppCloudSpeakerService) CreateAppCloudSpeaker(CloudSpeaker *app.AppCloudSpeaker) (err error) {
	err = global.GVA_DB.Create(CloudSpeaker).Error
	return err
}

// DeleteAppCloudSpeaker 删除云音响记录
// Author [piexlmax](https://github.com/piexlmax)
func (CloudSpeakerService *AppCloudSpeakerService)DeleteAppCloudSpeaker(id string,userID uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
	    if err := tx.Model(&app.AppCloudSpeaker{}).Where("id = ?", id).Update("deleted_by", userID).Error; err != nil {
              return err
        }
        if err = tx.Delete(&app.AppCloudSpeaker{},"id = ?",id).Error; err != nil {
              return err
        }
        return nil
	})
	return err
}

// DeleteAppCloudSpeakerByIds 批量删除云音响记录
// Author [piexlmax](https://github.com/piexlmax)
func (CloudSpeakerService *AppCloudSpeakerService)DeleteAppCloudSpeakerByIds(ids []string,deleted_by uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
	    if err := tx.Model(&app.AppCloudSpeaker{}).Where("id in ?", ids).Update("deleted_by", deleted_by).Error; err != nil {
            return err
        }
        if err := tx.Where("id in ?", ids).Delete(&app.AppCloudSpeaker{}).Error; err != nil {
            return err
        }
        return nil
    })
	return err
}

// UpdateAppCloudSpeaker 更新云音响记录
// Author [piexlmax](https://github.com/piexlmax)
func (CloudSpeakerService *AppCloudSpeakerService)UpdateAppCloudSpeaker(CloudSpeaker app.AppCloudSpeaker) (err error) {
	err = global.GVA_DB.Save(&CloudSpeaker).Error
	return err
}

// GetAppCloudSpeaker 根据id获取云音响记录
// Author [piexlmax](https://github.com/piexlmax)
func (CloudSpeakerService *AppCloudSpeakerService)GetAppCloudSpeaker(id string) (CloudSpeaker app.AppCloudSpeaker, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&CloudSpeaker).Error
	return
}

// GetAppCloudSpeakerInfoList 分页获取云音响记录
// Author [piexlmax](https://github.com/piexlmax)
func (CloudSpeakerService *AppCloudSpeakerService)GetAppCloudSpeakerInfoList(info appReq.AppCloudSpeakerSearch) (list []app.AppCloudSpeaker, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
    // 创建db
	db := global.GVA_DB.Model(&app.AppCloudSpeaker{})
    var CloudSpeakers []app.AppCloudSpeaker
    // 如果有条件搜索 下方会自动创建搜索语句
    if info.StartCreatedAt !=nil && info.EndCreatedAt !=nil {
     db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
    }
    if info.SN != "" {
        db = db.Where("sn = ?",info.SN)
    }
    if info.HwSN != "" {
        db = db.Where("hw_sn = ?",info.HwSN)
    }
	err = db.Count(&total).Error
	if err!=nil {
    	return
    }

	if limit != 0 {
       db = db.Limit(limit).Offset(offset)
    }
	
	err = db.Find(&CloudSpeakers).Error
	return  CloudSpeakers, total, err
}
