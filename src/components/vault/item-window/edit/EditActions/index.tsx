import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Action from '../../../../shared/Action';

import { useEncryption } from '../../../../../hooks/useEncryption';

import {
	editItem,
	deleteItem,
	clearActiveItem,
} from '../../../../../redux/vaultSlice';

import { FaRegTrashCan, FaRegFloppyDisk, FaXmark } from 'react-icons/fa6';

import type { VaultItem } from '../../../../../types/items';

interface Props {
	data: Partial<VaultItem>;
}

const EditActions = ({ data }: Props) => {
	const dispatch = useDispatch();
	const { encryptionKey } = useEncryption();

	const isInBin = !!data?.deletedAt;

	const saveItem = async () => {
		if (!encryptionKey) {
			console.error('No encryption key found.');
			return;
		}
		try {
			toast.success('Item saved.');
			await dispatch(
				editItem({ item: data, key: encryptionKey })
			).unwrap();
		} catch (error) {
			if (error instanceof Error) {
				console.error('Failed to save item:', error.message);
			}
		}
	};

	const handleDeletion = async () => {
		try {
			let toastMessage = 'Item deleted.';
			if (!isInBin) {
				toastMessage = 'Item moved to bin.';
			}
			toast.error(toastMessage);
			await dispatch(
				deleteItem({ id: data.id, shouldHardDelete: isInBin })
			);
			dispatch(clearActiveItem());
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Failed to delete item:`, error.message);
			}
		}
	};

	const closeActiveItem = () => dispatch(clearActiveItem());

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 flex items-center justify-between px-4 py-2">
			<div className="h-full flex items-center gap-3">
				<Action
					title="Close"
					onClick={closeActiveItem}
					Icon={FaXmark}
					className="text-2xl text-slate-400"
				/>
				<Action
					onClick={saveItem}
					title="Save"
					Icon={FaRegFloppyDisk}
					className="text-2xl"
				/>
			</div>
			<div className="h-full flex items-center gap-3">
				<Action
					title="Delete"
					onClick={handleDeletion}
					Icon={FaRegTrashCan}
					className="text-lg"
					isDestructive={true}
					modalHeading="Delete item"
					modalText={
						isInBin
							? 'Are you sure you want to permanently delete this item?'
							: 'Do you really want to send to the bin?'
					}
				/>
			</div>
		</div>
	);
};

export default EditActions;
