import './startup'

import Vue from 'vue'
import App from './App'
import router from './router'
import * as resources from './resources'
import resource from './plugins/resource'
import deviceQueries from './plugins/device-queries'
import VueHighlightJS from 'vue-highlightjs'
import './assets/css/github-markdown.css'
import 'highlight.js/styles/tomorrow-night-eighties.css'

Vue.config.productionTip = false

Vue.use(resource, {
  resources,
  endpoint: '/static/content/post/'
})

Vue.use(VueHighlightJS)

Vue.use(deviceQueries, {
  phone: 'max-width: 567px',
  tablet: 'min-width: 568px',
  mobile: 'max-width: 1024px',
  laptop: 'min-width: 1025px',
  desktop: 'min-width: 1280px',
  monitor: 'min-width: 1448px'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
