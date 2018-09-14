<template>
  <div class="header">
    <img src="./../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">新手入门</a></li>
      <li><a href="">API</a></li>
      <li><a href="">关于</a></li>
      <li><a href="">注册</a></li>
      <li><a href="">登录</a></li>
    </ul>
  </div>  
</template>

<script>


export default {
  name:'Header'
}
</script>


<style scoped>
/* scoped 只对当前页面有效 */

.header{
  background-color: #444;
  height: 50px;
  /* line-height: 20px;
  font-size: 14px;
  padding: 18px 15px; */
}
img{
  width: 120px;
  padding: 8px 0;
  margin-left: 68px;
}
ul{
  list-style: none;
  float: right;
  margin-right: 68px; 
  line-height: 15px;
}
li{
  display:inline-block;
}
a{
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
  margin: 0 12px;
}
</style>


