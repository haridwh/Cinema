import Vue from 'vue'
import Router from 'vue-router'
import NowPlaying from '@/components/NowPlayingView'
import DetailView from '@/components/DetailView'
import PopularView from '@/components/PopularView'
import LatesView from '@/components/LatesView'
import TopRatedView from '@/components/TopRatedView'
import UpComingView from '@/components/UpComingView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'now_laying',
      component: NowPlaying
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/popular',
      name: 'popular',
      component: PopularView
    },
    {
      path: '/lates',
      name: 'lates',
      component: LatesView
    },
    {
      path: '/top-rated',
      name: 'top_rated',
      component: TopRatedView
    },
    {
      path: '/up-coming',
      name: 'up_coming',
      component: UpComingView
    }
  ]
})
