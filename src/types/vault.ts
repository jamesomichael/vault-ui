import type { VaultItem, CreateItem } from './items';
import type { WindowMode } from './window';

export interface VaultState {
	activeItem: VaultItem | CreateItem | null;
	windowMode: WindowMode;
	items: (VaultItem | CreateItem)[];
}
