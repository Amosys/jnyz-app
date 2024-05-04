package data

import (
	"context"
	dataModel "jnyz-app/server/model/data"
	"jnyz-app/server/service/system"

	"gorm.io/gorm"
)

const initOrderDataDeposit = system.InitOrderData + 1

type initDataDeposit struct{}

// auto run
func init() {
	system.RegisterInit(initOrderDataDeposit, &initDataDeposit{})
}

func (i *initDataDeposit) MigrateTable(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}

	if err := db.AutoMigrate(&dataModel.DataDepositBank{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataDepositDetailCorp{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataDepositDetailCur{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataDepositDetailSave{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataDepositSub{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataDepositTop50{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataDepositTrands{}); err != nil {
		return ctx, err
	}
	return ctx, nil
}

func (i *initDataDeposit) TableCreated(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return db.Migrator().HasTable(&dataModel.DataDepositBank{}) ||
		db.Migrator().HasTable(&dataModel.DataDepositDetailCorp{}) ||
		db.Migrator().HasTable(&dataModel.DataDepositDetailCur{}) ||
		db.Migrator().HasTable(&dataModel.DataDepositDetailSave{}) ||
		db.Migrator().HasTable(&dataModel.DataDepositSub{}) ||
		db.Migrator().HasTable(&dataModel.DataDepositTop50{}) ||
		db.Migrator().HasTable(&dataModel.DataDepositTrands{})
}

func (i initDataDeposit) InitializerName() string {
	return dataModel.DataDepositBank{}.TableName() + ", " +
		dataModel.DataDepositDetailCorp{}.TableName() + ", " +
		dataModel.DataDepositDetailCur{}.TableName() + ", " +
		dataModel.DataDepositDetailSave{}.TableName() + ", " +
		dataModel.DataDepositSub{}.TableName() + ", " +
		dataModel.DataDepositTop50{}.TableName() + ", " +
		dataModel.DataDepositTrands{}.TableName()
}

func (i *initDataDeposit) InitializeData(ctx context.Context) (context.Context, error) {
	return ctx, nil
}

func (i *initDataDeposit) DataInserted(ctx context.Context) bool {
	_, ok := ctx.Value("db").(*gorm.DB)
	return ok
}
