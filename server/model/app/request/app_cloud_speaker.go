package request

import (
	"jnyz-app/server/model/common/request"
	"time"
)

type AppCloudSpeakerSearch struct {
	StartCreatedAt *time.Time `json:"startCreatedAt" form:"startCreatedAt"`
	EndCreatedAt   *time.Time `json:"endCreatedAt" form:"endCreatedAt"`
	SN             string     `json:"sn" form:"sn" `
	HwSN           string     `json:"hwSn" form:"hwSn" `
	request.PageInfo
}
