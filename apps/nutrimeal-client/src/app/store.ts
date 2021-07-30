import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import createSagaMiddleware from 'redux-saga';
import productsSaga from './sagas/products.sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: true,
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(productsSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
