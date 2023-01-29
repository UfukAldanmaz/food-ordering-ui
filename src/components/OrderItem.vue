<template>
    <div class="order-section">
        <div class="cart-order-title">
            <span>
                {{ order.product.title }}
            </span>
            <span class="ingerident-in-cart" v-for="ingerident in orderIngredientCounts()" v-bind:key="ingerident.id">
                {{ ingerident.name }} ({{ ingerident.count }} )
            </span>
            <!-- <span class="ingerident-in-cart" v-for="ingerident in order.ingeridents" :key="ingerident.ingerident.id">
                {{
                    ingerident.ingerident.name
                }}</span> -->
        </div>
        <CounterItem :startValue="order.productCount" @onCounterChanged="cartCountChanged" />
        <span> {{
            calculatePrice()
        }}</span>
    </div>
</template>

<script>
import CounterItem from './CounterItem.vue';

export default {
    props: {
        order: Object
    },
    components: {
        CounterItem
    },
    methods: {
        calculatePrice: function () {
            let result = this.order.productCount * this.order.product.price;
            for (let i = 0; i < this.order.ingeridents.length; i++) {
                const ingerident = this.order.ingeridents[i];
                result += ingerident.ingerident.price * ingerident.count * this.order.productCount;
            }
            return result;
        },
        cartCountChanged(count) {
            if (count === 0) {
                this.$store.dispatch('cart/removeOrder', this.order)
            } else if (count > this.order.productCount) {
                this.$store.dispatch('cart/increaseOrder', this.order)
            }
            else {
                this.$store.dispatch('cart/decreaseOrder', this.order)
            }
        },

        orderIngredientCounts() {
            const ingeridents = this.order.ingeridents;
            let ingredientCounts = [];
            ingeridents.forEach(ingerident => {
                let existingIngredient = ingredientCounts.find(countedIngredient => countedIngredient.id === ingerident.ingerident.id);
                if (existingIngredient) {
                    existingIngredient.count++;
                } else {
                    ingredientCounts.push({
                        id: ingerident.ingerident.id,
                        name: ingerident.ingerident.name,
                        count: 1
                    });
                }
            });

            return ingredientCounts;
        },
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