import { configureStore } from '@reduxjs/toolkit'

import productReducer from './productReducer'
import userReducer from './userReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
})

export default store
