import React from 'react';
import { AcousticSensor } from '../../types';

interface LeakIsolationProps {
  sensors: AcousticSensor[];
  isZone09Isolated: boolean;
  onIsolateZone09: () => void;
}

export const LeakIsolation: React.FC<LeakIsolationProps> = ({
  sensors,
  isZone09Isolated,
  onIsolateZone09
}) => {
  return (
    <div className="p-space-margin flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-outline-variant/20 gap-3">
        <div>
          <span className="font-label-sm text-error uppercase font-semibold">
            Zero-Delay Acoustic Radar
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            Predictive Micro-Leak Isolation
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            Continuous delta-pressure and vibration frequency analysis flagging subterranean pipeline breaches before structural seepage occurs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1.5 rounded-lg font-label-sm text-xs font-bold ${
              isZone09Isolated
                ? 'bg-primary-fixed text-on-primary-fixed'
                : 'bg-error-container text-on-error-container animate-pulse'
            }`}
          >
            {isZone09Isolated ? 'All Zones Normal' : '1 Active Anomaly'}
          </span>
        </div>
      </div>

      {/* Flagged Leak Banner */}
      {!isZone09Isolated && (
        <div className="p-space-md rounded-xl bg-error-container/30 border border-error/30 flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
          <div className="flex items-start gap-space-sm">
            <div className="p-2 rounded-lg bg-error text-on-error shrink-0">
              <span className="material-symbols-outlined text-xl">healing</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-xs font-bold text-error uppercase">Active Pipe Breach Flagged</span>
                <span className="px-1.5 py-0.2 rounded bg-surface-container-lowest text-error font-label-sm text-[10px] font-bold">
                  High Priority
                </span>
              </div>
              <h3 className="font-headline-sm text-primary font-bold mt-0.5">
                Cooling Tower Feed Riser (Sensor AL-09)
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-0.5">
                Acoustic spectrum anomaly: <strong>+1.4 dB above background noise</strong>. Estimated subterranean loss rate: <strong>14 L/hr</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={onIsolateZone09}
            className="px-5 py-2.5 rounded-xl bg-error text-on-error font-headline-sm text-xs font-bold hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-1.5 shrink-0"
          >
            <span className="material-symbols-outlined text-sm">lock</span>
            Auto-Isolate Zone Valve 09
          </button>
        </div>
      )}

      {isZone09Isolated && (
        <div className="p-space-md rounded-xl bg-primary-fixed/40 border border-primary-fixed flex items-center justify-between gap-space-md shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary-container text-2xl">verified</span>
            <div>
              <h4 className="font-headline-sm text-primary font-bold">Zone Valve 09 Isolated</h4>
              <p className="font-body-sm text-on-surface-variant text-xs">
                Acoustic breach successfully contained. Rerouting via secondary dual-manifold header. 14 L/hr loss halted.
              </p>
            </div>
          </div>
          <span className="font-label-sm text-xs font-bold text-primary">Efficiency: 100%</span>
        </div>
      )}

      {/* Sensor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {sensors.map((sensor) => {
          const isThisIsolated = sensor.id === 'AL-09' && isZone09Isolated;
          return (
            <div
              key={sensor.id}
              className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isThisIsolated
                          ? 'bg-primary-container'
                          : sensor.status === 'alert'
                          ? 'bg-error animate-ping'
                          : 'bg-primary-container'
                      }`}
                    ></span>
                    <span className="font-headline-sm text-sm text-primary font-bold">{sensor.name}</span>
                  </div>
                  <span
                    className={`font-label-sm text-[10px] font-bold px-2 py-0.5 rounded ${
                      isThisIsolated
                        ? 'bg-primary-fixed text-on-primary-fixed'
                        : sensor.status === 'alert'
                        ? 'bg-error-container text-on-error-container'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {isThisIsolated ? 'Isolated' : sensor.status.toUpperCase()}
                  </span>
                </div>

                <div className="my-3 space-y-1.5 font-body-sm text-xs">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Infrastructure Location:</span>
                    <span className="font-semibold text-on-surface">{sensor.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">SCADA Manifold Zone:</span>
                    <span className="font-semibold text-on-surface">{sensor.zone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Acoustic Delta:</span>
                    <span className="font-label-md font-bold text-primary">
                      {isThisIsolated ? '0.00 dB (Neutral)' : sensor.varianceDb}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Calculated Seepage:</span>
                    <span className="font-label-md font-bold text-error">
                      {isThisIsolated ? '0 L/hr' : `${sensor.leakRateLph || 0} L/hr`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-outline-variant/15 flex items-center justify-between text-[11px] font-label-sm text-on-surface-variant">
                <span>Last Frequency FFT: {sensor.lastChecked}</span>
                <span className="text-secondary font-medium">Sampling: 100 kHz</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
