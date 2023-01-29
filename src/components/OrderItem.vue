<template>
    <div class="order-section">
        <div class="cart-order-title">
            <span>
                {{ order.product.title }}

            </span>
            <span class="ingerident-in-cart" v-for="ingerident in order.ingeridents" :key="ingerident.ingerident.id">
                {{
                    ingerident.ingerident.count > 0 ? ingerident.ingerident.count :
                        ingerident.ingerident.name
                }}</span>
        </div>
        <CounterItem :startValue="order.productCount" @onCounterChanged="cartCountChanged" />
        <span> {{
            calculatePrice()
        }}</span>
        <!-- <p>Price prop</p> -->
    </div>
</template>

<script>
import CounterItem from './CounterItem.vue';

export default {
    props: {
        order: Object
    },
    components: { CounterItem },
    methods: {
        calculatePrice: function () {
            let result = this.order.productCount * this.order.product.price;
            for (let i = 0; i < this.order.ingeridents.length; i++) {
                const ingerident = this.order.ingeridents[i];
                result += ingerident.ingerident.price * ingerident.count;
            }
            return result;
        },
        //     cartCountChange: function () {
        //   console.log('str');
        //   this.$store.dispatch('cart/emptyCart')
        // }
        cartCountChanged(count, action) {
            // if (action == 'add') {
            //     this.productCount = this.order.price + 1
            //     this.$emit("updateCartItem", this.order.price);
            // } else {
            //     if (this.order.productCount > 1) {
            //         this.productCount = this.order.productCount - 1;
            //         this.$emit("updateCartItem", this.order.product);
            //     }
            //     else {

            //         this.$emit("removeCartItem", this.order.product)

            //     }
            if (count === 0) {
                this.$store.dispatch('cart/removeOrder', this.order)
            }
            else if (action == 'add') {
                this.$store.dispatch('cart/increaseOrder', this.order)
            }

        }

        // this.order.productCount = count;
        // if (this.order.productCount === 0) {
        //     console.log("count", this.order.productCount);
        //     this.$emit("productRemoved", this.product);
        // } else {
        //     this.$emit("productIncreased", this.product, this.order.price);
        // }
    },
}

</script>

<style>
.order-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    /* height: auto; */
    margin: auto;
}

.cart-order-title {
    width: 60px;
    padding: 0;
    overflow: visible;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
    text-align: justify;
    word-break: break-all;
}

.ingerident-in-cart {
    color: rgb(187, 185, 185);
    font-weight: lighter;
}
</style>