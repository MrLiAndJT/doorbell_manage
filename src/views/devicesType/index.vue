<template>
    <div class="deviceType-container">
		
		<div class="add">
			<el-button type="primary">添加新类型</el-button>
		</div>
		
		<div class="search">
			<el-form :inline="true" ref="form" :model="searchData.condition">
				<el-form-item>
					<el-input v-model="searchData.condition.nameCn" placeholder="请输入类型中文名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="searchData.condition.nameEn" placeholder="请输入类型英文名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="search">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		
		<div class="table">
			<el-table :data="tableData">
				<el-table-column prop="date" label="日期" width="180"></el-table-column>
				
				<el-table-column prop="name" label="名字" width="180"></el-table-column>
				
				<el-table-column prop="address" label="地址" ></el-table-column>
			</el-table>
		</div>
		
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
				value: '',
				tableData: [
					{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
				],
				searchData: {
					condition: {
						nameCn: '',
						nameEn: '',
					},
					pageNum: 0,
					pageSize: 10,
					startDate: ""
				}
            }
        },
        methods: {
			async search () {
				// console.log(123)
				// return;
				let res = await this.request({
					url: '/BgSysDevicesType/searchDevicesType',
					method: 'post',
					data: {
						condition: {
							nameCn: '',
							nameEn: '',
						},
						pageNum: 0,
						pageSize: 10,
						startDate: ""
					}
				});
				console.log('res: ', res);
			}
        }
    }
</script>

<style lang="less" scoped>
	.deviceType-container {
		.add {
			text-align: right;
			margin-bottom: 20px;
		}
	}
	
</style>