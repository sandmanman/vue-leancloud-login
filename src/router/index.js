import Login from '../pages/login'
import SignUp from '../pages/signup'
import Home from '../pages/home'

const routers = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '主页',
            auth: true
        }
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },{
        path: '/signup',
        name: 'signup',
        component: SignUp,
        meta: {
            title: '注册'
        }
    },{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '主页'
        }
    }
]

export default routers