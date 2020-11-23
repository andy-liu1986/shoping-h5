import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: process.env.NODE_ENV !== 'production'
})

window.store = store
export default store