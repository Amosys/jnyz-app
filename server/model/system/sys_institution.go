package system

import (
	"time"
)

type SysInstitution struct {
	CreatedAt        time.Time        // 创建时间
	UpdatedAt        time.Time        // 更新时间
	DeletedAt        *time.Time       `sql:"index"`
	InstitutionId    uint             `json:"institutionId" gorm:"not null;unique;primary_key;comment:机构ID;size:90"` // 机构ID
	InstitutionName  string           `json:"institutionName" gorm:"index;comment:机构名称"`                             // 机构名称
	InstitutionType  uint             `json:"institutionType"  gorm:"comment:机构类型"`                                  // 机构类型
	InstitutionLevel uint             `json:"institutionLevel" gorm:"comment:机构级别"`                                  // 机构级别
	ParentId         *uint            `json:"parentId" gorm:"default:0;comment:父机构ID"`                               // 父机构ID
	Children         []SysInstitution `json:"children" gorm:"-"`
	Users            []SysUser        `json:"-" gorm:"foreignKey:InstitutionId"`
}

func (SysInstitution) TableName() string {
	return "sys_institutions"
}
