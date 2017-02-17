import {
  SET_GAME_ID,
  SET_USERNAME,
  SET_USER_ID,
  SET_USERS_POSITIONS
} from './actions'
const DEFAULT_STATE = {
  gameID: 0,
  username: '',
  userID: '',
  userPosArray: [0, 0, 0, 0, 0, 0, 0, 0]
}

const setGameID = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { gameID: action.id })
  return newState
}

const setUsername = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { username: action.username })
  return newState
}

const setUserID = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { userID: action.userID })
  return newState
}

const setUserPosition = (state, action) => {
  let newArr = [...state.userPosArray.slice(0, action.index),
    action.userPos,
    ...state.userPosArray.slice(action.index + 1)]
  const newState = {}
  Object.assign(newState, state, { userPosArray: newArr })
  console.log('inside the reducer, showing new state' + newState.userPosArray)
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_GAME_ID:
      return setGameID(state, action)

    case SET_USERNAME:
      return setUsername(state, action)

    case SET_USER_ID:
      return setUserID(state, action)

    case SET_USERS_POSITIONS:
      return setUserPosition(state, action)

    default:
      return state
  }
}
export default rootReducer
