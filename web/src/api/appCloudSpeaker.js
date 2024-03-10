import service from '@/utils/request'

// @Tags AppCloudSpeaker
// @Summary 创建云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AppCloudSpeaker true "创建云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /CloudSpeaker/createAppCloudSpeaker [post]
export const createAppCloudSpeaker = (data) => {
  return service({
    url: '/CloudSpeaker/createAppCloudSpeaker',
    method: 'post',
    data
  })
}

// @Tags AppCloudSpeaker
// @Summary 删除云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AppCloudSpeaker true "删除云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CloudSpeaker/deleteAppCloudSpeaker [delete]
export const deleteAppCloudSpeaker = (params) => {
  return service({
    url: '/CloudSpeaker/deleteAppCloudSpeaker',
    method: 'delete',
    params
  })
}

// @Tags AppCloudSpeaker
// @Summary 批量删除云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CloudSpeaker/deleteAppCloudSpeaker [delete]
export const deleteAppCloudSpeakerByIds = (params) => {
  return service({
    url: '/CloudSpeaker/deleteAppCloudSpeakerByIds',
    method: 'delete',
    params
  })
}

// @Tags AppCloudSpeaker
// @Summary 更新云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AppCloudSpeaker true "更新云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /CloudSpeaker/updateAppCloudSpeaker [put]
export const updateAppCloudSpeaker = (data) => {
  return service({
    url: '/CloudSpeaker/updateAppCloudSpeaker',
    method: 'put',
    data
  })
}

// @Tags AppCloudSpeaker
// @Summary 用id查询云音响
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.AppCloudSpeaker true "用id查询云音响"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /CloudSpeaker/findAppCloudSpeaker [get]
export const findAppCloudSpeaker = (params) => {
  return service({
    url: '/CloudSpeaker/findAppCloudSpeaker',
    method: 'get',
    params
  })
}

// @Tags AppCloudSpeaker
// @Summary 分页获取云音响列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取云音响列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /CloudSpeaker/getAppCloudSpeakerList [get]
export const getAppCloudSpeakerList = (params) => {
  return service({
    url: '/CloudSpeaker/getAppCloudSpeakerList',
    method: 'get',
    params
  })
}
