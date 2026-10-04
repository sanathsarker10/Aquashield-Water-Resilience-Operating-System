import React, { useState } from 'react';
import { Campus } from '../../types';

interface CampusSettingsProps {
  campus: Campus;
  onUpdateCampus: (updated: Partial<Campus>) => void;
}

export const CampusSettings: React.FC<CampusSettingsProps> = ({ campus, onUpdateCampus }) => {
  const [dryAlertThreshold, setDryAlertThreshold] = useState<number>(25);
  const [tankerAutoBuffer, setTankerAutoBuffer] = useState<number>(3.5);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="p-space-margin flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-outline-variant/20 gap-3">
        <div>
          <span className="font-label-sm text-secondary uppercase font-semibold">
            SCADA Edge &amp; Node Gateway Architecture
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            Campus Settings &amp; Telemetry Gateways
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            Manage SCADA Modbus hardware interfaces, automated trigger rules, and escalation contact trees.
          </p>
        </div>

        {savedSuccess && (
          <span className="px-3 py-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-bold animate-fadeIn">
            ✓ Settings Saved Successfully
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {/* Hardware & Node Gateway */}
        <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-headline-sm text-primary font-bold mb-2">SCADA Node Gateway</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">
              Hardware communication broker polling ultrasonic sensors, electromagnetic flowmeters, and acoustic arrays.
            </p>

            <div className="space-y-3 font-body-sm">
              <div className="p-3 bg-surface-container-low rounded-xl">
                <span className="text-on-surface-variant font-label-sm block">Active Hardware Gateway</span>
                <span className="font-label-md font-bold text-primary">{campus.scadaNode}</span>
                <span className="text-[11px] text-primary block mt-0.5">Firmware v4.2.1 · Edge Neural Engine Armed</span>
              </div>

              <div className="p-3 bg-surface-container-low rounded-xl">
                <span className="text-on-surface-variant font-label-sm block">Current Latency</span>
                <span className="font-label-md font-bold text-secondary">42ms · Zero Packet Loss</span>
                <span className="text-[11px] text-on-surface-variant block mt-0.5">Dual 4G LTE Failover + Fiber SCADA</span>
              </div>

              <div className="p-3 bg-surface-container-low rounded-xl">
                <span className="text-on-surface-variant font-label-sm block">Active Edge Nodes</span>
                <span className="font-label-md font-bold text-primary">128 of 128 Online</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs font-label-sm text-on-surface-variant">
            <span>Protocol: Modbus RTU / MQTT Broker</span>
            <span className="text-primary font-semibold">TLS 1.3 Encrypted</span>
          </div>
        </div>

        {/* Autonomous Threshold Tuning */}
        <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-headline-sm text-primary font-bold mb-2">Autonomous Resilience Thresholds</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">
              Parameters governing automated tanker dispatch orders and dry-tank alarms.
            </p>

            <div className="space-y-4 font-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="font-semibold text-on-surface">Critical Dry-Tank Alert Threshold</span>
                  <span className="font-label-md font-bold text-error">{dryAlertThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  value={dryAlertThreshold}
                  onChange={(e) => setDryAlertThreshold(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-error"
                />
                <span className="text-[11px] text-on-surface-variant block mt-1">
                  Triggers high-priority SMS &amp; WhatsApp alert to facility engineers when sump drops below this level.
                </span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="font-semibold text-on-surface">Tanker Auto-Dispatch Horizon</span>
                  <span className="font-label-md font-bold text-secondary">{tankerAutoBuffer} Days</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="7"
                  step="0.5"
                  value={tankerAutoBuffer}
                  onChange={(e) => setTankerAutoBuffer(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <span className="text-[11px] text-on-surface-variant block mt-1">
                  Automatically schedules pre-negotiated tanker batches if runout buffer drops below this horizon.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-semibold hover:bg-primary transition-colors shadow-sm"
            >
              Update SCADA Thresholds
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
