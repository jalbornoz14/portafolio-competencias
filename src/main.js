import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import JButtonVue from './utils/JButton.vue'

Vue.config.productionTip = false

Vue.component('j-button', { JButtonVue })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
