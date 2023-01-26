<template>
    <div class="row row-container">
        <MenuCard v-for="item in menu" :key="item.id" :menuItem="item" />
    </div>
</template>

<script>
import menu from '../assets/menu.json';
import MenuCard from '../components/MenuCard.vue'
export default {
    name: 'MenuCards',
    components: {
        MenuCard
    },
    data() {
        return {
            menu: menu
        }
    }

}
</script>

<style>
.row-container {
    float: left;
    width: 80%;
}

@media only screen and (min-width: 200px) and (max-width: 767px) {
    .row-container {
        width: 20%;
    }
}
</style>