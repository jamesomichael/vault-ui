import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';

import { clearUser } from '../redux/userSlice';
import { resetVault } from '../redux/vaultSlice';

const VAULT_API_HOST = import.meta.env.VITE_VAULT_API_HOST!;

export const useLogOut = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logOut = async () => {
		try {
			await axios.post(`${VAULT_API_HOST}/api/auth/logout`, null, {
				withCredentials: true,
			});
			dispatch(clearUser());
			dispatch(resetVault());
			navigate('/auth/login');
		} catch (error) {
			console.error('Failed to log out:', error.message);
		}
	};

	return { logOut };
};
