declare module '*.css'
declare module '*.less'

interface Window {
  bitverse: {
    getUserInfo: <T>() => Promise<T>
    navigateTo: <T, P extends object>(params: P) => Promise<T>
    request: <T, P extends object>(params: P) => Promise<T>
    openWebview: <T, P extends string>(params: P) => Promise<T>
    share: <T, P extends object>(params: P) => Promise<T>
    selectedWallet: <T>() => Promise<T>
  }
}
