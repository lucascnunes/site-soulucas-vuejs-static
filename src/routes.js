import Vue from 'vue'
import VueRouter from 'vue-router'

// load pages
import Index from './pages/Index'
import Me from './pages/Me'
import Clinic from './pages/Clinic'
import Contact from './pages/Contact'

import Projects from './pages/Projects/index.vue'

// load errors
import PageNotFound from './errors/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index,
    meta: {
      transitionName: 'slide'
    }
  },
  {
    name: 'Projects',
    path: '/projeto/:projects',
    component: Projects,
    meta: {
      transitionName: 'slide'
    }
  },
  {
    name: 'Me',
    path: '/sobre',
    component: Me,
    meta: {
      transitionName: 'slide'
    }
  },
  {
    name: 'Clinic',
    path: '/consultorio',
    component: Clinic,
    meta: {
      transitionName: 'slide'
    }
  },
  {
    name: 'Contact',
    path: '/contato',
    component: Contact,
    meta: {
      transitionName: 'slide'
    }
  },
  {
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound,
    meta: {
      transitionName: 'slide'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Projects') {
    const projects = ['cacdocs', 'cicuta', 'buzzburgers', 'd3engenharia', 'mfengenhariaprojetos', 'personalcarpf', 'omnistack']
    if (to.params.projects.includes(projects)) next()
    else next({ path: '/' })
  }
  next()
})

export default router