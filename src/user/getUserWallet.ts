import { isReady } from '@/utils/utils';

async function getUserWallet(): Promise<any> {
  const ready = await isReady();
  if (!ready) return null;

  return window.bitverse.callHandler('getUserWallet');
}

export default getUserWallet;
