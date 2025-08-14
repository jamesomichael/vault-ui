import { useSelector } from 'react-redux';

import { getFilteredItems } from '../../../../../redux/vaultSlice';

import VaultListItem from '../VaultListItem';
import EmptyList from '../EmptyList';

const VaultList = () => {
	const items = useSelector(getFilteredItems);
	return (
		<div className="h-full bg-slate-800 flex flex-col overflow-y-scroll">
			{items.length > 0 ? (
				items.map((item, i) => <VaultListItem key={i} item={item} />)
			) : (
				<EmptyList />
			)}
		</div>
	);
};

export default VaultList;
