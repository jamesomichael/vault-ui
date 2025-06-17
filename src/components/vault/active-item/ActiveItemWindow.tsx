import { useSelector } from 'react-redux';

import ActiveItem from './ActiveItem';
import CreateVaultItem from './CreateVaultItem';
import EditActiveItem from './EditActiveItem';

import { IoShieldHalfSharp } from 'react-icons/io5';

import type { RootState } from '../../../redux/store';

const ActiveItemWindow = () => {
	const activeItem = useSelector(
		(state: RootState) => state.vault.activeItem
	);

	const mode = useSelector((state: RootState) => state.vault.windowMode);

	return (
		<div className="h-full overflow-hidden bg-slate-900">
			{mode === 'view' ? (
				<ActiveItem item={activeItem} />
			) : mode === 'edit' ? (
				<EditActiveItem />
			) : mode === 'create' ? (
				<CreateVaultItem />
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
