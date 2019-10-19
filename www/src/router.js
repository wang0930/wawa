import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import musicList from './views/musicList.vue';
import Book from './views/Book.vue';
import Photo from './views/Photo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },{
        path:'/music',
        name:'music',
        component:Music
    },{
      path:'/musicList',
      component:musicList
  },{
      path:'/book',
      name:'book',
      component:Book
  },{
    path:'/photo',
    name:'photo',
    component:Photo
}
  ],
});
