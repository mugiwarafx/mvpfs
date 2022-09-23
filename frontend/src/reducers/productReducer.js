import { createSlice } from '@reduxjs/toolkit'

import productService from '../services/product'

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload
    },
  },
})

export const { setProducts } = productSlice.actions

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await productService.getAll()
    dispatch(setProducts(products))
  }
}

export default productSlice.reducer
