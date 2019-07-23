import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main'
import Home from './components/Home'
import TodoList from './components/TodoList'
import MyInfo from './components/MyInfo'

Vue.use(VueRouter)

const routes = [
    {path:'/', component:Main},
    {path:'/home',component:Home,
        children:[{path:"/home",component:TodoList},
                {path:"/home/myInfo",component:MyInfo}]
    }
]

const router = new VueRouter({
    routes:routes
})


export default router