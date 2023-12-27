import { configureStore } from '@reduxjs/toolkit';
import userManagementReducer from '../features/userManagement/user-management-slice';

export const store = configureStore({
    reducer: {
        user: userManagementReducer
    }
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;