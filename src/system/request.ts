import { checkedReady } from '@/utils/utils'

export interface RequestParams {
  method: 'post' | 'get'
  url: string
  headers?: Record<string, any>
  body?: Record<string, any>
  timeout?: number
  contentType?: string
  responseType?: string
}

export interface ResponseParams {
  status: number
  headers: Record<string, any>
  body: Record<string, any>
}
async function request(params: RequestParams): Promise<ResponseParams | null> {
  try {
    await checkedReady()

    return window.bitverse.request({ ...params })
  } catch (error) {
    return null
  }
}

export default request
