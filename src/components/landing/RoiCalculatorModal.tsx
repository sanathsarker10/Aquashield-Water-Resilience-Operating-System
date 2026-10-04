import React, { useState } from 'react';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAudit: () => void;
}

export const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookAudit
}) => {
  const [occupants, setOccupants] = useState<number>(1200); // 1200 units / employees
  const [monthlyTankerSpend, setMonthlyTankerSpend] = useState<number>(380000); // ₹3.8L/mo
  const [facilityType, setFacilityType] = useState<string>('tech-park'); // tech-park or rwa

  if (!isOpen) return null;

  // Calculators
  const estimatedTankerSavingsMonthly = Math.round(monthlyTankerSpend * 0.71); // ~71% saved
  const estimatedLeakSavingsMonthly = Math.round(occupants * 45); // ₹45 per unit in prevented leaks
  const stpReuseSavingsMonthly = Math.round(occupants * 35);
  const totalMonthlySavings = estimatedTankerSavingsMonthly + estimatedLeakSavingsMonthly + stpReuseSavingsMonthly;
  const annualSavingsLakhs = ((totalMonthlySavings * 12) / 100000).toFixed(2);
  const monthlyCostEstimate = facilityType === 'tech-park' ? 18000 : 12000;
  const netRoiRatio = ((totalMonthlySavings / monthlyCostEstimate)).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-3 border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">calculate</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Water Savings &amp; ROI Calculator
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Calibrated against real telemetry benchmarks from 45+ Indian commercial facilities
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

        <div className="py-4 space-y-5 font-body-sm">
          {/* Facility Type Selector */}
          <div>
            <label className="block font-label-sm text-on-surface-variant mb-1 font-semibold uppercase">
              Facility Model
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFacilityType('tech-park')}
                className={`py-2 px-3 rounded-lg border text-center transition-colors font-label-sm ${
                  facilityType === 'tech-park'
                    ? 'border-secondary bg-secondary-fixed/40 text-primary font-bold'
                    : 'border-outline-variant/40 bg-surface-container-low text-on-surface-variant'
                }`}
              >
                Commercial Tech Park / SEZ
              </button>
              <button
                type="button"
                onClick={() => setFacilityType('rwa')}
                className={`py-2 px-3 rounded-lg border text-center transition-colors font-label-sm ${
                  facilityType === 'rwa'
                    ? 'border-secondary bg-secondary-fixed/40 text-primary font-bold'
                    : 'border-outline-variant/40 bg-surface-container-low text-on-surface-variant'
                }`}
              >
                Residential High-Rise RWA
              </button>
            </div>
          </div>

          {/* Slider 1: Facility Size */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-label-sm text-on-surface-variant uppercase font-semibold">
                {facilityType === 'tech-park' ? 'Campus Working Population' : 'Total Apartments / Flats'}
              </span>
              <span className="font-label-md font-bold text-primary">
                {occupants.toLocaleString()} {facilityType === 'tech-park' ? 'People' : 'Units'}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="5000"
              step="100"
              value={occupants}
              onChange={(e) => setOccupants(Number(e.target.value))}
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary-container"
            />
            <div className="flex justify-between text-[11px] text-on-surface-variant font-label-sm mt-1">
              <span>200</span>
              <span>2,500</span>
              <span>5,000+</span>
            </div>
          </div>

          {/* Slider 2: Current Monthly Tanker Spend */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-label-sm text-on-surface-variant uppercase font-semibold">
                Current Monthly Tanker Expense (Dry Season)
              </span>
              <span className="font-label-md font-bold text-secondary">
                ₹{monthlyTankerSpend.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="25000"
              value={monthlyTankerSpend}
              onChange={(e) => setMonthlyTankerSpend(Number(e.target.value))}
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-[11px] text-on-surface-variant font-label-sm mt-1">
              <span>₹50,000</span>
              <span>₹5,00,000</span>
              <span>₹10,00,000</span>
            </div>
          </div>

          {/* Dynamic Calculated Savings Output Card */}
          <div className="p-5 rounded-xl bg-primary-container text-on-primary shadow-lg">
            <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
              Projected Annual Water Security Impact
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-3">
              <div>
                <span className="text-xs text-primary-fixed-dim block">Projected Annual Savings</span>
                <span className="font-display-lg text-2xl md:text-3xl font-bold text-primary-fixed">
                  ₹{annualSavingsLakhs} L
                </span>
                <span className="text-[10px] text-primary-fixed-dim block mt-0.5">Per Financial Year</span>
              </div>
              <div>
                <span className="text-xs text-primary-fixed-dim block">Monthly Tanker Avoidance</span>
                <span className="font-display-lg text-2xl md:text-3xl font-bold text-primary-fixed">
                  ₹{(estimatedTankerSavingsMonthly / 1000).toFixed(0)}k
                </span>
                <span className="text-[10px] text-primary-fixed-dim block mt-0.5">~71% Expense Slashed</span>
              </div>
              <div>
                <span className="text-xs text-primary-fixed-dim block">Net ROI Multiple</span>
                <span className="font-display-lg text-2xl md:text-3xl font-bold text-primary-fixed">
                  {netRoiRatio}x
                </span>
                <span className="text-[10px] text-primary-fixed-dim block mt-0.5">First Year Returns</span>
              </div>
            </div>

            <div className="pt-2 border-t border-on-primary-container/20 flex items-center justify-between text-xs text-primary-fixed-dim">
              <span>Payback period estimated in &lt; 45 days.</span>
              <span className="text-primary-fixed font-semibold">Zero upfront CAPEX option available</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors"
          >
            Close Calculator
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookAudit();
            }}
            className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-bold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Lock In These Savings — Book Audit</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
