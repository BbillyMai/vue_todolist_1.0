<template>
    <div class="contain">
        <div class="left">
            <ul>
                <li><router-link to="/home">Todolist</router-link></li>
                <li><router-link to="/home/myInfo">我的</router-link></li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
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
</style>