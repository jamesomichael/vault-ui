import { Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';

import SelectUser from './pages/auth/SelectUser';
import AuthLayout from './layouts/AuthLayout';
import Vault from './pages/Vault';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="select-none h-screen bg-slate-900">
			<ToastContainer theme="colored" />
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
