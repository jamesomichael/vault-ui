const DEMO_USER_PASSWORD = import.meta.env.VITE_DEMO_USER_PASSWORD!;

const DemoMessage = () => {
	return (
		<div className="select-text fixed m-6 bottom-0 lg:bottom-auto lg:top-0 lg:right-0 flex flex-col gap-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded md:w-[25rem] px-4 py-4">
			<p className="font-hubot font-bold text-lg">
				Welcome to the Vault UI Demo!
			</p>
			<p className="font-hubot text">
				This is a limited version for demonstration purposes only. To
				try it out, log in with the following credentials:
			</p>
			<ul className="font-hubot list-disc list-inside">
				<li>
					<span className="font-bold">Username:</span> DemoUser
				</li>
				<li>
					<span className="font-bold">Password:</span>{' '}
					{DEMO_USER_PASSWORD}
				</li>
			</ul>
			<p className="font-hubot">
				For the full experience, please visit the{' '}
				<a
					href="https://github.com/jamesomichael/vault"
					target="_blank"
					rel="noopener noreferrer"
					className="italic underline hover:text-blue-600"
				>
					GitHub repository
				</a>
				.
			</p>
		</div>
	);
};

export default DemoMessage;
