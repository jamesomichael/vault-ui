const ActiveItem = ({ item }) => {
	return (
		<div className="h-full grid grid-rows-[1fr_3.5rem]">
			<div className="w-full h-full max-w-screen-md mx-auto flex flex-col gap-3 p-4">
				<span className="px-2 text-slate-300 uppercase text-sm font-hubot">
					Item Information
				</span>
				<div className="w-full bg-slate-700 rounded flex flex-col">
					<div className="hover:bg-slate-600 px-4 py-3 flex">
						<div className="flex flex-col justify-center gap-1">
							<span className="text-xs text-slate-300">Name</span>
							<span className="text-sm text-slate-100">
								{item.name}
							</span>
						</div>
					</div>
					<div className="hover:bg-slate-600 px-4 py-3 flex items-center justify-between">
						<div className="flex flex-col justify-center gap-1">
							<span className="text-xs text-slate-300">
								Username
							</span>
							<span className="text-sm text-slate-100">
								{item.username}
							</span>
						</div>
						<div className="flex gap-3 text-slate-300">
							<span>COPY</span>
							<span>SHOW</span>
						</div>
					</div>
					<div className="hover:bg-slate-600 px-4 py-3 flex items-center justify-between">
						<div className="flex flex-col justify-center gap-1">
							<span className="text-xs text-slate-300">
								Password
							</span>
							<span className="text-sm text-slate-100">
								{'•'.repeat(item.password.length)}
							</span>
						</div>
						<div className="flex gap-3 text-slate-300">
							<span>COPY</span>
							<span>SHOW</span>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 px-4 py-2"></div>
		</div>
	);
};

export default ActiveItem;
