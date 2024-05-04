package data

import (
	"context"
	dataModel "jnyz-app/server/model/data"
	"jnyz-app/server/service/system"

	"gorm.io/gorm"
)

const initOrderDataLoan = system.InitOrderData + 1

type initDataLoan struct{}

// auto run
func init() {
	system.RegisterInit(initOrderDataLoan, &initDataLoan{})
}

func (i *initDataLoan) MigrateTable(ctx context.Context) (context.Context, error) {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return ctx, system.ErrMissingDBContext
	}

	if err := db.AutoMigrate(&dataModel.DataLoanBank{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataLoanDetailCorp{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataLoanDetailPers{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataLoanSub{}); err != nil {
		return ctx, err
	}

	if err := db.AutoMigrate(&dataModel.DataLoanTrands{}); err != nil {
		return ctx, err
	}
	return ctx, nil
}

func (i *initDataLoan) TableCreated(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	return db.Migrator().HasTable(&dataModel.DataLoanBank{}) ||
		db.Migrator().HasTable(&dataModel.DataLoanDetailCorp{}) ||
		db.Migrator().HasTable(&dataModel.DataLoanDetailPers{}) ||
		db.Migrator().HasTable(&dataModel.DataLoanSub{}) ||
		db.Migrator().HasTable(&dataModel.DataLoanTrands{})
}

func (i initDataLoan) InitializerName() string {
	return dataModel.DataLoanBank{}.TableName() + ", " +
		dataModel.DataLoanDetailCorp{}.TableName() + ", " +
		dataModel.DataLoanDetailPers{}.TableName() + ", " +
		dataModel.DataLoanSub{}.TableName() + ", " +
		dataModel.DataLoanTrands{}.TableName()
}

func (i *initDataLoan) InitializeData(ctx context.Context) (context.Context, error) {
	return ctx, nil
}

func (i *initDataLoan) DataInserted(ctx context.Context) bool {
	_, ok := ctx.Value("db").(*gorm.DB)
	return ok
}
