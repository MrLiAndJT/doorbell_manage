const router = [];

router.push({
	path: 'home',
	name: '首页',
	component: () => import('@/views/home/index.vue'),
	icon: 'el-icon-s-home'
});

router.push({
	path: 'devicesManage',
	name: '设备管理',
	component: () => import('@/views/devicesManage/index.vue'),
	icon: 'el-icon-setting'
});

router.push({
	path: '/permissionManage',
	name: '管理员',
	component: () => import('@/views/permissionManage/index.vue'),
	icon: 'el-icon-s-cooperation',
	children: [
		{
			path: 'manage1',
			name: '管理员1',
			component: () => import('@/views/permissionManage/manage1/index.vue'),
			icon: 'el-icon-user-solid'
		},
		{
			path: 'manage2',
			name: '管理员2',
			component: () => import('@/views/permissionManage/manage2/index.vue'),
			icon: 'el-icon-user-solid'
		}
	]
});

router.push({
	path: 'devicesType',
	name: '设备类型',
	component: () => import('@/views/devicesType/index.vue'),
	icon: 'el-icon-s-grid'
})

export default router;