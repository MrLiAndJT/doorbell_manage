import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/index.vue';
import childrenArr from './children.js';
// 引入进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/index',
		name: 'root'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('@/views/test.vue')
	},
	{
		path: '/index',
		name: 'Index',
		component: Index,
		children: childrenArr
	},
];


const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior: () => ({
		y: 0
	}),
});

router.beforeEach((to, from, next) => {
	let userInfo = window.localStorage.getItem('userInfo');
	try {
		userInfo = JSON.parse(userInfo)
	}catch (err) {
		
	}
	NProgress.start();			// 开始切换路由的时候，出现进度条
	if(to.name !== 'login' && !userInfo.token) {
		// 不存在token(未登录状态)，则去到登录页面
		return next({name: 'login'})
	}
	next();
})

router.afterEach(t => {
	NProgress.done();			// 路由切换结束，关闭进度条
})

export default router
