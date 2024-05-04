package data

type DataDepositBank struct {
	ID                     uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate            uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date                   uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	DepositBalance         float64 `json:"DBAL" gorm:"column:DBAL;comment:各项存款余额"`
	DepositBalanceC2D      float64 `json:"DBAL_C2D" gorm:"column:DBAL_C2D;comment:各项存款余额较昨日"`
	DepositBalanceC2BY     float64 `json:"DBAL_C2BY" gorm:"column:DBAL_C2BY;comment:各项存款余额较年初"`
	DepositBalanceSave     float64 `json:"SDBAL" gorm:"column:SDBAL;comment:储蓄存款余额"`
	DepositBalanceSaveC2D  float64 `json:"SDBAL_C2D" gorm:"column:SDBAL_C2D;comment:储蓄存款较昨日"`
	DepositBalanceSaveC2BY float64 `json:"SDBAL_C2BY" gorm:"column:SDBAL_C2BY;comment:储蓄存款较年初"`
	DepositBalanceCorp     float64 `json:"CDBAL" gorm:"column:CDBAL;comment:对公存款余额"`
	DepositBalanceCorpC2D  float64 `json:"CDBAL_C2D" gorm:"column:CDBAL_C2D;comment:对公存款较昨日"`
	DepositBalanceCorpC2BY float64 `json:"CDBAL_C2BY" gorm:"column:CDBAL_C2BY;comment:对公存款较年初"`
}

func (DataDepositBank) TableName() string {
	return "DATA_DEPOSIT_BANK"
}
