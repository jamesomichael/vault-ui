import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router';

import { EncryptionContext } from '../context/EncryptionContext';
import { generateEncryptionKey } from '../utils/crypto';

export const useEncryption = () => {
	const context = useContext(EncryptionContext);
	const navigate = useNavigate();
	const location = useLocation();

	if (!context) {
		throw new Error(
			'useEncryption must be used within an EncryptionProvider'
		);
	}

	const { encryptionKey, setEncryptionKey, clearEncryptionKey } = context;

	useEffect(() => {
		if (!encryptionKey && !location.pathname.startsWith('/auth')) {
			navigate('/auth/login');
		}
	}, [encryptionKey, navigate, location.pathname]);

	const deriveAndSetEncryptionKey = async (
		password: string,
		salt: string
	) => {
		const key = await generateEncryptionKey(password, salt);
		setEncryptionKey(key);
	};

	return {
		encryptionKey,
		deriveAndSetEncryptionKey,
		clearEncryptionKey,
	};
};
