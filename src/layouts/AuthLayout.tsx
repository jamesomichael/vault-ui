import { Outlet } from 'react-router';

const AuthLayout = () => {
	return (
		<div className="h-full px-4 bg-slate-900 flex justify-center items-center">
			<span className="fixed top-4 left-8 font-hubot font-medium text-neutral-200 text-2xl">
				Vault
			</span>
			<main className="h-full w-full flex justify-center items-center">
				<Outlet />
			</main>
		</div>
	);
};

export default AuthLayout;
