import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'
import { myPlugin } from './plugins/myPlugin'

// import './assets/main.css'

// createApp(App).mount('#app')
const app = createApp(App)
//global Component
app.component('StatusBar', StatusBar)
//global data 
app.provide('company', 'google')

//global directives
app.directive('highlight', (element, binding) => {
    //console.log('element', element)
    //console.log('binding', binding)

    //get parameters supplied as part of directive
    console.log(binding)
    console.log('value', binding.value)

    element.addEventListener('mousemove', (evt) => {
        //element.style.backgroundColor = 'yellow'
        highLight('pink')
    })
    //remove style
    element.addEventListener('mouseleave', (evt) => {
        // element.style.backgroundColor = null
        highLight(null)
    })
    const highLight = (color) => {
        element.style.backgroundColor = color
    }
    highLight(binding.value)

})
app.directive('demo', (element, binding) => {
    console.log('element => ', element)
    console.log('binding => ', binding)
})

//register plugin
app.use(myPlugin)

app.mount('#app')