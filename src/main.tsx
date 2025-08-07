import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import ResolutionWarning from './components/shared/ResolutionWarning.tsx';

import { store } from './redux/store';

import { EncryptionProvider } from './context/EncryptionProvider.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<EncryptionProvider>
			<Provider store={store}>
				<BrowserRouter>
					<div className="lg:hidden h-screen">
						<ResolutionWarning />
					</div>
					<div className="hidden lg:block">
						<App />
					</div>
				</BrowserRouter>
			</Provider>
		</EncryptionProvider>
	</StrictMode>
);
