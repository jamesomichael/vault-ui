import type { IconType } from 'react-icons';

export interface Category {
	label: string;
	id: string;
	Icon: IconType;
}

export interface CategoriesMap {
	default: Category[];
	types: Category[];
}
