import { useDispatch } from 'react-redux';

import { setCreateMode } from '../../../redux/vaultSlice';

import { FaPlus } from 'react-icons/fa6';

const AddItem = () => {
	const dispatch = useDispatch();

	const activateCreateMode = () => dispatch(setCreateMode());

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 px-4 py-2">
			<div
				onClick={activateCreateMode}
				className="hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 h-full rounded outline-1 outline-slate-500 flex justify-center items-center"
			>
				<FaPlus className="text-blue-400 text-2xl leading-none" />
			</div>
		</div>
	);
};

export default AddItem;
