<template>
    <div>
       <ul class="movieBox">
           <li class="movieList" v-for="(obj,index) in movieList" :key="index">
               <img :src="obj.images.medium" alt="">
               <div>
                   <h2>{{obj.original_title}}</h2>
                   <p>{{obj.collect_count}}已收藏</p>
                   <p>演员: <span v-for="(actor,index) in obj.casts" :key="index"> {{actor.name}} </span></p>
                   <p>上映时间:{{obj.mainland_pubdate}}</p>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                movieList:[]
            }
            },
            methods:{
            
            },
          created(){
              //axios.get('https://bird.ioliu.cn/v1?url=http://douban.uieee.com/v2/movie/in_theaters?&start=0&count=10')
          axios.get('./data/movie0.json')
        .then((res)=>{
            console.log(res.data);
            this.movieList=res.data.subjects;
        }).catch((res)=>{
          console.log(res);
        })
        }
        }
    
</script>

<style lang="scss" scoped>
.movieBox{
    padding: 0.2rem;
 .movieList{
     height: 2.5rem;
    display: flex;
    img{
        width: 2rem;
        margin-right: 0.2rem;
    }
    margin-bottom:0.2rem;
    border-bottom:solid 1px;
}   
}

</style>