import './App.css';

import { useState } from 'react';

import Auth from './components/Auth';
import Vault from './components/Vault';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="h-screen bg-neutral-800">
			{isLoggedIn ? <Vault /> : <Auth />}
		</div>
	);
}

export default App;
