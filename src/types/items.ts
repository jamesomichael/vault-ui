interface LoginItem {
	type: 'login';
	id: string;
	name: string;
	username: string;
	password: string;
	uri: string;
	isFavourite: boolean;
	folderId?: string | null;
	userId: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string | null;
}

export type VaultItem = LoginItem;

export type CreateItem = Partial<LoginItem>;

export interface EncryptedItem {
	id: string;
	userId: string;
	blob: string;
	iv: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string | null;
}
