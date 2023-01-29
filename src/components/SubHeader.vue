<template>
    <div class="text-center subheader-container">
        <v-dialog class="modal-cart" v-model="dialog">
            <template v-slot:activator="{ props }">
                <img class="subheader-img" v-bind="props"
                    src="https://cdn.foodpicasso.com/assets/2022/05/22/fd4267cddc00405d289ce92335819465---jpeg_500x224_bfd9f_convert.webp" />
            </template>
            <v-card width="500px">
                <v-card-actions>
                    <v-btn class="close-btn" @click="dialog = false">x</v-btn>
                </v-card-actions>
                <v-card-text :style="{ display: flex, flexDirection: column }">
                    <h4>Скидка на первый заказ!</h4>
                    <img
                        src="https://cdn.foodpicasso.com/assets/2022/05/22/fd4267cddc00405d289ce92335819465---jpeg_500x224_bfd9f_convert.webp" />
                    <p>Получите скидку 10% на первый заказ по промокоду: SOUS
                        Скидка применяется при заказе от 200 р.</p>
                    <button>
                        Применить промокод </button>

                </v-card-text>

            </v-card>
        </v-dialog>
        <v-dialog class="modal-cart" v-model="dialog2">
            <template v-slot:activator="{ props }">
                <img class="subheader-img" v-bind="props"
                    src="https://cdn.foodpicasso.com/assets/2022/05/22/5c3e5f028ebaed9cc7845d7e6024f7b8---jpeg_500x224_bfd9f_convert.webp" />
            </template>
            <v-card width="500px">
                <v-card-actions>
                    <v-btn class="close-btn" @click="dialog2 = false">x</v-btn>
                </v-card-actions>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </v-card-text>

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialog2: false,
        }
    },
}
</script>

<style>
.subheader-container {
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
}

.subheader-img {
    width: 350px;
    cursor: pointer;
}

.modal-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 400px;
    /* position: absolute; */
}

.close-btn {
    position: absolute;
    float: right;
    right: 5px;
}
</style>