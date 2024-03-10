package request

import (
	"jnyz-app/server/model/common/request"
	"jnyz-app/server/model/system"
)

type SysOperationRecordSearch struct {
	system.SysOperationRecord
	request.PageInfo
}
