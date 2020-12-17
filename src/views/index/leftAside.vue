<template>
	<div class="left-aside">
		<el-scrollbar style="height: 100%;">
			
			<el-menu :router="true" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				
				<template v-for="(ele, index) in menuArr">
					<el-menu-item :index="'/index/' + ele.path" v-if="!ele.children" :key="ele.path">
						<i :class="ele.icon"></i>
						<span slot="title">{{ele.name}}</span>
					</el-menu-item>
					
					<el-submenu :index="'/index/' + ele.path" v-if="ele.children" :key="ele.path">
						<template slot="title">
							<i :class="ele.icon"></i>
							<span>{{ele.name}}</span>
						</template>
						<el-menu-item v-for="(item, key) in ele.children" :index="ele.path + '/' + item.path">
							<template slot="title">
								<i :class="item.icon"></i>
								<span>{{item.name}}</span>
							</template>
						</el-menu-item>
					</el-submenu>
				</template>
				
			</el-menu>
			
			<!-- <el-menu :router="true" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
			 active-text-color="#ffd04b">
				<el-menu-item index="/index/home">
					<i class="el-icon-s-home"></i>
					<span slot="title">首页</span>
				</el-menu-item>
				<el-menu-item index="devicesManage">
					<i class="el-icon-setting"></i>
					<span slot="title">设备管理</span>
				</el-menu-item>
			
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>权限管理</span>
					</template>
					<el-menu-item index="3-1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>管理员1</span>
						</template>
					</el-menu-item>
					<el-menu-item index="3-2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>操作2</span>
						</template>
					</el-menu-item>
				</el-submenu>
				
				<el-menu-item index="4">
					<i class="el-icon-setting"></i>
					<span slot="title">操作设备</span>
				</el-menu-item>
			</el-menu> -->

		</el-scrollbar>
	</div>
</template>

<script type="text/javascript">
	import menuArr from '@/router/children.js';
	export default {
		data() {
			return {

			}
		},
		created() {
			// console.log('menuArr: ', menuArr);
			// console.log('this.router: ', this.$router.options.routes)
		},
		methods: {

		},
		computed: {
			menuArr () {
				return menuArr;
			}
		}
	}
</script>

<style lang="less" scoped>
	.left-aside {
		height: calc(100vh - 60px);
		overflow: hidden;
		background-color: #545c64;

		.el-menu {
			border: none;
		}
	}
</style>
