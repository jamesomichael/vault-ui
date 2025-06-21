export const generateEncryptionKey = async (password: string, salt: string) => {
	const encoder = new TextEncoder();
	const baseKey = await window.crypto.subtle.importKey(
		'raw',
		encoder.encode(password),
		{ name: 'PBKDF2' },
		false,
		['deriveKey']
	);

	const algorithm = {
		name: 'PBKDF2',
		salt: Uint8Array.from(atob(salt), (c) => c.charCodeAt(0)),
		iterations: 100_000,
		hash: 'SHA-256',
	};
	const key = await window.crypto.subtle.deriveKey(
		algorithm,
		baseKey,
		{ name: 'AES-GCM', length: 256 },
		true,
		['encrypt', 'decrypt']
	);

	return key;
};

export const encryptVaultItem = async (item, key) => {
	const encoder = new TextEncoder();
	const iv = crypto.getRandomValues(new Uint8Array(12));

	const encodedItem = encoder.encode(JSON.stringify(item));

	const ciphertext = await crypto.subtle.encrypt(
		{ name: 'AES-GCM', iv },
		key,
		encodedItem
	);

	return {
		blob: btoa(String.fromCharCode(...new Uint8Array(ciphertext))),
		iv: btoa(String.fromCharCode(...iv)),
	};
};
