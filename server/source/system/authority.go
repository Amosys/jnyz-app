package system

import (
	"context"
	sysModel "jnyz-app/server/model/system"
	"jnyz-app/server/service/system"
	"jnyz-app/server/utils"

	"github.com/pkg/errors"
	"gorm.io/gorm"
)

const initOrderAuthority = initOrderCasbin + 1

type initAuthority struct{}

// auto run
func init() {
	system.RegisterInit(initOrderAuthority, &initAuthority{})
}

func (i *initAuthority) MigrateTable(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	return ctx, db.AutoMigrate(&sysModel.SysAuthority{})
}

func (i *initAuthority) TableCreated(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return db.Migrator().HasTable(&sysModel.SysAuthority{})
}

func (i initAuthority) InitializerName() string {
	return sysModel.SysAuthority{}.TableName()
}

func (i *initAuthority) InitializeData(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	entities := []sysModel.SysAuthority{
		{AuthorityId: 100, AuthorityName: "管理员", ParentId: utils.Pointer[uint](0), DefaultRouter: "dashboard"},
		{AuthorityId: 101, AuthorityName: "总行", ParentId: utils.Pointer[uint](0), DefaultRouter: "dashboard"},
		{AuthorityId: 1010, AuthorityName: "董事长", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1011, AuthorityName: "行长", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1012, AuthorityName: "副行长", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1013, AuthorityName: "理事长", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1014, AuthorityName: "监事长", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1015, AuthorityName: "部门经理", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1016, AuthorityName: "部门副经理", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 1017, AuthorityName: "办事员", ParentId: utils.Pointer[uint](101), DefaultRouter: "dashboard"},
		{AuthorityId: 102, AuthorityName: "支行", ParentId: utils.Pointer[uint](0), DefaultRouter: "dashboard"},
		{AuthorityId: 1020, AuthorityName: "行长", ParentId: utils.Pointer[uint](102), DefaultRouter: "dashboard"},
		{AuthorityId: 1021, AuthorityName: "副行长", ParentId: utils.Pointer[uint](102), DefaultRouter: "dashboard"},
		{AuthorityId: 1022, AuthorityName: "客户经理", ParentId: utils.Pointer[uint](102), DefaultRouter: "dashboard"},
		{AuthorityId: 1023, AuthorityName: "会计主管", ParentId: utils.Pointer[uint](102), DefaultRouter: "dashboard"},
		{AuthorityId: 1024, AuthorityName: "综合柜员", ParentId: utils.Pointer[uint](102), DefaultRouter: "dashboard"},
		{AuthorityId: 1025, AuthorityName: "大堂经理", ParentId: utils.Pointer[uint](102), DefaultRouter: "dashboard"},
	}

	if err := db.Create(&entities).Error; err != nil {
		return ctx, errors.Wrapf(err, "%s表数据初始化失败!", sysModel.SysAuthority{}.TableName())
	}
	// data authority
	if err := db.Model(&entities[0]).Association("DataAuthorityId").Replace(
		[]*sysModel.SysAuthority{
			{AuthorityId: 100},
		}); err != nil {
		return ctx, errors.Wrapf(err, "%s表数据初始化失败!",
			db.Model(&entities[0]).Association("DataAuthorityId").Relationship.JoinTable.Name)
	}

	next := context.WithValue(ctx, i.InitializerName(), entities)
	return next, nil
}

func (i *initAuthority) DataInserted(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	if errors.Is(db.Where("authority_id = ?", "100").
		First(&sysModel.SysAuthority{}).Error, gorm.ErrRecordNotFound) { // 判断是否存在数据
		return false
	}
	return true
}
