import { useDispatch } from 'react-redux';

import { setCreateMode } from '../../../../redux/vaultSlice';

import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

const EmptyList = () => {
	const dispatch = useDispatch();
	const activateCreateMode = () => dispatch(setCreateMode());
	return (
		<div
			onClick={activateCreateMode}
			className="h-full flex flex-col gap-2 justify-center items-center"
		>
			<MdOutlineScreenSearchDesktop className="text-slate-500 text-8xl" />
			<span className="leading-none font-hubot text-sm text-slate-100">
				There are no items to list.
			</span>
			<button className="mt-4 leading-none font-hubot text-sm text-blue-400 hover:text-blue-500 hover:cursor-pointer">
				Add item
			</button>
		</div>
	);
};

export default EmptyList;
