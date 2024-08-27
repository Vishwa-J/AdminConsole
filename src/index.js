import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the new import
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
<ContextProvider>
    <App />
</ContextProvider>,
); // Use the new render method
