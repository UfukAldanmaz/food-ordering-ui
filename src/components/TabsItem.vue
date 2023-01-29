<template>
    <div class="tab-container">
        <v-tabs background-color="white" dark>
            <v-tab v-for="category in categories" :key="category.id">
                <a :href="'#' + category.id"> {{ category.name }}</a>
            </v-tab>
        </v-tabs>
    </div>
</template>
<script>
import * as categoryService from '../services/categoryService';

export default {
    name: "TabsItem",
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        this.categories = categoryService.list()

    }
}    
</script>
<style scoped>
.tab-container {
    margin-bottom: 50px;
}
</style>