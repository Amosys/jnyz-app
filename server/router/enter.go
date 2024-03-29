package router

import (
	"jnyz-app/server/router/app"
	"jnyz-app/server/router/example"
	"jnyz-app/server/router/system"
)

type RouterGroup struct {
	System  system.RouterGroup
	Example example.RouterGroup
	App     app.RouterGroup
}

var RouterGroupApp = new(RouterGroup)
