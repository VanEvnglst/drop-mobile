import { all } from 'redux-saga/effects'
import watchUser from './UserSaga'
import watchBranch from './BranchSaga'

export default function* root() {
  yield all([watchUser(), watchBranch()])
}
