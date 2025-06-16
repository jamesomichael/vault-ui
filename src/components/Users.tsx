const Users = () => {
	const users = ['1', '2'];
	return (
		<div className="flex flex-wrap gap-8">
			{users?.map((user, i) => (
				<div key={i} className="w-56 h-64 bg-yellow-400">
					<span>{user}</span>
				</div>
			))}
			<div className="w-56 h-64 bg-yellow-400">Add</div>
		</div>
	);
};

export default Users;
