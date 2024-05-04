package initialize

import (
	_ "jnyz-app/server/source/app"
	_ "jnyz-app/server/source/data"
	_ "jnyz-app/server/source/example"
	_ "jnyz-app/server/source/system"
)

func init() {
	// do nothing,only import source package so that inits can be registered
}
