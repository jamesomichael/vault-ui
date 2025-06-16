import { Outlet } from 'react-router';

import { IoShieldHalfSharp } from 'react-icons/io5';

const AuthLayout = () => {
	return (
		<div className="h-full px-4 bg-slate-900 flex justify-center items-center">
			<div className="fixed top-4 left-8 font-hubot font-medium flex items-center gap-2 text-slate-200">
				<IoShieldHalfSharp className="text-2xl" />
				<span className="text-2xl">Vault</span>
			</div>
			<main className="h-full w-full flex justify-center items-center">
				<Outlet />
			</main>
		</div>
	);
};

export default AuthLayout;
