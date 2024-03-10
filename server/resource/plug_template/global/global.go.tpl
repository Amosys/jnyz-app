package global

{{- if .HasGlobal }}

import "jnyz-app/server/plugin/{{ .Snake}}/config"

var GlobalConfig = new(config.{{ .PlugName}})
{{ end -}}