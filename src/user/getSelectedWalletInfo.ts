import { checkedReady } from '@/utils/utils'

export interface DerivationInfo {
  address: string
  coinType: number
}

export interface UserSelectedWalletInfo {
  name: string
  walletId: string
  walletType: string
  derivationInfos: DerivationInfo[]
}

async function getSelectedWalletInfo(): Promise<UserSelectedWalletInfo | null> {
  try {
    await checkedReady()
    return window.bitverse.selectedWallet()
  } catch (error) {
    return null
  }
}

export default getSelectedWalletInfo
