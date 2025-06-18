import { useDispatch } from 'react-redux';

import Action from '../../../shared/Action';

import { clearActiveItem } from '../../../../redux/vaultSlice';

import { FaRegFloppyDisk, FaXmark } from 'react-icons/fa6';

const CreateActions = () => {
	const dispatch = useDispatch();

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
					onClick={() => {}}
					title="Save"
					Icon={FaRegFloppyDisk}
					className="text-2xl"
				/>
			</div>
		</div>
	);
};

export default CreateActions;
