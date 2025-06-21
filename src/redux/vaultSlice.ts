import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { vaultItems } from '../dummy-data/vault';

import { encryptVaultItem } from '../utils/crypto';

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
	items: vaultItems,
};

export const createEncryptedItem = createAsyncThunk(
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
			console.error('Failed to create encrypted item:', error.message);
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
		builder.addCase(createEncryptedItem.fulfilled, (state, action) => {
			state.items.push(action.payload);
			state.windowMode = 'view';
			state.activeItem = action.payload;
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

export const {
	addItem,
	setActiveItem,
	setEditMode,
	setCreateMode,
	clearActiveItem,
} = vaultSlice.actions;
export default vaultSlice.reducer;
