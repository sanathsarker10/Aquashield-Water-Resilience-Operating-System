import React from 'react';
import { Campus } from '../../types';

interface EsgComplianceProps {
  campus: Campus;
  onOpenBrsrModal: () => void;
}

export const EsgCompliance: React.FC<EsgComplianceProps> = ({ campus, onOpenBrsrModal }) => {
  return (
    <div className="p-space-margin flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-outline-variant/20 gap-3">
        <div>
          <span className="font-label-sm text-secondary uppercase font-semibold">
            Regulatory Auditing &amp; Sustainability
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            ESG &amp; BRSR Compliance Ledger
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            Automated compliance balance sheets compliant with SEBI Principle 6, GRI 303, CGWA notifications, and LEED Platinum certifications.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBrsrModal}
            className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            Export Certified BRSR Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Water Circularity Index</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">78.4%</div>
          <span className="font-label-sm text-primary font-medium">LEED Platinum Target: 80.0%</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">CGWA Groundwater Balance</span>
          <div className="font-display-lg text-2xl font-bold text-secondary my-1">42,000 L</div>
          <span className="font-label-sm text-primary font-medium">Safe Extraction Margin (Compliant)</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Rainwater Aquifer Ratio</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">+142%</div>
          <span className="font-label-sm text-primary font-medium">Net-Positive Replenishment</span>
        </div>
      </div>

      {/* Compliance Tables */}
      <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/20 overflow-hidden shadow-sm">
        <div className="p-space-md bg-surface-container-low border-b border-outline-variant/20 flex items-center justify-between">
          <span className="font-headline-sm text-sm text-primary font-bold">
            SEBI BRSR Core Principle 6 (Water Stewardship) Disclosure
          </span>
          <span className="font-label-sm text-xs text-secondary font-semibold">
            FY 2026-27 Automated Ledger
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body-sm">
            <thead className="bg-surface-container-high/40 font-label-sm text-on-surface-variant uppercase">
              <tr>
                <th className="p-3">Parameter / Metric</th>
                <th className="p-3">Current FY Value</th>
                <th className="p-3">Previous FY Baseline</th>
                <th className="p-3">Variance</th>
                <th className="p-3">Audit Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              <tr>
                <td className="p-3 font-semibold text-primary">Total Water Withdrawal (kL)</td>
                <td className="p-3 font-label-md font-bold">8,535 kL</td>
                <td className="p-3 font-label-md text-on-surface-variant">11,380 kL</td>
                <td className="p-3 font-label-md text-primary font-bold">-25.0% (Reduced)</td>
                <td className="p-3 font-label-sm text-primary font-semibold">Cryptographically Verified</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-primary">Treated Recycled Effluent Reused</td>
                <td className="p-3 font-label-md font-bold">3,584 kL</td>
                <td className="p-3 font-label-md text-on-surface-variant">1,210 kL</td>
                <td className="p-3 font-label-md text-primary font-bold">+196.2%</td>
                <td className="p-3 font-label-sm text-primary font-semibold">In-line Electromagnetic Sensor</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-primary">Emergency Spot Tanker Procurement</td>
                <td className="p-3 font-label-md font-bold">682 kL</td>
                <td className="p-3 font-label-md text-on-surface-variant">2,270 kL</td>
                <td className="p-3 font-label-md text-primary font-bold">-70.0%</td>
                <td className="p-3 font-label-sm text-primary font-semibold">Gate Weighbridge Audit</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-primary">Groundwater Recharged to Aquifer</td>
                <td className="p-3 font-label-md font-bold">1,450 kL</td>
                <td className="p-3 font-label-md text-on-surface-variant">890 kL</td>
                <td className="p-3 font-label-md text-primary font-bold">+62.9%</td>
                <td className="p-3 font-label-sm text-primary font-semibold">Piezometer Verified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
