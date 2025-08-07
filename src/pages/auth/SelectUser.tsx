import { useState, useEffect } from 'react';

import Users from '../../components/auth/Users';
import LogInForm from '../../components/auth/LogInForm';
import Loader from '../../components/shared/Loader';

import type { ActiveUser } from '../../types/user';

const DEMO_USERS = [
	{
		id: 'demo-user-1',
		username: 'DemoUser',
	},
];

const SelectUser = () => {
	const [activeUser, setActiveUser] = useState<ActiveUser>(null);
	const [showLogInForm, setShowLogInForm] = useState(false);
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setUsers(DEMO_USERS);
		setIsLoading(false);
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
