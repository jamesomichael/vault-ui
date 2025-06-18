import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveCategory } from '../../../redux/filterSlice';

import {
	FaRegFolder,
	FaPlus,
	FaChevronRight,
	FaChevronDown,
} from 'react-icons/fa6';

import type { RootState } from '../../../redux/store';

const SidebarSection = ({ group, heading, data, onCreate }) => {
	const dispatch = useDispatch();
	const activeCategory = useSelector(
		(state: RootState) => state.filter.activeCategory
	);
	const [isMinimised, setIsMinimised] = useState(false);

	const toggleIsMinimised = () => {
		setIsMinimised((prev) => !prev);
	};

	const handleActiveCategory = (group, id) => {
		dispatch(setActiveCategory({ group, id }));
	};

	return (
		<div className="flex flex-col gap-4">
			{heading && (
				<div className="flex justify-between items-center text-slate-400">
					<div
						onClick={toggleIsMinimised}
						className="group hover:cursor-pointer hover:text-slate-200 transition-colors duration-200 flex gap-3 items-center"
					>
						<div className="text-sm">
							{isMinimised ? (
								<FaChevronRight />
							) : (
								<FaChevronDown />
							)}
						</div>
						<span className="uppercase font-hubot font-medium leading-none text-[0.8rem]">
							{heading}
						</span>
					</div>
					{onCreate && (
						<div
							onClick={onCreate}
							className="hover:cursor-pointer hover:text-slate-200 transition-colors duration-200"
						>
							<FaPlus />
						</div>
					)}
				</div>
			)}
			{!isMinimised && (
				<div className="flex flex-col gap-3.5">
					{data.map((item, i) => {
						const isActive =
							activeCategory?.group === group &&
							activeCategory?.id === item.id;
						const Icon = item.Icon || FaRegFolder;
						return (
							<div
								key={i}
								onClick={() =>
									handleActiveCategory(group, item.id)
								}
								className={`group hover:cursor-pointer hover:text-blue-400 flex gap-2.5 items-center text-sm transition-colors duration-200 ${
									isActive
										? 'text-blue-400 font-bold'
										: 'text-slate-100'
								}`}
							>
								<span className="text-base leading-none">
									{group === 'folder' ? (
										<FaRegFolder />
									) : (
										<Icon />
									)}
								</span>
								<span className="leading-none font-hubot">
									{item.label}
								</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default SidebarSection;
