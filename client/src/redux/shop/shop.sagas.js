import { takeLatest, call, put, all } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

import ShopActionType from './shop.types'

export function* FetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionType.FETCH_COLLECTIONS_START,
    FetchCollectionsAsync 
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}