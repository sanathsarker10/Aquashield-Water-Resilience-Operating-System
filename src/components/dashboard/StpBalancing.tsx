import React, { useState } from 'react';

export const StpBalancing: React.FC = () => {
  const [hvacDivertActive, setHvacDivertActive] = useState<boolean>(true);
  const [landscapeIrrigation, setLandscapeIrrigation] = useState<boolean>(true);

  return (
    <div className="p-space-margin flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-outline-variant/20 gap-3">
        <div>
          <span className="font-label-sm text-secondary uppercase font-semibold">
            Circular Utility Architecture
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            STP Recycled Balancing &amp; HVAC Loop
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            Dual-plumbing algorithms routing treated greywater to HVAC cooling towers, toilet flushing, and campus greenery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-bold border border-primary-fixed">
            Circularity Index: 92.4% Reuse
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Treated Effluent 24h</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">119,490 L</div>
          <span className="font-label-sm text-secondary font-medium">BOD &lt; 4.2 mg/L · Class A</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">HVAC Cooling Diverted</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">50,180 L</div>
          <span className="font-label-sm text-primary font-medium">100% Recycled Water Cooling</span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <span className="font-label-sm text-on-surface-variant uppercase font-semibold">Potable Water Saved</span>
          <div className="font-display-lg text-2xl font-bold text-primary my-1">₹14,330 / day</div>
          <span className="font-label-sm text-primary font-medium">Zero Storm Drain Spills</span>
        </div>
      </div>

      {/* Recycled Balancing Control Pods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {/* Recycled Distribution Breakdown */}
        <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-headline-sm text-primary font-bold mb-2">Automated Effluent Allocation</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">
              Real-time balancing dynamically matches chilled water enthalpy demands with greywater availability.
            </p>

            <div className="space-y-3 font-body-sm">
              <div>
                <div className="flex justify-between text-xs mb-1 font-label-sm">
                  <span>HVAC Cooling Tower Loops</span>
                  <span className="font-bold text-primary">42% (50.2 kL)</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-label-sm">
                  <span>Toilet Flushing Dual-Plumbing</span>
                  <span className="font-bold text-secondary">48% (57.3 kL)</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-label-sm">
                  <span>Groundskeeping &amp; Campus Foliage</span>
                  <span className="font-bold text-on-tertiary-container">10% (12.0 kL)</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary-container h-full rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-label-sm text-on-surface-variant">
            <span>Overflow to storm drain: <strong>0 Liters (100% Retained)</strong></span>
            <span className="text-primary font-bold">ZLD Compliant</span>
          </div>
        </div>

        {/* Actuator & Valve Controls */}
        <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-headline-sm text-primary font-bold mb-2">Smart Valve Actuator Telemetry</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">
              Override automated solenoid loops or lock secondary greywater booster lines.
            </p>

            <div className="space-y-3 font-body-sm">
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-center justify-between">
                <div>
                  <span className="font-headline-sm text-sm text-primary font-bold block">HVAC Cooling Solenoid V-401</span>
                  <span className="text-xs text-on-surface-variant">Automated dynamic diverting</span>
                </div>
                <button
                  onClick={() => setHvacDivertActive(!hvacDivertActive)}
                  className={`px-3 py-1.5 rounded-lg font-label-sm text-xs font-semibold transition-colors ${
                    hvacDivertActive
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {hvacDivertActive ? 'Armed & Open' : 'Closed'}
                </button>
              </div>

              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-center justify-between">
                <div>
                  <span className="font-headline-sm text-sm text-primary font-bold block">Irrigation Sub-loop V-408</span>
                  <span className="text-xs text-on-surface-variant">Micro-drip night sequence</span>
                </div>
                <button
                  onClick={() => setLandscapeIrrigation(!landscapeIrrigation)}
                  className={`px-3 py-1.5 rounded-lg font-label-sm text-xs font-semibold transition-colors ${
                    landscapeIrrigation
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {landscapeIrrigation ? 'Scheduled 22:00' : 'Suspended'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-label-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-sm">verified</span>
            <span>All solenoid valves report sub-second feedback via SCADA Modbus protocol.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
