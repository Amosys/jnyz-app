import service from '@/utils/request'
// @Router /institution/getInstitutionList [post]
export const getInstitutionList = (data) => {
  return service({
    url: '/institution/getInstitutionList',
    method: 'post',
    data
  })
}

export const findInstitution = (params) => {
  return service({
    url: '/institution/findInstitution',
    method: 'get',
    params
  })
}
// @Summary 删除机构
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body {institutionId uint} true "删除机构"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /institution/deleteInstitution [post]
export const deleteInstitution = (data) => {
  return service({
    url: '/institution/deleteInstitution',
    method: 'post',
    data
  })
}

// @Summary 创建机构
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateInstitutionPatams true "创建机构"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /institution/createInstitution [post]
export const createInstitution = (data) => {
  return service({
    url: '/institution/createInstitution',
    method: 'post',
    data
  })
}


// @Summary 修改机构
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysInstitution true "修改机构"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"设置成功"}"
// @Router /institution/setUserInstitution [post]
export const updateInstitution = (data) => {
  return service({
    url: '/institution/updateInstitution',
    method: 'put',
    data
  })
}
