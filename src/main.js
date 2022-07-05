import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Initialize Firebase
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

   
    //////////////////////////////////////////////
    // Compare this snippet from src\main.js:
    // import Vue from 'vue'


// createApp(App).use(store).use(router).mount('#app')
