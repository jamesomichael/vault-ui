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

export const categories = {
	default: [
		{
			label: 'All items',
			id: 'all',
			Icon: BiCategory,
		},
		{
			label: 'Favourites',
			id: 'favourites',
			Icon: FaRegStar,
		},
		{
			label: 'Bin',
			id: 'bin',
			Icon: FaRegTrashCan,
		},
	],
	types: [
		{
			label: 'Login',
			id: 'login',
			Icon: SlGlobe,
		},
		// {
		// 	label: 'Card',
		// 	id: 'card',
		// 	Icon: FaRegCreditCard,
		// },
		// {
		// 	label: 'Identity',
		// 	id: 'identity',
		// 	Icon: FaRegIdCard,
		// },
		// {
		// 	label: 'Secure note',
		// 	id: 'note',
		// 	Icon: FaRegStickyNote,
		// },
		// {
		// 	label: 'SSH key',
		// 	id: 'key',
		// 	Icon: HiOutlineKey,
		// },
	],
};
