import { Heart, Info } from 'lucide-react';

interface HeaderProps {
  onInfoClick: () => void;
}

export default function Header({ onInfoClick }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">MindfulStudent</h1>
              <p className="text-teal-100 text-sm">Your Mental Wellness Companion</p>
            </div>
          </div>
          <button
            onClick={onInfoClick}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
            aria-label="Information"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
