// Preventing screen off using JS in a browser

// The wake lock sentinel.
let wakeLock = null;

// Function that attempts to request a screen wake lock.
const requestWakeLock = async () => {
    try {
        wakeLock = await navigator.wakeLock.request();
        wakeLock.addEventListener('release', () => {
            console.log('Screen Wake Lock released:', wakeLock.released);
        });
        console.log('Screen Wake Lock released:', wakeLock.released);
    }
    catch (err) {  console.error(`${err.name}, ${err.message}`)  }
};

// Request a screen wake lock…
requestWakeLock();
// …and release it again after 5s.
window.setTimeout( () => {
    wakeLock.release();
    wakeLock = null;
}, 5000);