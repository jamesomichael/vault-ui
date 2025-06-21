import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { decryptVaultItem, encryptVaultItem } from '../utils/crypto';

const VAULT_API_HOST = import.meta.env.VITE_VAULT_API_HOST!;

type WindowMode = 'view' | 'edit' | 'create' | null;
interface VaultState {
	activeItem: any;
	windowMode: WindowMode;
	items: any[];
}

const initialState: VaultState = {
	activeItem: null,
	windowMode: null,
	items: [],
};

export const createItem = createAsyncThunk(
	'vault/createEncryptedItem',
	async ({ item, key }: { item: any; key: CryptoKey }) => {
		try {
			const { blob, iv } = await encryptVaultItem(item, key);
			await axios.post(
				`${VAULT_API_HOST}/api/items`,
				{ blob, iv },
				{ withCredentials: true }
			);
			return item;
		} catch (error) {
			console.error('Failed to create item:', error.message);
			throw error;
		}
	}
);

export const editItem = createAsyncThunk(
	'vault/editItem',
	async ({ item, key }: { item: any; key: CryptoKey }) => {
		try {
			const { id } = item;
			const { blob, iv } = await encryptVaultItem(item, key);
			await axios.patch(
				`${VAULT_API_HOST}/api/items/${id}`,
				{ blob, iv },
				{ withCredentials: true }
			);
			return item;
		} catch (error) {
			console.error('Failed to edit item:', error.message);
			throw error;
		}
	}
);

export const deleteItem = createAsyncThunk(
	'vault/deleteItem',
	async ({ id, shouldHardDelete }: { id: string }) => {
		try {
			await axios.delete(`${VAULT_API_HOST}/api/items/${id}`, {
				withCredentials: true,
			});

			return { id, shouldHardDelete };
		} catch (error) {
			console.error('Failed to delete item:', error.message);
			throw error;
		}
	}
);

export const fetchItems = createAsyncThunk(
	'vault/fetchItems',
	async ({ key }: { key: CryptoKey }) => {
		try {
			const response = await axios.get(`${VAULT_API_HOST}/api/items`, {
				withCredentials: true,
			});
			const data = response.data;
			const decryptedData = await Promise.all(
				data.map(async ({ blob, iv, ...metadata }) => {
					const decryptedItem = await decryptVaultItem(blob, iv, key);
					return { ...decryptedItem, ...metadata };
				})
			);
			return decryptedData;
		} catch (error) {
			console.error('Failed to get vault items:', error.message);
			throw error;
		}
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

export const { setActiveItem, setEditMode, setCreateMode, clearActiveItem } =
	vaultSlice.actions;
export default vaultSlice.reducer;
