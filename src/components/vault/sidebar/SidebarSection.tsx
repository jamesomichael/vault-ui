import { useState } from 'react';

import {
	FaRegFolder,
	FaPlus,
	FaChevronRight,
	FaChevronDown,
} from 'react-icons/fa6';

const SidebarSection = ({
	isFolderSection = false,
	heading,
	data,
	onCreate,
}) => {
	const [isMinimised, setIsMinimised] = useState(false);

	const toggleIsMinimised = () => {
		setIsMinimised((prev) => !prev);
	};

	return (
		<div className="flex flex-col gap-4">
			{heading && (
				<div className="flex justify-between items-center text-slate-400">
					<div
						onClick={toggleIsMinimised}
						className="group hover:cursor-pointer hover:text-slate-200 flex gap-4 items-center"
					>
						<div>
							{isMinimised ? (
								<FaChevronRight />
							) : (
								<FaChevronDown />
							)}
						</div>
						<span className="uppercase font-hubot font-medium text-sm">
							{heading}
						</span>
					</div>
					{onCreate && (
						<div
							onClick={onCreate()}
							className="hover:cursor-pointer hover:text-slate-200"
						>
							<FaPlus />
						</div>
					)}
				</div>
			)}
			{!isMinimised && (
				<div className="flex flex-col gap-3.5">
					{data.map((item, i) => {
						return (
							<div
								key={i}
								className="group hover:cursor-pointer hover:text-blue-400 text-slate-100 flex gap-2.5 items-center text-sm"
							>
								<span className="text-base leading-none">
									{isFolderSection ? (
										<FaRegFolder />
									) : (
										item.icon
									)}
								</span>
								<span className="leading-none font-hubot">
									{isFolderSection ? item : item.title}
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
