
import React, { useState, useEffect } from 'react';
import { ThemeEditor } from './components/ThemeEditor';
import { PreviewCanvas } from './components/PreviewCanvas';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/Toaster';
import { CodeExportModal } from './components/CodeExportModal';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [showExportModal, setShowExportModal] = useState(false);

  // Sync sidebar state with mobile changes, but allow manual override
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <ThemeProvider>
      <div className="flex flex-col h-full bg-gray-50 overflow-hidden font-sans text-gray-900">
        <Navbar 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
            onOpenExport={() => setShowExportModal(true)}
        />
        
        <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar Editor */}
          <div 
            className={`
              absolute lg:relative z-20 h-full bg-white border-r border-gray-200 shadow-xl lg:shadow-none transition-all duration-300 ease-in-out flex flex-col shrink-0
              ${isSidebarOpen ? 'translate-x-0 w-full md:w-[400px] lg:w-[28%] lg:min-w-[360px] lg:max-w-[480px]' : '-translate-x-full lg:w-0 lg:translate-x-0'}
            `}
          >
            <div className={`h-full overflow-hidden flex flex-col ${isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
               <ThemeEditor onClose={() => setIsSidebarOpen(false)} isMobile={isMobile} />
            </div>
          </div>

          {/* Main Preview Area */}
          <main className="flex-1 h-full overflow-hidden bg-white p-4">
             <PreviewCanvas />
          </main>

          {/* Overlay for mobile when sidebar is open */}
          {isSidebarOpen && isMobile && (
            <div 
              className="absolute inset-0 bg-black/50 z-10 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
        
        {showExportModal && <CodeExportModal onClose={() => setShowExportModal(false)} />}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
