import { isReady } from '@/utils/utils';

async function getVersion(): Promise<string | null> {
  const ready = await isReady();
  if (!ready) return null;

  return window.bitverse.callHandler('getVersion');
}

export default getVersion;
