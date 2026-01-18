import { SuggestedTopic } from '../types';
import { Brain, BookOpen, Moon, Heart, Users, Sparkles } from 'lucide-react';

interface SuggestedTopicsProps {
  topics: SuggestedTopic[];
  onTopicClick: (topic: SuggestedTopic) => void;
}

const iconMap = {
  brain: Brain,
  'book-open': BookOpen,
  moon: Moon,
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
};

export default function SuggestedTopics({ topics, onTopicClick }: SuggestedTopicsProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600 font-medium">Quick topics:</p>
      <div className="grid grid-cols-2 gap-2">
        {topics.map((topic) => {
          const Icon = iconMap[topic.icon as keyof typeof iconMap];
          return (
            <button
              key={topic.id}
              onClick={() => onTopicClick(topic)}
              className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-300 transition-all duration-200 text-left group"
            >
              <Icon className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
              <span className="text-sm text-gray-700 group-hover:text-teal-700">
                {topic.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
