import ActiveItemWindow from '../components/vault/active-item/ActiveItemWindow';
import Header from '../components/vault/header/Header';
import ItemPanel from '../components/vault/item-panel/ItemPanel';
import Sidebar from '../components/vault/sidebar/Sidebar';

const Vault = () => {
	return (
		<div className="h-full grid grid-rows-[3.2rem_1fr]">
			<Header />
			<div className="h-full overflow-hidden grid grid-cols-[17rem_1fr]">
				<Sidebar />
				<div className="h-full overflow-hidden grid grid-cols-[23rem_1fr]">
					<ItemPanel />
					<ActiveItemWindow />
				</div>
			</div>
		</div>
	);
};

export default Vault;
