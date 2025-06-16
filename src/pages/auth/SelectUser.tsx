import { useState } from 'react';

import Users from '../../components/auth/Users';
import LogInForm from '../../components/auth/LogInForm';

const SelectUser = () => {
	const [showLogInForm, setShowLogInForm] = useState(false);

	return showLogInForm ? <LogInForm /> : <Users />;
};

export default SelectUser;
