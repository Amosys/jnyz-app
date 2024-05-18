package system

import (
	v1 "jnyz-app/server/api/v1"
	"jnyz-app/server/middleware"

	"github.com/gin-gonic/gin"
)

type InstitutionRouter struct{}

func (s *InstitutionRouter) InitInstitutionRouter(Router *gin.RouterGroup) {
	InstitutionRouter := Router.Group("institution").Use(middleware.OperationRecord())
	InstitutionRouterWithoutRecord := Router.Group("institution")
	InstitutionApi := v1.ApiGroupApp.SystemApiGroup.InstitutionApi
	{
		InstitutionRouter.POST("createInstitution", InstitutionApi.CreateInstitution) // 创建机构
		InstitutionRouter.POST("deleteInstitution", InstitutionApi.DeleteInstitution) // 删除机构
		InstitutionRouter.PUT("updateInstitution", InstitutionApi.UpdateInstitution)  // 更新机构
		InstitutionRouter.GET("findInstitution", InstitutionApi.GetInstitutionById)   // 获取机构信息
	}
	{
		InstitutionRouterWithoutRecord.POST("getInstitutionList", InstitutionApi.GetInstitutionList) // 获取机构列表
	}
}
