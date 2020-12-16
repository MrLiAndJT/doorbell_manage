<template>
    <el-container class="main-container">
    	<el-header class="header">NAXCLOW</el-header>
    	<el-container>
    		<el-aside width="200px">
				<left-aside></left-aside>
			</el-aside>
    		<el-main>
				<main-content></main-content>
			</el-main>
    	</el-container>
    </el-container>
</template>

<script type="text/javascript">
	import leftAside from './leftAside.vue';
	import mainContent from './mainContent.vue';
    export default {
        data() {
            return {
				
            }
        },
        methods: {

        },
		components: {
			leftAside,
			mainContent
		}
    }
</script>

<style lang="less" scoped>
	.main-container {
		background-color: #f8f8f8;
		.header {
			background-color: #1a6f92;
			color: #fff;
			text-align: center;
			line-height: 60px;
			font-size: 30px;
			text-shadow: 0 0 10px #8a1616;
		}
	}
</style>