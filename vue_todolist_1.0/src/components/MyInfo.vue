<template>
    <div class="myInfo">
       <div class="img"></div>
        <label for="name">名字</label>
        <span id="name">billy</span>
        <br>
        <label for="phone">电话</label>
        <span id="phone">1312341414</span>
    </div>
</template>

<script>
    export default {
        name: "MyInfo"
    }
</script>

<style scoped>
    .myInfo{
        padding:30px 30px 50px 30px;
        margin: 100px auto;
        width:500px;
        text-align: left;
        border:10px gainsboro solid;
    }
    .img{
        width:80px;
        height:80px;
        background: bisque;
    }
</style>