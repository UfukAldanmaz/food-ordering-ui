<template>
    <div class="col s12 m6">


        <div class="card ">
            <div class="card-image">
                <img :key="menuItem.id" :src=menuItem.img>
            </div>
            <div class="card-content card-item">
                <span class="card-title" :key="menuItem.id">{{ menuItem.title }}</span>
                <p class="truncate" :key="menuItem.id">
                    {{ menuItem.detail }}</p>

                <MenuModal :menuItem="menuItem" />

                <!-- <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">+</i></a> -->
                <!-- // v-model="showMenuModal" -->

            </div>
        </div>
    </div>
</template>

<script>
import MenuModal from './MenuModal.vue';

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
        }
    },
}
</script>

<style  >
/* .menu-detail-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
}

.card-item {
    overflow: hidden;
} */
</style>