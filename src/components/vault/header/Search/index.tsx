import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	setSearchQuery,
	clearSearchQuery,
} from '../../../../redux/filterSlice';

import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { FaXmark } from 'react-icons/fa6';

import type { RootState } from '../../../../redux/store';

const Search = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(
		(state: RootState) => state.filter.searchQuery
	);
	const activeCategory = useSelector(
		(state: RootState) => state.filter.activeCategory
	);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setSearchQuery(e.target.value));

	const clearSearch = () => {
		dispatch(clearSearchQuery());
		inputRef.current?.focus();
	};

	let placeholderText = 'Search';
	if (activeCategory.group === 'default') {
		placeholderText =
			activeCategory.id === 'all'
				? 'Search vault'
				: `Search ${activeCategory.id.toLowerCase()}`;
	} else {
		placeholderText = `Search ${activeCategory.group.toLowerCase()}`;
	}

	return (
		<div className="w-full p-2">
			<div className="h-full flex items-center relative group hover:cursor-default">
				<label
					htmlFor="search"
					className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400 group-hover:cursor-default"
				>
					<HiMiniMagnifyingGlass className="text-lg" />
				</label>
				<input
					ref={inputRef}
					id="search"
					type="text"
					value={searchQuery || ''}
					onChange={handleSearch}
					placeholder={placeholderText}
					className="pl-8 transition-all duration-200 font-hubot text-slate-100 text-sm focus:outline-none focus:bg-slate-500 placeholder-slate-400 focus:placeholder-slate-300 px-3 bg-slate-600 h-full w-full rounded group-hover:cursor-default"
				/>
				{searchQuery && searchQuery.length > 0 && (
					<div
						onClick={clearSearch}
						className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-100"
					>
						<FaXmark className="text-xl" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
