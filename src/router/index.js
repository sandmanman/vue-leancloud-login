import Login from '../pages/login'
import SignUp from '../pages/signup'
import Home from '../pages/home'

const routers = [
    {
        path: '/',
        meta: {
            title: '主页'
        },
        component: Home
    },{
        path: '/home',
        meta: {
            title: '主页'
        },
        component: Home
    },{
        path: '/login',
        meta: {
            title: '登录'
        },
        component: Login
    },{
        path: '/signup',
        meta: {
            title: '注册'
        },
        component: SignUp
    }
]

export default routers