package response

import "jnyz-app/server/model/system"

type SysInstitutionResponse struct {
	Institution system.SysInstitution `json:"institution"`
}
