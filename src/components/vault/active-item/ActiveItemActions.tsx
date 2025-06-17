import { useDispatch } from 'react-redux';

import { clearActiveItem } from '../../../redux/vaultSlice';

import { FaRegTrashCan, FaPencil, FaXmark } from 'react-icons/fa6';
import ActiveItemAction from './ActiveItemAction';

const ActiveItemActions = () => {
	const dispatch = useDispatch();

	const closeActiveItem = () => dispatch(clearActiveItem());

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 flex items-center justify-between px-4 py-2">
			<div className="h-full flex items-center gap-3">
				<ActiveItemAction
					title="Close"
					onClick={closeActiveItem}
					Icon={FaXmark}
					className="text-2xl"
				/>
				<ActiveItemAction
					title="Edit"
					Icon={FaPencil}
					className="text-lg"
				/>
			</div>
			<div className="h-full flex items-center gap-3">
				<ActiveItemAction
					title="Delete"
					Icon={FaRegTrashCan}
					className="text-lg"
					isDestructive={true}
				/>
			</div>
		</div>
	);
};

export default ActiveItemActions;
