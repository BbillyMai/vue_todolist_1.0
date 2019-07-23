const mutations = {
    addNewTodo(state, name) {
        state.todos.push({
            id: state.nextIndex++,
            name: name,
            status: false,
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
    }

}
export default mutations