import { X, Shield, Lock, AlertTriangle, HeartHandshake } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold">About MindfulStudent</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-teal-600" />
              What I Can Help With
            </h3>
            <ul className="space-y-1 text-sm text-gray-700 ml-7">
              <li>• Stress management and coping techniques</li>
              <li>• Study-life balance strategies</li>
              <li>• Sleep hygiene and healthy habits</li>
              <li>• Managing anxiety and worry</li>
              <li>• Building healthy relationships</li>
              <li>• General mental wellness guidance</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Important Limitations
            </h3>
            <ul className="space-y-1 text-sm text-amber-900">
              <li>• I am NOT a replacement for professional mental health care</li>
              <li>• I cannot provide medical diagnoses or prescribe treatment</li>
              <li>• I cannot provide emergency crisis intervention</li>
              <li>• For serious concerns, please contact a licensed professional</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-600" />
              Your Privacy
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              This is a supportive chat interface designed for general wellness guidance. No personal
              data is collected or stored. Your conversations remain private. However, this tool does
              not provide HIPAA-compliant confidentiality. For confidential support, please contact
              your campus counseling center or a licensed therapist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-teal-600" />
              When to Seek Professional Help
            </h3>
            <p className="text-sm text-gray-700 mb-2">Contact a mental health professional if you experience:</p>
            <ul className="space-y-1 text-sm text-gray-700 ml-5">
              <li>• Persistent feelings of sadness or hopelessness</li>
              <li>• Thoughts of self-harm or suicide</li>
              <li>• Difficulty functioning in daily activities</li>
              <li>• Severe anxiety or panic attacks</li>
              <li>• Substance abuse concerns</li>
              <li>• Symptoms lasting more than two weeks</li>
            </ul>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
            <p className="text-sm text-teal-900 font-medium text-center">
              Remember: Seeking help is a sign of strength, not weakness. You deserve support and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
