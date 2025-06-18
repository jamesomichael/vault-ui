import { configureStore } from '@reduxjs/toolkit';

import vaultReducer from './vaultSlice';
import sidebarReducer from './sidebarSlice';

export const store = configureStore({
	reducer: {
		vault: vaultReducer,
		sidebar: sidebarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
