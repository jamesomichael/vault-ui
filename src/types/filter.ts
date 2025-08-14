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

export interface FilterState {
	activeCategory: ActiveCategory;
	searchQuery: string | null;
	folders: Folder[];
}
