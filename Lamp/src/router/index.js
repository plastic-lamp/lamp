import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IconsView from '../views/IconsView.vue'
import TypographyView from '../views/TypographyView.vue'
import ThreeDimensionalView from '../views/ThreeDimensionalView.vue'
import LibrariesView from '../views/LibrariesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/icons',
      name: 'icons',
      component: IconsView
    },
    {
      path: '/typography',
      name: 'typography',
      component: TypographyView
    },
    {
      path: '/3d',
      name: '3d',
      component: ThreeDimensionalView
    },
    {
      path: '/libraries',
      name: 'libraries',
      component: LibrariesView
    },
    {
      path: '/3d',
      name: '3d',
      component: ThreeDimensionalView
    }
  ]
})

export default router
