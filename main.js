const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
        this.cart.push(id) //Agrega el id de cada producto dentro de la matriz de cart
        },
        removeItem(id) {
        const index = this.cart.indexOf(id)
        if (index > -1) {
            this.cart.splice(index, 1)
        }
        }
    }
})