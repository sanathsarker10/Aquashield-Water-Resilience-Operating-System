import React, { useState } from 'react';

interface EmergencyDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDispatch: (details: { capacity: number; gate: string; note: string }) => void;
}

export const EmergencyDispatchModal: React.FC<EmergencyDispatchModalProps> = ({
  isOpen,
  onClose,
  onConfirmDispatch
}) => {
  const [capacity, setCapacity] = useState<number>(12000);
  const [gate, setGate] = useState<string>('Gate 1 Main Inflow');
  const [note, setNote] = useState<string>('Immediate backup replenishment for Sump S-08');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onConfirmDispatch({ capacity, gate, note });
      setIsSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <div className="flex items-start justify-between pb-3 border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">emergency_share</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Emergency Tanker Dispatch
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pre-authorized rapid procurement protocol (Priority Token #EM-902-BLR)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <span className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-2xl font-bold">check</span>
            </span>
            <h4 className="font-headline-sm text-primary font-bold">Tanker Dispatched!</h4>
            <p className="font-body-sm text-on-surface-variant mt-1 max-w-sm">
              Carrier assigned: Kavery Bulk Logistics. In-transit verification initiated with gate pass sent to security.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-4 font-body-sm">
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1 font-semibold">
                REQUIRED WATER VOLUME
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCapacity(12000)}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    capacity === 12000
                      ? 'border-secondary bg-secondary-fixed/30 text-on-surface font-semibold'
                      : 'border-outline-variant/40 bg-surface-container-low text-on-surface-variant'
                  }`}
                >
                  <span className="block font-label-md">12,000 Liters</span>
                  <span className="text-[11px] text-on-surface-variant">Standard 2-Axle (₹1,150)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCapacity(24000)}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    capacity === 24000
                      ? 'border-secondary bg-secondary-fixed/30 text-on-surface font-semibold'
                      : 'border-outline-variant/40 bg-surface-container-low text-on-surface-variant'
                  }`}
                >
                  <span className="block font-label-md">24,000 Liters</span>
                  <span className="text-[11px] text-on-surface-variant">Heavy 3-Axle Multi (₹2,100)</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1 font-semibold">
                ENTRY GATE &amp; INLET SUMP
              </label>
              <select
                value={gate}
                onChange={(e) => setGate(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary"
              >
                <option value="Gate 1 Main Inflow">Gate 1 Main Inflow (Central Sump S-08 Direct)</option>
                <option value="Gate 3 South Logistics">Gate 3 South Logistics (Basement Reserve)</option>
                <option value="Gate 2 Utility Yard">Gate 2 Utility Yard (STP Equalization Buffer)</option>
              </select>
            </div>

            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1 font-semibold">
                DISPATCH JUSTIFICATION NOTE
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary"
                placeholder="Operational purpose"
              />
            </div>

            <div className="p-3 bg-primary-fixed/40 rounded-xl border border-primary-fixed flex items-center justify-between text-xs">
              <span className="text-on-primary-fixed-variant">Contracted Rate Savings vs Spot:</span>
              <span className="font-label-md text-primary font-bold">~₹2,050 Guaranteed</span>
            </div>

            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-error-container text-on-error-container font-label-sm text-xs font-bold hover:opacity-90 transition-opacity shadow-sm flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">bolt</span>
                Confirm Instant Dispatch
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
