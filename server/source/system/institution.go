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
		{InstitutionId: 3414696094, InstitutionName: "泾县农村商业银行", ParentId: utils.Pointer[uint](0)},
		{InstitutionId: 3414696001, InstitutionName: "总行", InstitutionLevel: 1, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696003, InstitutionName: "领导班子", InstitutionType: 3, InstitutionLevel: 1, ParentId: utils.Pointer[uint](3414696001)},
		{InstitutionId: 3414696005, InstitutionName: "科技信息部", InstitutionType: 3, InstitutionLevel: 1, ParentId: utils.Pointer[uint](3414696001)},
		{InstitutionId: 3414696091, InstitutionName: "清算中心", InstitutionType: 3, InstitutionLevel: 1, ParentId: utils.Pointer[uint](3414696001)},
		{InstitutionId: 3414696093, InstitutionName: "财务部", InstitutionType: 3, InstitutionLevel: 1, ParentId: utils.Pointer[uint](3414696001)},
		{InstitutionId: 3414696095, InstitutionName: "营业部（市场部）", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696097, InstitutionName: "晏公支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696099, InstitutionName: "五里支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696101, InstitutionName: "荷花塘支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696103, InstitutionName: "古坝支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696105, InstitutionName: "泾川支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696107, InstitutionName: "画家村支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696109, InstitutionName: "北门支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696111, InstitutionName: "阳光支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696113, InstitutionName: "太元支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696115, InstitutionName: "桃花潭支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696117, InstitutionName: "包合支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696119, InstitutionName: "厚岸支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696121, InstitutionName: "茂林支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696123, InstitutionName: "章渡支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696125, InstitutionName: "云岭支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696127, InstitutionName: "北贡支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696129, InstitutionName: "中村支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696131, InstitutionName: "黄村支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696133, InstitutionName: "安吴支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696135, InstitutionName: "丁家桥支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696137, InstitutionName: "榔桥支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696139, InstitutionName: "西阳支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696141, InstitutionName: "苏红支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696143, InstitutionName: "蔡村支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696145, InstitutionName: "琴溪支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696147, InstitutionName: "童疃支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696149, InstitutionName: "昌桥支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
		{InstitutionId: 3414696151, InstitutionName: "孤峰支行", InstitutionType: 1, InstitutionProp: 3, InstitutionLevel: 5, ParentId: utils.Pointer[uint](3414696094)},
	}

	if err := db.Create(&entities).Error; err != nil {
		return ctx, errors.Wrapf(err, "%s表数据初始化失败!", sysModel.SysInstitution{}.TableName())
	}
	next := context.WithValue(ctx, i.InitializerName(), entities)
	return next, nil
}

func (i *initInstitution) DataInserted(ctx context.Context) bool {
	db, ok := ctx.Value("db").(*gorm.DB)
	if !ok {
		return false
	}
	if errors.Is(db.Where("institution_id = ?", "3414696094").
		First(&sysModel.SysInstitution{}).Error, gorm.ErrRecordNotFound) { // 判断是否存在数据
		return false
	}
	return true
}
