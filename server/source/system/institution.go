package system

import (
	"context"
	sysModel "jnyz-app/server/model/system"
	"jnyz-app/server/service/system"
	"jnyz-app/server/utils"

	"github.com/pkg/errors"
	"gorm.io/gorm"
)

const initOrderInstitution = initOrderCasbin + 1

type initInstitution struct{}

// auto run
func init() {
	system.RegisterInit(initOrderInstitution, &initInstitution{})
}

func (i *initInstitution) MigrateTable(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	return ctx, db.AutoMigrate(&sysModel.SysInstitution{})
}

func (i *initInstitution) TableCreated(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return db.Migrator().HasTable(&sysModel.SysInstitution{})
}

func (i initInstitution) InitializerName() string {
	return sysModel.SysInstitution{}.TableName()
}

func (i *initInstitution) InitializeData(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	entities := []sysModel.SysInstitution{
		{InstitutionId: 1, InstitutionName: "总行", ParentId: utils.Pointer[uint](0)},
	}

	if err := db.Create(&entities).Error; err != nil {
		return ctx, errors.Wrapf(err, "%s表数据初始化失败!", sysModel.SysInstitution{}.TableName())
	}
	// data Institution
	if err := db.Model(&entities[0]).Association("DataInstitutionId").Replace(
		[]*sysModel.SysInstitution{
			{InstitutionId: 100},
		}); err != nil {
		return ctx, errors.Wrapf(err, "%s表数据初始化失败!",
			db.Model(&entities[0]).Association("DataInstitutionId").Relationship.JoinTable.Name)
	}

	next := context.WithValue(ctx, i.InitializerName(), entities)
	return next, nil
}

func (i *initInstitution) DataInserted(ctx context.Context) bool {
	/*db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	if errors.Is(db.Where("institution_id = ?", "1").
		First(&sysModel.SysInstitution{}).Error, gorm.ErrRecordNotFound) { // 判断是否存在数据
		return false
	}*/
	return true
}
