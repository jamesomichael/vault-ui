import Header from '../components/vault/header/Header';
import ItemPanel from '../components/vault/item-panel/ItemPanel';
import Sidebar from '../components/vault/sidebar/Sidebar';

import { IoShieldHalfSharp } from 'react-icons/io5';

const Vault = () => {
	return (
		<div className="h-full grid grid-rows-[3.2rem_1fr]">
			<Header />
			<div className="h-full overflow-hidden grid grid-cols-[17rem_1fr]">
				<Sidebar />
				<div className="h-full overflow-hidden grid grid-cols-[23rem_1fr]">
					<ItemPanel />
					<div className="h-full overflow-hidden bg-slate-900 flex gap-2 justify-center items-center text-slate-500">
						<IoShieldHalfSharp className="text-5xl" />
						<span className="font-hubot text-5xl">Vault</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vault;
