import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {}

const initialState: SidebarState = {
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

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		setActiveCategory(state, action) {
			state.activeCategory = action.payload;
		},
	},
});

export const { setActiveCategory } = sidebarSlice.actions;
export default sidebarSlice.reducer;
