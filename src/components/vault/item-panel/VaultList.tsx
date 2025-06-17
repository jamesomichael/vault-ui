import { useSelector } from 'react-redux';

import VaultListItem from './VaultListItem';

import type { RootState } from '../../../redux/store';

const VaultList = () => {
	const items = useSelector((state: RootState) => state.vault.items);

	return (
		<div className="h-full bg-slate-800 flex flex-col overflow-y-scroll">
			{items.map((item, i) => (
				<VaultListItem key={i} item={item} />
			))}
		</div>
	);
};

export default VaultList;
