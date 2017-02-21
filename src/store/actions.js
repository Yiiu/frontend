import * as types from './mutation-types'
// import Vue from 'vue'

export const test = ({commit, state}) => {
  commit(types.INDEX_TEST, !state.index.soap)
}
