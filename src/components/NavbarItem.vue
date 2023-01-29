<template>
    <div class="header-container">

        <div>
            <router-link to="/" class="left"><img
                    src="https://app.foodpicasso.com/source/photos/2022/05/24/296bce6aeef5fddb6b8afcf553e999c8.png" /></router-link>
            <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul> -->
        </div>
        <div class="text-center  header-text-col">
            <div class="header-text-row">
                <v-dialog class="modal-cart" v-model="dialog">
                    <template v-slot:activator="{ props }">
                        <div class="working-hours">
                            <label>Время работы</label>
                            <a v-bind="props"> 09:00 − 23:30</a>
                        </div>
                    </template>
                    <v-card right width="300px">
                        <v-card-text class="working-hours-days">
                            <ol>Время работы
                                <li>Пн
                                    09:00 − 23:30</li>
                                <li>Вт
                                    09:00 − 23:30</li>
                                <li>Ср
                                    09:00 − 23:30</li>
                                <li>Чт
                                    09:00 − 23:30</li>
                                <li>Пт
                                    09:00 − 23:30</li>
                                <li>Сб
                                    09:00 − 23:30</li>
                                <li>Вс
                                    09:00 − 23:30</li>
                            </ol>
                        </v-card-text>
                        <v-card-actions>
                            <button class="close-btn" block @click="dialog = false">X</button>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog class="modal-cart" v-model="dialog2">
                    <template v-slot:activator="{ props }">
                        <div class="working-hours">
                            <a v-bind="props"> 399399</a>
                        </div>
                    </template>
                    <v-card right width="300px">
                        <v-card-text>
                            <h4>Заказать доставку</h4>
                            <p>399399</p>
                        </v-card-text>
                        <v-card-actions>
                            <button class="close-btn" block @click="dialog2 = false">X</button>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <div :style="{ display: flex, flexDirection: column }">
                    <v-dialog class="modal-cart" v-model="dialog3">
                        <template v-slot:activator="{ props }">
                            <div class="working-hours">
                                <a v-bind="props">Адреса и зоны доставки</a>
                            </div>
                        </template>
                        <v-card right width="500px">
                            <v-card-text>
                                <h4>Адреса и зоны доставки</h4>
                            </v-card-text>
                            <v-card-actions>
                                <button class="close-btn" block @click="dialog3 = false">X</button>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>

                <div class="working-hours">
                    <a href="#">Отзывы</a>
                </div>
            </div>
        </div>
        <div>
            <input class="input-item" v-model="search" />
        </div>
        <div class="d-flex justify-space-around">
            <p>Войти</p>
            <span>🔒</span>
            <v-icon icon="fa:fas fa-lock"></v-icon>

        </div>
    </div>
</template>

<script>
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
// import * as categoryService from '../services/categoryService';

export default {
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
        }
    },
    props: {
        categories: Object
    },
    data() {
        return {
            search: '',
            dialog: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,

            // categories: []
        }
    },
    // computed: {
    //     filteredCategories() {
    //         return Object.values(this.categories).filter(category => {
    //             return category.name.toLowerCase().includes(this.search.toLowerCase());
    //         });
    //     }
    // }
    // ,
    computed: {
        filteredProducts() {
            return this.categories.filter(category => {
                return category.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    methods: {
        emitFilteredData() {
            this.$emit('filteredData', this.filteredProducts)
        }
    },
    watch: {
        search() {
            this.emitFilteredData()
        }
    }

    // mounted() {
    //     this.categories = categoryService.list()
    // }
}
</script>

<style>
.header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    gap: 50px;
}

.working-hours {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.modal-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
}

.header-text-row {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.header-text-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
}

.input-item {
    border: 1px solid rgb(104, 102, 102);
    border-radius: 15px;
    width: 120px;
}

.close-btn {
    position: absolute;
    float: right;
    top: 8px;
    right: 8px;
}

.working-hours-days {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
}

/* .nav-container {
    border: none;
    background-color: white;
    box-shadow: none;
    margin-bottom: 80px;
} */
</style>