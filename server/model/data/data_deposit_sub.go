package data

type DataDepositSub struct {
	ID                  uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate         uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date                uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	NO                  uint    `json:"NO" gorm:"column:NO;comment:排名"`
	Branch              uint    `json:"BRANCH" gorm:"column:BRANCH;comment:支行"`
	DepositBalance      float64 `json:"DBAL" gorm:"column:DBAL;comment:各项存款"`
	DepositBalanceC2D   float64 `json:"DBAL_C2D" gorm:"column:DBAL_C2D;comment:各项存款余额较昨日"`
	DepositBalanceC2BY  float64 `json:"DBAL_C2BY" gorm:"column:DBAL_C2BY;comment:各项存款余额较年初"`
	DepositIncreaseC2BY float64 `json:"DBAL_INCP_C2BY" gorm:"column:DBAL_INCP_C2BY;comment:各项存款较年初增幅"`
}

func (DataDepositSub) TableName() string {
	return "DATA_DEPOSIT_SUB"
}
