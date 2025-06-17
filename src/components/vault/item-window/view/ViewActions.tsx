import { useDispatch } from 'react-redux';

import Action from '../../../shared/Action';

import { setEditMode, clearActiveItem } from '../../../../redux/vaultSlice';

import { FaRegTrashCan, FaPencil, FaXmark } from 'react-icons/fa6';

const ViewActions = () => {
	const dispatch = useDispatch();

	const closeActiveItem = () => dispatch(clearActiveItem());
	const activateEditMode = () => dispatch(setEditMode());

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 flex items-center justify-between px-4 py-2">
			<div className="h-full flex items-center gap-3">
				<Action
					title="Close"
					onClick={closeActiveItem}
					Icon={FaXmark}
					className="text-2xl"
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
					Icon={FaRegTrashCan}
					className="text-lg"
					isDestructive={true}
				/>
			</div>
		</div>
	);
};

export default ViewActions;
