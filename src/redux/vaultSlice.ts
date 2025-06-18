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
	[
		(state) => state.vault.items,
		(state) => state.filter.activeCategory,
		(state) => state.filter.searchQuery,
	],
	(items, activeCategory, searchQuery) => {
		let filteredItems = [...items];

		if (
			!activeCategory ||
			(activeCategory.group === 'default' && activeCategory.id === 'all')
		) {
			filteredItems = items.filter(({ deletedAt }) => !deletedAt);
		}

		if (activeCategory.group === 'default') {
			if (activeCategory.id === 'favourites') {
				filteredItems = items.filter(
					({ isFavourite, deletedAt }) => isFavourite && !deletedAt
				);
			} else if (activeCategory.id === 'bin') {
				filteredItems = items.filter(({ deletedAt }) => deletedAt);
			}
		} else if (activeCategory.group === 'type') {
			filteredItems = items.filter(
				({ type, deletedAt }) =>
					type === activeCategory.id && !deletedAt
			);
		} else if (activeCategory.group === 'folder') {
			filteredItems = items.filter(
				({ folderId, deletedAt }) =>
					folderId === activeCategory.id && !deletedAt
			);
		}

		if (searchQuery) {
			const lowercaseQuery = searchQuery.toLowerCase();
			filteredItems = filteredItems.filter(
				({ name, username }) =>
					name.toLowerCase().includes(lowercaseQuery) ||
					username.toLowerCase().includes(lowercaseQuery)
			);
		}

		return filteredItems;
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
