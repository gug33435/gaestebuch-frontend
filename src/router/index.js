import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Login2 from "@/components/Login2.vue";
import DrillDownView from "@/views/DrillDownView.vue";
import editForm from "@/components/editForm.vue";
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
      component: () => import('../views/newEintrag.vue')
    },
    {
      path: '/editEintrag/:id',
      component: editFormView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login2
    }
  ]
})

export default router
