import React from 'react';
import { CoaVerification } from '../components/CoaVerification';

interface CoaPageProps {
  onNavigate: (page: string) => void;
  initialLotNumber?: string;
}

export const CoaPage: React.FC<CoaPageProps> = ({ onNavigate, initialLotNumber }) => {
  return (
    <div>
      {/* Page Header / Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">&gt;</span>
            <span className="text-slate-900 font-semibold">CoA Verification</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certificate of Analysis <span className="text-[#0066FF]">(CoA) Verification</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Inspect and print official lot release documentation, test parameters, and regulatory compliance records.
          </p>
        </div>
      </div>

      {/* Main CoA Tool */}
      <CoaVerification initialLotNumber={initialLotNumber} />
    </div>
  );
};
