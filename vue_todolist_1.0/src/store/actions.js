import axios from 'axios'
const baseUrl = "http://localhost:3001/todos"
const actions = {
    // addNewTodo({commit}){
    //     axios.get('http://localhost:3000/todos').then(response=>commit('addNewTodo',response.data));
    // }
    getTodos({commit}){
        axios.get(baseUrl).then(response=>commit('loadTodo',response.data));
    }
}
export default actions