import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Suppress benign ResizeObserver errors commonly triggered by Recharts
const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  if (typeof args[0] === 'string' && /ResizeObserver loop/.test(args[0])) {
    return;
  }
  originalConsoleError(...args);
};

window.addEventListener('error', (e) => {
  if (e.message === 'ResizeObserver loop limit exceeded' || e.message === 'ResizeObserver loop completed with undelivered notifications.') {
    e.stopImmediatePropagation();
  }
});

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);