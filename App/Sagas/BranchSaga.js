import { put, call, takeLatest } from 'redux-saga/effects'
import { api } from 'App/Services/api'

import BranchActions, { BranchTypes } from 'App/Redux/BranchRedux'

const doGetBranches = () => api.get('/branches')

export function* getBranches() {
  try {
    const response = yield call(doGetBranches)
    if (response.status === 200) {
      yield put(BranchActions.getBranchesSuccess(response.data.data))
    } else {
      yield put(BranchActions.getBranchesFailure(response.data))
    }
  } catch (error) {
    yield put(BranchActions.getBranchesFailure(error.message))
  }
}

function* watchBranch() {
  yield takeLatest(BranchTypes.GET_BRANCHES, getBranches)
}

export default watchBranch
