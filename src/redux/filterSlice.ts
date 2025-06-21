import { createSlice } from '@reduxjs/toolkit';

interface ActiveCategory {
	group: string;
	id: string;
}

interface Folder {
	id: string;
	label: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string | null;
}

interface FilterState {
	activeCategory: ActiveCategory;
	searchQuery: string | null;
	folders: Folder[];
}

const initialState: FilterState = {
	activeCategory: { group: 'default', id: 'all' },
	searchQuery: null,
	folders: [
		// {
		// 	id: 'folder-1',
		// 	label: 'Business',
		// 	createdAt: new Date().toISOString(),
		// 	updatedAt: new Date().toISOString(),
		// },
		// {
		// 	id: 'folder-2',
		// 	label: 'Education',
		// 	createdAt: new Date().toISOString(),
		// 	updatedAt: new Date().toISOString(),
		// },
	],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setActiveCategory(state, action) {
			state.activeCategory = action.payload;
		},
		setSearchQuery(state, action) {
			state.searchQuery = action.payload;
		},
		clearSearchQuery(state) {
			state.searchQuery = null;
		},
	},
});

export const { setActiveCategory, setSearchQuery, clearSearchQuery } =
	filterSlice.actions;
export default filterSlice.reducer;
