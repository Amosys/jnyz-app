package response

import "jnyz-app/server/config"

type SysConfigResponse struct {
	Config config.Server `json:"config"`
}
