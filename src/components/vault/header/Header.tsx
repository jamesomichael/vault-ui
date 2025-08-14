import Search from './Search';
import UserAccount from './UserAccount';

const Header = () => {
	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] bg-slate-700 border-b-[1px] border-slate-950">
			<div></div>
			<Search />
			<UserAccount />
		</div>
	);
};

export default Header;
