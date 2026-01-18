export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface SuggestedTopic {
  id: string;
  label: string;
  icon: string;
  category: 'stress' | 'study' | 'sleep' | 'anxiety' | 'relationships' | 'general';
}
