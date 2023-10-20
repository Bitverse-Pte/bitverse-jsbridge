import { isReady } from '@/utils/utils';

async function getChainsInfo(chainId?: number): Promise<any> {
  const ready = await isReady();
  if (!ready) return null;

  return window.bitverse.callHandler('getChainsInfo', { chainId });
}

export default getChainsInfo;
