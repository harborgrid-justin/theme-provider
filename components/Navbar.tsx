import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { toast } from './ui/Toaster';

interface NavbarProps {
    toggleSidebar: () => void;
    onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, onOpenExport }) => {
  const { theme, undo, redo, canUndo, canRedo } = useTheme();

  return (
    <nav className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between z-30 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg"></div>
            <span className="font-bold text-gray-900 tracking-tight hidden sm:block">Chameleon</span>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
         <div className="flex bg-gray-100 rounded-lg p-1 mr-2 md:mr-4">
            <button 
                onClick={undo} 
                disabled={!canUndo}
                className={`p-1.5 rounded transition-all ${canUndo ? 'text-gray-700 hover:bg-white hover:shadow text-indigo-600' : 'text-gray-400 cursor-not-allowed'}`}
                title="Undo"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
            </button>
            <button 
                onClick={redo}
                disabled={!canRedo} 
                className={`p-1.5 rounded transition-all ${canRedo ? 'text-gray-700 hover:bg-white hover:shadow text-indigo-600' : 'text-gray-400 cursor-not-allowed'}`}
                title="Redo"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" /></svg>
            </button>
         </div>
      
        <button 
          onClick={onOpenExport}
          className="text-xs md:text-sm font-medium text-white bg-gray-900 hover:bg-black flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="hidden sm:inline">Get Code</span>
        </button>
      </div>
    </nav>
  );
};