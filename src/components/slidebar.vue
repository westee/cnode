<template>
<!-- import userinfoVue from './userinfo.vue'; -->
  <div class="autherinfo">
    <div class="authersummary">
      <div class="topbar">作者</div>
        <router-link :to='{
          name:"user_info",    //要去到的路由
          params:{
            name:userinfo.loginname,
          }
        }' >
          <img :src="userinfo.avatar_url" alt="">
        </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
        <ul>
          <li v-for="list in topiclimit5">
            <router-link :to="{
                name:'post_content'    ,//其指向的路由名
                params:{
                  id: list.id,
                  name:list.author.loginname
                }
              }">
              {{list.title}}
            </router-link>
          </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="list in replylimit5">
          <router-link :to="{
                name:'post_content'    ,//其指向的路由名
                params:{
                  id: list.id,
                  name:list.author.loginname
                }
              }">
              {{list.title}}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'slidebar',
  data(){
    return {
      userinfo:{}
    }
  },
  methods:{
    getData(){
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res)=>{
          this.isLoading = false
          this.userinfo = res.data.data
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    beforeMount(){
      this.getData()
    },
  computed:{
    topiclimit5(){
      if(this.userinfo.recent_topics){      //为什么是this呢
        return this.userinfo.recent_topics.slice(0,5)
      }
    },
    replylimit5(){
      if(this.userinfo.recent_replies){      //为什么是this呢
        return this.userinfo.recent_replies.slice(0,5)
      }
    }
  }
}
</script>


<style scoped>
  .authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }
</style>