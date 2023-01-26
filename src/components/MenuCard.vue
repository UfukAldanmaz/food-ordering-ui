<template>
    <div class="col s12 m4 card-item-container">


        <div class="card ">
            <div class="card-image">
                <img :key="menuItem.id" :src=menuItem.img>
            </div>
            <div class="card-content ">
                <span class="card-title" :key="menuItem.id">{{ menuItem.title }}</span>
                <p class="truncate" :key="menuItem.id">
                    {{ menuItem.detail }}</p>

                <MenuModal :menuItem="menuItem" :ingeridents="ingeridents" />

                <!-- <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">+</i></a> -->
                <!-- // v-model="showMenuModal" -->

            </div>
        </div>
    </div>
</template>

<script>
import MenuModal from './MenuModal.vue';
import { query } from '../services/ingeridentService';

export default {
    name: 'MenuCard',
    components: {
        MenuModal,
    },
    props: {
        menuItem: Object,
    },
    data() {
        return {
            ingeridents: null,
        }
    },
    mounted() {
        this.ingeridents = query(this.menuItem);
        console.log("ix", query(this.menuItem))
    }

}
</script>

<style  >
.card-item-container {
    /* display: flex;
    flex-direction: column;
    flex-wrap: nowrap; */
}
</style>