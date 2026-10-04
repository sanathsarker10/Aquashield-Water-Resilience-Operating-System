import React, { useState } from 'react';
import { SchematicNodeData } from '../../types';

interface HydraulicSchematicProps {
  isZone09Isolated: boolean;
  manualBypassActive: boolean;
}

export const HydraulicSchematic: React.FC<HydraulicSchematicProps> = ({
  isZone09Isolated,
  manualBypassActive
}) => {
  const [selectedNode, setSelectedNode] = useState<SchematicNodeData | null>(null);

  const nodes: Record<string, SchematicNodeData> = {
    cauvery: {
      id: 'cauvery',
      title: 'Cauvery Municipal Line',
      subtitle: 'Primary Potable City Inflow',
      type: 'source',
      status: 'normal',
      details: {
        flowRate: '108.4 m³/h',
        pressure: '2.8 bar at meter gate',
        tds: '180 ppm',
        ph: '7.3',
        chlorine: '0.8 mg/L',
        turbidity: '0.2 NTU'
      }
    },
    borewell: {
      id: 'borewell',
      title: 'Deep Borewells #1 & #2',
      subtitle: 'Licensed Groundwater Extraction',
      type: 'source',
      status: 'normal',
      details: {
        flowRate: '24.2 m³/h',
        pressure: '4.1 bar at pump head',
        tds: '620 ppm',
        ph: '7.8',
        pumpsStatus: 'Submersible 15HP (Auto-Staged)'
      }
    },
    stp: {
      id: 'stp',
      title: 'MBBR Bioreactor STP',
      subtitle: 'On-site Sewage Treatment Plant',
      type: 'treatment',
      status: 'normal',
      details: {
        flowRate: '74.2 m³/h treated',
        turbidity: '1.1 NTU',
        tds: '420 ppm',
        ph: '7.1',
        pumpsStatus: 'Air blowers online · Sludge recycling 98.2%'
      }
    },
    recharge: {
      id: 'recharge',
      title: 'Rainwater Catchment Sumps',
      subtitle: 'Storm Surge & Aquifer Recharge',
      type: 'storage',
      status: 'normal',
      details: {
        capacity: '150,000 Liters Buffer',
        levelPercent: 48,
        turbidity: '0.6 NTU',
        pumpsStatus: 'Float switch armed for incoming 38mm storm'
      }
    },
    clarifier: {
      id: 'clarifier',
      title: 'Multi-Media Pressure Filter',
      subtitle: 'Sand, Activated Carbon & Micron Guard',
      type: 'treatment',
      status: 'normal',
      details: {
        flowRate: '132.6 m³/h throughput',
        turbidity: '0.4 NTU',
        pressure: 'Differential ΔP: 0.2 bar (Clear)',
        pumpsStatus: 'Auto-Backwash scheduled 03:00 AM'
      }
    },
    centralSump: {
      id: 'centralSump',
      title: 'Central Underground Sump S-08',
      subtitle: 'Main Potable Campus Reservoir',
      type: 'storage',
      status: 'normal',
      details: {
        capacity: '400,000 Liters Max',
        levelPercent: 84,
        tds: '380 ppm',
        ph: '7.2',
        temperature: '28°C',
        chlorine: '0.6 mg/L'
      }
    },
    vfdPumps: {
      id: 'vfdPumps',
      title: 'VFD Variable Booster Pumps',
      subtitle: 'High-Pressure Header Delivery',
      type: 'booster',
      status: 'normal',
      details: {
        pumpsStatus: '3 Active (Pump 1, 2, 3) / 1 Hot Standby',
        flowRate: '42.0 m³/h',
        pressure: '3.6 bar steady delivery',
        turbidity: '0.3 NTU'
      }
    },
    bldgA: {
      id: 'bldgA',
      title: 'Building A Overhead Tank',
      subtitle: 'Wings A1 - A4 Domestic Feed',
      type: 'destination',
      status: 'normal',
      details: {
        capacity: '120,000 L',
        levelPercent: 92,
        pressure: '2.9 bar residual',
        pumpsStatus: 'Automated float cutoff OK'
      }
    },
    bldgB: {
      id: 'bldgB',
      title: 'Building B Overhead Tank',
      subtitle: 'Wings B1 - B3 Executive Offices',
      type: 'destination',
      status: 'normal',
      details: {
        capacity: '100,000 L',
        levelPercent: 88,
        pressure: '3.1 bar residual',
        pumpsStatus: 'Automated float cutoff OK'
      }
    },
    bldgC: {
      id: 'bldgC',
      title: 'Building C Overhead Tank & Riser',
      subtitle: 'Tower C High-Density Complex',
      type: 'destination',
      status: isZone09Isolated ? 'normal' : 'alert',
      details: {
        capacity: '110,000 L',
        levelPercent: isZone09Isolated ? 85 : 79,
        pressure: isZone09Isolated ? '3.4 bar (Stable)' : '2.4 bar (Pressure Drop Detected)',
        pumpsStatus: isZone09Isolated
          ? 'Isolated via Valve 09 — Secondary Loop Active'
          : 'Throttled due to 14 L/hr seepage detected at Sensor AL-09'
      }
    },
    hvac: {
      id: 'hvac',
      title: 'HVAC Cooling Tower Circuit',
      subtitle: '100% Recycled Water Closed Loop',
      type: 'destination',
      status: 'normal',
      details: {
        flowRate: '56.0 m³/h continuous circulation',
        temperature: 'Supply 31°C · Return 36°C',
        tds: '410 ppm (Scale Inhibited)',
        pumpsStatus: 'Dual redundant centrifugal pumps online'
      }
    }
  };

  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col border border-outline-variant/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">schema</span>
            <h2 className="font-headline-md text-headline-md text-primary">
              Campus Hydraulic Digital Twin Schematic
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Physical SCADA telemetry mapping inflow purification, storage sumps, VFD boosters &amp; distribution risers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-space-xs self-start sm:self-auto">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface font-medium border border-outline-variant/30">
            <span className="h-2 w-2 rounded-full bg-primary-container"></span> Potable Supply
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-secondary font-medium border border-outline-variant/30">
            <span className="h-2 w-2 rounded-full bg-secondary-container"></span> Recycled Line
          </span>
          {manualBypassActive && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold animate-pulse">
              MANUAL BYPASS ACTIVE
            </span>
          )}
        </div>
      </div>

      {/* Interactive Blueprint Canvas */}
      <div className="relative w-full rounded-xl bg-surface-container-low/60 p-space-md overflow-x-auto border border-outline-variant/20 select-none">
        <div className="text-[11px] font-label-sm text-on-surface-variant pb-2 flex items-center justify-between">
          <span>Click any infrastructure component to inspect hydrostatic telemetry &amp; sensor parameters.</span>
          <span className="text-secondary font-medium">Interactive SCADA Grid</span>
        </div>

        <svg
          className="w-full min-w-[760px] h-[340px]"
          fill="none"
          viewBox="0 0 880 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Water Flow Lines */}
          <path
            d="M 120 50 L 220 50 L 220 130"
            stroke="#002417"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="water-flow-active"
          />
          <path
            d="M 120 100 L 220 100 L 220 130"
            stroke="#002417"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="water-flow-active"
          />
          <path
            d="M 120 190 L 210 190 L 210 240 L 460 240 L 460 215"
            stroke="#1d59c1"
            strokeWidth="3"
            strokeLinecap="round"
            className="water-flow-recycled"
          />
          <path
            d="M 120 280 L 320 280 L 320 200"
            stroke="#002417"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 330 145 L 390 145"
            stroke="#002417"
            strokeWidth="4"
            strokeLinecap="round"
            className="water-flow-active"
          />
          <path
            d="M 530 145 L 590 145"
            stroke="#002417"
            strokeWidth="4"
            strokeLinecap="round"
            className="water-flow-active"
          />
          <path
            d="M 680 145 L 730 145 L 730 65 L 790 65"
            stroke="#002417"
            strokeWidth="3"
            strokeLinecap="round"
            className="water-flow-active"
          />
          <path
            d="M 730 145 L 790 145"
            stroke="#002417"
            strokeWidth="3"
            strokeLinecap="round"
            className="water-flow-active"
          />
          <path
            d="M 730 145 L 730 225 L 790 225"
            stroke={isZone09Isolated ? '#002417' : '#ba1a1a'}
            strokeWidth="3"
            strokeLinecap="round"
            className={isZone09Isolated ? 'water-flow-active' : 'water-flow-leak'}
          />
          <path
            d="M 530 240 L 760 240 L 760 285 L 790 285"
            stroke="#1d59c1"
            strokeWidth="3"
            strokeLinecap="round"
            className="water-flow-recycled"
          />

          {/* 1. Inflow Sources Nodes */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 30)"
            onClick={() => setSelectedNode(nodes.cauvery)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="110" stroke="#c0c8c2" strokeWidth="1" />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" x="8" y="18">Cauvery Grid Line</text>
            <text fill="#002417" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="8" y="32">108.4 m³/h • ACT</text>
          </g>

          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 80)"
            onClick={() => setSelectedNode(nodes.borewell)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="110" stroke="#c0c8c2" strokeWidth="1" />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" x="8" y="18">Borewells 1 &amp; 2</text>
            <text fill="#414944" fontFamily="JetBrains Mono" fontSize="9" x="8" y="32">Yield: 24.2 m³/h</text>
          </g>

          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 170)"
            onClick={() => setSelectedNode(nodes.stp)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="110" stroke="#b0c6ff" strokeWidth="1" />
            <text fill="#1d59c1" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" x="8" y="18">STP Bioreactor</text>
            <text fill="#00a7e6" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="8" y="32">BOD &lt; 5 • 98.2% Purity</text>
          </g>

          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 260)"
            onClick={() => setSelectedNode(nodes.recharge)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="110" stroke="#c0c8c2" strokeWidth="1" />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" x="8" y="18">Recharge Sumps</text>
            <text fill="#414944" fontFamily="JetBrains Mono" fontSize="9" x="8" y="32">Cap: 150k L Buffer</text>
          </g>

          {/* 2. Clarifier Filter */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(220, 115)"
            onClick={() => setSelectedNode(nodes.clarifier)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 4px rgba(0,0,0,0.08))" height="60" rx="8" width="110" stroke="#0a3b2a" strokeWidth="1.5" />
            <text fill="#002417" fontFamily="Space Grotesk" fontSize="11" fontWeight="700" x="10" y="22">Multi-Media Clarifier</text>
            <text fill="#414944" fontFamily="JetBrains Mono" fontSize="9" x="10" y="38">Turbidity: 0.4 NTU</text>
            <text fill="#002417" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="10" y="52">Auto-Backwash: OK</text>
          </g>

          {/* 3. Central Sump S-08 Core */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(390, 95)"
            onClick={() => setSelectedNode(nodes.centralSump)}
          >
            <rect fill="#002417" filter="drop-shadow(0px 2px 8px rgba(0,0,0,0.15))" height="98" rx="8" width="140" stroke="#a1d1b9" strokeWidth="1.5" />
            <text fill="#a1d1b9" fontFamily="Space Grotesk" fontSize="12" fontWeight="700" x="12" y="24">Central Sump S-08</text>
            <text fill="#ffffff" fontFamily="Space Grotesk" fontSize="18" fontWeight="700" x="12" y="44">84% Stored</text>
            <text fill="#a1d1b9" fontFamily="JetBrains Mono" fontSize="10" x="12" y="58">400,000 Liters Max</text>
            <line stroke="#224f3d" strokeWidth="1" x1="12" x2="128" y1="66" y2="66" />
            <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="9" x="12" y="80">TDS: 380 ppm</text>
            <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="9" x="78" y="80">pH: 7.2</text>
            <text fill="#83cfff" fontFamily="JetBrains Mono" fontSize="8" x="12" y="92">Temp: 28°C • Chl: 0.6mg/L</text>
          </g>

          {/* 4. VFD Booster Station */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(590, 115)"
            onClick={() => setSelectedNode(nodes.vfdPumps)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 4px rgba(0,0,0,0.08))" height="60" rx="8" width="90" stroke="#c0c8c2" strokeWidth="1" />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="11" fontWeight="700" x="10" y="20">VFD Pumps</text>
            <text fill="#002417" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="10" y="36">3 Run / 1 Stby</text>
            <text fill="#1d59c1" fontFamily="JetBrains Mono" fontSize="9" x="10" y="50">3.6 bar • 42 m³/h</text>
          </g>

          {/* 5. Destination Risers */}
          {/* Building A */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(790, 45)"
            onClick={() => setSelectedNode(nodes.bldgA)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="80" stroke="#c0c8c2" strokeWidth="1" />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="10" fontWeight="600" x="8" y="16">Building A Tank</text>
            <text fill="#002417" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600" x="8" y="30">92% (Normal)</text>
          </g>

          {/* Building B */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(790, 125)"
            onClick={() => setSelectedNode(nodes.bldgB)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="80" stroke="#c0c8c2" strokeWidth="1" />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="10" fontWeight="600" x="8" y="16">Building B Tank</text>
            <text fill="#002417" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600" x="8" y="30">88% (Normal)</text>
          </g>

          {/* Building C (with leak indicator if not isolated) */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(790, 205)"
            onClick={() => setSelectedNode(nodes.bldgC)}
          >
            <rect
              fill="#ffffff"
              filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))"
              height="40"
              rx="6"
              width="80"
              stroke={isZone09Isolated ? '#002417' : '#ba1a1a'}
              strokeWidth={isZone09Isolated ? '1' : '2'}
            />
            <text fill="#191c1e" fontFamily="Space Grotesk" fontSize="10" fontWeight="600" x="8" y="16">Building C Tank</text>
            <text
              fill={isZone09Isolated ? '#002417' : '#ba1a1a'}
              fontFamily="JetBrains Mono"
              fontSize="10"
              fontWeight="600"
              x="8"
              y="30"
            >
              {isZone09Isolated ? '85% (Secured)' : '79% (Restricted)'}
            </text>
          </g>

          {/* HVAC Towers */}
          <g
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(790, 265)"
            onClick={() => setSelectedNode(nodes.hvac)}
          >
            <rect fill="#ffffff" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.06))" height="40" rx="6" width="80" stroke="#b0c6ff" strokeWidth="1" />
            <text fill="#1d59c1" fontFamily="Space Grotesk" fontSize="10" fontWeight="600" x="8" y="16">HVAC Towers</text>
            <text fill="#1d59c1" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="8" y="30">100% Recycled</text>
          </g>
        </svg>
      </div>

      {/* Node Inspector Modal / Drawer */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-start justify-between pb-3 border-b border-outline-variant/20">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  SCADA Node Inspector · {selectedNode.type.toUpperCase()}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-0.5">
                  {selectedNode.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedNode.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                title="Close inspector"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="py-4 space-y-3 font-body-sm">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedNode.details.flowRate && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg">
                    <span className="text-on-surface-variant block font-label-sm">Active Inflow Rate</span>
                    <span className="font-label-md font-bold text-primary">{selectedNode.details.flowRate}</span>
                  </div>
                )}
                {selectedNode.details.pressure && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg">
                    <span className="text-on-surface-variant block font-label-sm">Delivery Pressure</span>
                    <span className="font-label-md font-bold text-secondary">{selectedNode.details.pressure}</span>
                  </div>
                )}
                {selectedNode.details.capacity && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg">
                    <span className="text-on-surface-variant block font-label-sm">Total Capacity</span>
                    <span className="font-label-md font-bold text-primary">{selectedNode.details.capacity}</span>
                  </div>
                )}
                {selectedNode.details.levelPercent !== undefined && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg">
                    <span className="text-on-surface-variant block font-label-sm">Live Tank Level</span>
                    <span className="font-label-md font-bold text-primary">{selectedNode.details.levelPercent}%</span>
                  </div>
                )}
                {selectedNode.details.tds && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg">
                    <span className="text-on-surface-variant block font-label-sm">Total Dissolved Solids</span>
                    <span className="font-label-md font-bold text-primary">{selectedNode.details.tds}</span>
                  </div>
                )}
                {selectedNode.details.ph && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg">
                    <span className="text-on-surface-variant block font-label-sm">Water Acidity / pH</span>
                    <span className="font-label-md font-bold text-primary">{selectedNode.details.ph}</span>
                  </div>
                )}
              </div>

              {selectedNode.details.pumpsStatus && (
                <div className="bg-surface-container-low p-3 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">info</span>
                  <span className="font-label-sm text-on-surface">
                    {selectedNode.details.pumpsStatus}
                  </span>
                </div>
              )}

              {selectedNode.id === 'bldgC' && !isZone09Isolated && (
                <div className="p-3 rounded-lg bg-error-container/40 border border-error/20 flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-error font-bold block">Acoustic Anomaly Flagged</span>
                    <span className="text-xs text-on-surface-variant">Zone 09 Riser has 14 L/hr leakage.</span>
                  </div>
                  <span className="font-label-sm text-xs px-2 py-1 bg-error text-on-error rounded font-semibold">
                    Alert
                  </span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedNode(null)}
                className="px-4 py-2 rounded-lg bg-surface-container text-primary font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Micro-Telemetry Strip below Schematic */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-md pt-space-sm">
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/15">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Sensor S-08-01 (Sump)</span>
          <span className="font-label-md text-label-md font-semibold text-primary">TDS 380 ppm • pH 7.2</span>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/15">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Booster Node 02</span>
          <span className="font-label-md text-label-md font-semibold text-primary">Flow Rate: 42 m³/hr</span>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/15">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Delivery Pressure</span>
          <span className="font-label-md text-label-md font-semibold text-primary">3.6 bar (Nominal)</span>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/15">
          <span className="font-label-sm text-label-sm text-on-surface-variant">STP Bio-Index</span>
          <span className="font-label-md text-label-md font-semibold text-secondary">Zero Pathogen / Class A</span>
        </div>
      </div>
    </div>
  );
};
