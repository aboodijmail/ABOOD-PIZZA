import { configureStore } from '@reduxjs/toolkit';
import userslice from './features/user/userSlice';
import cartSlice from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userslice,
    cart:cartSlice
  },
});




export default store;