import React from 'react';

import { IoShieldHalfSharp } from 'react-icons/io5';

const Vault = () => {
	return (
		<div className="h-full grid grid-rows-[3rem_1fr]">
			<div className="bg-slate-700">vault header</div>
			<div className="grid grid-cols-[17rem_1fr]">
				<div className="bg-slate-700">sidebar</div>
				<div className="grid grid-cols-[23rem_1fr]">
					<div className="bg-slate-800"></div>
					<div className="bg-slate-900 flex gap-2 justify-center items-center text-slate-500">
						<IoShieldHalfSharp className="text-5xl" />
						<span className="font-hubot text-5xl">Vault</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vault;
