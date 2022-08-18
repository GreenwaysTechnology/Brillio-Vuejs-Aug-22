import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'

// import './assets/main.css'

// createApp(App).mount('#app')
const app = createApp(App)
//global Component
app.component('StatusBar', StatusBar)

app.mount('#app')