package app

import (
	"jnyz-app/server/api/v1"
	"jnyz-app/server/middleware"
	"github.com/gin-gonic/gin"
)

type AppCloudSpeakerRouter struct {
}

// InitAppCloudSpeakerRouter 初始化 云音响 路由信息
func (s *AppCloudSpeakerRouter) InitAppCloudSpeakerRouter(Router *gin.RouterGroup) {
	CloudSpeakerRouter := Router.Group("CloudSpeaker").Use(middleware.OperationRecord())
	CloudSpeakerRouterWithoutRecord := Router.Group("CloudSpeaker")
	var CloudSpeakerApi = v1.ApiGroupApp.AppApiGroup.AppCloudSpeakerApi
	{
		CloudSpeakerRouter.POST("createAppCloudSpeaker", CloudSpeakerApi.CreateAppCloudSpeaker)   // 新建云音响
		CloudSpeakerRouter.DELETE("deleteAppCloudSpeaker", CloudSpeakerApi.DeleteAppCloudSpeaker) // 删除云音响
		CloudSpeakerRouter.DELETE("deleteAppCloudSpeakerByIds", CloudSpeakerApi.DeleteAppCloudSpeakerByIds) // 批量删除云音响
		CloudSpeakerRouter.PUT("updateAppCloudSpeaker", CloudSpeakerApi.UpdateAppCloudSpeaker)    // 更新云音响
	}
	{
		CloudSpeakerRouterWithoutRecord.GET("findAppCloudSpeaker", CloudSpeakerApi.FindAppCloudSpeaker)        // 根据ID获取云音响
		CloudSpeakerRouterWithoutRecord.GET("getAppCloudSpeakerList", CloudSpeakerApi.GetAppCloudSpeakerList)  // 获取云音响列表
	}
}
