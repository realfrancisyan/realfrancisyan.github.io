import { MethodType, request } from './base'
import { BASE_URL } from './url'

export const listTags = data => {
 return request(`${BASE_URL}/blog/list/tags`, MethodType.GET)
}

export const listPosts = data => {
 return request(`${BASE_URL}/blog/list/posts`, MethodType.GET)
}

export const listPost = data => {
 return request(`${BASE_URL}/blog/list/post`, MethodType.GET, data)
}

export const listPostsOfTag = data => {
 return request(`${BASE_URL}/blog/list/postsOfTag`, MethodType.GET, data)
}


