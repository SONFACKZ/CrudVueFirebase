import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import Vuelidate from 'vuelidate'

createApp(App).use(router, Vuelidate).mount('#app')

