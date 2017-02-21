import { SET_GAME_ID,
  SET_USERNAME,
  SET_USER_ID,
  SET_USERS_POSITIONS,
  SET_INDEX,
  SET_MESSAGE_ID,
  SET_USERS_PROPERTIES,
  SET_CASH
} from './actions'

export function setGameID (id) {
  return {type: SET_GAME_ID, id}
}

export function setUsername (username) {
  return {type: SET_USERNAME, username}
}

export function setUserID (userID) {
  return {type: SET_USER_ID, userID}
}

export function setUserPositions (userPos, index) {
  return {type: SET_USERS_POSITIONS, userPos, index}
}

export function setIndex (index) {
  return {type: SET_INDEX, index}
}

export function setMessageID (id) {
  return {type: SET_MESSAGE_ID, id}
}

export function setUserProperties (userProperties, index) {
  return {type: SET_USERS_PROPERTIES, userProperties, index}
}

export function setCash (cash, index) {
  return {type: SET_CASH, cash, index}
}
