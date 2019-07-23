<template>
    <div>
        <button class="filterBtn" @click="setFilterFlag('all')">All</button>
        <button class="filterBtn" v-on:click="setFilterFlag(false)">Active</button>
        <button class="filterBtn" v-on:click="setFilterFlag(true)">Complete</button>
    </div>
</template>

<script>
    export default {
        name: "filter-button-group",
        methods:{
            setFilterFlag(flag){
                this.$store.dispatch('toggleTodo',flag)
            }
        }

    }
</script>

<style scoped>

</style>