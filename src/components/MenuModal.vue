<template>
    <div class="text-center">
        <v-dialog width="350px" v-model="dialog">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Open Dialog
                </v-btn>
            </template>

            <v-card>
                <img :key="menuItem.id" :src=menuItem.img>

                <v-card-text>
                    <h5 class="card-title" :key="menuItem.id">{{ menuItem.title }}</h5>
                    <p class="truncate" :key="menuItem.id">
                        {{ menuItem.detail }}</p>

                    <IngeridentList v-for="item in ingeridents" :key="item.id" :ingeridents="item" />


                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import IngeridentList from './IngeridentList.vue';
export default {
    name: 'MenuModal',
    components: {
        IngeridentList,
    },
    props: {
        menuItem: Object,
        ingeridents: Object,
    },
    data() {
        return {
            dialog: false,
        }
    },
}
</script>