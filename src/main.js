import Vue from 'vue';
import App from './App.vue';
import takeMassage from './func';
import { message, goodbye } from './data';

Vue.config.productionTip = false;
takeMassage(message);
takeMassage(goodbye);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
