import ActiveItemActions from './ActiveItemActions';
import Field from './Field';
import FieldGroup from './FieldGroup';
import Timestamps from './Timestamps';

const ActiveItem = ({ item }) => {
	return (
		<div className="h-full grid grid-rows-[1fr_3.5rem]">
			<div className="w-full h-full max-w-screen-md mx-auto flex flex-col gap-3 p-4">
				<span className="px-2 text-slate-300 uppercase text-sm font-hubot">
					Item Information
				</span>
				<div className="flex flex-col gap-8">
					<FieldGroup>
						<Field label="Name" value={item.name} />
						<Field
							label="Username"
							value={item.username}
							canCopy={true}
						/>
						<Field
							label="Password"
							value={item.password}
							shouldMask={true}
							canCopy={true}
						/>
					</FieldGroup>
					<FieldGroup>
						<Field
							label="Website"
							value={item.uri}
							isUri={true}
							canCopy={true}
						/>
					</FieldGroup>
					<Timestamps />
				</div>
			</div>
			<ActiveItemActions />
		</div>
	);
};

export default ActiveItem;
