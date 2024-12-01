/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from 'axios'
import { environments } from '../environments'
import getMessageFromHttpStatus from './axios-utils'

const api = axios.create({
  baseURL: environments.base_url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const noAuthApi = axios.create({
  baseURL: environments.base_url,
})

api.interceptors.response.use((response) => response, handleApiError)
noAuthApi.interceptors.response.use((response) => response, handleApiError)

function handleApiError(error: any) {
  console.log(error)
  if (error instanceof AxiosError) {
    if (error.code === 'ERR_CANCELED') {
      return
    }

    console.log('2da', error.response)
    const errorMessage =
      getMessageFromBody(error.response) ||
      getMessageFromHttpStatus(error.response?.status) ||
      'Ocorreu um erro inesperado'

    throw new Error(errorMessage)
  }

  throw error
}

function getMessageFromBody(
  response: AxiosResponse<any, any> | undefined
): string | undefined {
  return response?.data?.errors?.join(', ')
}

export { api, noAuthApi }
