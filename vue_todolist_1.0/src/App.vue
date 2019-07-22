<template>
    <div id="app">
        <div id="main">
            <HeadInfo/>
            <input id="inputName" class="inputName" type="text" v-model="name">
            <button @click="addNewTodo(name)">Add</button>
            <Item/>
            <FilterButtonGroup/>
        </div>
    </div>
</template>

<script>
    import HeadInfo from './components/HeadInfo'
    import Item from './components/Items'
    import FilterButtonGroup from './components/FilterButtonGroup'

    export default {
        name: 'app',
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
                this.$store.commit('addNewTodo', name);
                this.name=''
            },

        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    @import url("./assets/TodoList.css");
</style>
