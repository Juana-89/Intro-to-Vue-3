const app = Vue.createApp({
    data() {
        return {
            product: 'Botas', // Sintaxis de JS y la info que arroja la verás en el HTML
            description: 'Un cálido par de calcetines difusos.', // Se mostrará este texto
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/',
            // inStock: true Se mostrará dependiendo de si hay stock o no
            inventory: 100, // Se mostrará 'in Stock' si inventory es mayor a 10
            inStock: false,
            details: ['50% algodón', '30% lana', '20% poliéster'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
              ],
            cart:0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1 // Llamar al método 'addToCart' para que vaya sumando 1 
        },
        updateImage(variantImage) {
            this.image = variantImage // Llamar al método 'updateImage' para actualizar la imagen cuando el puntero esté por encima del 'color' 
          },
        removeToCart() {
            if(this.cart >=1) {
            this.cart -= 1 // Llamar al método 'removeToCart' para que vaya restando 1 
            }
        },
      }
})
// Montando App
const mountedApp = app.mount('#app') // Permite conectar con el app del DOM