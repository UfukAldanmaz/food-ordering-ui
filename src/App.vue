<template>
  <div class="container">
    <NavbarItem :categories="categories" @filteredData="updateFilteredProducts" />
    <SubHeader />
    <TabsItem />
    <div class="main-container">
      <MenuCards v-for="category in filteredProducts" :key="category.id" :category="category" />
      <CartItem />
    </div>
  </div>
</template>

<script>
import * as categoryService from './services/categoryService';
import NavbarItem from './components/NavbarItem.vue';
import MenuCards from './components/MenuCards.vue';
import SubHeader from './components/SubHeader.vue'
import TabsItem from './components/TabsItem.vue';
import CartItem from './components/CartItem.vue';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'App',
  components: {
    NavbarItem,
    MenuCards,
    TabsItem,
    SubHeader,
    CartItem
  },
  data() {
    return {
      categories: [],
      filteredProducts: []
    }
  },

  mounted() {
    this.categories = categoryService.list()
    this.filteredProducts = this.categories
  }
  , methods: {
    updateFilteredProducts(filteredProducts) {
      this.filteredProducts = filteredProducts;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /*  overflow-x: auto; */
  padding-top: 0px;
  margin-top: 0px;
  overflow-x: scroll;
  /* min-height: 100%;
  min-height: var(--doc-height);

  width: 100%; */
}

@media only screen and (min-width: 200px) and (max-width: 767px) {
  #app {
    width: 100%;
    overflow: auto;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 80px auto;
  white-space: nowrap;
  /* overflow-x: auto; */
  width: 100%;

}

.main-container {
  display: inline-block;
  width: 100%;
}

* {
  /* background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important; */
}
</style>
