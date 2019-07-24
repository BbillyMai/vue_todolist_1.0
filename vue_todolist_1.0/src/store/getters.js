
const gettters = {
    completed: state => {
        return state.todos.filter(todo => todo.completed)
    },
    active: state => {
        return state.todos.filter(todo => !todo.completed)
    }
};
export default gettters