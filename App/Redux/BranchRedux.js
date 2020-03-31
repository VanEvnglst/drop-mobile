import { createReducer, createActions } from 'reduxsauce'

/* ------------- Initial State ------------- */
const defaultState = {
  clickedBranch: null,
  fetching: false,
  data: null,
  error: null,
}
export const INITIAL_STATE = {
  ...defaultState,
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  clickBranch: ['branch'],
  getBranches: [''],
  getBranchesSuccess: ['data'],
  getBranchesFailure: ['error'],
})

export const BranchTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const clickBranch = (state, { branch }) => ({
  ...state,
  clickBranch: branch,
})

export const getBranches = (state) => ({
  ...state,
  fetching: true,
  data: null,
  error: null,
})

export const getBranchesSuccess = (state, { data }) => ({
  ...state,
  fetching: false,
  data: data,
  error: null,
})

export const getBranchesFailure = (state, error) => ({
  ...state,
  fetching: false,
  data: null,
  error,
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLICK_BRANCH]: clickBranch,
  [Types.GET_BRANCHES]: getBranches,
  [Types.GET_BRANCHES_SUCCESS]: getBranchesSuccess,
  [Types.GET_BRANCHES_FAILURE]: getBranchesFailure,
})
