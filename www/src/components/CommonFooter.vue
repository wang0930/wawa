<template>
  <div id="footer" :style="{background:$store.state.color}">
    <!--第一种
        <router-link @click.native="$store.commit('change',{title:'电影',color:'orange'})" to="/">电影</router-link>
        <router-link @click.native="$store.commit('change',{title:'音乐',color:'green'})" to="/music">音乐</router-link>
        <router-link @click.native="$store.commit('change',{title:'图书',color:'blue'})" to="/book">图书</router-link>
        <router-link @click.native="$store.commit('change',{title:'图片',color:'yellow'})" to="/photo">图片</router-link>
    -->
    <!-- 第二种
        <router-link @click.native="change({title:'电影',color:'orange'})" to="/">电影</router-link>
    <router-link @click.native="change({title:'音乐',color:'green'})" to="/music">音乐</router-link>
    <router-link @click.native="change({title:'图书',color:'blue'})" to="/book">图书</router-link>
    <router-link @click.native="change({title:'图片',color:'yellow'})" to="/photo">图片</router-link>
    -->
     <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          title: "电影",
          path: "/",
          color: "orange"
        },
        {
          title: "音乐",
          path: "/music",
          color: "green"
        },
        {
          title: "图书",
          path: "/book",
          color: "blue"
        },
        {
          title: "图片",
          path: "/photo",
          color: "yellow"
        }
      ]
    };
  },
  methods: mapMutations(["change"]),
  created() {
    this.menu.forEach((obj,index) => {
        if(obj.path==this.$route.path){
            this.change({title:obj.title,color:obj.color});
        }
    });
  }
};
</script>

<style lang="scss" scoped>
#footer {
  height: 1rem;
  line-height: 1rem;
  background: blue;
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  a {
    flex: 1;
    text-align: center;
    color: black;
    &.router-link-exact-active {
      color: aliceblue;
    }
  }
}
</style>