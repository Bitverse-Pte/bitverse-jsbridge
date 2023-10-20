import { checkedReady } from '@/utils/utils'

export interface WalletUserInfo {
  uid: string
}

async function getUserInfo(): Promise<WalletUserInfo | null> {
  try {
    await checkedReady()
    return window.bitverse.getUserInfo()
  } catch (error) {
    return null
  }
}

export default getUserInfo
