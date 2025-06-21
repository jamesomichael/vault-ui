import { createContext } from 'react';

type EncryptionContextType = {
	encryptionKey: CryptoKey | null;
	setEncryptionKey: (key: CryptoKey) => void;
	clearEncryptionKey: () => void;
};

export const EncryptionContext = createContext<
	EncryptionContextType | undefined
>(undefined);
