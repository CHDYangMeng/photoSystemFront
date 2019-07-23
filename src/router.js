import vueRouter from 'vue-router'

import login from './Components/loginComponent/login.vue'
import register from './Components/loginComponent/register.vue'
import success from './success.vue'
import forgetPassword from './Components/loginComponent/forgetPassword.vue'

import functions from './Components/gridComponent/function.vue'
import introduce from './Components/gridComponent/introduce.vue'
import more from './Components/gridComponent/more.vue'
import sampleTest from './Components/gridComponent/sampleTest.vue'
import search from './Components/gridComponent/search.vue'
import start from './Components/gridComponent/start.vue'

var router = new vueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/forgetPassword', component: forgetPassword},
    {path: '/success', component: success},

    {path: '/success/introduce', component: introduce},
    {path: '/success/function', component: functions},
    {path: '/success/more', component: more},
    {path: '/success/sampleTest', component: sampleTest},
    {path: '/success/search', component: search},
    {path: '/success/start', component: start},

  ]
})

export default router