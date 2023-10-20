type ReadyCallback = () => void;

async function ready(callback: ReadyCallback) {
  function internalReady() {
    callback?.();
  }
  if (typeof window.bitverse == 'undefined') {
    document.addEventListener(
      'flutterInAppWebViewPlatformReady',
      internalReady,
      false,
    );
  } else {
    internalReady();
  }
}

export default ready;
