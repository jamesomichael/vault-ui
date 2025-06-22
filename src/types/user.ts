export interface User {
	id: string;
	username: string;
}

export type ActiveUser = User | null;

export interface UserState {
	id: string | null;
	username: string | null;
}
