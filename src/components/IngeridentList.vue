<template>
    <h3>{{ ingeridentCategory?.name }}</h3>
    <v-table>
        <tbody>
            <tr v-for="ingerident in ingeridents" :key="ingerident.id">
                <IngeridentItem :ingerident="ingerident" :key="ingerident.id" @ingeridentRemoved="ingeridentRemoved"
                    @ingeridentAdded="ingeridentAdded" />
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import IngeridentItem from './IngeridentItem.vue'
import * as ingeridentCategoryService from '../services/ingeridentCategoryService'

export default {
    name: 'IngeridentList',
    components: {
        IngeridentItem,
    },
    props: {
        ingeridents: Object,
    },
    data() {
        return {
            ingeridentCategory: null,
            selectedIngeridents: []
        }
    },
    mounted() {
        const firstIngerident = this.ingeridents && this.ingeridents.length ? this.ingeridents[0] : undefined

        if (!firstIngerident) {
            return
        }

        this.ingeridentCategory = ingeridentCategoryService.get(firstIngerident.categoryId);
    },
    methods: {
        ingeridentAdded(ingerident, count) {
            this.selectedIngeridents.push({
                ingerident,
                count
            });

            this.$emit("ingeridentsChanged", this.selectedIngeridents);
        },
        ingeridentRemoved(ingerident) {
            this.selectedIngeridents = this.selectedIngeridents.filter(x => x.id !== ingerident.id);
            this.$emit("ingeridentsChanged", this.selectedIngeridents);
        }
    }
}

</script>