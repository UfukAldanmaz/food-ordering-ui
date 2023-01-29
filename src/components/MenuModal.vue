<template>
    <div class="text-center">
        <v-dialog width="450px" v-model="dialog">
            <template v-slot:activator="{ props }">
                <button class="open-modal-btn" v-bind="props">
                    +
                </button>
            </template>

            <v-card>
                <button class="close-btn" @click="dialog = false">X</button>

                <img :key="menuItem.id" :src=menuItem.img>

                <v-card-text>
                    <h5 class="card-title" :key="menuItem.id">{{ menuItem.title }}</h5>
                    <p :key="menuItem.id">
                        {{ menuItem.detail }}</p>


                    <IngeridentList v-for="[key, value] in groupedIngeridents" :key="key" :ingeridents="value"
                        @ingeridentsChanged="ingeridentsChanged" />

                </v-card-text>
                <v-card-actions>
                    <div class="add-to-cart">
                        <CounterItem class="counter-item-add" :min-value="1" :start-value="1"
                            @onCounterChanged="productCountChanged" />
                        <button class="add-to-cart-btn" @click="addToCart">
                            Добавить к заказу
                        </button>
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import IngeridentList from './IngeridentList.vue';
import CounterItem from './CounterItem.vue';
import * as ingeridentService from '../services/ingeridentService';

export default {
    name: 'MenuModal',
    components: {
        IngeridentList,
        CounterItem,
    },
    props: {
        menuItem: Object,
    },
    data() {
        return {
            dialog: false,
            ingeridents: [],
            ingeridentCategories: [],
            groupedIngeridents: new Map(),
            selectedIngeridents: [],
            productCount: 1,
        }
    },
    mounted() {
        this.ingeridents = ingeridentService.query(this.menuItem);

        for (const e of this.ingeridents) {
            if (this.groupedIngeridents.has(e.categoryId)) {
                this.groupedIngeridents.get(e.categoryId).push(e)
            }
            else {
                this.groupedIngeridents.set(e.categoryId, [e])
            }
        }
    },
    methods: {
        productCountChanged(count) {
            this.productCount = count;
        },
        getSelection() {
            const orderId = this.$store.getters['cart/getMaxOrderId'] + 1;
            return {
                orderId,
                product: this.menuItem,
                productCount: this.productCount,
                ingeridents: this.selectedIngeridents,
            }
        },
        ingeridentsChanged(selectedIngeridents) {
            this.selectedIngeridents = selectedIngeridents;
        },
        addToCart() {
            this.dialog = false
            this.$store.dispatch('cart/addToCart', this.getSelection())
        }
    }
}
</script>

<style scoped>
.add-to-cart {
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 10px;
    gap: 55px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.add-to-cart-btn {
    background-color: #1DBF73;
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 8px;
}

.counter-item-add {
    background-color: white;
    color: black;
    font-size: 28px;
}

.open-modal-btn {
    background-color: #1DBF73;
    border-radius: 8px;
    font-size: 32px;
    font-weight: bolder;
    color: white;
    align-items: center;
    width: 45px;
    height: 45px;
    text-align: center;
}

.open-modal-btn:hover {
    background-color: #58ad85;
}

.close-btn {
    width: 30px;
    font-size: 24px;
    font-weight: bolder;
    position: absolute;
    float: right;
    top: 8px;
    right: 10px;
}

.close-btn:hover {
    border-radius: 50%;
    background-color: white;
}

.close-btn:active {
    background-color: none;

}
</style>