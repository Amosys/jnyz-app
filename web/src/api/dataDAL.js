import service from '@/utils/request'

export const createDALData = (type, data) => {
  return service({
    url: '/data/' + type,
    method: 'post',
    data
  })
}

export const findDALData = (type, params) => {
  return service({
    url: '/data/' + type,
    method: 'get',
    params
  })
}

export const getDALDataList = (type, params) => {
  return service({
    url: '/data/' + type + "List",
    method: 'get',
    params
  })
}