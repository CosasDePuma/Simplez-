// Electron Remote Constants
try {
  const {remote} = require('electron')
} catch (exception) { }

/** WINDOW BUTTONS >>
======================= */
document.getElementById('close-btn').addEventListener('click', () => {
  var window = remote.getCurrentWindow()
  window.close()
}, false)

document.getElementById('min-btn').addEventListener('click', () => {
  var window = remote.getCurrentWindow()
  window.minimize()
  // remote.getCurrentWindow().loadURL('view/asm.html')
}, false)

document.getElementById('zoom-btn').addEventListener('click', () => {
  var window = remote.getCurrentWindow()
  if (window.isMaximized()) {
    window.unmaximize()
  } else {
    window.maximize()
  }
}, false)
