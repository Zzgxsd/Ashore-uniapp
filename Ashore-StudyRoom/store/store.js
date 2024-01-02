// store/store.js
import Vue from 'vue';
import Vuex from 'vuex';
// 导入拆分的vuex模块
// import cartModule from './car';
// import userModule from './user';
// 安装 Vuex
Vue.use(Vuex);

// 创建 store 
const store = new Vuex.Store({
	state: {
		change: 0
	},
	// 模块块
	// modules: {
	// 	'm_cart': cartModule,

	// }
	mutations: {
		changeform(state) {
			if(state.change==0){
				state.change=1
			}else{
				state.change=0
			}
		}
	}
});

// 导出
export default store;