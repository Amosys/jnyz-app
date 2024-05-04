package v1

import (
	"jnyz-app/server/api/v1/app"
	"jnyz-app/server/api/v1/data"
	"jnyz-app/server/api/v1/example"
	"jnyz-app/server/api/v1/system"
)

type ApiGroup struct {
	SystemApiGroup  system.ApiGroup
	ExampleApiGroup example.ApiGroup
	AppApiGroup     app.ApiGroup
	DataApiGroup    data.ApiGroup
}

var ApiGroupApp = new(ApiGroup)
