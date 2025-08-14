import { useDispatch, useSelector } from 'react-redux';

import { setActiveItem } from '../../../../../redux/vaultSlice';

import type { RootState } from '../../../../../redux/store';
import type { VaultItem } from '../../../../../types/items';

interface Props {
	item: VaultItem;
}

const VaultListItem = ({ item }: Props) => {
	const dispatch = useDispatch();
	const activeItem = useSelector(
		(state: RootState) => state.vault.activeItem
	);

	const isActive = activeItem?.id === item.id;

	const handleClick = () => {
		dispatch(setActiveItem(item));
	};

	const getFaviconUrl = (uri: string) => {
		try {
			const hostname = new URL(uri).hostname;
			return `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
		} catch {
			return 'globe.svg';
		}
	};

	return (
		<div
			onClick={handleClick}
			className={`grid grid-cols-[3rem_1fr] items-center h-12 hover:cursor-pointer transition-colors duration-200 ${
				isActive
					? 'bg-slate-700 border-l-4 border-blue-300 px-1'
					: 'hover:bg-slate-700 px-2'
			}`}
		>
			<div className="h-full flex items-center justify-center p-3">
				<img
					src={getFaviconUrl(item.uri)}
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
