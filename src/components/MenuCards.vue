<template>
    <div class="row">

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

</style>