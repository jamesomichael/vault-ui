import { createSlice } from '@reduxjs/toolkit';

import { vaultItems } from '../dummy-data/vault';

const initialState = {
	activeItem: null,
	items: vaultItems,
};

const vaultSlice = createSlice({
	name: 'vault',
	initialState,
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
		},
	},
});

export const { addItem } = vaultSlice.actions;
export default vaultSlice.reducer;
