package response

import (
	"jnyz-app/server/model/data"
)

type DataDepositBankListResponse struct {
	Total           int64                  `json:"total"`
	DataDepositBank []data.DataDepositBank `json:"deposts"`
	Limit           int                    `json:"limit"`
	Offset          int                    `json:"offset"`
}

type DataLoanBankListResponse struct {
	Total        int64               `json:"total"`
	DataLoanBank []data.DataLoanBank `json:"loans"`
	Limit        int                 `json:"limit"`
	Offset       int                 `json:"offset"`
}

type DataDepositTrandsListResponse struct {
	Total             int64                    `json:"total"`
	DataDepositTrands []data.DataDepositTrands `json:"depostTrands"`
	Limit             int                      `json:"limit"`
	Offset            int                      `json:"offset"`
}

type DataLoanTrandsListResponse struct {
	Total          int64                 `json:"total"`
	DataLoanTrands []data.DataLoanTrands `json:"loanTrands"`
	Limit          int                   `json:"limit"`
	Offset         int                   `json:"offset"`
}

type DataDepositTop50ListResponse struct {
	Total            int64                   `json:"total"`
	DataDepositTop50 []data.DataDepositTop50 `json:"depostTop50s"`
	Limit            int                     `json:"limit"`
	Offset           int                     `json:"offset"`
}
