import React from 'react';
import { ACTIVE_TANKER } from '../../data/mockData';

interface GpsTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GpsTrackingModal: React.FC<GpsTrackingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative">
        <div className="flex items-start justify-between pb-4 border-b border-outline-variant/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                Live GPS Telemetry Feed
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mt-1">
              {ACTIVE_TANKER.carrierName} ({ACTIVE_TANKER.vehicleNumber})
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Inbound Route: Outer Ring Rd (Bellandur → Kadubeesanahalli Gate 3)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Simulated Map Display */}
        <div className="relative my-4 w-full h-56 rounded-xl bg-surface-container-high overflow-hidden border border-outline-variant/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0f241d]/10 bg-[radial-gradient(#1d59c1_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Simulated Road Path */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
            <path
              d="M 20 180 Q 120 160 180 110 T 320 60 L 380 40"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 20 180 Q 120 160 180 110 T 320 60 L 380 40"
              fill="none"
              stroke="#6292fd"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="water-flow-active"
            />
            
            {/* Campus Target Marker */}
            <circle cx="380" cy="40" r="10" fill="#002417" />
            <circle cx="380" cy="40" r="16" fill="#0a3b2a" opacity="0.3" className="animate-ping" />
            <text x="310" y="24" fill="#002417" fontSize="10" fontWeight="bold" fontFamily="Space Grotesk">
              Gate 3 (Prestige Vista)
            </text>

            {/* Live Tanker Marker */}
            <circle cx="280" cy="75" r="9" fill="#1d59c1" />
            <circle cx="280" cy="75" r="14" fill="#6292fd" opacity="0.4" className="animate-ping" />
            <text x="210" y="98" fill="#1d59c1" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">
              KA-04-E-8821 (24 km/h)
            </text>
          </svg>

          <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-3 py-1.5 rounded-lg border border-outline-variant/30 text-xs font-label-sm shadow-sm">
            <span className="text-on-surface-variant">Live Distance: </span>
            <strong className="text-primary font-bold">2.8 km away</strong> · <span className="text-secondary font-semibold">ETA ~42 mins</span>
          </div>
        </div>

        {/* Telemetry Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="p-3 bg-surface-container-low rounded-xl">
            <span className="text-on-surface-variant font-label-sm block">Payload Volume</span>
            <span className="font-label-md font-bold text-primary">12,014 L</span>
            <span className="text-[10px] text-primary block mt-0.5">±0.2% Ultrasonic Sensor</span>
          </div>
          <div className="p-3 bg-surface-container-low rounded-xl">
            <span className="text-on-surface-variant font-label-sm block">Water Purity TDS</span>
            <span className="font-label-md font-bold text-primary">180 ppm</span>
            <span className="text-[10px] text-secondary font-semibold block mt-0.5">Potable Grade A</span>
          </div>
          <div className="p-3 bg-surface-container-low rounded-xl">
            <span className="text-on-surface-variant font-label-sm block">Driver &amp; Dispatch</span>
            <span className="font-label-md font-bold text-primary">{ACTIVE_TANKER.driverName}</span>
            <span className="text-[10px] text-on-surface-variant block mt-0.5">{ACTIVE_TANKER.driverPhone}</span>
          </div>
          <div className="p-3 bg-surface-container-low rounded-xl">
            <span className="text-on-surface-variant font-label-sm block">Procurement Cost</span>
            <span className="font-label-md font-bold text-secondary">₹1,150</span>
            <span className="text-[10px] text-primary font-bold block mt-0.5">Saved ₹2,050 vs Spot</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-label-sm">
            <span className="material-symbols-outlined text-secondary text-base">verified</span>
            <span>Digital proof-of-delivery enabled with automatic flowmeter gate log.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-sm text-xs font-semibold hover:bg-primary transition-colors"
          >
            Close Feed
          </button>
        </div>
      </div>
    </div>
  );
};
