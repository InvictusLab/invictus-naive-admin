import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { STORAGE_AUTHORIZE_KEY, useAuthorization } from '@/composables/authorization'
import i18n from '@/locales'
import router from '@/router'

export interface ResponseBody<T = any> {
  code: number
  data?: T
  msg: string
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API ?? '/',
  timeout: 60000
})

const requestHandler = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const token = useAuthorization()
  if (token.value) {
    config.headers.set(STORAGE_AUTHORIZE_KEY, token.value)
  }
  return config
}

const responseHandler = (
  response: any
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data
}

const errorHandler = (error: AxiosError): Promise<any> => {
  const { notification } = useGlobalConfig()
  const token = useAuthorization()

  if (error.response) {
    const { data, status, statusText } = error.response as AxiosResponse<ResponseBody>
    if (status === 401) {
      // Handle 401 error
      notification?.error({
        title: i18n.global.t('global.request.error.401'),
        content: data?.msg || statusText,
        duration: 3000
      })
      router.replace('/login').then(() => {
        token.value = null
      })
    } else if (status === 403) {
      // Handle 403 error
      notification?.error({
        title: i18n.global.t('global.request.error.403'),
        content: data?.msg || statusText,
        duration: 3000
      })
    } else if (status === 500) {
      // Handle 500 error
      notification?.error({
        title: i18n.global.t('global.request.error.500'),
        content: data?.msg || statusText,
        duration: 3000
      })
    } else {
      // Handle other errors
      notification?.error({
        title: i18n.global.t('global.request.error.other'),
        content: data?.msg || statusText,
        duration: 3000
      })
    }
  }
  return Promise.reject(error)
}

instance.interceptors.request.use(requestHandler)

instance.interceptors.response.use(responseHandler, errorHandler)

export default instance

export const useGet = <P = any, R = any>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'GET',
    params,
    ...config
  })
}

export const usePost = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'POST',
    data,
    ...config
  })
}

export const usePut = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'PUT',
    data,
    ...config
  })
}

export const useDelete = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'DELETE',
    data,
    ...config
  })
}
