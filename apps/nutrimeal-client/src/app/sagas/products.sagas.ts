import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../api';
import {
  addProducts,
  addProductsSuccess,
} from '../features/products/productsSlice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts(action: typeof addProducts) {
  try {
    // @ts-ignore
    const products = yield call(Api.fetchProducts);
    console.log('products ---->', products);
    if (products) {
      // yield put({
      //   type: 'products/addProductsSuccess',
      //   payload: products,
      // });
      yield put(addProductsSuccess(products));
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchProducts);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* productsSaga() {
  yield takeLatest(addProducts.type, fetchProducts);
}

export default productsSaga;
