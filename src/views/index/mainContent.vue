<template>
    <div class="main-content">
		<el-scrollbar style="height: 100%;">
			<router-view></router-view>
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
	.main-content {
		background-color: #fff;
		padding: 20px;
		height: calc(100vh - 100px);
		overflow: hidden;
	}
</style>