// import {configureStore} from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: {},
// }); 
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';   // adjust path if needed

const store = configureStore({
  reducer: {
    auth: authReducer,   // ✅ now state.auth exists
  },
});

export default store;
