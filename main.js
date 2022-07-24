const app = Vue.createApp({
    data() {
        return {
            product: 'Botas', // Sintaxis de JS y la info que arroja la verás en el HTML
            description: 'Un cálido par de calcetines difusos.', // Se mostrará este texto
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/'
        }
    }
})
// Montando App
const mountedApp = app.mount('#app') // Permite conectar con el app del DOM