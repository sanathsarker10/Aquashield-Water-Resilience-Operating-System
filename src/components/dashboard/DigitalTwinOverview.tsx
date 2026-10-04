import React, { useState } from 'react';
import { Campus, AcousticSensor, TankerDelivery } from '../../types';
import { HydraulicSchematic } from './HydraulicSchematic';

interface DigitalTwinOverviewProps {
  campus: Campus;
  acousticSensors: AcousticSensor[];
  activeTanker: TankerDelivery;
  onOpenGpsModal: () => void;
  onOpenEmergencyModal: () => void;
  onOpenBrsrModal: () => void;
  isZone09Isolated: boolean;
  onIsolateZone09: () => void;
  manualBypassActive: boolean;
  onToggleManualBypass: () => void;
}

export const DigitalTwinOverview: React.FC<DigitalTwinOverviewProps> = ({
  campus,
  activeTanker,
  onOpenGpsModal,
  onOpenEmergencyModal,
  onOpenBrsrModal,
  isZone09Isolated,
  onIsolateZone09,
  manualBypassActive,
  onToggleManualBypass
}) => {
  const [preFlushAuthorized, setPreFlushAuthorized] = useState(false);
  const [scheduleModified, setScheduleModified] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Operational Bar */}
      <div className="px-space-margin py-space-md bg-surface-container-low/70 border-b border-outline-variant/20 flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-on-surface-variant flex-wrap">
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-primary font-semibold">
              {campus.name}
            </span>
            <span className="font-label-sm text-label-sm text-outline">/</span>
            <span className="font-label-sm text-label-sm text-on-surface">Building A-B-C Central Loop</span>
            <span className="font-label-sm text-label-sm text-outline">/</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary font-medium">
              Live Twin v4.2
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm pt-0.5">
            <span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold">
              <span className="h-2 w-2 rounded-full bg-secondary animate-ping"></span>
              Live Telemetry Sync
            </span>
            <span className="text-outline-variant font-label-sm">•</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Latency: <span className="font-semibold text-on-surface">1.2s</span>
            </span>
            <span className="text-outline-variant font-label-sm">•</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Edge Nodes: <span className="text-primary font-semibold">128/128 Active</span>
            </span>
            <span className="text-outline-variant font-label-sm">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-medium">
              <span className="material-symbols-outlined text-sm">thunderstorm</span>
              BLR Urban: 38mm rain in ~14h
            </span>
          </div>
        </div>

        {/* Quick Telemetry & Safety Controls */}
        <div className="flex flex-wrap items-center gap-space-sm">
          <button
            onClick={onToggleManualBypass}
            className={`flex items-center gap-2 px-space-md py-2 rounded-lg transition-colors font-label-sm text-label-sm border ${
              manualBypassActive
                ? 'bg-error-container text-on-error-container border-error font-bold'
                : 'bg-surface-container hover:bg-surface-container-high text-primary border-outline-variant/30'
            }`}
          >
            <span className="material-symbols-outlined text-base text-secondary">power_settings_new</span>
            <span>
              Manual Bypass: <strong className={manualBypassActive ? 'text-error' : 'text-on-surface-variant'}>
                {manualBypassActive ? 'ACTIVE' : 'STANDBY'}
              </strong>
            </span>
          </button>

          <button
            onClick={onOpenEmergencyModal}
            className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-error-container text-on-error-container hover:opacity-90 transition-opacity font-headline-sm text-label-md shadow-sm border border-error/20"
          >
            <span className="material-symbols-outlined text-base">emergency_share</span>
            <span>Emergency Dispatch Tanker</span>
          </button>

          <button
            onClick={onOpenBrsrModal}
            className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container-low transition-colors font-headline-sm text-label-md shadow-sm border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-base">description</span>
            <span>Export BRSR Report</span>
          </button>
        </div>
      </div>

      <div className="p-space-margin flex flex-col gap-space-xl">
        {/* 2. Executive KPI Ribbon (4 High-Impact Telemetry Pods) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/* KPI 1: Water Security Horizon */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden border border-outline-variant/20">
            <div className="flex items-start justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                Water Security Horizon
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-container"></span>
                Optimal Buffer
              </span>
            </div>

            <div className="my-space-md">
              <div className="flex items-baseline gap-1">
                <span className="font-display-lg text-display-lg text-primary tracking-tight">6.4</span>
                <span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">Days Remaining</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Runout threshold projected <span className="font-semibold text-on-surface">May 24, 04:30 AM</span> under zero-inflow model.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg border border-outline-variant/15">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Baseline Target</span>
              <span className="font-label-md text-label-md text-primary font-semibold">4.0 Days Safe Min</span>
            </div>
          </div>

          {/* KPI 2: Total Live Campus Storage */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden border border-outline-variant/20">
            <div className="flex items-start justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                Total Live Campus Storage
              </span>
              <span className="font-label-md text-label-md font-semibold text-secondary">
                {((campus.currentStorageLiters / campus.totalCapacityLiters) * 100).toFixed(1)}% Dynamic Cap
              </span>
            </div>

            <div className="my-space-md">
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-primary font-bold">
                  {campus.currentStorageLiters.toLocaleString()}
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  / {campus.totalCapacityLiters.toLocaleString()} L
                </span>
              </div>

              {/* Layered Reservoir Bar */}
              <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden mt-3 flex">
                <div className="bg-primary-container h-full" style={{ width: '52%' }} title="Underground Sumps: 442,000L"></div>
                <div className="bg-secondary-container h-full" style={{ width: '24.3%' }} title="Overhead Tanks: 206,500L"></div>
              </div>
              <div className="flex justify-between items-center mt-2 font-label-sm text-label-sm text-on-surface-variant">
                <span>4 Underground Sumps (84%)</span>
                <span>2 Overhead (68%)</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg border border-outline-variant/15">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Dynamic Surge Room</span>
              <span className="font-label-md text-label-md text-primary font-semibold">201,500 L Buffer</span>
            </div>
          </div>

          {/* KPI 3: Daily Inflow & Unit Economics */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden border border-outline-variant/20">
            <div className="flex items-start justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                Daily Inflow &amp; Unit Economics
              </span>
              <span className="font-label-sm text-label-sm text-primary font-semibold px-2 py-0.5 rounded bg-primary-fixed">
                ₹0.042/L (-28%)
              </span>
            </div>

            <div className="my-space-md">
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-primary font-bold">284,500</span>
                <span className="font-label-md text-label-md text-on-surface-variant">L Today</span>
              </div>

              {/* Split Pill Strip */}
              <div className="flex items-center gap-1 mt-3 flex-wrap">
                <span className="px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                  Cauv 38%
                </span>
                <span className="px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                  STP 42%
                </span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                  Bore 15%
                </span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  Tk 5%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg border border-outline-variant/15">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Avoided Tanker Spend</span>
              <span className="font-label-md text-label-md text-primary font-semibold">₹18,450 / 24h</span>
            </div>
          </div>

          {/* KPI 4: Hydraulic Integrity & Network */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden border border-outline-variant/20">
            <div className="flex items-start justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                Hydraulic Integrity &amp; Network
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                  isZone09Isolated
                    ? 'bg-primary-fixed text-on-primary-fixed'
                    : 'bg-error-container text-on-error-container animate-pulse'
                }`}
              >
                {isZone09Isolated ? 'All Zones Secured' : '1 Minor Flagged'}
              </span>
            </div>

            <div className="my-space-md">
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
                  {isZone09Isolated ? '100.00%' : '99.88%'}
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">Loop Efficiency</span>
              </div>

              <div className="p-2 mt-2 rounded bg-surface-container-low flex flex-col gap-0.5 border border-outline-variant/15">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold text-primary">Pipe Sec B2-North</span>
                  <span
                    className={`font-label-sm text-label-sm font-medium ${
                      isZone09Isolated ? 'text-primary' : 'text-error'
                    }`}
                  >
                    {isZone09Isolated ? '0 L/hr (Isolated)' : '14 L/hr loss'}
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {isZone09Isolated
                    ? 'Zone 09 isolated via automated acoustic valve'
                    : 'Auto-throttled at 02:15 AM (Zone Isolated)'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg border border-outline-variant/15">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Smart Valves Armed</span>
              <span className="font-label-md text-label-md text-primary font-semibold">24 / 24 Online</span>
            </div>
          </div>
        </div>

        {/* 3. Main Operational Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          {/* LEFT MAIN COLUMN: Digital Twin Schematic & AI Forecast (8 Cols) */}
          <div className="xl:col-span-8 flex flex-col gap-space-lg">
            {/* Interactive Hydraulic Digital Twin Architecture Map */}
            <HydraulicSchematic
              isZone09Isolated={isZone09Isolated}
              manualBypassActive={manualBypassActive}
            />

            {/* Predictive 7-Day Inflow vs Consumption Forecasting Chart */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col border border-outline-variant/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">ssid_chart</span>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Predictive 7-Day Inflow vs Consumption Trajectory
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    ML-driven forecasting model trained on historical campus occupancy, weather radars, and Cauvery supply schedules.
                  </p>
                </div>

                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="h-2.5 w-2.5 rounded bg-primary-container"></span> Projected Supply
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant ml-2">
                    <span className="h-2.5 w-2.5 rounded bg-secondary"></span> Demand Curve
                  </span>
                </div>
              </div>

              {/* SVG Trajectory Area Chart */}
              <div className="w-full bg-surface-container-low/40 rounded-xl p-space-md border border-outline-variant/20">
                <svg className="w-full h-48" fill="none" preserveAspectRatio="none" viewBox="0 0 760 180">
                  {/* Gridlines */}
                  <line stroke="#c0c8c2" strokeDasharray="2 2" strokeOpacity="0.3" x1="0" x2="760" y1="40" y2="40" />
                  <line stroke="#c0c8c2" strokeDasharray="2 2" strokeOpacity="0.3" x1="0" x2="760" y1="90" y2="90" />
                  <line stroke="#c0c8c2" strokeDasharray="2 2" strokeOpacity="0.3" x1="0" x2="760" y1="140" y2="140" />

                  <defs>
                    <linearGradient id="supplyGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0a3b2a" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0a3b2a" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="demandGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#1d59c1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1d59c1" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Supply Area */}
                  <path d="M 0 120 Q 120 70 240 85 T 480 30 T 760 60 L 760 170 L 0 170 Z" fill="url(#supplyGradient)" />
                  <path d="M 0 120 Q 120 70 240 85 T 480 30 T 760 60" fill="none" stroke="#002417" strokeWidth="2.5" />

                  {/* Demand Line */}
                  <path d="M 0 100 Q 120 115 240 100 T 480 90 T 760 95 L 760 170 L 0 170 Z" fill="url(#demandGradient)" />
                  <path d="M 0 100 Q 120 115 240 100 T 480 90 T 760 95" fill="none" stroke="#1d59c1" strokeDasharray="4 2" strokeWidth="2.5" />

                  {/* Rain Surge Marker at Day 2 */}
                  <circle cx="240" cy="85" fill="#00a7e6" r="5" stroke="#ffffff" strokeWidth="2" />
                  {/* Peak Efficiency Marker at Day 4 */}
                  <circle cx="480" cy="30" fill="#002417" r="5" stroke="#ffffff" strokeWidth="2" />
                </svg>

                {/* X-Axis Days Labels */}
                <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm pt-2">
                  <span>Today (Mon)</span>
                  <span className="text-secondary font-semibold">Tue (+38mm Rain)</span>
                  <span>Wed</span>
                  <span className="text-primary font-semibold">Thu (Peak Buffer)</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* AI Autonomous Action Recommendation Callout */}
              <div className="mt-space-md p-space-md rounded-xl bg-primary-fixed/50 flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-primary-fixed">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary-container text-2xl mt-0.5">smart_toy</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-fixed font-bold">
                        Autonomous Recommendation #ACT-884
                      </span>
                      <span className="px-1.5 py-0.2 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold">
                        {preFlushAuthorized ? 'Authorized' : 'Active'}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-primary mt-1">
                      Dynamic pre-flush scheduled tonight at <strong>{scheduleModified ? '22:00' : '23:30'}</strong> to drawdown 60,000 L to capture storm runoff cleanly, saving <strong>₹14,200</strong> in expected tanker orders.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setScheduleModified(!scheduleModified)}
                    className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm hover:bg-surface-container-low transition-colors shadow-sm"
                  >
                    {scheduleModified ? 'Reset Schedule' : 'Modify Schedule'}
                  </button>
                  <button
                    onClick={() => setPreFlushAuthorized(!preFlushAuthorized)}
                    className={`px-space-md py-1.5 rounded-lg font-label-sm text-label-sm transition-opacity shadow-sm ${
                      preFlushAuthorized
                        ? 'bg-primary text-on-primary'
                        : 'bg-primary-container text-on-primary hover:opacity-95'
                    }`}
                  >
                    {preFlushAuthorized ? 'Pre-Flush Scheduled' : 'Authorize Pre-Flush'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Logistics Marketplace, Leak Isolation & ESG Ledger (4 Cols) */}
          <div className="xl:col-span-4 flex flex-col gap-space-lg">
            {/* Live Tanker Logistics & Smart Marketplace Widget */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col border border-outline-variant/20">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">local_shipping</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Autonomous Procurement</h3>
                </div>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
                  Verified Network
                </span>
              </div>

              {/* Active Dispatch Card */}
              <div className="p-space-md rounded-xl bg-surface-container-low mt-space-xs flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Next Inbound Delivery
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {activeTanker.carrierName}
                    </h4>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Vehicle #{activeTanker.vehicleNumber}
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded bg-surface-container-lowest font-label-md text-label-md font-bold text-primary shadow-sm border border-outline-variant/20">
                    ETA: {activeTanker.etaMinutes} mins
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 font-body-sm text-body-sm">
                  <div className="bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
                    <span className="text-on-surface-variant block font-label-sm text-label-sm">Water Grade</span>
                    <span className="font-semibold text-on-surface">{activeTanker.waterGrade}</span>
                  </div>
                  <div className="bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
                    <span className="text-on-surface-variant block font-label-sm text-label-sm">Pre-negotiated Cost</span>
                    <span className="font-semibold text-primary">₹{activeTanker.costPerLoad} / load</span>
                  </div>
                </div>

                {/* Verification Progress Indicator */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>Verification State</span>
                    <span className="text-secondary font-semibold">Weighbridge &amp; TDS Pre-Cleared</span>
                  </div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: `${activeTanker.routeProgressPercent}%` }}></div>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>Gate 3 Direct Entry</span>
                    <span className="text-primary font-semibold">Saved ₹2,050 vs Spot Market</span>
                  </div>
                </div>

                {/* Action Controls */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={onOpenGpsModal}
                    className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Track Tanker GPS
                  </button>
                  <button
                    onClick={onOpenEmergencyModal}
                    className="py-2 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-on-surface-variant"
                  >
                    Orders
                  </button>
                </div>
              </div>
            </div>

            {/* Acoustic Micro-Leak Isolation Radar */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col border border-outline-variant/20">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-xl ${isZone09Isolated ? 'text-primary' : 'text-error'}`}>
                    sensors
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Acoustic IoT Pipe Radar</h3>
                </div>
                <span
                  className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold ${
                    isZone09Isolated
                      ? 'bg-primary-fixed text-on-primary-fixed'
                      : 'bg-error-container text-on-error-container'
                  }`}
                >
                  {isZone09Isolated ? '0 Active Alerts' : '1 Alert'}
                </span>
              </div>

              {/* Acoustic Sensor List */}
              <div className="flex flex-col gap-space-sm mt-space-xs">
                {/* Sensor AL-09 Flagged */}
                <div
                  className={`p-space-sm rounded-lg border transition-colors flex flex-col gap-1.5 ${
                    isZone09Isolated
                      ? 'bg-surface-container-low border-outline-variant/30'
                      : 'bg-error-container/40 border-error/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isZone09Isolated ? 'bg-primary-container' : 'bg-error animate-ping'
                        }`}
                      ></span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Sensor AL-09</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Cooling Tower Feed</span>
                    </div>
                    <span
                      className={`font-label-sm text-label-sm font-bold ${
                        isZone09Isolated ? 'text-primary' : 'text-error'
                      }`}
                    >
                      {isZone09Isolated ? 'Isolated & Neutral' : '1.4 dB Anomaly'}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {isZone09Isolated
                      ? 'Zone 09 isolated. Secondary loop rerouted with zero pressure drop.'
                      : 'Micro-loss detected (~14 L/hr seepage). Pipe stress nominal.'}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Zone 09 Riser</span>
                    <button
                      onClick={onIsolateZone09}
                      disabled={isZone09Isolated}
                      className={`px-2.5 py-1 rounded font-label-sm text-label-sm transition-opacity ${
                        isZone09Isolated
                          ? 'bg-surface-container text-on-surface-variant cursor-not-allowed'
                          : 'bg-error text-on-error hover:opacity-90 shadow-sm'
                      }`}
                    >
                      {isZone09Isolated ? 'Valve Isolated' : 'Isolate Zone Valve 09'}
                    </button>
                  </div>
                </div>

                {/* Sensor AL-04 Stable */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between border border-outline-variant/15">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-container"></span>
                    <div>
                      <span className="font-label-md text-label-md font-semibold text-on-surface">Sensor AL-04</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">B2 Riser Trunk</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">Stable</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">0.02 dB var</span>
                  </div>
                </div>

                {/* Sensor AL-12 Normal */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between border border-outline-variant/15">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-container"></span>
                    <div>
                      <span className="font-label-md text-label-md font-semibold text-on-surface">Sensor AL-12</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">Irrigation Sub-loop</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">Normal</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Closed Loop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ESG & BRSR Compliance Real-Time Ledger */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col border border-outline-variant/20">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">ESG &amp; BRSR Compliance Ledger</h3>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">SEBI FY24</span>
              </div>

              <div className="flex flex-col gap-space-md mt-space-xs">
                {/* Circularity Metric */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1.5 border border-outline-variant/15">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">
                      Water Circularity Index
                    </span>
                    <span className="font-label-md text-label-md font-bold text-primary">78.4%</span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: '78.4%' }}></div>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>LEED Platinum Target: 80.0%</span>
                    <span className="text-primary font-semibold">Delta: -1.6%</span>
                  </div>
                </div>

                {/* CGWA Groundwater Quota */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1.5 border border-outline-variant/15">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">
                      CGWA Groundwater Quota
                    </span>
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-semibold">
                      Compliant
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">42,000 L</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Remaining for May</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Groundwater recharge replenishment ratio is 142% positive via rainwater shafts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
