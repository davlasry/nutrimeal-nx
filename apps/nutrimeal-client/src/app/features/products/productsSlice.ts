import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Product } from '@nutrimeal/data';

// Define a type for the slice state
interface ProductsState {
  items: Product[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
};

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state) => {
      console.log('inside');
      return state;
    },
    // addProducts: (state, action: PayloadAction): ProductsState => {
    //   return {
    //     ...state,
    //     // items: action.payload,
    //   };
    // },
    clearProducts: (state, _action: PayloadAction): ProductsState => {
      return {
        ...state,
        items: [],
      };
    },
    addProductsSuccess: (
      state,
      action: PayloadAction<any[]>
    ): ProductsState => {
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});

export const { addProducts, clearProducts, addProductsSuccess } = slice.actions;

export const selectProducts = (state: RootState): Product[] =>
  state.products.items;

export default slice.reducer;
