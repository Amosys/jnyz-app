package data

type DataLoanDetailCorp struct {
	ID              uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate     uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date            uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	NO              uint    `json:"NO" gorm:"column:NO;comment:排名"`
	Branch          uint    `json:"BRANCH" gorm:"column:BRANCH;comment:支行"`
	LoanBalance     float64 `json:"LBAL" gorm:"column:LBAL;comment:对公贷款"`
	LoanBalanceC2D  float64 `json:"LBAL_C2D" gorm:"column:LBAL_C2D;comment:对公贷款余额较昨日"`
	LoanBalanceC2BY float64 `json:"LBAL_C2BY" gorm:"column:LBAL_C2BY;comment:对公贷款余额较年初"`
}

func (DataLoanDetailCorp) TableName() string {
	return "DATA_LOAN_DETAIL_CORP"
}
