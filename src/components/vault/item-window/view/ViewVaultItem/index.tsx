import ViewActions from '../ViewActions';
import Field from '../../../../shared/Field';
import FieldGroup from '../../../../shared/FieldGroup';
import Timestamps from '../Timestamps';

import type { ActiveItem } from '../../../../../types/vault';

interface Props {
	item: ActiveItem;
}

const ViewVaultItem = ({ item }: Props) => {
	if (!item) {
		return;
	}

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
					<Timestamps
						createdAt={item.createdAt}
						updatedAt={item.updatedAt}
					/>
				</div>
			</div>
			<ViewActions data={item} />
		</div>
	);
};

export default ViewVaultItem;
