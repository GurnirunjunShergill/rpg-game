import { createRoot } from 'react-dom/client';
import App from './src/App';
import * as React from 'react';

const container = document.getElementById('root');
const root = createRoot(container); // create a root
root.render(<App />); // render your app
