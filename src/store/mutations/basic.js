export default {
  setCurrentStore(state, val) {
    state.currentStore = val
  },
  //用户信息
  setUser(state, user = {}){
    $vue.$plugins.setSStorage('userinfo', user);
		state.user = user;
  },
  setchhKey(state, openId){
    $vue.$plugins.setLStorage('openId', openId);
    state.openId = openId;
  },
  setShoper(state, list){
    state.shoper = list;
  },
  setdataDictionary(state, res){
    state.dataDictionary = res
  },
}