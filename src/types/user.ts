export interface User {
	id: string;
	username: string;
}

export type ActiveUser = User | null;
