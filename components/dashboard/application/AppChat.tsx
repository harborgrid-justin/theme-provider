import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { ThemedInput } from '../../ui-elements/ThemedInput';
import { Icons } from '../DashboardIcons';

interface ChatMessage {
    id: number;
    text: string;
    sender: 'me' | 'them';
    time: string;
}

export const AppChat: React.FC = () => {
  const { theme } = useTheme();
  const [activeChatId, setActiveChatId] = useState(1);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hey! Can you review the PR?", sender: 'them', time: '10:30 AM' },
    { id: 2, text: "Sure, I'll take a look in 5 mins.", sender: 'me', time: '10:32 AM' },
    { id: 3, text: "Awesome, thanks!", sender: 'them', time: '10:33 AM' }
  ]);

  const handleSendMessage = () => {
      if (!messageInput.trim()) return;
      setMessages([...messages, { id: Date.now(), text: messageInput, sender: 'me', time: 'Now' }]);
      setMessageInput('');
      setTimeout(() => {
          setMessages(prev => [...prev, { id: Date.now() + 1, text: "Got it!", sender: 'them', time: 'Now' }]);
      }, 1500);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 h-[600px]">
        <ThemedCard className="col-span-1 p-0 flex flex-col overflow-hidden h-full">
            <div className="p-4 border-b font-bold shrink-0" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background, color: theme.colors.text }}>Messages</div>
            <div className="flex-1 overflow-y-auto">
                {[1,2,3,4].map(i => (
                    <button 
                        key={i} 
                        onClick={() => setActiveChatId(i)}
                        className={`w-full p-4 flex gap-3 cursor-pointer border-b last:border-0 hover:bg-black/5 text-left transition-colors ${activeChatId === i ? 'bg-black/5' : ''}`} 
                        style={{ borderColor: theme.colors.text + '05' }}
                    >
                        <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-baseline mb-1">
                                <div className="text-sm truncate font-bold" style={{ color: theme.colors.text }}>{i === 1 ? 'Sarah Wilson' : `User ${i}`}</div>
                                <div className="text-[10px]" style={{ color: theme.colors.textSecondary }}>12m</div>
                            </div>
                            <div className="text-xs truncate opacity-70" style={{ color: theme.colors.textSecondary }}>Hey, did you see the latest designs?</div>
                        </div>
                    </button>
                ))}
            </div>
        </ThemedCard>
        <ThemedCard className="col-span-2 md:col-span-2 p-0 flex flex-col overflow-hidden h-full">
            <div className="p-4 border-b flex justify-between items-center shrink-0" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-sm" style={{ backgroundColor: theme.colors.success, color: '#fff' }}>SW</div>
                    <div>
                        <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Sarah Wilson</div>
                        <div className="text-xs opacity-60 flex items-center gap-1" style={{ color: theme.colors.text }}>
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 opacity-50 cursor-pointer hover:opacity-100" style={{ color: theme.colors.textSecondary }}><Icons.More/></div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto" style={{ backgroundColor: theme.colors.background }}>
                {messages.map((msg) => (
                    <div 
                        key={msg.id}
                        className={`max-w-[80%] p-3.5 text-sm animate-in zoom-in-95 duration-200 shadow-sm ${msg.sender === 'me' ? 'self-end' : 'self-start'}`}
                        style={{ 
                            borderRadius: theme.borderRadius.lg, 
                            borderTopRightRadius: msg.sender === 'me' ? 0 : theme.borderRadius.lg,
                            borderTopLeftRadius: msg.sender === 'me' ? theme.borderRadius.lg : 0,
                            backgroundColor: msg.sender === 'me' ? theme.colors.primary : theme.colors.surface,
                            border: msg.sender === 'me' ? 'none' : `1px solid ${theme.colors.text}10`,
                            color: msg.sender === 'me' ? '#fff' : theme.colors.text
                        }}
                    >
                        {msg.text}
                        <div className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'opacity-70' : 'opacity-40'}`}>{msg.time}</div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t shrink-0" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                <div className="flex gap-3">
                    <div className="flex-1 relative">
                        <ThemedInput 
                            placeholder="Type a message..." 
                            style={{ backgroundColor: theme.colors.background, borderColor: 'transparent', width: '100%' }} 
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                    </div>
                    <ThemedButton size="md" onClick={handleSendMessage}><Icons.Send/></ThemedButton>
                </div>
            </div>
        </ThemedCard>
    </div>
  );
};