<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name='slidebar'></router-view>
      <router-view name='main'></router-view>
    <!-- <PostList/> -->
    </div>
  </div>
</template>

<script>
import Header from './components/header'
import PostList from './components/postLsit'
export default {
  name: 'App',
  components:{
    Header,PostList
  }
}
</script>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
