package app

import (
	"context"
	appModel "jnyz-app/server/model/app"
	"jnyz-app/server/service/system"

	"gorm.io/gorm"
)

const initOrderCloudSpeaker = system.InitOrderInternal + 1

type initAppCloudSpeaker struct{}

// auto run
func init() {
	system.RegisterInit(initOrderCloudSpeaker, &initAppCloudSpeaker{})
}

func (i *initAppCloudSpeaker) MigrateTable(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}
	return ctx, db.AutoMigrate(&appModel.AppCloudSpeaker{})
}

func (i *initAppCloudSpeaker) TableCreated(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return db.Migrator().HasTable(&appModel.AppCloudSpeaker{})
}

func (i initAppCloudSpeaker) InitializerName() string {
	return appModel.AppCloudSpeaker{}.TableName()
}

func (i *initAppCloudSpeaker) InitializeData(ctx context.Context) (context.Context, error) {
	return ctx, nil
}

func (i *initAppCloudSpeaker) DataInserted(ctx context.Context) bool {
	_, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return true
}
