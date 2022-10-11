import Vue from 'vue'
import App from './App.vue'
import  Axios from 'axios'



Vue.config.productionTip = false

//  Axios挂载到vue上
Vue.prototype.$http = Axios;

new Vue({
  
  render: h => h(App),
  
}).$mount('#app')
