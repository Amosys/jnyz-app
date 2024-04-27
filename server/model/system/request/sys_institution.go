package request

import (
	"jnyz-app/server/model/system"
)

// Add menu authority info structure
type AddInstitutionInfo struct {
	Institutions []system.SysInstitution `json:"institutions"`
}
