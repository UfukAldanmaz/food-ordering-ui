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
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="close-btn" color="primary" block @click="dialog = false">Close Dialog</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog class="modal-cart" v-model="dialog">
                    <template v-slot:activator="{ props }">
                        <div class="working-hours">

                            <a v-bind="props"> 399399</a>
                        </div>
                    </template>
                    <v-card right width="300px">
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="close-btn" color="primary" block @click="dialog = false">Close Dialog</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog class="modal-cart" v-model="dialog">
                    <template v-slot:activator="{ props }">
                        <div class="working-hours">

                            <a v-bind="props">Адреса и зоны доставки</a>
                        </div>
                    </template>
                    <v-card right width="300px">
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="close-btn" color="primary" block @click="dialog = false">Close Dialog</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
            <v-dialog class="modal-cart" v-model="dialog">
                <template v-slot:activator="{ props }">
                    <div class="working-hours">

                        <a v-bind="props">Отзывы</a>
                    </div>
                </template>
                <v-card right width="300px">
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="close-btn" color="primary" block @click="dialog = false">Close Dialog</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>


        </div>
        <input class="input-item" v-model="search" />
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
            // categories: []
        }
    },
    computed: {
        filteredProducts() {
            return this.categories.filter(category => {
                console.log("search", this.search);
                return category.name.toLowerCase().includes(this.search.toLowerCase());

            });
        }
    }
    // ,

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

/* .close-btn {
    position: absolute;
    float: right;
    right: 5px;
} */

/* .nav-container {
    border: none;
    background-color: white;
    box-shadow: none;
    margin-bottom: 80px;
} */
</style>