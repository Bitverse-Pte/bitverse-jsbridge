import { checkedReady } from '@/utils/utils'

export interface ShowPanelParams {
  type: 'url' | 'text'
  payload: string
}
async function showSharePanel(params: ShowPanelParams): Promise<any> {
  try {
    await checkedReady()

    return window.bitverse.share(params)
  } catch (error) {
    return null
  }
}

export default showSharePanel
