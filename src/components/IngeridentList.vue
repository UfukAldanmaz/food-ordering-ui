<template>

    <v-table>
        <tbody>
            <tr>
                <td><img class="submenu-img" :key="ingeridents.id" :src=ingeridents.img /> </td>
                <td>{{ ingeridents.name }}</td>
                <td>{{ ingeridents.price }} ₽</td>
                <td><input type="checkbox" />
                    <CounterItem />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import CounterItem from './CounterItem.vue';

export default {
    name: 'IngeridentList',
    components: {
        CounterItem
    },
    props: {
        ingeridents: Object,
    },
}

</script>

<style>
.submenu-img {
    width: 50px
}
</style>