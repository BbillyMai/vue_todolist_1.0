<template>
    <div id="main">
        <HeadInfo/>
        <input id="inputName" class="inputName" type="text" v-model="name">
        <button @click="addNewTodo(name)">Add</button>
        <Item/>
        <FilterButtonGroup/>
    </div>
</template>

<script>
    import HeadInfo from './HeadInfo'
    import Item from './Items'
    import FilterButtonGroup from './FilterButtonGroup'
    export default {
        name: "TodoList",
        components: {
            HeadInfo,
            Item,
            FilterButtonGroup,
        },
        data() {
            return {
                name: '',
            }
        },
        methods: {
            addNewTodo(name) {
                this.$store.dispatch('addNewTodo', name);
                this.name=''
            },

        },
        mounted(){
            this.$store.dispatch('getTodos');
        }
    }

</script>

<style scoped>
    @import url("../assets/TodoList.css");
</style>