import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import AddContact from './views/AddContact.vue'
import ContactsList from './views/ContactsList.vue'
import ContactEdit from './views/ContactEdit.vue'
import Dashboard from './views/admin/Dashboard.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/add-contact',
      name: 'AddContact',
      component: AddContact
  },
  {
    path: '/contacts-list',
    name: 'ContactsList',
    component: ContactsList
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: ContactEdit
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  // --------------------------------------------------------------------------------------------------------
  // {
  //   path: '/app/admin',
  //   name: 'Admin'
  //   component: () => import('@/pages/Admin.vue'),
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import(/* webpackChunkName: "manager-home" */ '@/components/home/AdminBoard.vue')
  //     },
  //     {
  //       path: 'info',
  //       name: 'Info',
  //       component: () => import(/* webpackChunkName: "info" */ '@/components/team/Info.vue')
  //     }
  //   ]
  // },
  // --------------------------------------------------------------------------------------------------------
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
