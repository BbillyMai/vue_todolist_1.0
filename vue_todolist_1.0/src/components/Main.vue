<template>
    <div>

        <label for="name">输入姓名</label>
        <input type="text" id="name" :value="name" @blur="setName">
        <br/>
        <router-link to="/home">开始</router-link>

    </div>
</template>

<script>
    export default {
        name: "main",
        data(){
            return{
                name:"",
            }
        },
        methods:{
            setName(e){
                this.$store.commit('setName',e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>