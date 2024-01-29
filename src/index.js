import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/main.scss';
import MDWA from './components/MDWA';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MDWA />);

registerServiceWorker();
