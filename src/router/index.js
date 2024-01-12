import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import DrillDownView from "@/views/DrillDownView.vue";
import { authGuard } from "@auth0/auth0-vue";
import editFormView from "@/views/editFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rest1',
      name: '1',
      component: DrillDownView
    },
    {
      path: '/rest2',
      name: '2',
      component: DrillDownView
    },
    {
      path: '/rest3',
      name: '3',
      component: DrillDownView
    },
    {
      path: '/newEintrag/:rest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/newEintrag.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/editEintrag/:id',
      component: editFormView,
    }
  ]
})

export default router
