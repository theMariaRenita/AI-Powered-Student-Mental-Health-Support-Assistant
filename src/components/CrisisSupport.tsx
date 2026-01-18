import { AlertCircle, Phone, MessageSquare, Heart } from 'lucide-react';

export default function CrisisSupport() {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-200 rounded-2xl p-6">
      <div className="flex items-start gap-3 mb-4">
        <AlertCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-rose-900 text-lg mb-1">Need Immediate Help?</h3>
          <p className="text-sm text-rose-800">
            If you're in crisis or having thoughts of self-harm, please reach out now.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-xl p-4 border border-rose-100">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5 text-rose-600" />
            <h4 className="font-semibold text-gray-900">Call or Text</h4>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700">
              <span className="font-bold text-rose-700">988</span> - Suicide & Crisis Lifeline
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-rose-700">1-800-273-8255</span> - National Suicide Prevention
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-rose-100">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-5 h-5 text-rose-600" />
            <h4 className="font-semibold text-gray-900">Text for Support</h4>
          </div>
          <p className="text-sm text-gray-700">
            Text <span className="font-bold text-rose-700">HOME</span> to{' '}
            <span className="font-bold text-rose-700">741741</span> - Crisis Text Line
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-rose-100">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-rose-600" />
            <h4 className="font-semibold text-gray-900">On Campus</h4>
          </div>
          <p className="text-sm text-gray-700">
            Contact your school counseling center or campus health services
          </p>
        </div>
      </div>

      <p className="text-xs text-rose-700 mt-4 text-center font-medium">
        Your life matters. Help is available 24/7.
      </p>
    </div>
  );
}
