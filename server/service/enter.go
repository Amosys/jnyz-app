package service

import (
	"jnyz-app/server/service/app"
	"jnyz-app/server/service/data"
	"jnyz-app/server/service/example"
	"jnyz-app/server/service/system"
)

type ServiceGroup struct {
	SystemServiceGroup  system.ServiceGroup
	ExampleServiceGroup example.ServiceGroup
	AppServiceGroup     app.ServiceGroup
	DataServiceGroup    data.ServiceGroup
}

var ServiceGroupApp = new(ServiceGroup)
