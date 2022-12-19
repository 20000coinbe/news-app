import Vue from 'vue';
import VueRouter from 'vue-router'
import NewsView from '@/views/NewsView.vue'
import JobsView from '@/views/JobsView.vue'
import AsksView from '@/views/AsksView.vue'
import UserView from '@/views/UserView.vue'
import ItemView from '@/views/ItemView.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: NewsView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/asks',
      name: 'asks',
      component: AsksView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    },
  ]
})