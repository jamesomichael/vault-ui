import { useDispatch, useSelector } from 'react-redux';

import { setActiveItem } from '../../../../redux/vaultSlice';

import type { RootState } from '../../../../redux/store';

type ItemType = 'login' | 'card' | 'identity' | 'note' | 'key';

interface ListItem {
	id: string;
	type: ItemType;
	name: string;
	username: string;
	password: string;
	uri: string;
	folder?: string | null;
}

interface ItemProps {
	item: ListItem;
}

const VaultListItem = ({ item }: ItemProps) => {
	const dispatch = useDispatch();
	const activeItem = useSelector(
		(state: RootState) => state.vault.activeItem
	);

	const isActive = activeItem?.id === item.id;

	const handleClick = () => {
		dispatch(setActiveItem(item));
	};

	return (
		<div
			onClick={handleClick}
			className={`grid grid-cols-[3rem_1fr] items-center h-12 hover:cursor-pointer ${
				isActive
					? 'bg-slate-700 border-l-4 border-blue-300 px-1'
					: 'hover:bg-slate-700 px-2'
			}`}
		>
			<div className="h-full flex items-center justify-center p-3">
				<img
					src={`https://www.google.com/s2/favicons?sz=64&domain=${
						new URL(item.uri).hostname
					}`}
					alt={`${name} favicon`}
					className="h-full"
				/>
			</div>
			<div className="h-full flex flex-col justify-center gap-1">
				<span className="font-hubot font-medium leading-none text-sm text-slate-100">
					{item.name}
				</span>
				<span className="font-hubot text-sm leading-none text-slate-300">
					{item.username}
				</span>
			</div>
		</div>
	);
};

export default VaultListItem;
