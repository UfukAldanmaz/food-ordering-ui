<template>
  <div>
    <NavbarItem />
    <div>
      <router-view />
    </div>
    <MenuCards />

  </div>
</template>

<script>
import NavbarItem from './components/NavbarItem.vue';
import MenuCards from './components/MenuCards.vue';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'App',
  components: {
    NavbarItem,
    MenuCards
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
