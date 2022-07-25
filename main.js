const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Botas', // Sintaxis de JS y la info que arroja la verás en el HTML
            brand: 'Vue Mastery',
            description: 'Un cálido par de calcetines difusos.', // Se mostrará este texto
            selectedVariant: 0,
            details: ['50% algodón', '30% lana', '20% poliéster'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
              ],
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1 // Llamar al método 'addToCart' para que vaya sumando 1 
        },
        removeToCart() {
            if(this.cart >=1) {
            this.cart -= 1 // Llamar al método 'removeToCart' para que vaya restando 1 
            }
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
      },
      computed: {
        title() {
          return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
      },
      
})
// Montando App
const mountedApp = app.mount('#app') // Permite conectar con el app del DOM