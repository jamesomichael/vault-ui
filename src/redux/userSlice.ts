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
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
