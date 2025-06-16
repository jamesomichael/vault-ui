import SidebarSection from './SidebarSection';

import { BiCategory } from 'react-icons/bi';
import { SlGlobe } from 'react-icons/sl';
import {
	FaRegStar,
	FaRegTrashCan,
	FaRegCreditCard,
	FaRegIdCard,
} from 'react-icons/fa6';
import { FaRegStickyNote } from 'react-icons/fa';
import { HiOutlineKey } from 'react-icons/hi2';

const sidebarItems = [
	{
		icon: <BiCategory />,
		title: 'All items',
	},
	{
		icon: <FaRegStar />,
		title: 'Favourites',
	},
	{
		icon: <FaRegTrashCan />,
		title: 'Bin',
	},
];

const types = [
	{
		icon: <SlGlobe />,
		title: 'Login',
	},
	{
		icon: <FaRegCreditCard />,
		title: 'Card',
	},
	{
		icon: <FaRegIdCard />,
		title: 'Identity',
	},
	{
		icon: <FaRegStickyNote />,
		title: 'Secure note',
	},
	{
		icon: <HiOutlineKey />,
		title: 'SSH key',
	},
];

const folders = [
	'Business',
	'Education',
	'Email',
	'Entertainment',
	'Games',
	'Health',
	'Productivity Tools',
	'Shopping',
	'Social',
	'Travel',
	'No folder',
];

const Sidebar = () => {
	return (
		<div className="py-4 pl-4 pr-10 bg-slate-700 border-r-[1px] border-slate-950 flex flex-col gap-7 overflow-y-scroll">
			<SidebarSection data={sidebarItems} />
			<SidebarSection data={types} heading="Types" />
			<SidebarSection
				isFolderSection={true}
				data={folders}
				heading="Folders"
				onCreate={() => {}}
			/>
		</div>
	);
};

export default Sidebar;
