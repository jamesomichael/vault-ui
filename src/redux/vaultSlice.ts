import { createSlice } from '@reduxjs/toolkit';

import { vaultItems } from '../dummy-data/vault';

type WindowMode = 'view' | 'edit' | 'create' | null;
interface VaultState {
	activeItem: any;
	windowMode: WindowMode;
	items: any[];
}

const initialState: VaultState = {
	activeItem: null,
	windowMode: null,
	items: vaultItems,
};

const vaultSlice = createSlice({
	name: 'vault',
	initialState,
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
		},
		setActiveItem(state, action) {
			state.windowMode = 'view';
			state.activeItem = action.payload;
		},
		setEditMode(state) {
			state.windowMode = 'edit';
		},
		setCreateMode(state) {
			state.windowMode = 'create';
			state.activeItem = null;
		},
		clearActiveItem(state) {
			state.windowMode = null;
			state.activeItem = null;
		},
	},
});

export const {
	addItem,
	setActiveItem,
	setEditMode,
	setCreateMode,
	clearActiveItem,
} = vaultSlice.actions;
export default vaultSlice.reducer;
