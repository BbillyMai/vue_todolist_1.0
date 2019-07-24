import axios from 'axios'
const baseUrl = "http://localhost:3001/todos/"
const actions = {
    addNewTodo({dispatch},content){
        const data = {content:content,completed:false};
        axios.post(baseUrl,data)
            .then(()=>dispatch('getTodos'));
    },
    getTodos({commit}){
        axios.get(baseUrl).then(response=>commit('loadTodo',response.data));
    },
    deleteTodo({dispatch},id){
        axios.delete(baseUrl+id).then(()=>dispatch('getTodos'));
    },
    editTodo({dispatch},{id,content,completed}){
        axios.put(baseUrl+id,{content,completed}).then(()=>dispatch('getTodos'))
    },
}

export default actions