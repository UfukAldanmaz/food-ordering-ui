<template>
    <td><img class="submenu-img" :key="ingerident.id" :src=ingerident.img /> </td>
    <td>{{ ingerident.name }}</td>
    <td>{{ ingerident.price }} ₽</td>
    <td>
        <CounterItem @onCounterChanged="ingeridentCounterChanged" />
    </td>
</template>

<script>
import CounterItem from './CounterItem.vue';

export default {
    name: "IngeridentItem",
    components: {
        CounterItem
    },
    props: {
        ingerident: Object,
    },
    data() {
        return {
            ingeridentCount: 0,
        }
    },
    methods: {
        ingeridentCounterChanged(count) {
            this.ingeridentCount = count;
            if (this.ingeridentCount === 0) {
                this.$emit("ingeridentRemoved", this.ingerident);
            } else {
                this.$emit("ingeridentAdded", this.ingerident, this.ingeridentCount);
            }
        }
    }
}
</script>

<style>
.submenu-img {
    width: 50px
}
</style>