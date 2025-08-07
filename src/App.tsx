import { Routes, Route } from 'react-router';

import SelectUser from './pages/auth/SelectUser';
import AuthLayout from './layouts/AuthLayout';
import Vault from './pages/Vault';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="select-none h-screen bg-slate-900">
			<Routes>
				<Route path="/" element={<Vault />} />
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="login" element={<SelectUser />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
