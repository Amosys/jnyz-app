package data

type DataLoanTrands struct {
	ID          uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date        uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	LoanBalance float64 `json:"LBAL" gorm:"column:LBAL;comment:贷款余额"`
}

func (DataLoanTrands) TableName() string {
	return "DATA_LOAN_TRENDS"
}
