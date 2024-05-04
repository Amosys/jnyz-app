package data

type DataLoanBank struct {
	ID                  uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate         uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date                uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	LoanBalance         float64 `json:"LBAL" gorm:"column:LBAL;comment:各项贷款余额"`
	LoanBalanceC2D      float64 `json:"LBAL_C2D" gorm:"column:LBAL_C2D;comment:各项贷款余额较昨日"`
	LoanBalanceC2BY     float64 `json:"LBAL_C2BY" gorm:"column:LBAL_C2BY;comment:各项贷款余额较年初"`
	LoanBalanceCorp     float64 `json:"LBAL_CORP" gorm:"column:LBAL_CORP;comment:对公贷款余额"`
	LoanBalanceCorpC2D  float64 `json:"LBAL_CORP_C2D" gorm:"column:LBAL_CORP_C2D;comment:对公贷款较昨日"`
	LoanBalanceCorpC2BY float64 `json:"LBAL_CORP_C2BY" gorm:"column:LBAL_CORP_C2BY;comment:对公贷款较年初"`
	LoanBalancePers     float64 `json:"LBAL_PERS" gorm:"column:LBAL_PERS;comment:个人贷款余额"`
	LoanBalancePersC2D  float64 `json:"LBAL_PERS_C2D" gorm:"column:LBAL_PERS_C2D;comment:个人贷款较昨日"`
	LoanBalancePersC2BY float64 `json:"LBAL_PERS_C2BY" gorm:"column:LBAL_PERS_C2BY;comment:个人贷款较年初"`
	CustomerCount       uint    `json:"CUSTC" gorm:"column:CUSTC;comment:存量客户数"`
	CustomerCountC2D    uint    `json:"CUSTC_C2D" gorm:"column:CUSTC_C2D;comment:存量客户数较昨日"`
	CustomerCountC2BY   uint    `json:"CUSTC_C2BY" gorm:"column:CUSTC_C2BY;comment:存量客户数较年初"`
	NonPerfLoanRate     float32 `json:"NPLR" gorm:"column:NPLR;comment:不良率"`
	NonPerfLoanBalance  float64 `json:"NPLBAL" gorm:"column:NPLBAL;comment:不良贷款余额"`
	OverDayPay          float64 `json:"ODPAY" gorm:"column:ODPAY;comment:逾期金额"`
}

func (DataLoanBank) TableName() string {
	return "DATA_LOAN_BANK"
}
