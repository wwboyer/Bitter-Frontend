import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function likeReducer(state = initialState.likes, action){
  switch(action.type){
    case types.LIKE_POST_SUCCESS:
      return action.likes
    default:
      return state
  }
}
