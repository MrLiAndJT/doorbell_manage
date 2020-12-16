import axios from 'axios';
import Vue from 'vue';
import BASE_URL from './BASE_URL.js';
import qs from 'qs';
import NProgress from 'nprogress';
import router from '@/router/index.js';

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	},
});

// 添加请求拦截器
instance.interceptors.request.use( res => {
    // 发送前做的事
	
	if(res.progress) {
		NProgress.inc();
	}
	
	// 如果是以 formData 格式发送的话，转成对应的格式
	if(res.sendType == 'formData') {
		// 可以通过设置 sendType 的方式来设置发送发送
		// sendType 如果为 formData 则进行转换
		res.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		res.data = qs.stringify(res.data)
	}
    return res;
}, err => {
    // 请求错误做的事
    return Promise.reject(err);
});

// 响应拦截
instance.interceptors.response.use( res => {
    // 请求成功
	// console.log('请求成功： ', res);
	if(res.config.progress) {
		NProgress.done(true);
	}
	if(res.data.code == 200) {
		// 请求成功，把data返回
		return res.data;
	}else if(res.data.code == 401) {
		// token 失效
		router.replace('/')
	}
    return res;
}, err => {
	if(res.config.progress) {
		NProgress.done(true);
	}
    // 请求失败
    return Promise.reject(err);
});

Vue.prototype.request = instance;

export default instance;