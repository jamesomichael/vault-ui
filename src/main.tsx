import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { EncryptionProvider } from './context/EncryptionContext.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<EncryptionProvider>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</EncryptionProvider>
	</StrictMode>
);
