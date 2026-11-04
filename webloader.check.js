/*

Github
LaoDay-114/WebLoader-Check
Check Ver. 1.0.0.
License GPLv3.

Create at 2026/11/4.

*/

/*

This library uses the WebLoaderBridge to check if it's loaded by the WebLoader.
WebLoaderBridge will never be fixed (because I'm the creator of WebLoader).
The original intention was to tone down the WebLoader, because this thing is just way too crazy, right?
Of course, it can only detect the original WebLoader loader (because I’ll keep that), but branches aren’t guaranteed.

*/

// You know?
// Do you think it's hard to detect if something was loaded by the WebLoader loader? Today, the author of the WebLoader loader himself is here to break this dilemma.

// CODE BEGIN

function isWebLoaderEnv() {
  const bridgeKey = Object.keys(window).find(k =>
    /^__webloaderBridge_[a-f0-9]+$/i.test(k)
  );
  if (bridgeKey) {
    return {
      webloader: true,
      electron: window.isElectron === true,
      bridgeKey
    };
  }

  if (window.isElectron === true) {
    return { webloader: false, electron: true, bridgeKey: null };
  }

  return { webloader: false, electron: false, bridgeKey: null };
}

// CODE END

// This is how you use this library.
/*

// In your javascript code.
const env = isWebLoaderEnv();
if (env.webloader) {
    // is WebLoader
}

*/

// This library has everything ready for you.
// Everything is ready, just need to call it up.
