import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Icons } from '../dashboard/DashboardIcons';

interface ThemedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const ThemedModal: React.FC<ThemedModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div 
        className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        style={{ 
            backgroundColor: theme.colors.surface, 
            borderRadius: theme.borderRadius.card,
            borderColor: theme.colors.text + '10',
            borderWidth: theme.framework === 'neobrutalism' ? '2px' : '0px'
        }}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: theme.colors.text + '10' }}>
          <h3 className="text-lg font-bold" style={{ color: theme.colors.text }}>{title}</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-black/5 transition-colors"
            style={{ color: theme.colors.textSecondary }}
          >
            <Icons.Close size="sm" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {children}
        </div>

        {footer && (
            <div className="p-4 border-t bg-gray-50/50 flex justify-end gap-3" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>
                {footer}
            </div>
        )}
      </div>
    </div>
  );
};