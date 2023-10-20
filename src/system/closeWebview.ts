import { isReady } from '@/utils/utils';

async function closeWebview(): Promise<any> {
  const ready = await isReady();
  if (!ready) return null;

  return window.bitverse.callHandler('closeWebview');
}

export default closeWebview;
