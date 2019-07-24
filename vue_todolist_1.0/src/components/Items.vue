<template>
    <div class="itemList">
        <ol>
            <li v-for="(todo, index) in getShowItems" :key="todo.id">
                <input id="checkbox" type="checkbox" :checked="todo.completed" @change="editTodo(todo.id,todo.content,todo.completed)">
                <span v-bind:class="{'line-through':todo.completed}"
                      :contenteditable="editable"
                      @dblclick="setEditable(true)"
                      @keypress.enter="onEnterPress($event,todo.id,todo.completed)">
                    {{ todo.content }}
                </span>
                <button @click="deleteTodo(todo.id)">删除</button>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "items",
        data() {
            return {
                editable: false,
            }
        },
        computed: {

            getShowItems: function () {
                switch (this.$store.state.filterFlag) {
                    case 'all':
                        return this.$store.state.todos;
                    case 'active':
                        return  this.$store.getters.active;
                    case 'complete':
                        return this.$store.getters.completed;
                    default:
                        return this.$store.state.todos;
                }
            }
        },
        methods: {
            setEditable(editable) {
                this.editable = editable;
            },
            onEnterPress(event,id,completed) {
                let content = event.srcElement.innerText;
                this.$store.dispatch('editTodo',{id,content,completed});
                this.setEditable(false);
            },
            deleteTodo(id){
                this.$store.dispatch('deleteTodo',id)
            },
            editTodo(id,content,completed){
                this.$store.dispatch('editTodo',{id,content,completed:!completed});
            }
        }
    }

</script>

<style scoped>

</style>