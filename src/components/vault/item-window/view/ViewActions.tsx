import { useDispatch } from 'react-redux';

import Action from '../../../shared/Action';

import {
	setEditMode,
	clearActiveItem,
	deleteItem,
} from '../../../../redux/vaultSlice';

import { FaRegTrashCan, FaPencil, FaXmark } from 'react-icons/fa6';

import type { ActiveItem } from '../../../../types/vault';

interface Props {
	data: ActiveItem;
}

const ViewActions = ({ data }: Props) => {
	const dispatch = useDispatch();

	const closeActiveItem = () => dispatch(clearActiveItem());
	const activateEditMode = () => dispatch(setEditMode());

	const handleDeletion = async () => {
		try {
			const shouldHardDelete = !!data.deletedAt;
			await dispatch(deleteItem({ id: data.id, shouldHardDelete }));
			dispatch(clearActiveItem());
		} catch (error) {
			console.error(`Failed to delete item:`, error.message);
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
				<Action
					onClick={activateEditMode}
					title="Edit"
					Icon={FaPencil}
					className="text-lg"
				/>
			</div>
			<div className="h-full flex items-center gap-3">
				<Action
					title="Delete"
					onClick={handleDeletion}
					Icon={FaRegTrashCan}
					className="text-lg"
					isDestructive={true}
				/>
			</div>
		</div>
	);
};

export default ViewActions;
