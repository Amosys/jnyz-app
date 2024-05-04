package response

import (
	"jnyz-app/server/model/data"
)

type DataDepositListResponse struct {
	Total          int64                 `json:"total"`
	DataDepositSub []data.DataDepositSub `json:"deposts"`
	Limit          int                   `json:"limit"`
	Offset         int                   `json:"offset"`
}

type DataDepositCorpListResponse struct {
	Total           int64                        `json:"total"`
	DataDepositCorp []data.DataDepositDetailCorp `json:"deposts"`
	Limit           int                          `json:"limit"`
	Offset          int                          `json:"offset"`
}

type DataDepositCurListResponse struct {
	Total          int64                       `json:"total"`
	DataDepositCur []data.DataDepositDetailCur `json:"deposts"`
	Limit          int                         `json:"limit"`
	Offset         int                         `json:"offset"`
}

type DataDepositSaveListResponse struct {
	Total           int64                        `json:"total"`
	DataDepositSave []data.DataDepositDetailSave `json:"deposts"`
	Limit           int                          `json:"limit"`
	Offset          int                          `json:"offset"`
}

type DataLoanListResponse struct {
	Total       int64              `json:"total"`
	DataLoanSub []data.DataLoanSub `json:"loans"`
	Limit       int                `json:"limit"`
	Offset      int                `json:"offset"`
}

type DataLoanCortListResponse struct {
	Total        int64                     `json:"total"`
	DataLoanCorp []data.DataLoanDetailCorp `json:"loans"`
	Limit        int                       `json:"limit"`
	Offset       int                       `json:"offset"`
}

type DataLoanPersListResponse struct {
	Total        int64                     `json:"total"`
	DataLoanPers []data.DataLoanDetailPers `json:"loans"`
	Limit        int                       `json:"limit"`
	Offset       int                       `json:"offset"`
}
