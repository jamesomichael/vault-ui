import { useSelector } from 'react-redux';

import { categories } from '../../../constants/sidebar';

import SidebarSection from './SidebarSection';

import type { RootState } from '../../../redux/store';

const Sidebar = () => {
	const folders = useSelector((state: RootState) => state.filter.folders);
	return (
		<div className="py-4 pl-4 pr-10 bg-slate-700 border-r-[1px] border-slate-950 flex flex-col gap-7 overflow-y-scroll">
			<SidebarSection group="default" data={categories.default} />
			<SidebarSection
				group="type"
				data={categories.types}
				heading="Types"
			/>
			<SidebarSection
				group="folder"
				data={folders}
				heading="Folders"
				onCreate={() => {}}
			/>
		</div>
	);
};

export default Sidebar;
