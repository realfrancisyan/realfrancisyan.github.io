import { MethodType, request } from './base'
import { BASE_URL } from './url'

export const getCategories = data => {
 return request(`${BASE_URL}/favorites/get/categories`, MethodType.GET, data)
}

export const getList = data => {
 return request(`${BASE_URL}/favorites/list`, MethodType.GET, data)
}

export const getAppsInfo = data => {
 return request(`https://itunes.apple.com/lookup`, MethodType.GET, data)
}
