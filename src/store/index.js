import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  userInfo: {
		  
	  },
  },
  mutations: {
	  saveUserInfo (state, data) {
		  state.userInfo = data;
		  window.localStorage.setItem('userInfo', JSON.stringify(data));	// 保存到本地
		  console.log('用户信息保存成功: ', state.userInfo);
	  }
  },
  actions: {
  },
  modules: {
  }
})
