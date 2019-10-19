<template>
    <div>
     音乐列表
    </div>
</template>

<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
    export default {
      components:{
          Aplayer
      },
      created(){
          axios.get('/data/musicdata.json')
          .then((result)=>{
              console.log(aaa)
          })
      }
    }
</script>

<style lang="scss" scoped>

</style>