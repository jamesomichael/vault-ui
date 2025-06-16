import { useState } from 'react';

import Users from './Users';
import LogInForm from './LogInForm';

const SelectUser = () => {
	const [showLogInForm, setShowLogInForm] = useState(false);

	return showLogInForm ? <LogInForm /> : <Users />;
};

export default SelectUser;
