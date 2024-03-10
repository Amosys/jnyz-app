package response

import "jnyz-app/server/model/app"

type AppSpeakerResponse struct {
	Speaker app.AppSpeaker `json:"speaker"`
}

type AppSpeakerListResponse struct {
	Total    int64            `json:"total"`
	Speakers []app.AppSpeaker `json:"speakers"`
	Limit    int              `json:"limit"`
	Offset   int              `json:"offset"`
}
