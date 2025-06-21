import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemWindow from '../components/vault/item-window/ItemWindow';
import Header from '../components/vault/header/Header';
import ItemPanel from '../components/vault/item-panel/ItemPanel';
import Sidebar from '../components/vault/sidebar/Sidebar';

import { fetchItems } from '../redux/vaultSlice';

import { useEncryptionKey } from '../hooks/useEncryptionKey';

const Vault = () => {
	const dispatch = useDispatch();
	const { encryptionKey } = useEncryptionKey();

	useEffect(() => {
		if (encryptionKey) {
			dispatch(fetchItems({ key: encryptionKey }));
		}
	}, [encryptionKey, dispatch]);

	return (
		<div className="h-full grid grid-rows-[3.2rem_1fr]">
			<Header />
			<div className="h-full overflow-hidden grid grid-cols-[15.5em_1fr]">
				<Sidebar />
				<div className="h-full overflow-hidden grid grid-cols-[22rem_1fr]">
					<ItemPanel />
					<ItemWindow />
				</div>
			</div>
		</div>
	);
};

export default Vault;
