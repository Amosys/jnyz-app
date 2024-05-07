package data

type DataDepositTop50 struct {
	ID                         uint    `gorm:"primarykey" json:"ID"` // 主键ID
	CreatedDate                uint    `json:"CDT" gorm:"column:CDT;comment:生成日期"`
	Date                       uint    `json:"DT" gorm:"column:DT;comment:数据日期"`
	NO                         uint    `json:"NO" gorm:"column:NO;comment:序号"`
	CustomerName               string  `json:"CUST_NAME" gorm:"column:CUST_NAME;comment:客户名称"`
	CurBalance                 float64 `json:"DBAL" gorm:"column:DBAL;comment:当前余额（亿元）"`
	AccountCount               uint    `json:"ACC_COUNT" gorm:"column:ACC_COUNT;comment:当前账户数（户）"`
	TransactionsIncreaseDay    uint    `json:"DTRANS_INC_DAY" gorm:"column:DTRANS_INC_DAY;comment:当日流入笔数"`
	BalanceIncreaseDay         float64 `json:"DBAL_INC_DAY" gorm:"column:DBAL_INC_DAY;comment:当日流入金额（万元）"`
	TransactionsDecreaseDay    uint    `json:"DTRANS_DEC_DAY" gorm:"column:DTRANS_DEC_DAY;comment:当日流出笔数"`
	BalanceDecreaseDay         float64 `json:"DBAL_DEC_DAY" gorm:"column:DBAL_DEC_DAY;comment:当日流出金额（万元）"`
	NetInflowDay               float64 `json:"NETINFLOW_DAY" gorm:"column:NETINFLOW_DAY;comment:当日净流入（万元）"`
	TransactionsIncreaseMonth  uint    `json:"DTRANS_INC_MON" gorm:"column:DTRANS_INC_MON;comment:当月流入笔数"`
	BalanceIncreaseMonth       float64 `json:"DBAL_INC_MON" gorm:"column:DBAL_INC_MON;comment:当月流入金额（万元）"`
	TransactionsDecreaseMonth  uint    `json:"DTRANS_DEC_MON" gorm:"column:DTRANS_DEC_MON;comment:当月流出笔数"`
	BalanceDecreaseMonth       float64 `json:"DBAL_DEC_MON" gorm:"column:DBAL_DEC_MON;comment:当月流出金额（万元）"`
	NetInflowMonth             float64 `json:"NETINFLOW_MON" gorm:"column:NETINFLOW_MON;comment:当月净流入（万元）"`
	TransactionsIncreaseSeason uint    `json:"DTRANS_INC_SEA" gorm:"column:DTRANS_INC_SEA;comment:当季流入笔数"`
	BalanceIncreaseSeason      float64 `json:"DBAL_INC_SEA" gorm:"column:DBAL_INC_SEA;comment:当季流入金额（万元）"`
	TransactionsDecreaseSeason uint    `json:"DTRANS_DEC_SEA" gorm:"column:DTRANS_DEC_SEA;comment:当季流出笔数"`
	BalanceDecreaseSeason      float64 `json:"DBAL_DEC_SEA" gorm:"column:DBAL_DEC_SEA;comment:当季流出金额（万元）"`
	NetInflowSeason            float64 `json:"NETINFLOW_SEA" gorm:"column:NETINFLOW_SEA;comment:当季净流入（万元）"`
	TransactionsIncreaseYear uint    `json:"DTRANS_INC_YEAR" gorm:"column:DTRANS_INC_YEAR;comment:当年流入笔数"`
	BalanceIncreaseYear     float64 `json:"DBAL_INC_YEAR" gorm:"column:DBAL_INC_YEAR;comment:当年流入金额（万元）"`
	TransactionsDecreaseYear uint    `json:"DTRANS_DEC_YEAR" gorm:"column:DTRANS_DEC_YEAR;comment:当年流出笔数"`
	BalanceDecreaseYear     float64 `json:"DBAL_DEC_YEAR" gorm:"column:DBAL_DEC_YEAR;comment:当年流出金额（万元）"`
	NetInflowYear           float64 `json:"NETINFLOW_YEAR" gorm:"column:NETINFLOW_YEAR;comment:当年净流入（万元）"`
}

func (DataDepositTop50) TableName() string {
	return "DATA_DEPOSIT_DTOP50"
}
