import { createSelector, createSlice } from '@reduxjs/toolkit';

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

export const getFilteredItems = createSelector(
	[(state) => state.vault.items, (state) => state.filter.activeCategory],
	(items, activeCategory) => {
		if (
			!activeCategory ||
			(activeCategory.group === 'default' && activeCategory.id === 'all')
		) {
			return items.filter(({ deletedAt }) => !deletedAt);
		}

		if (activeCategory.group === 'default') {
			if (activeCategory.id === 'favourites') {
				return items.filter(
					({ isFavourite, deletedAt }) => isFavourite && !deletedAt
				);
			}
			if (activeCategory.id === 'bin') {
				return items.filter(({ deletedAt }) => deletedAt);
			}
		} else if (activeCategory.group === 'type') {
			return items.filter(
				({ type, deletedAt }) =>
					type === activeCategory.id && !deletedAt
			);
		} else if (activeCategory.group === 'folder') {
			return items.filter(
				({ folderId, deletedAt }) =>
					folderId === activeCategory.id && !deletedAt
			);
		}

		return items;
	}
);

export const {
	addItem,
	setActiveItem,
	setEditMode,
	setCreateMode,
	clearActiveItem,
} = vaultSlice.actions;
export default vaultSlice.reducer;
