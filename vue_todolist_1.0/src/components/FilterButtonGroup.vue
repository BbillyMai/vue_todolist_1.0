<template>
    <div>
        <button class="filterBtn" @click="setFilterFlag('all')">All</button>
        <button class="filterBtn" @click="setFilterFlag('active')">Active</button>
        <button class="filterBtn" @click="setFilterFlag('complete')">Complete</button>
    </div>
</template>

<script>
    export default {
        name: "filter-button-group",
        methods:{
            setFilterFlag(flag){
                this.$store.commit('setFilterFlag',flag)
            }

        }

    }
</script>

<style scoped>

</style>