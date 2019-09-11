import { MethodType, request } from './base'
import { BASE_URL } from './url'

const stravaUrl = 'https://www.strava.com/api/v3'

export const getStravaData = data => {
 return request(`${stravaUrl}/athlete/activities`, MethodType.GET)
}

export const getToken = data => {
 return request(`${BASE_URL}/fitness/get/token`, MethodType.GET, data)
}

export const getStravaToken = data => {
 return request(`${BASE_URL}/fitness/strava/token`, MethodType.GET, data)
}

