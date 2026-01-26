import React, { useState, useEffect } from 'react';

// Very simple event bus for toasts to avoid context complexity for this specific utility
type ToastEvent = { message: string; type: 'success' | 'error' | 'info' };
const listeners: ((toast: ToastEvent) => void)[] = [];

export const toast = {
  success: (message: string) => listeners.forEach(l => l({ message, type: 'success' })),
  error: (message: string) => listeners.forEach(l => l({ message, type: 'error' })),
  info: (message: string) => listeners.forEach(l => l({ message, type: 'info' })),
};

export const Toaster = () => {
  const [toasts, setToasts] = useState<(ToastEvent & { id: number })[]>([]);

  useEffect(() => {
    const handler = (t: ToastEvent) => {
      const id = Date.now();
      setToasts(prev => [...prev, { ...t, id }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 3000);
    };
    listeners.push(handler);
    return () => {
      const index = listeners.indexOf(handler);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map(t => (
        <div 
          key={t.id} 
          className={`
            pointer-events-auto px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium animate-bounce
            ${t.type === 'success' ? 'bg-green-600' : t.type === 'error' ? 'bg-red-600' : 'bg-blue-600'}
          `}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
};