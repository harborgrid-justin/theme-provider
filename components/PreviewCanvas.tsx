import React, { useState, useRef } from 'react';
import { PreviewFrame } from './PreviewFrame';
import { DashboardPreview } from './DashboardPreview';

export const PreviewCanvas: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState<number | '100%'>('100%');
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResizeStart = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
  };

  const handleResizeMove = (e: MouseEvent) => {
      if (containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const newWidth = e.clientX - containerRect.left;
          // Constrain between mobile (320px) and container max width
          const constrained = Math.max(320, Math.min(newWidth, containerRect.width - 24));
          setViewportWidth(constrained);
      }
  };

  const handleResizeEnd = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
  };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between bg-white p-2 rounded-xl shadow-sm border border-gray-200 gap-4 flex-shrink-0">
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setViewportWidth(375)} 
                className={`p-2 rounded-md transition-all ${viewportWidth === 375 ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Mobile (375px)"
              >
                  <span className="material-icons text-[18px]">smartphone</span>
              </button>
              <button 
                onClick={() => setViewportWidth(768)}
                className={`p-2 rounded-md transition-all ${viewportWidth === 768 ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Tablet (768px)"
              >
                   <span className="material-icons text-[18px]">tablet_mac</span>
              </button>
              <button 
                onClick={() => setViewportWidth(1024)}
                className={`p-2 rounded-md transition-all ${viewportWidth === 1024 ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Desktop (1024px)"
              >
                  <span className="material-icons text-[18px]">laptop</span>
              </button>
              <button 
                onClick={() => setViewportWidth('100%')}
                className={`p-2 rounded-md transition-all ${viewportWidth === '100%' ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Full Width"
              >
                  <span className="material-icons text-[18px]">desktop_windows</span>
              </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
                 <span>Width:</span>
                 <input 
                    type="number" 
                    value={typeof viewportWidth === 'number' ? Math.round(viewportWidth) : 1200} 
                    onChange={(e) => setViewportWidth(Math.max(320, parseInt(e.target.value)))}
                    className="w-16 bg-transparent outline-none border-b border-gray-300 focus:border-indigo-500 text-gray-900 text-center"
                    disabled={viewportWidth === '100%'}
                 />
                 <span>px</span>
              </div>
          </div>
      </div>

      {/* Resize Area */}
      <div className="flex-1 min-h-0 relative bg-gray-100 rounded-xl border border-gray-200 overflow-hidden flex justify-center items-start pt-8 pb-4 select-none" ref={containerRef}>
          <div 
             className={`relative bg-white shadow-2xl transition-all ease-out origin-top h-full flex flex-col ${isResizing ? 'transition-none pointer-events-none' : 'duration-300'}`}
             style={{ 
                 width: viewportWidth, 
                 maxWidth: '100%',
                 borderRadius: viewportWidth === '100%' ? 0 : 12,
                 border: viewportWidth === '100%' ? 'none' : '1px solid #e5e7eb'
             }}
          >
             {/* Fake Browser Top */}
             {viewportWidth !== '100%' && (
                 <div className="h-6 bg-gray-50 border-b border-gray-200 flex items-center px-3 gap-1.5 rounded-t-xl flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <div className="mx-auto w-1/2 h-3 bg-gray-200 rounded-full opacity-50"></div>
                 </div>
             )}

             <PreviewFrame 
                width="100%" 
                className={`flex-1 w-full bg-white rounded-b-xl border-none ${isResizing ? 'pointer-events-none' : ''}`}
             >
                 <DashboardPreview />
             </PreviewFrame>
             
             {/* Resize Handle */}
             {viewportWidth !== '100%' && (
                 <div 
                    className="absolute top-1/2 -right-5 w-5 h-16 bg-gray-300 hover:bg-indigo-500 rounded-r-md cursor-ew-resize flex items-center justify-center transition-colors -translate-y-1/2 z-50 shadow-md group"
                    onMouseDown={handleResizeStart}
                 >
                     <div className="h-6 w-1 bg-white/50 rounded-full group-hover:bg-white"></div>
                 </div>
             )}
          </div>
      </div>
    </div>
  );
};