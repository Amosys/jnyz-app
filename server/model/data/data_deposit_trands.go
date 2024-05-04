package data

type DataDepositTrands struct {
	ID             uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate    uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date           uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	DepositBalance float64 `json:"DBAL" gorm:"column:DBAL;comment:各项存款余额"`
	CustomerCount  uint    `json:"CUSTC" gorm:"column:CUSTC;comment:存量客户数"`
}

func (DataDepositTrands) TableName() string {
	return "DATA_DEPOSIT_TRENDS"
}
