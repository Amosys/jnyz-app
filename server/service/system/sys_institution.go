package system

import (
	"errors"

	"jnyz-app/server/global"
	"jnyz-app/server/model/common/request"
	"jnyz-app/server/model/system"

	"gorm.io/gorm"
)

var ErrInsExistence = errors.New("存在相同机构id")

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateInstitution
//@description: 创建一个机构
//@param: inst model.SysInstitution
//@return: institution system.SysInstitution, err error

type InstitutionService struct{}

var InstitutionServiceApp = new(InstitutionService)

func (institutionService *InstitutionService) CreateInstitution(inst system.SysInstitution) (institution system.SysInstitution, err error) {

	if err = global.GVA_DB.Where("institution_id = ?", inst.InstitutionId).First(&system.SysInstitution{}).Error; !errors.Is(err, gorm.ErrRecordNotFound) {
		return inst, ErrInsExistence
	}

	return inst, global.GVA_DB.Create(&inst).Error
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateInstitution
//@description: 更改一个机构
//@param: inst model.SysInstitution
//@return: institution system.SysInstitution, err error

func (institutionService *InstitutionService) UpdateInstitution(inst system.SysInstitution) (institution system.SysInstitution, err error) {
	err = global.GVA_DB.Where("institution_id = ?", inst.InstitutionId).First(&system.SysInstitution{}).Updates(&inst).Error
	return inst, err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteInstitution
//@description: 删除机构
//@param: inst *model.SysInstitution
//@return: err error

func (institutionService *InstitutionService) DeleteInstitution(inst *system.SysInstitution) error {
	var err error

	if errors.Is(global.GVA_DB.Debug().Preload("Users").First(&inst).Error, gorm.ErrRecordNotFound) {
		return errors.New("该机构不存在")
	}
	if len(inst.Users) != 0 {
		return errors.New("此机构有从属用户，禁止删除")
	}
	if !errors.Is(global.GVA_DB.Where("institution_id = ?", inst.InstitutionId).First(&system.SysUser{}).Error, gorm.ErrRecordNotFound) {
		return errors.New("此机构有从属用户，禁止删除")
	}
	if !errors.Is(global.GVA_DB.Where("parent_id = ?", inst.InstitutionId).First(&system.SysInstitution{}).Error, gorm.ErrRecordNotFound) {
		return errors.New("此机构存在子机构不允许删除")
	}

	err = global.GVA_DB.Delete(&inst).Error
	if err != nil {
		return err
	}
	return nil
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetInstitutionInfoList
//@description: 分页获取数据
//@param: info request.PageInfo
//@return: list interface{}, total int64, err error

func (institutionService *InstitutionService) GetInstitutionInfoList(info request.PageInfo) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	db := global.GVA_DB.Model(&system.SysInstitution{})
	if err = db.Where("parent_id = ?", "0").Count(&total).Error; total == 0 || err != nil {
		return
	}
	var institution []system.SysInstitution
	err = db.Limit(limit).Offset(offset).Where("parent_id = ?", "0").Find(&institution).Error
	for k := range institution {
		err = institutionService.findChildrenInstitution(&institution[k])
	}
	return institution, total, err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetInstitutionInfo
//@description: 获取所有机构信息
//@param: inst model.SysInstitution
//@return: sa system.SysInstitution, err error

func (institutionService *InstitutionService) GetInstitutionInfo(institutionId uint) (sa system.SysInstitution, err error) {
	err = global.GVA_DB.Where("institution_id = ?", institutionId).First(&sa).Error
	return sa, err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: findChildrenInstitution
//@description: 查询子机构
//@param: institution *model.SysInstitution
//@return: err error

func (institutionService *InstitutionService) findChildrenInstitution(institution *system.SysInstitution) (err error) {
	err = global.GVA_DB.Where("parent_id = ?", institution.InstitutionId).Find(&institution.Children).Error
	if len(institution.Children) > 0 {
		for k := range institution.Children {
			err = institutionService.findChildrenInstitution(&institution.Children[k])
		}
	}
	return err
}
