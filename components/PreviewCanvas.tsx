import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
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
          const constrained = Math.max(320, Math.min(newWidth, containerRect.width));
          setViewportWidth(constrained);
      }
  };

  const handleResizeEnd = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
  };

  const activeBreakpoint = () => {
      const w = typeof viewportWidth === 'number' ? viewportWidth : (containerRef.current?.offsetWidth || 1200);
      if (w < 640) return 'xs';
      if (w < 768) return 'sm';
      if (w < 1024) return 'md';
      if (w < 1280) return 'lg';
      if (w < 1536) return 'xl';
      return '2xl';
  };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between bg-white p-2 rounded-xl shadow-sm border border-gray-200 gap-4">
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setViewportWidth(375)} 
                className={`p-2 rounded-md transition-all ${viewportWidth === 375 ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Mobile (375px)"
              >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </button>
              <button 
                onClick={() => setViewportWidth(768)}
                className={`p-2 rounded-md transition-all ${viewportWidth === 768 ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Tablet (768px)"
              >
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </button>
              <button 
                onClick={() => setViewportWidth(1024)}
                className={`p-2 rounded-md transition-all ${viewportWidth === 1024 ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Desktop (1024px)"
              >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </button>
              <button 
                onClick={() => setViewportWidth('100%')}
                className={`p-2 rounded-md transition-all ${viewportWidth === '100%' ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="Full Width"
              >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
                 <span>Width:</span>
                 <input 
                    type="number" 
                    value={typeof viewportWidth === 'number' ? viewportWidth : 1200} 
                    onChange={(e) => setViewportWidth(Math.max(320, parseInt(e.target.value)))}
                    className="w-16 bg-transparent outline-none border-b border-gray-300 focus:border-indigo-500 text-gray-900 text-center"
                    disabled={viewportWidth === '100%'}
                 />
                 <span>px</span>
              </div>
              <div className="flex gap-1">
                  {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(bp => (
                      <span key={bp} className={`uppercase px-1.5 py-0.5 rounded ${activeBreakpoint() === bp ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                          {bp}
                      </span>
                  ))}
              </div>
          </div>
      </div>

      {/* Resize Area */}
      <div className="flex-1 min-h-0 relative bg-gray-200/50 rounded-xl border border-gray-200 overflow-hidden flex justify-center items-start pt-8 pb-4" ref={containerRef}>
          
          <div 
             className="relative bg-white shadow-2xl transition-all duration-300 ease-out origin-top h-full flex flex-col"
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
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                 </div>
             )}

             <PreviewFrame 
                width="100%" 
                className="flex-1 w-full bg-white rounded-b-xl border-none"
             >
                 <DashboardPreview />
             </PreviewFrame>
             
             {/* Resize Handle */}
             {viewportWidth !== '100%' && (
                 <div 
                    className="absolute top-1/2 -right-4 w-6 h-12 bg-gray-400/50 hover:bg-indigo-500/80 rounded-r-lg cursor-ew-resize flex items-center justify-center transition-colors -translate-y-1/2"
                    onMouseDown={handleResizeStart}
                 >
                     <div className="h-4 w-0.5 bg-white/80 rounded"></div>
                 </div>
             )}
          </div>
      </div>
    </div>
  );
};