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
                <div class="modal-con">
                    <span class="menu-price">{{ menuItem.price }} ₽</span>
                    <MenuModal :menuItem="menuItem" />
                </div>
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
.modal-con {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
}

.menu-price {
    font-weight: bolder;
    font-size: 20px;
}
</style>