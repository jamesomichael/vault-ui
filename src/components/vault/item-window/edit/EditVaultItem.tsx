import { useSelector } from 'react-redux';
import { useState } from 'react';

import EditActions from './EditActions';
import FieldGroup from '../../../shared/FieldGroup';
import Field from '../../../shared/Field';

import type { RootState } from '../../../../redux/store';

const EditVaultItem = () => {
	const activeItem = useSelector(
		(state: RootState) => state.vault.activeItem
	);

	if (!activeItem) {
		return null;
	}

	const [name, setName] = useState(activeItem.name || '');
	const [username, setUsername] = useState(activeItem.username || '');
	const [password, setPassword] = useState(activeItem.password || '');
	const [uri, setUri] = useState(activeItem.uri || '');
	const [isFavourite, setIsFavourite] = useState(
		activeItem.isFavourite || false
	);

	const loginItemData = {
		id: activeItem.id,
		type: 'login',
		name,
		username,
		password,
		uri,
		isFavourite,
	};

	return (
		<div className="h-full grid grid-rows-[1fr_3.5rem]">
			<div className="w-full h-full max-w-screen-md mx-auto flex flex-col gap-3 p-4">
				<span className="px-2 text-slate-300 uppercase text-sm font-hubot">
					Add Item
				</span>
				<div className="flex flex-col gap-8">
					<FieldGroup>
						<Field
							type="dropdown"
							dropdownOptions={[{ id: 'login', label: 'Login' }]}
							isEditable={false}
							label="Type"
						/>
						<Field
							isEditable={true}
							onChange={(e) => setName(e.target.value)}
							label="Name"
							value={name}
						/>
						<Field
							isEditable={true}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							value={username}
							label="Username"
						/>
						<Field
							isEditable={true}
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							label="Password"
							isPassword={true}
						/>
					</FieldGroup>
					<FieldGroup>
						<Field
							isEditable={true}
							label="URI"
							onChange={(e) => setUri(e.target.value)}
							value={uri}
							isUri={true}
						/>
					</FieldGroup>
					<FieldGroup>
						<Field
							isEditable={true}
							label="Folder"
							type="dropdown"
						/>
						<Field
							isEditable={true}
							label="Favourite"
							type="checkbox"
							value={isFavourite}
							onChange={() => setIsFavourite((prev) => !prev)}
						/>
					</FieldGroup>
				</div>
			</div>
			<EditActions data={loginItemData} />
		</div>
	);
};

export default EditVaultItem;
