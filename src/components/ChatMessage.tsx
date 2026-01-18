import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.sender === 'assistant';

  return (
    <div className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
          <Bot className="w-5 h-5 text-teal-600" />
        </div>
      )}

      <div className={`max-w-[75%] ${isAssistant ? '' : 'order-first'}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isAssistant
              ? 'bg-white border border-gray-200 text-gray-800'
              : 'bg-teal-600 text-white'
          }`}
        >
          <p className="whitespace-pre-line leading-relaxed text-sm">{message.text}</p>
        </div>
        <p className="text-xs text-gray-400 mt-1 px-2">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}
