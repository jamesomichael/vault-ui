import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Action from '../../../../shared/Action';

import {
	setEditMode,
	clearActiveItem,
	deleteItem,
	restoreItem,
} from '../../../../../redux/vaultSlice';

import { TbRestore } from 'react-icons/tb';
import { FaRegTrashCan, FaPencil, FaXmark } from 'react-icons/fa6';

import type { ActiveItem } from '../../../../../types/vault';

interface Props {
	data: ActiveItem;
}

const ViewActions = ({ data }: Props) => {
	const dispatch = useDispatch();

	const closeActiveItem = () => dispatch(clearActiveItem());
	const activateEditMode = () => dispatch(setEditMode());

	const isInBin = !!data?.deletedAt;

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

	const restoreDeletedItem = async () => {
		try {
			await dispatch(restoreItem({ id: data.id }));
			toast.info('Item restored.');
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Failed to restore item:`, error.message);
			}
		}
	};

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 flex items-center justify-between px-4 py-2">
			<div className="h-full flex items-center gap-3">
				<Action
					title="Close"
					onClick={closeActiveItem}
					Icon={FaXmark}
					className="text-2xl text-slate-400"
				/>
				{isInBin ? (
					<Action
						onClick={restoreDeletedItem}
						title="Restore"
						Icon={TbRestore}
						className="text-2xl"
					/>
				) : (
					<Action
						onClick={activateEditMode}
						title="Edit"
						Icon={FaPencil}
						className="text-lg"
					/>
				)}
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

export default ViewActions;
