import { useDispatch } from 'react-redux';

import { setActiveItem } from '../../../../redux/vaultSlice';

type ItemType = 'login' | 'card' | 'identity' | 'note' | 'key';

interface ListItem {
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

	const handleClick = () => {
		dispatch(setActiveItem(item));
	};

	return (
		<div
			onClick={handleClick}
			className="grid grid-cols-[3rem_1fr] items-center px-2 h-12 hover:bg-slate-700 hover:cursor-pointer"
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
