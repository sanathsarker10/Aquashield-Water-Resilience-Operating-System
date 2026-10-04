import React from 'react';
import { Campus } from '../../types';

interface BrsrReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  campus: Campus;
}

export const BrsrReportModal: React.FC<BrsrReportModalProps> = ({ isOpen, onClose, campus }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-3 border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">
                SEBI BRSR &amp; CGWA Compliance Ledger
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Principle 6 (Environment) · Certified Water Stewardship Audit
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

        <div className="py-4 space-y-4 font-body-sm text-on-surface">
          {/* Certificate Header Banner */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Facility Entity</span>
              <h4 className="font-headline-sm text-primary font-bold">{campus.name}</h4>
              <p className="font-label-sm text-xs text-on-surface-variant">{campus.location} · {campus.city}</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-semibold">
                AUDITED &amp; COMPLIANT
              </span>
              <p className="text-[11px] font-label-sm text-on-surface-variant mt-1">
                Hash: 0x8F9a...2B71 · Synced to CGWA
              </p>
            </div>
          </div>

          {/* Audit Metrics Table */}
          <div className="border border-outline-variant/30 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container font-label-sm text-on-surface-variant">
                <tr>
                  <th className="p-2.5">Indicator Metric</th>
                  <th className="p-2.5">Mandated Standard</th>
                  <th className="p-2.5">Actual Telemetry</th>
                  <th className="p-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 font-label-md">
                <tr>
                  <td className="p-2.5 font-sans font-medium text-on-surface">Water Circularity Index</td>
                  <td className="p-2.5 text-on-surface-variant">≥ 75.0%</td>
                  <td className="p-2.5 font-bold text-primary">78.4%</td>
                  <td className="p-2.5 text-primary font-bold">Pass</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans font-medium text-on-surface">Groundwater Extraction Quota</td>
                  <td className="p-2.5 text-on-surface-variant">Max 40,000 L/day</td>
                  <td className="p-2.5 font-bold text-secondary">34,140 L/day</td>
                  <td className="p-2.5 text-primary font-bold">Safe Margin</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans font-medium text-on-surface">STP Treated Effluent Reuse</td>
                  <td className="p-2.5 text-on-surface-variant">≥ 70% Non-potable</td>
                  <td className="p-2.5 font-bold text-primary">92.4% Reuse</td>
                  <td className="p-2.5 text-primary font-bold">Superior</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans font-medium text-on-surface">Rainwater Replenishment Ratio</td>
                  <td className="p-2.5 text-on-surface-variant">100% (Neutral)</td>
                  <td className="p-2.5 font-bold text-primary">142% Positive</td>
                  <td className="p-2.5 text-primary font-bold">Net Positive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-surface-container-low rounded-xl text-xs text-on-surface-variant">
            <p>
              <strong>Official Audit Seal:</strong> Validated against National Water Mission Guidelines, CGWA 2020 Notification, and GRI 303: Water and Effluents 2018. Cryptographically signed by AquaShield Automated Regulatory Connector.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
          <span className="font-label-sm text-xs text-on-surface-variant">Generated: Oct 2026 · Valid for FY 2026-27</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg bg-surface-container text-primary font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-sm text-xs font-semibold hover:bg-primary transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
