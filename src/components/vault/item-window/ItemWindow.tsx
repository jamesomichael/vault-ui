import { useSelector } from 'react-redux';

import ViewVaultItem from './view/ViewVaultItem';
import EditVaultItem from './edit/EditVaultItem';
import CreateVaultItem from './create/CreateVaultItem';

import { IoShieldHalfSharp } from 'react-icons/io5';

import type { RootState } from '../../../redux/store';

import type { ActiveItem } from '../../../types/vault';

const ItemWindow = () => {
	const mode = useSelector((state: RootState) => state.vault.windowMode);
	const activeItem: ActiveItem = useSelector(
		(state: RootState) => state.vault.activeItem
	);

	return (
		<div className="h-full overflow-hidden bg-slate-900">
			{mode === 'view' && activeItem ? (
				<ViewVaultItem item={activeItem} />
			) : mode === 'edit' ? (
				<EditVaultItem />
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

export default ItemWindow;
