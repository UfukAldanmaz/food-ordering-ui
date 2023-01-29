<template>
    <div class="text-center">
        <v-dialog width="450px" v-model="dialog">
            <template v-slot:activator="{ props }">
                <button class="open-modal-btn" v-bind="props">
                    +
                </button>
            </template>

            <v-card>
                <v-btn color="none" block @click="dialog = false">X</v-btn>

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
            return {
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

<style>
.add-to-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    gap: 12px;
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
    font-size: 32px;
}

.open-modal-btn {
    background-color: #1DBF73;
    border-radius: 8px;
    font-size: 32px;
    font-weight: bolder;
    color: white;
    /* margin: auto; */
    align-items: center;
    margin: 15px 0 0 380px;
    width: 45px;
    height: 45px;
    text-align: center;

}

.open-modal-btn:hover {
    background-color: #58ad85;
}
</style>