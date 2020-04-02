import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import VueFullpage from 'fullpage-vue'
import 'fullpage-vue/src/fullpage.css'
import VueScrollTo from 'vue-scrollto'
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'
import VueAnalytics from 'vue-analytics'
import gallery from 'img-vuer'

Vue.config.productionTip = false

Vue.use(VueFullpage)
Vue.use(VueScrollTo, {
  offset: -200
})
Vue.use(VueTinyLazyloadImg)
Vue.use(VueAnalytics, {
  id: 'UA-20421706-12', //mude para o seu :)
  router
})
Vue.use(gallery)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
