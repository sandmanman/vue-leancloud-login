// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'



// router
import VueRouter from 'vue-router'
import Routers from './router'

import App from './App'

Vue.use(ElementUI)
Vue.use(VueRouter)

// leancloud-storage
//import AV from 'leancloud-storage'
const appId = 'bM6iL0dmQwJbKoYvrhlv828P-gzGzoHsz'
const appKey = 'UglrlFi8gYgT1t5jeISpsWxz'
AV.init({
    appId,
    appKey
})
//Vue.prototype.$AV = AV


// router config
const RouterConfig = {
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig)


// 更新页面title
router.afterEach( (route) => {
    document.title = route.meta.title;
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})