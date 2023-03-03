import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/home/Home'
import LoginPage from '../views/login/Login'
import RegisterPage from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      // if(isLogin) {
      //   next({name:'Home'})
      // }else {
      //   next()
      // }

    },
  },
   {
    path: '/register',
    name: 'Register',
    component:RegisterPage,
    beforeEach(to,from,next) {
     
      const{ isLogin} = localStorage
      isLogin ? next( {name:'Home'}) : next()
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const  {isLogin } = localStorage;
  if(!isLogin && (to.name !== 'LoginPage' && to.name !== 'Register') ){
    next({name:'LoginPage'})
  }else {
    next()
  }
})
//   if(isLogin || to.name  ==='Login') {
//     next()
//   }else {
//     next({name:'Login'})
//   }
// })
// router.beforeEach((to,from,next)=>{  //路由由login页面跳转到home页面
//   const isLogin = localStorage.isLogin
//   if(isLogin || to.name ==="LoginPage") {
//     next()
//   }else {
//     next({name:'LoginPage'})
//   }


export default router
