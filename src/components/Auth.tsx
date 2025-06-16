import Users from './Users';

const Auth = () => {
	return (
		<div className="h-full bg-slate-900 flex justify-center items-center">
			<span className="fixed top-4 left-8 font-hubot font-medium text-neutral-200 text-2xl">
				Vault
			</span>
			<Users />
		</div>
	);
};

export default Auth;
