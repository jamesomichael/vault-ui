// import { useSelector } from 'react-redux';

import { categories } from '../../../constants/sidebar';

import SidebarSection from './SidebarSection';

// import type { RootState } from '../../../redux/store';

const Sidebar = () => {
	// const folders = useSelector((state: RootState) => state.filter.folders);
	return (
		<div className="flex flex-col justify-between w-full bg-slate-700 border-r-[1px] border-slate-950">
			<div className="py-4 pl-4 pr-10 flex flex-col gap-7 overflow-y-scroll">
				<SidebarSection group="default" data={categories.default} />
				<SidebarSection
					group="type"
					data={categories.types}
					heading="Types"
				/>
				{/* <SidebarSection
				group="folder"
				data={folders}
				heading="Folders"
				onCreate={() => {}}
			/> */}
			</div>
			<div className="px-3 py-4 flex flex-col gap-3">
				<div className="border-1 border-slate-500 rounded p-6 flex justify-center items-center">
					<span className="font-hubot text-slate-500 text-xl font-light">
						UI Demo
					</span>
				</div>
				<a
					href="https://github.com/jamesomichael/vault"
					target="_blank"
					rel="noopener noreferrer"
					className="flex justify-center items-center hover:from-yellow-300 hover:to-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded font-hubot px-3 py-2 font-bold text-sm"
				>
					Get full version
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
