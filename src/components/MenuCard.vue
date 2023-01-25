<template>
    <div class="col  s12 m3 ">
        <div class="card ">
            <div class="card-image">
                <img :key="menuItem.id" :src=menuItem.img>
            </div>
            <div class="card-content ">
                <span class="card-title" :key="menuItem.id">{{ menuItem.title }}</span>
                <p class="truncate" :key="menuItem.id">
                    {{ menuItem.detail }}</p>
                <a class="btn-floating right halfway-fab waves-effect waves-light  green"><i
                        class="material-icons">+</i></a>
                <!-- <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">+</i></a> -->


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuCard',
    props: {
        menuItem: Object,
    },

}
</script>

<style >
/* .card-item-container {
    height: 300px;
} */
</style>