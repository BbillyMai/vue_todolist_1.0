import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
    state: {
        todos: [],
        nextIndex: 1,
        filterFlag:'all'
    },
    getters: {
        completed: state => {
            return state.todos.filter(todo => todo.status)
        },
        active: state => {
            return state.todos.filter(todo => !todo.status)
        }
    },
    mutations: {
        addNewTodo(state, name) {
            state.todos.push({
                id: state.nextIndex++,
                name: name,
                status: false,
            })
        },
        setFilterFlag(state,flag){
            state.filterFlag = flag;
        },
        editName(state,obj){
            state.todos.find(todo=>todo.id===obj.id).name=obj.name;
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
