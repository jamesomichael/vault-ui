import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from '../types/user';

const initialState: UserState = {
	id: null,
	username: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.id = action.payload.id;
			state.username = action.payload.username;
		},
		clearUser(state) {
			state.id = null;
			state.username = null;
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
