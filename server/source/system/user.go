package system

import (
	"context"

	sysModel "jnyz-app/server/model/system"
	"jnyz-app/server/service/system"
	"jnyz-app/server/utils"

	"github.com/gofrs/uuid/v5"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

const initOrderUser = initOrderAuthority + 1

type initUser struct{}

// auto run
func init() {
	system.RegisterInit(initOrderUser, &initUser{})
}

func (i *initUser) MigrateTable(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	return ctx, db.AutoMigrate(&sysModel.SysUser{})
}

func (i *initUser) TableCreated(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return db.Migrator().HasTable(&sysModel.SysUser{})
}

func (i initUser) InitializerName() string {
	return sysModel.SysUser{}.TableName()
}

func (i *initUser) InitializeData(ctx context.Context) (next context.Context, err error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	adminPassword := utils.BcryptHash("afdd0b4ad2ec172c586e2150770fbf9e")

	entities := []sysModel.SysUser{
		{
			UUID:          uuid.Must(uuid.NewV4()),
			Username:      "admin",
			Password:      adminPassword,
			NickName:      "admin",
			HeaderImg:     "/static/icon/defaultHeader.png",
			AuthorityId:   100,
			Phone:         "15556324021",
			Email:         "333333333@qq.com",
			InstitutionId: 3414696005,
		},
	}
	if err = db.Create(&entities).Error; err != nil {
		return ctx, errors.Wrap(err, sysModel.SysUser{}.TableName()+"表数据初始化失败!")
	}
	next = context.WithValue(ctx, i.InitializerName(), entities)
	authorityEntities, ok := ctx.Value(initAuthority{}.InitializerName()).([]sysModel.SysAuthority)
	if !ok {
		return next, errors.Wrap(system.ErrMissingDependentContext, "创建 [用户-权限] 关联失败, 未找到权限表初始化数据")
	}
	authorityEntities = authorityEntities[0:1]
	if err = db.Model(&entities[0]).Association("Authorities").Replace(authorityEntities); err != nil {
		return next, err
	}
	return next, err
}

func (i *initUser) DataInserted(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	var record sysModel.SysUser
	if errors.Is(db.Where("username = ?", "a303176530").
		Preload("Authorities").First(&record).Error, gorm.ErrRecordNotFound) { // 判断是否存在数据
		return false
	}
	return len(record.Authorities) > 0 && record.Authorities[0].AuthorityId == 888
}
