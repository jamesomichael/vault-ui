import VaultListItem from './VaultListItem';

import { vaultItems } from '../../../dummy-data/vault';

const VaultList = () => {
	return (
		<div className="h-full bg-slate-800 flex flex-col overflow-y-scroll">
			{vaultItems.map((item, i) => (
				<VaultListItem item={item} />
			))}
		</div>
	);
};

export default VaultList;
