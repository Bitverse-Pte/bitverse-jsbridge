export async function isReady(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof window.bitverse == 'undefined') {
        document.addEventListener(
          'flutterInAppWebViewPlatformReady',
          () => {
            resolve(true)
          },
          false
        )
      } else {
        resolve(true)
      }
    } catch (error) {
      reject(false)
    }
  })
}

export async function checkedReady(): Promise<any> {
  const delay = new Promise((resolve) => {
    setTimeout(resolve, 2000, null)
  })
  const inject = new Promise((resolve, reject) => {
    try {
      if (typeof window.bitverse == 'undefined') {
        document.addEventListener(
          'flutterInAppWebViewPlatformReady',
          () => {
            resolve(true)
          },
          false
        )
      } else {
        resolve(true)
      }
    } catch (error) {
      reject('window.bitverse is undefined')
      return
    }
  })

  return Promise.race([delay, inject])
}
