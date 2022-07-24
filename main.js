const app = Vue.createApp({
    data() {
        return {
            product: 'Botas', // Sintaxis de JS y la info que arroja la erás en el HTML
            description: 'Un cálido par de calcetines difusos.'
        }
    }
})
// Montando App
const mountedApp = app.mount('#app') // Permite conectar con el app del DOM