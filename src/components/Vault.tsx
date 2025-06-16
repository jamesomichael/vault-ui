import React from 'react';

const Vault = () => {
	return (
		<div className="h-full grid grid-rows-[3.5rem_1fr]">
			<div className="bg-blue-500">vault header</div>
			<div className="grid grid-cols-[18rem_1fr]">
				<div className="bg-blue-400">sidebar</div>
				<div className="bg-blue-300">content</div>
			</div>
		</div>
	);
};

export default Vault;
