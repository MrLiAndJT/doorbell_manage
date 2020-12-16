<template>
    <div class="left-aside">
		<el-scrollbar style="height: 100%;">
			左边菜单栏
		</el-scrollbar>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
	.left-aside {
		height: calc(100vh - 60px);
		overflow: hidden;
		background-color: pink;
	}
</style>