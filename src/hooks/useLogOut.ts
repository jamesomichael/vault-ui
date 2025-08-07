import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { clearUser } from '../redux/userSlice';
import { resetVault } from '../redux/vaultSlice';

export const useLogOut = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logOut = async () => {
		try {
			dispatch(clearUser());
			dispatch(resetVault());
			navigate('/auth/login');
		} catch (error) {
			if (error instanceof Error) {
				console.error('Failed to log out:', error.message);
			}
		}
	};

	return { logOut };
};
