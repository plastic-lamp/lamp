import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IconsView from '../views/IconsView.vue'
import TypographyView from '../views/TypographyView.vue'
import ThreeDimensionalView from '../views/ThreeDimensionalView.vue'
import LibrariesView from '../views/LibrariesView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

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
      path: '/components',
      name: 'components',
      component: ComponentsView
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFoundView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

// Define a mapping of route names to page titles
const routeTitles = {
  home: 'Lamp',
  icons: 'Lamp - Icons',
  typography: 'Lamp - Typography',
  '3d': 'Lamp - 3D',
  libraries: 'Lamp - Libraries',
  components: 'Lamp - Components',
  '404': 'Lamp - 404'
}

// Use beforeEach route guard to set the page title
router.beforeEach((to, from, next) => {
  // Check if the route exists
  const matchedRoute = to.matched.length ? to.name : '404'

  // Set the document title
  document.title = routeTitles[matchedRoute] || 'Lamp - 404'

  // Continue with the navigation
  next()
})

export default router