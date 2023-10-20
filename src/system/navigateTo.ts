import { checkedReady } from '@/utils/utils'

export interface NavigateParams {
  name: string
  extra?: Record<string, any>
  redirectUrl?: string
}
async function navigateTo(params: NavigateParams): Promise<any> {
  try {
    await checkedReady()

    return window.bitverse.navigateTo({ ...params })
  } catch (error) {}
}

export default navigateTo
