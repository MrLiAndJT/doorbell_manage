<template>
    <div class="login-container">
		<el-form ref="form" :model="form" class="form" :rules="rules">
			<el-form-item label="账号" prop="username">
				<el-input v-model="form.username" clearable></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="form.password" show-password></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn" type="primary" @click.enter="submit('form')">登录</el-button>
			</el-form-item>
		</el-form>
    </div>
</template>

<script type="text/javascript">
	import { mapMutations } from 'vuex';
    export default {
		name: 'login-index',
        data() {
            return {
				form: {
					username: '',
					password: ''
				},
				ruleForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
						{required: true, message: '请输入用户名', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请输入密码', trigger: 'blur'}
					]
				}
            }
        },
        methods: {
			...mapMutations({
				saveUserInfo: 'saveUserInfo',
			}),
			// 提交表单
			submit (formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// console.log('通过验证');
						this.login();
					} else {
						// console.log('验证不通过');
						return false;
					}
				});
			},
			// 登录
			async login () {
				let res = await this.request({
					url: '/sysbg/login',
					method: 'post',
					data: {
						userAccount: this.form.username,
						userPwd: this.form.password
					},
					headers: {
					   'Content-Type': 'application/x-www-form-urlencoded'
					},
					sendType: 'formData',
					progress: true,
				});
				console.log(res)
				if(res.code == 200) {
					this.saveUserInfo(res.data);
					this.$router.push('/');
				}
			},
			add () {
				console.log('键盘事件!!!');
			}
        }
    }
</script>

<style lang="less">
	.login-container {
		position: relative;
		background-color: #29586b;
		height: 100%;
		.el-form-item__label {
			color: #fff;
		}
		.form {
			width: 400px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
		.login-btn {
			width: 100%;
		}
	}
</style>