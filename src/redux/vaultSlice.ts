import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_VAULT_ITEMS } from '../constants/demo-data';

import type { VaultItem, CreateItem } from '../types/items';
import type { VaultState } from '../types/vault';

const initialState: VaultState = {
	activeItem: null,
	windowMode: null,
	items: [],
};

export const createItem = createAsyncThunk(
	'vault/createItem',
	async ({ item }: { item: CreateItem }) => {
		try {
			const date = new Date().toISOString();
			return {
				id: uuidv4(),
				userId: 'demo-user-1',
				...item,
				createdAt: date,
				updatedAt: date,
			};
		} catch (error) {
			if (error instanceof Error) {
				console.error('Failed to create item:', error.message);
			}
			throw error;
		}
	}
);

export const editItem = createAsyncThunk(
	'vault/editItem',
	async ({ item }: { item: VaultItem }) => {
		try {
			const date = new Date().toISOString();
			return {
				...item,
				createdAt: date,
				updatedAt: date,
			};
		} catch (error) {
			if (error instanceof Error) {
				console.error('Failed to edit item:', error.message);
			}
			throw error;
		}
	}
);

export const deleteItem = createAsyncThunk(
	'vault/deleteItem',
	async ({
		id,
		shouldHardDelete,
	}: {
		id: string;
		shouldHardDelete: boolean;
	}) => {
		try {
			return { id, shouldHardDelete };
		} catch (error) {
			if (error instanceof Error) {
				console.error('Failed to delete item:', error.message);
			}
			throw error;
		}
	}
);

export const fetchItems = createAsyncThunk('vault/fetchItems', async () => {
	return DEFAULT_VAULT_ITEMS;
});

export const restoreItem = createAsyncThunk(
	'vault/restoreItem',
	async ({ id }: { id: string }) => {
		return id;
	}
);

const vaultSlice = createSlice({
	name: 'vault',
	initialState,
	reducers: {
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
		resetVault(state) {
			state.windowMode = null;
			state.activeItem = null;
			state.items = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createItem.fulfilled, (state, action) => {
			state.items.push(action.payload);
			state.windowMode = 'view';
			state.activeItem = action.payload;
		});
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.items = action.payload;
		});
		builder.addCase(editItem.fulfilled, (state, action) => {
			const updatedItem = action.payload;
			const index = state.items.findIndex(
				(item) => item.id === updatedItem.id
			);
			if (index !== -1) {
				state.items[index] = updatedItem;
			}
			state.windowMode = 'view';
			state.activeItem = updatedItem;
		});
		builder.addCase(deleteItem.fulfilled, (state, action) => {
			const { id, shouldHardDelete } = action.payload;
			if (shouldHardDelete) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				const index = state.items.findIndex((item) => item.id === id);
				if (index !== -1) {
					const item = state.items[index];
					state.items[index] = {
						...item,
						deletedAt: new Date().toISOString(),
					};
				}
			}
		});
		builder.addCase(restoreItem.fulfilled, (state, action) => {
			const itemId = action.payload;
			const index = state.items.findIndex((item) => item.id === itemId);
			if (index !== -1) {
				const item = state.items[index];
				state.items[index] = {
					...item,
					deletedAt: null,
				};
			}
		});
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
			filteredItems = items.filter(
				({ deletedAt }: VaultItem) => !deletedAt
			);
		}

		if (activeCategory.group === 'default') {
			if (activeCategory.id === 'favourites') {
				filteredItems = items.filter(
					({ isFavourite, deletedAt }: VaultItem) =>
						isFavourite && !deletedAt
				);
			} else if (activeCategory.id === 'bin') {
				filteredItems = items.filter(
					({ deletedAt }: VaultItem) => deletedAt
				);
			}
		} else if (activeCategory.group === 'type') {
			filteredItems = items.filter(
				({ type, deletedAt }: VaultItem) =>
					type === activeCategory.id && !deletedAt
			);
		} else if (activeCategory.group === 'folder') {
			filteredItems = items.filter(
				({
					folderId,
					deletedAt,
				}: {
					folderId: string;
					deletedAt: string;
				}) => folderId === activeCategory.id && !deletedAt
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

		const sortedItems = filteredItems.sort((a, b) =>
			a.name.localeCompare(b.name)
		);
		return sortedItems;
	}
);

export const {
	setActiveItem,
	setEditMode,
	setCreateMode,
	clearActiveItem,
	resetVault,
} = vaultSlice.actions;
export default vaultSlice.reducer;
