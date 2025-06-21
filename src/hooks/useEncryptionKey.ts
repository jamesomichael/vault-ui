import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useEncryption } from '../context/EncryptionContext';
import { generateEncryptionKey } from '../utils/crypto';

export const useEncryptionKey = () => {
	const navigate = useNavigate();
	const { encryptionKey, setEncryptionKey, clearEncryptionKey } =
		useEncryption();

	useEffect(() => {
		if (!encryptionKey) {
			navigate('/auth/login');
		}
	}, [encryptionKey, navigate]);

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
