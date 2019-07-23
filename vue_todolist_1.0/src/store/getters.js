
const gettters = {
    completed: state => {
        return state.todos.filter(todo => todo.status)
    },
    active: state => {
        return state.todos.filter(todo => !todo.status)
    }
};
export default gettters