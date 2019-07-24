
const mutations = {
    addNewTodo(state, obj) {
        state.todos.push({
            id: obj.id,
            content: obj.content,
            completed: obj.completed,
        })
    },
    loadTodo(state,date){
        state.todos=date
    },

    setFilterFlag(state,flag){
        state.filterFlag = flag;
    },
    editName(state,obj){
        state.todos.find(todo=>todo.id===obj.id).name=obj.name;
    },
    setName(state,newName){
        state.name = newName;
    }

}
export default mutations