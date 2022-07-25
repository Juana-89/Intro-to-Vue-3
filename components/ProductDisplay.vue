
app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
    template: 
    /*html*/ 
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
        <img v-bind:src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <h4>{{ description }} </h4>
            <p>Shipping: {{ shipping }}</p>
            <p v-if="inStock">In Stock</p> 
            <p v-else>Out of Stock</p>
            <ul>
            <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
            <button class="button" @click="addToCart" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
            <button class="button" @click="removeToCart">Remove</button>
        </div>
        </div>
    </div>`,
  data() {
    return {
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
    shipping() {
    if (this.premium) {
      return 'Free'
    }
      return 2.99
    }
  }
})