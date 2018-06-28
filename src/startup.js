import Pace from 'pace-progress'
import 'highlight.js/styles/tomorrow-night-eighties.css'

// pace progress bar
Pace.start()

// use pace hook to know when rendering is ready
Pace.once('hide', () => {
  window.prerenderReady = true
})
