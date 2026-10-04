import React, { useState } from 'react';
import { Campus, InflowSource } from '../../types';
import { INITIAL_INFLOW_SOURCES } from '../../data/mockData';

interface MultiSourceInflowProps {
  campus: Campus;
  onOpenEmergencyModal: () => void;
}

export const MultiSourceInflow: React.FC<MultiSourceInflowProps> = ({
  campus,
  onOpenEmergencyModal
}) => {
  const [sources, setSources] = useState<InflowSource[]>(INITIAL_INFLOW_SOURCES);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredSources = filterType === 'all'
    ? sources
    : sources.filter(s => s.type === filterType);

  return (
    <div className="p-space-margin flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-outline-variant/20 gap-3">
        <div>
          <span className="font-label-sm text-secondary uppercase font-semibold">
            SCADA Hydrostatic Inflow Telemetry
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            Multi-Source Inflow &amp; Reservoirs
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            Continuous real-time flowmeter readings across municipal grid, borewells, STP recycled effluent, and rainwater sumps.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEmergencyModal}
            className="px-4 py-2 rounded-lg bg-error-container text-on-error-container font-label-sm text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">emergency_share</span>
            Request Tanker Backup
          </button>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Current Total Inflow</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">218.8 m³/h</div>
          <span className="font-label-sm text-primary font-medium">Stable (+3.4% vs 24h baseline)</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Underground Sump Vol.</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">442,000 L</div>
          <span className="font-label-sm text-primary font-medium">84.2% Total Capacity</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Overhead Reserve</span>
          <div className="font-display-lg text-2xl font-bold text-secondary my-1">206,500 L</div>
          <span className="font-label-sm text-secondary font-medium">92.0% Domestic Tank</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Water Cost Average</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">₹0.042 / L</div>
          <span className="font-label-sm text-primary font-medium">28% under municipal cap</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['all', 'municipal', 'stp', 'borewell', 'tanker'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1.5 rounded-lg font-label-sm text-xs transition-colors capitalize ${
              filterType === type
                ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {type === 'all' ? 'All Supply Lines' : type}
          </button>
        ))}
      </div>

      {/* Inflow Sources Table */}
      <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/20 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body-sm">
            <thead className="bg-surface-container-low font-label-sm text-on-surface-variant uppercase">
              <tr>
                <th className="p-3">Inflow Line &amp; Source</th>
                <th className="p-3">Current Velocity</th>
                <th className="p-3">Past 24h Yield</th>
                <th className="p-3">Share</th>
                <th className="p-3">TDS (Purity)</th>
                <th className="p-3">Unit Cost</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredSources.map((source) => (
                <tr key={source.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-3">
                    <span className="font-headline-sm text-sm text-primary font-bold block">{source.name}</span>
                    <span className="font-label-sm text-on-surface-variant capitalize">{source.type} Feed</span>
                  </td>
                  <td className="p-3 font-label-md font-bold text-primary">{source.currentFlowRate}</td>
                  <td className="p-3 font-label-md text-on-surface">{source.dailyTotalLiters.toLocaleString()} L</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: `${source.percentageShare * 2}%` }}></div>
                      </div>
                      <span className="font-label-sm font-semibold">{source.percentageShare}%</span>
                    </div>
                  </td>
                  <td className="p-3 font-label-sm">
                    <span className="font-semibold text-primary">{source.qualityTds} ppm</span>
                    <span className="text-on-surface-variant block text-[10px]">pH {source.qualityPh}</span>
                  </td>
                  <td className="p-3 font-label-sm text-secondary font-bold">₹{source.costPerLiter} / L</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-label-sm uppercase text-[10px] font-bold ${
                        source.status === 'optimal'
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : source.status === 'throttled'
                          ? 'bg-surface-container-high text-on-surface'
                          : 'bg-error-container text-on-error-container'
                      }`}
                    >
                      {source.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
