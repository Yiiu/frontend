import * as types from '../mutation-types'

const state = {
  soap: false
}

const mutations = {
  [types.INDEX_TEST] (state, data) {
    state.soap = data
  }
}

export default {
  state,
  mutations
}
