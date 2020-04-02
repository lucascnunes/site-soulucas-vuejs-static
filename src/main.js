import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import VueFullpage from 'fullpage-vue'
import 'fullpage-vue/src/fullpage.css'

import VueScrollTo from 'vue-scrollto'

import VueLazyload from 'vue-lazyload'

import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueFullpage)
Vue.use(VueScrollTo, {
  offset: -200
})
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/loading.gif',
  attempt: 1,
  error: '/error.png'
})
Vue.use(VueAnalytics, {
  id: 'UA-20421706-12',
  router
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
