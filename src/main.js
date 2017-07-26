// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// leanCloud
import LeanCloud from './server/leancloud-init'

// router
import VueRouter from 'vue-router'
import Routers from './router'

import App from './App'

Vue.use(VueRouter)
Vue.use(ElementUI)


// router config
const RouterConfig = {
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig)

// router.beforeEach((to, from, next) => {
//     // iView.LoadingBar.start();
//     // Util.title(to.meta.title);
//     // next();

//     console.log('进入前校验')
// });

// router.afterEach((to, from, next) => {
//     // iView.LoadingBar.finish();
//     // window.scrollTo(0, 0);
//     console.log('校验成功跳转')
// });


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})