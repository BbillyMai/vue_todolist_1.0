<template>
    <div class="contain">
        <span style="float: right">{{name}}</span>
        <div class="left">
        <a href="/" onclick="return confirm('confirm back')">back</a><br>
        <div>
            <ul>
                <li><router-link to="/home">Todolist</router-link></li>
                <li><router-link to="/home/myInfo">我的</router-link></li>
            </ul>
        </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                name:this.$store.state.name
            }
        },
        methods:{
            goBack(){
                window.history.length>1?this.$router.go(-1):this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    .left{
        float:left;
        margin-top:60px;
        background: cornsilk;
        height:530px;
        width:17%;
    }
    .contain{
        margin: 100px auto;
        width:900px;
        text-align: left;
        border:10px gainsboro solid;
        padding-left:30px;
        padding-bottom: 10px;
        height:600px
    }
    ul{
        list-style-type: none;
    }
    span{
        padding: 8px;
    }
</style>