import { useSelector } from 'react-redux';

import { IoShieldHalfSharp } from 'react-icons/io5';

import type { RootState } from '../../../redux/store';
import ActiveItem from './ActiveItem';

const ActiveItemWindow = () => {
	const activeItem = useSelector(
		(state: RootState) => state.vault.activeItem
	);

	return (
		<div className="h-full overflow-hidden bg-slate-900">
			{activeItem ? (
				<ActiveItem item={activeItem} />
			) : (
				<div className="h-full flex gap-2 justify-center items-center text-slate-500">
					<IoShieldHalfSharp className="text-5xl" />
					<span className="font-hubot text-5xl">Vault</span>
				</div>
			)}
		</div>
	);
};

export default ActiveItemWindow;
