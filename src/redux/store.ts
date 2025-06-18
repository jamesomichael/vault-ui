import { configureStore } from '@reduxjs/toolkit';

import vaultReducer from './vaultSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
	reducer: {
		vault: vaultReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
