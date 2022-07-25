const app = Vue.createApp({
    data() {
        return {
            product: 'Botas', // Sintaxis de JS y la info que arroja la verás en el HTML
            description: 'Un cálido par de calcetines difusos.', // Se mostrará este texto
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/',
            // inStock: true Se mostrará dependiendo de si hay stock o no
            inventory: 100, // Se mostrará 'in Stock' si inventory es mayor a 10
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
              ],
        }
    }
})
// Montando App
const mountedApp = app.mount('#app') // Permite conectar con el app del DOM