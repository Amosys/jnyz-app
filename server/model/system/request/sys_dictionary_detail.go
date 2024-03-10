package request

import (
	"jnyz-app/server/model/common/request"
	"jnyz-app/server/model/system"
)

type SysDictionaryDetailSearch struct {
	system.SysDictionaryDetail
	request.PageInfo
}
