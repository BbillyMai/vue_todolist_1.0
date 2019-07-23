<template>
    <div class="itemList">
        <ol>
            <li v-for="(todo, index) in getShowItems" :key="todo.id">
                <input id="checkbox" type="checkbox" v-bind:value="todo.id" v-model="todo.status">
                <span v-bind:class="{'line-through': todo.status}"
                      :contenteditable="editable"
                      @dblclick="setEditable(true)"
                      @keypress.enter="onEnterPress(todo.id)"
                      ref="text" >{{ todo.name }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "items",
        data() {
            return {
                editable: false
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
            onEnterPress(id) {
                let newName = this.$refs.text.innerText;
                this.$store.commit('editName',{'id':id,'name':newName});
                this.setEditable(false);
            }
        }
    }

</script>

<style scoped>

</style>