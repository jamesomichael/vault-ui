import { useDispatch } from 'react-redux';

import Action from '../../../shared/Action';

import { useEncryptionKey } from '../../../../hooks/useEncryptionKey';
import {
	clearActiveItem,
	createEncryptedItem,
} from '../../../../redux/vaultSlice';

import { FaRegFloppyDisk, FaXmark } from 'react-icons/fa6';

interface LoginItemData {
	type: 'login';
	name: string;
	username: string;
	password: string;
	uri: string;
	isFavourite: boolean;
	folderId: string | null;
}
interface CreateActionsProps {
	data: LoginItemData;
}

const CreateActions = ({ data }: CreateActionsProps) => {
	const dispatch = useDispatch();
	const { encryptionKey } = useEncryptionKey();

	const saveItem = async () => {
		if (!encryptionKey) {
			console.error('No encryption key found.');
			return;
		}

		try {
			await dispatch(
				createEncryptedItem({ item: data, key: encryptionKey })
			).unwrap();
		} catch (error) {
			console.error('Failed to save item:', error.message);
		}
	};

	const closeActiveItem = () => dispatch(clearActiveItem());

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 flex items-center justify-between px-4 py-2">
			<div className="h-full flex items-center gap-3">
				<Action
					title="Close"
					onClick={closeActiveItem}
					Icon={FaXmark}
					className="text-2xl text-slate-400"
				/>
				<Action
					onClick={saveItem}
					title="Save"
					Icon={FaRegFloppyDisk}
					className="text-2xl"
				/>
			</div>
		</div>
	);
};

export default CreateActions;
