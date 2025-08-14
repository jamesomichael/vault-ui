import type { VaultItem, CreateItem } from './items';
import type { WindowMode } from './window';

export type ActiveItem = VaultItem | CreateItem | null;

export interface VaultState {
	activeItem: ActiveItem;
	windowMode: WindowMode;
	items: (VaultItem | CreateItem)[];
}
