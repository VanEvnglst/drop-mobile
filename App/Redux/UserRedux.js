import { createReducer, createActions } from 'reduxsauce'

/* ------------- Initial State ------------- */
const defaultState = {
  fetching: false,
  data: null,
  error: null,
}
export const INITIAL_STATE = {
  ...defaultState,
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  logout: [''],
})

export const UserTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const logout = (state) => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGOUT]: logout,
})
