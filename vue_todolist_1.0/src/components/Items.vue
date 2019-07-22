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
                if('all'=== this.$store.state.filterFlag) {
                    return this.$store.state.todos
                }else if(this.$store.state.filterFlag === 'active'){
                    return this.$store.getters.active;
                }else if(this.$store.state.filterFlag === 'complete'){
                    return this.$store.getters.completed;
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