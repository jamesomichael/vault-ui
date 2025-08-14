import { useState, useEffect } from 'react';
import axios from 'axios';

import Users from '../../components/auth/Users';
import LogInForm from '../../components/auth/LogInForm';
import Loader from '../../components/shared/Loader';

import type { ActiveUser } from '../../types/user';

const VAULT_API_HOST = import.meta.env.VITE_VAULT_API_HOST!;

const SelectUser = () => {
	const [activeUser, setActiveUser] = useState<ActiveUser>(null);
	const [showLogInForm, setShowLogInForm] = useState(false);
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(`${VAULT_API_HOST}/api/users`);
				const data = response.data;
				setUsers(data);
			} catch (error) {
				if (error instanceof Error) {
					console.error('Failed to fetch users:', error.message);
				}
			} finally {
				setIsLoading(false);
			}
		};
		fetchUsers();
	}, []);

	const handleUserSelection = (id: string, username: string) => {
		setActiveUser({ id, username });
		setShowLogInForm(true);
	};

	return isLoading ? (
		<Loader />
	) : showLogInForm ? (
		<LogInForm user={activeUser} onLogOut={() => setShowLogInForm(false)} />
	) : (
		<Users users={users} onSelect={handleUserSelection} />
	);
};

export default SelectUser;
