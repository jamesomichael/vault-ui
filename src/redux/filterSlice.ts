import { createSlice } from '@reduxjs/toolkit';

interface FilterState {}

const initialState: FilterState = {
	activeCategory: { group: 'default', id: 'all' },
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
	},
});

export const { setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
