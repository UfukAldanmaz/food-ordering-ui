<template>
    <div class="row row-container">
        <a :id="this.category.id"></a>
        <h2 class="category-name">{{ this.category.name }}</h2>
        <MenuCard v-for="item in menu" :key="item.id" :menuItem="item" />
    </div>
</template>

<script>
import * as menuService from '../services/menuService';
import MenuCard from '../components/MenuCard.vue';
export default {
    name: 'MenuCards',
    components: {
        MenuCard
    },
    props: {
        category: Object
    },
    data() {
        return {
            menu: []
        }
    },
    mounted() {
        this.menu = menuService.getByCategory(this.category.id)
    }

}
</script>

<style>
.row-container {
    float: left;
    width: 78%;
}

@media only screen and (min-width: 200px) and (max-width: 767px) {
    .row-container {
        width: 20%;
    }
}

.category-name {
    text-align: left;
    font-size: 32px;
    font-weight: bolder;
    margin-left: 10px;
}
</style>