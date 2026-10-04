import React from 'react';
import { HOTLINKED_ASSETS } from '../../data/mockData';
import { AquaShieldLogo } from '../common/AquaShieldLogo';

interface LandingPageProps {
  onLaunchDashboard: () => void;
  onOpenScheduleDemo: () => void;
  onOpenRoiCalculator: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onLaunchDashboard,
  onOpenScheduleDemo,
  onOpenRoiCalculator
}) => {
  return (
    <div className="w-full min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20">
        <div className="h-20 w-full px-space-md lg:px-margin flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-space-lg flex-shrink-0">
            <a className="flex items-center gap-space-sm" href="#">
              <AquaShieldLogo size="md" showBadge={true} />
            </a>
            <div className="hidden xl:block h-5 w-[1px] bg-outline-variant/40"></div>
            <span className="hidden xl:inline-flex items-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Industrial Water Telemetry
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-space-md">
            <a className="px-space-sm py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#features">
              Features
            </a>
            <a className="px-space-sm py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#how-it-works">
              How It Works
            </a>
            <a className="px-space-sm py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#solutions">
              Solutions
            </a>
            <button
              onClick={onOpenRoiCalculator}
              className="px-space-sm py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              ROI Calculator
            </button>
            <a className="px-space-sm py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="px-space-sm py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#market">
              Market
            </a>
          </nav>

          <div className="flex items-center gap-space-md flex-shrink-0">
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low border border-outline-variant/20">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Live Status: <span className="font-label-sm text-label-sm text-on-surface font-semibold">99.98% Active</span>
              </span>
            </div>

            {/* Launch SCADA Cockpit CTA */}
            <button
              onClick={onLaunchDashboard}
              className="inline-flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-secondary text-on-secondary font-headline-sm text-xs font-bold hover:bg-secondary/90 transition-all shadow-sm"
              title="Launch Enterprise Operations Cockpit"
            >
              <span className="material-symbols-outlined text-base">hub</span>
              <span className="hidden sm:inline">Live Cockpit</span>
            </button>

            <button
              onClick={onOpenScheduleDemo}
              className="hidden md:inline-flex items-center justify-center px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-label-lg hover:bg-primary transition-all shadow-[0_0_12px_rgba(0,168,232,0.15)] text-xs font-semibold"
            >
              Schedule Demo
            </button>

            <div className="flex items-center gap-space-xs">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20 cursor-pointer"
                src={HOTLINKED_ASSETS.avatarGeneral}
                onClick={onLaunchDashboard}
                title="Open Enterprise Console"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY */}
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO */}
          <section className="relative w-full px-space-md lg:px-margin py-space-xl overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface">
            {/* Ambient Glass Blobs */}
            <div className="absolute -top-32 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-space-md border border-outline-variant/30">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  AI-Driven Digital Twin • Multi-Source Telemetry • ESG &amp; Compliance Ready
                </span>
              </div>

              {/* Hero Typography */}
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-display-lg text-primary max-w-4xl tracking-tight mb-space-md font-bold text-balance">
                AquaShield — India’s Water Resilience Operating System
              </h1>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl mb-space-lg">
                Predict. Optimize. Secure. One platform to unify all water sources, eliminate emergency dry-tank crises, and cut procurement costs by ~25%.
              </p>

              {/* Action Group */}
              <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-lg">
                <button
                  onClick={onOpenScheduleDemo}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-primary-container text-on-primary font-headline-sm text-sm sm:text-base hover:shadow-[0_0_24px_rgba(0,168,232,0.3)] transition-all font-semibold"
                >
                  <span>Schedule a Demo</span>
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                </button>

                <button
                  onClick={onOpenRoiCalculator}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-surface-container-lowest text-secondary font-headline-sm text-sm sm:text-base shadow-sm hover:bg-surface-container transition-all border border-outline-variant/30 font-semibold"
                >
                  <span>Calculate Your Water Savings</span>
                  <span className="material-symbols-outlined text-base">calculate</span>
                </button>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant mb-space-xl flex-wrap justify-center">
                <span className="material-symbols-outlined text-secondary font-semibold">verified</span>
                <span>
                  Protecting <strong>140M+ Liters</strong> across <strong>45+ Commercial Tech Parks &amp; High-Rise RWAs</strong> in India
                </span>
              </div>

              {/* HERO INTERACTIVE UI WIDGET (Digital Twin Pod) */}
              <div className="w-full max-w-5xl rounded-xl bg-surface-container-lowest/90 backdrop-blur-xl p-space-md lg:p-space-lg shadow-xl text-left border border-outline-variant/20">
                {/* Digital Twin Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-space-md pb-space-md border-b border-outline-variant/20">
                  <div className="flex items-center gap-space-sm">
                    <div className="p-space-xs bg-primary-container text-on-primary rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-headline-sm">water_ph</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold">
                          Prestige Tech Vista — Campus Digital Twin
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold">
                          LIVE DUAL-SYNC
                        </span>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Telemetry Station ID: BLR-ORR-NODE-8942 • Bengaluru, KA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-md">
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Current Resilience Buffer
                      </span>
                      <span className="font-headline-md text-headline-md text-secondary font-semibold">
                        6.4 Days Remaining
                      </span>
                    </div>
                    <div className="h-10 w-2.5 rounded-full bg-secondary-fixed-dim relative overflow-hidden">
                      <div className="absolute bottom-0 w-full bg-secondary h-4/5 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Metric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md my-space-md">
                  {/* Sump Metric */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-md text-label-md text-on-surface-variant">Underground Sumps (400k L)</span>
                      <span className="font-label-sm text-label-sm font-semibold text-primary">84%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden mb-space-xs">
                      <div className="bg-primary-container h-full rounded-full" style={{ width: '84%' }}></div>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>Sensor: S-UG-01 (Ultrasonic)</span>
                      <span className="text-primary font-medium">Stable (+2.1 kL/h)</span>
                    </div>
                  </div>

                  {/* Overhead Tanks Metric */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-md text-label-md text-on-surface-variant">Overhead Domestic (150k L)</span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">92%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden mb-space-xs">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>Pumps: Automated Staging</span>
                      <span className="text-secondary font-medium">Head Press. 3.4 bar</span>
                    </div>
                  </div>

                  {/* STP Buffer Metric */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-md text-label-md text-on-surface-variant">STP Recycled Buffer (120k L)</span>
                      <span className="font-label-sm text-label-sm font-semibold text-on-tertiary-container">68%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden mb-space-xs">
                      <div className="bg-secondary-container h-full rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>Treated BOD: &lt; 4.2 mg/L</span>
                      <span className="text-primary font-medium">HVAC Route Active</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Inflow Distribution */}
                <div className="p-space-md rounded-xl bg-surface-container-high/50 flex flex-col gap-space-xs mb-space-md border border-outline-variant/15">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-on-surface font-semibold">Active Real-Time Inflow Split (Past 24 Hours)</span>
                    <span className="text-on-surface-variant font-label-sm">Total Inflow: 284,500 L</span>
                  </div>
                  {/* Segmented multi-color bar */}
                  <div className="w-full h-3 rounded-full flex overflow-hidden">
                    <div className="bg-primary-container h-full" style={{ width: '38%' }} title="BWSSB / Cauvery (38%)"></div>
                    <div className="bg-secondary h-full" style={{ width: '42%' }} title="STP Treated Recycled (42%)"></div>
                    <div className="bg-secondary-container h-full" style={{ width: '12%' }} title="Borewell (12%)"></div>
                    <div className="bg-error h-full" style={{ width: '8%' }} title="Commercial Tankers (8%)"></div>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant pt-1">
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span> Cauvery / Municipal (38%)</div>
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> STP Recycled (42%)</div>
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span> Licensed Borewell (12%)</div>
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-error"></span> Spot Tanker (8% - Suppressed)</div>
                  </div>
                </div>

                {/* Predictive Horizon Alert Banner */}
                <div className="p-space-sm rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary mt-0.5">cloud_sync</span>
                    <span className="font-body-sm text-body-sm font-medium">
                      <strong>Autonomous Forecast Alert:</strong> Predicted rain spike (38mm) in 18 hrs. STP flushing buffer dynamically redirected to storm capture reserve. Commercial tanker order auto-deferred, saving ₹14,200.
                    </span>
                  </div>
                  <button
                    onClick={onLaunchDashboard}
                    className="font-label-sm text-label-sm px-2.5 py-1 bg-surface-container-lowest text-secondary rounded font-bold uppercase tracking-wider shrink-0 hover:bg-surface-container transition-colors shadow-sm"
                  >
                    View In SCADA →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-surface" id="how-it-works">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div className="max-w-2xl">
                  <span className="font-label-md text-label-md text-error uppercase tracking-wider font-semibold">
                    The Core Breakdown
                  </span>
                  <h2 className="font-headline-xl text-2xl sm:text-headline-xl text-primary mt-space-xs font-bold">
                    Urban Water Management is Fragmented, Reactive, and Costly
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Indian urban commercial complexes, IT parks, and residential societies lose millions of rupees each dry season to blind spots, manual meter lag, and emergency spot pricing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Problem Card 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-headline-md">sync_problem</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Failure Point 01
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1 mb-space-sm font-bold">
                      Disconnected Operational Silos
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Municipal flow lines, deep borewells, wastewater STPs, and paper-based tanker registers operate in total isolation. Facility managers navigate fragmented data, leaving executive boards blind to true consumption velocity.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 flex items-center gap-space-xs text-error font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-body-lg">priority_high</span>
                    <span>Over 35% data loss between shift logs</span>
                  </div>
                </div>

                {/* Problem Card 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-headline-md">crisis_alert</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Failure Point 02
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1 mb-space-sm font-bold">
                      Dry-Tank Crises &amp; 3x Spot Gouging
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Shortages are discovered only when overhead tanks run completely dry. This sparks panicked resident escalations and forced calls to unregulated private water syndicates charging up to ₹3,500 per single 12,000L truck.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 flex items-center gap-space-xs text-error font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-body-lg">trending_up</span>
                    <span>Up to ₹4.5 Lakhs wasted in panic procurement</span>
                  </div>
                </div>

                {/* Problem Card 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-headline-md">plumbing</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Failure Point 03
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1 mb-space-sm font-bold">
                      Unchecked Micro-Leaks &amp; Downtime
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Subterranean pipeline leaks go unnoticed for weeks until basement foundation dampness appears. Erratic water pressure triggers thermal trips in HVAC chillers, halting IT cooling operations and sterilizers in hospitals.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 flex items-center gap-space-xs text-error font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-body-lg">warning</span>
                    <span>Average 18,000 Liters leaked daily per site</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: THE SOLUTION & AUTONOMOUS AI DIGITAL TWIN */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
                  The Autonomous Paradigm
                </span>
                <h2 className="font-headline-xl text-2xl sm:text-headline-xl text-primary mt-space-xs mb-space-sm font-bold">
                  Autonomous AI Digital Twin for Complete Water Security
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  AquaShield integrates municipal supply, deep borewells, rainwater catchment, STP recycled water, and external tankers into a synchronized, self-orchestrating operational architecture.
                </p>
              </div>

              {/* 4-Step Interactive Process Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Step 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative group hover:-translate-y-1 transition-transform border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-10 h-10 rounded-lg bg-primary-container text-on-primary font-headline-sm flex items-center justify-center font-bold">
                        01
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">
                        EDGE SENSORS
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Telemetry Ingestion
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Non-invasive ultrasonic depth arrays, electromagnetic flowmeters, and digital TDS meters continuously stream hydrostatic parameters across all inlets and holding sumps.
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low font-label-sm text-label-sm text-primary flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">sensors</span>
                    <span>Frequency: Sub-second telemetry</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative group hover:-translate-y-1 transition-transform border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-10 h-10 rounded-lg bg-secondary text-on-secondary font-headline-sm flex items-center justify-center font-bold">
                        02
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">
                        NEURAL MODEL
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      AI Digital Twin Engine
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Our continuous neural model correlates live occupant counts, day-of-week consumption cadences, and localized micro-radar rain forecasts to compute exact 7-day reserve curves.
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low font-label-sm text-label-sm text-secondary flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">psychology</span>
                    <span>99.4% Forecast Accuracy</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative group hover:-translate-y-1 transition-transform border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-10 h-10 rounded-lg bg-primary text-on-primary font-headline-sm flex items-center justify-center font-bold">
                        03
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">
                        AUTOMATION
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Autonomous Balancing
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Actuators auto-direct zero-cost STP effluent into HVAC cooling loops and grounds keeping. Delta-flow telemetry flags pressurized micro-leaks in under four minutes.
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low font-label-sm text-label-sm text-primary flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary">valve</span>
                    <span>Leak Flagged: &lt; 240 seconds</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative group hover:-translate-y-1 transition-transform border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container font-headline-sm flex items-center justify-center font-bold">
                        04
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">
                        PROCUREMENT
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Smart Logistics Market
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      When supplemental water is genuinely needed, AquaShield auto-dispatches pre-negotiated, verified tankers during non-peak windows, bypassing spot panic premiums entirely.
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-secondary-container flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">local_shipping</span>
                    <span>Digital Proof-of-Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: KEY FEATURES GRID */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-surface" id="features">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
                    Engineered Precision
                  </span>
                  <h2 className="font-headline-xl text-2xl sm:text-headline-xl text-primary mt-space-xs font-bold">
                    Enterprise-Grade Resilience Features
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Built from the ground up for massive multi-acre facilities, rigorous CGWA compliance checks, and real-time operations centers.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-gutter">
                {/* Feature 1: Predictive Timelines */}
                <div className="md:col-span-6 lg:col-span-7 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold mb-space-md">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span>PATENTED HORIZON ENGINE</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-primary mb-space-xs font-bold">
                      Predictive Reserve Timelines
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Know the exact day, hour, and minute your complex would reach critical threshold under current inflow and temperature variables. No more guessing whether you need to book five tankers or none.
                    </p>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/15">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">Estimated Runout Under Zero Rain Scenario:</span>
                      <span className="font-mono text-primary font-semibold">154 hrs (May 14, 04:30 AM)</span>
                    </div>
                    <div className="h-4 bg-surface-container-high rounded-full overflow-hidden flex">
                      <div className="bg-primary-container h-full" style={{ width: '55%' }}></div>
                      <div className="bg-secondary h-full" style={{ width: '25%' }}></div>
                      <div className="bg-error/30 h-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant text-[11px]">
                      <span>Current Supply</span>
                      <span>Predicted STP Regeneration</span>
                      <span className="text-error font-medium">Critical Buffer Margin</span>
                    </div>
                  </div>
                </div>

                {/* Feature 2: Acoustic Leak Isolation */}
                <div className="md:col-span-6 lg:col-span-5 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold mb-space-md">
                      <span className="material-symbols-outlined text-sm">healing</span>
                      <span>ZERO DELAY</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-primary mb-space-xs font-bold">
                      Acoustic Leak Isolation
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Continuous delta-pressure analysis flags concealed pipe breaches and running toilet cisterns before structural concrete dampness or structural foundation scouring can take hold.
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between border border-outline-variant/15">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-3 h-3 rounded-full bg-error animate-ping"></span>
                      <span className="font-label-sm text-label-sm text-primary font-medium">
                        Pipe Section B3-North Flagged
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 bg-error text-on-error rounded font-bold">
                      Auto-Isolated
                    </span>
                  </div>
                </div>

                {/* Feature 3: STP Maximization */}
                <div className="md:col-span-6 lg:col-span-4 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold mb-space-md">
                      <span className="material-symbols-outlined text-sm">eco</span>
                      <span>CIRCULAR UTILITY</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs font-bold">
                      STP Maximization Matrix
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Dual-plumbing algorithms prioritize treated greywater for flushing, landscaping, and HVAC cooling towers, avoiding wasteful overflow runoff into municipal storm drains.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg font-label-sm text-label-sm border border-outline-variant/15">
                    <span className="text-on-surface-variant">Treated Water Reuse:</span>
                    <span className="font-mono text-primary font-bold">92.4% (Industry Avg: 38%)</span>
                  </div>
                </div>

                {/* Feature 4: Verified Tanker Network */}
                <div className="md:col-span-6 lg:col-span-4 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold mb-space-md">
                      <span className="material-symbols-outlined text-sm">local_shipping</span>
                      <span>DIGITAL SUPPLY CHAIN</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs font-bold">
                      Verified Tanker Network
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Automated volume verification at the inlet gate via ultrasonic flow measurement and in-line TDS testing eliminates short-dumping and uncertified industrial sources.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg font-label-sm text-label-sm border border-outline-variant/15">
                    <span className="text-on-surface-variant">Short-Fill Safeguard:</span>
                    <span className="font-mono text-secondary font-bold">100% Volumetric Audit</span>
                  </div>
                </div>

                {/* Feature 5: ESG & BRSR Auditing */}
                <div className="md:col-span-6 lg:col-span-4 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold mb-space-md">
                      <span className="material-symbols-outlined text-sm">analytics</span>
                      <span>COMPLIANCE READY</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs font-bold">
                      ESG &amp; BRSR Auditing
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Generate one-click SEBI BRSR Principle 6, GRI 303-3, and CGWA compliant groundwater abstraction balance sheets with cryptographic timestamp validation.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg font-label-sm text-label-sm border border-outline-variant/15">
                    <span className="text-on-surface-variant">Report Generation:</span>
                    <span className="font-mono text-primary font-bold">1-Click PDF &amp; XBRL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: QUANTIFIED BUSINESS ROI & IMPACT */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-primary-container text-on-primary" id="roi-matrix">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-wider font-semibold">
                  Documented Financial Returns
                </span>
                <h2 className="font-display-lg text-2xl sm:text-headline-xl text-on-primary mt-space-xs mb-space-sm font-bold">
                  Measurable Financial &amp; Operational Transformation
                </h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim">
                  Real telemetry benchmarks gathered from over 45 high-density deployments across Bengaluru, Mumbai, and Hyderabad.
                </p>
              </div>

              {/* KPI Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
                <div className="p-space-md rounded-xl bg-primary/60 backdrop-blur border border-on-primary-container/20 text-center">
                  <div className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed mb-1">~25%</div>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim">Reduction in Total Water Procurement Costs</p>
                </div>
                <div className="p-space-md rounded-xl bg-primary/60 backdrop-blur border border-on-primary-container/20 text-center">
                  <div className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed mb-1">~70%</div>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim">Decrease in Emergency Spot Tanker Reliance</p>
                </div>
                <div className="p-space-md rounded-xl bg-primary/60 backdrop-blur border border-on-primary-container/20 text-center">
                  <div className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed mb-1">ZERO</div>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim">Dry-Tank Outage Downtime Hours Recorded</p>
                </div>
                <div className="p-space-md rounded-xl bg-primary/60 backdrop-blur border border-on-primary-container/20 text-center">
                  <div className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed mb-1">3.2x</div>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim">First-Year Net Return on Investment (ROI)</p>
                </div>
              </div>

              {/* Before vs After Matrix */}
              <div className="rounded-xl bg-surface-container-lowest text-on-surface overflow-hidden shadow-2xl">
                <div className="p-space-md bg-surface-container-high flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/20">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    Pre-AquaShield vs. Operating With AquaShield
                  </span>
                  <span className="font-label-sm text-label-sm px-space-sm py-1 bg-primary-container text-on-primary rounded font-mono">
                    1,200-Unit Tech Park Case Example
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low font-label-md text-label-md text-on-surface-variant">
                        <th className="p-space-md">Operational Parameter</th>
                        <th className="p-space-md text-error">Traditional Reactive Operation</th>
                        <th className="p-space-md text-secondary">With AquaShield AI Operating System</th>
                      </tr>
                    </thead>
                    <tbody className="font-body-md text-body-md divide-y divide-outline-variant/20">
                      <tr>
                        <td className="p-space-md font-semibold text-primary">Monthly Spot Tanker Spend</td>
                        <td className="p-space-md text-on-surface-variant">
                          <div className="flex items-center gap-space-xs text-error font-medium">
                            <span className="material-symbols-outlined text-body-md">close</span>
                            <span>₹3,80,000 / month</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Emergency rates during summer panic peaks</span>
                        </td>
                        <td className="p-space-md text-on-surface">
                          <div className="flex items-center gap-space-xs text-primary font-bold">
                            <span className="material-symbols-outlined text-body-md">check</span>
                            <span>₹1,10,000 / month</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-secondary font-medium">Pre-negotiated scheduled batch orders</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-space-md font-semibold text-primary">Micro-Leak Isolation Time</td>
                        <td className="p-space-md text-on-surface-variant">
                          <div className="flex items-center gap-space-xs text-error font-medium">
                            <span className="material-symbols-outlined text-body-md">close</span>
                            <span>Up to 14 Days</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Discovered only after basement ceiling seepage</span>
                        </td>
                        <td className="p-space-md text-on-surface">
                          <div className="flex items-center gap-space-xs text-primary font-bold">
                            <span className="material-symbols-outlined text-body-md">check</span>
                            <span>&lt; 4 Hours</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-secondary font-medium">Automatic acoustic threshold notification to facility team</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-space-md font-semibold text-primary">STP Treated Effluent Reuse</td>
                        <td className="p-space-md text-on-surface-variant">
                          <div className="flex items-center gap-space-xs text-error font-medium">
                            <span className="material-symbols-outlined text-body-md">close</span>
                            <span>34% Utilization</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Remaining volume discharged into storm drains</span>
                        </td>
                        <td className="p-space-md text-on-surface">
                          <div className="flex items-center gap-space-xs text-primary font-bold">
                            <span className="material-symbols-outlined text-body-md">check</span>
                            <span>92% Utilization</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-secondary font-medium">Automated routing to HVAC cooling &amp; campus landscape</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-space-md font-semibold text-primary">Facility Management Workflow</td>
                        <td className="p-space-md text-on-surface-variant">
                          <div className="flex items-center gap-space-xs text-error font-medium">
                            <span className="material-symbols-outlined text-body-md">close</span>
                            <span>Daily Crisis Fire-fighting</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Constant resident complaints and meter log checks</span>
                        </td>
                        <td className="p-space-md text-on-surface">
                          <div className="flex items-center gap-space-xs text-primary font-bold">
                            <span className="material-symbols-outlined text-body-md">check</span>
                            <span>Autonomous Peace of Mind</span>
                          </div>
                          <span className="font-body-sm text-body-sm text-secondary font-medium">Single pane-of-glass executive cockpit</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-surface-container flex flex-wrap items-center justify-between gap-3">
                  <span className="font-label-sm text-xs text-on-surface-variant">
                    Ready to compute savings for your specific society or campus?
                  </span>
                  <button
                    onClick={onOpenRoiCalculator}
                    className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-bold hover:bg-primary transition-colors flex items-center gap-1.5"
                  >
                    <span>Launch Interactive ROI Model</span>
                    <span className="material-symbols-outlined text-sm">calculate</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: TARGET B2B CUSTOMER SEGMENTS */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-surface" id="solutions">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
                  Tailored Deployments
                </span>
                <h2 className="font-headline-xl text-2xl sm:text-headline-xl text-primary mt-space-xs mb-space-sm font-bold">
                  Precision Resilience for Every High-Demand Facility
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Engineered for rapid integration with existing SCADA systems, mechanical building infrastructure, and campus BMS.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* Segment 1: RWAs */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest w-fit mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-headline-md text-primary">apartment</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Residential Welfare Associations
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      High-rise apartment societies (200 to 3,000+ flats) experiencing acute summer dry spells, unequal resident billing friction, and exorbitant tanker outlays.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-lowest font-label-sm text-label-sm text-primary font-semibold flex items-center gap-space-xs border border-outline-variant/15">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Outcome: 100% dry-run prevention &amp; transparent billing</span>
                  </div>
                </div>

                {/* Segment 2: Tech Parks */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest w-fit mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-headline-md text-secondary">domain</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      IT Parks &amp; Corporate Campuses
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Massive commercial SEZ developers requiring uninterrupted cooling tower HVAC uptime, LEED platinum water compliance, and automated ESG neutrality certification.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-space-xs border border-outline-variant/15">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Outcome: Continuous cooling uptime &amp; BRSR reporting</span>
                  </div>
                </div>

                {/* Segment 3: Healthcare */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest w-fit mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-headline-md text-error">local_hospital</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Hospitals &amp; Healthcare
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Zero-tolerance hospital setups where unexpected supply interruptions compromise sterilizers, dialysis centers, patient wards, and operating theater sanitation.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-lowest font-label-sm text-label-sm text-error font-semibold flex items-center gap-space-xs border border-outline-variant/15">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Outcome: Dual-redundancy SLA &amp; automated purity logs</span>
                  </div>
                </div>

                {/* Segment 4: Industrial Manufacturing */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/15">
                  <div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest w-fit mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-headline-md text-on-surface">factory</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Industrial &amp; Manufacturing
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Chemical, textile, and manufacturing plants with high process-water loads needing strict Pollution Control Board (PCB) compliance and zero-liquid-discharge (ZLD) tracking.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-space-xs border border-outline-variant/15">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Outcome: Real-time ZLD audit &amp; automated compliance</span>
                  </div>
                </div>

                {/* Segment 5: Hotels & Universities */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2 border border-outline-variant/15">
                  <div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest w-fit mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-headline-md text-primary">school</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Hotels &amp; Educational Campuses
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Hospitality properties and sprawling university townships facing massive peak-hour demand surges, complex greywater networks, and seasonal occupancy swings.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-lowest font-label-sm text-label-sm text-primary font-semibold flex items-center gap-space-xs border border-outline-variant/15">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Outcome: Dynamic surge smoothing &amp; 30% reduction in potable waste</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: PRICING & MONETIZATION TIERS */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-surface-container-low" id="pricing">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
                  Predictable Investment
                </span>
                <h2 className="font-headline-xl text-2xl sm:text-headline-xl text-primary mt-space-xs mb-space-sm font-bold">
                  Transparent, ROI-Driven Subscriptions
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Pick a subscription calibrated to your facility size, or deploy via our performance-based Shared Savings model with zero capital risk.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Tier 1: Starter SaaS */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Starter SaaS
                    </span>
                    <div className="mt-space-xs mb-space-sm">
                      <span className="font-headline-lg text-headline-lg text-primary font-bold">₹3,000 – ₹8,000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">/ month</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Essential IoT telemetry and dry-tank threshold alerts for smaller RWAs and standalone commercial buildings.
                    </p>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface mb-space-lg">
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Up to 4 Sump / Tank Monitors</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>SMS &amp; WhatsApp Dry Alerts</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Standard Mobile Operator App</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Basic Weekly Consumption PDF</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={onOpenScheduleDemo}
                    className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-headline-sm text-label-md text-center hover:bg-surface-container-high transition-colors font-semibold"
                  >
                    Get Started
                  </button>
                </div>

                {/* Tier 2: Growth SaaS [POPULAR] */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2 bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest to-surface-container-low border-2 border-secondary">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                    Most Popular
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                      Growth SaaS
                    </span>
                    <div className="mt-space-xs mb-space-sm">
                      <span className="font-headline-lg text-headline-lg text-primary font-bold">₹8,000 – ₹25,000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">/ month</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Full AI predictive twin, leak isolation, STP recycling engine, and tanker marketplace access.
                    </p>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface mb-space-lg">
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Everything in Starter</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>7-Day Predictive Horizon Engine</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Acoustic Micro-Leak Isolation</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>STP Greywater Optimization</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Verified Tanker Dispatch Access</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={onOpenScheduleDemo}
                    className="w-full py-space-sm rounded-lg bg-primary-container text-on-primary font-headline-sm text-label-md text-center hover:bg-primary transition-colors shadow-md font-semibold"
                  >
                    Deploy Growth Tier
                  </button>
                </div>

                {/* Tier 3: Shared Savings */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Performance Model
                    </span>
                    <div className="mt-space-xs mb-space-sm">
                      <span className="font-headline-lg text-headline-lg text-primary font-bold">10% – 20%</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">of Verified Savings</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Zero upfront risk. Our fee is strictly tied to verified reductions in your quarterly water procurement expenditures.
                    </p>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface mb-space-lg">
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>No Hardware Capital Outlay</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Audited Baseline Formulation</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Performance-Indexed Billing</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Free Sensor Hardware Upgrades</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={onOpenRoiCalculator}
                    className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-headline-sm text-label-md text-center hover:bg-surface-container-high transition-colors font-semibold"
                  >
                    Evaluate Savings Model
                  </button>
                </div>

                {/* Tier 4: Enterprise Custom */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Enterprise Campus
                    </span>
                    <div className="mt-space-xs mb-space-sm">
                      <span className="font-headline-lg text-headline-lg text-primary font-bold">₹2L – ₹20L</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">/ annum</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Multi-building campus portfolios, custom SCADA BMS integration, dedicated water engineer, and custom SLA guarantees.
                    </p>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface mb-space-lg">
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Campus Portfolio Orchestration</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>BACnet / Modbus SCADA Bridge</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Dedicated 24/7 Remote Desk</span>
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                        <span>Certified BRSR / ESG Auditor Seal</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={onOpenScheduleDemo}
                    className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-headline-sm text-label-md text-center hover:bg-surface-container-high transition-colors font-semibold"
                  >
                    Contact Enterprise Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: MARKET OPPORTUNITY & STRATEGIC ROADMAP */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-surface" id="market">
            <div className="max-w-7xl mx-auto">
              {/* Market Banner */}
              <div className="p-space-lg rounded-xl bg-primary-container text-on-primary mb-space-xl shadow-lg border border-on-primary-container/20">
                <div className="text-center max-w-3xl mx-auto mb-space-lg">
                  <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-wider font-semibold">
                    Macro India Market Opportunity
                  </span>
                  <h2 className="font-headline-xl text-2xl sm:text-headline-xl text-on-primary mt-space-xs font-bold">
                    Addressing India’s High-Density Water Vulnerability
                  </h2>
                  <p className="font-body-md text-body-md text-primary-fixed-dim mt-space-xs">
                    Accelerating urbanization requires scalable, software-defined resilience across every commercial and residential cluster.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
                  <div className="p-space-sm">
                    <span className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed">~1,000,000</span>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim mt-1">High-Rise Apartment Complexes</p>
                  </div>
                  <div className="p-space-sm">
                    <span className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed">~50,000</span>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim mt-1">Hospitals &amp; Healthcare Facilities</p>
                  </div>
                  <div className="p-space-sm">
                    <span className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed">~40,000</span>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim mt-1">Industrial &amp; Manufacturing Plants</p>
                  </div>
                  <div className="p-space-sm">
                    <span className="font-display-lg text-2xl sm:text-headline-xl font-bold text-primary-fixed">~35,000</span>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim mt-1">Commercial IT Parks &amp; Campuses</p>
                  </div>
                </div>
              </div>

              {/* 4-Phase Expansion Roadmap Timeline */}
              <div className="max-w-3xl mx-auto text-center mb-space-lg">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
                  Strategic Execution
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary mt-space-xs font-bold">
                  Strategic Deployment Roadmap
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Phase 1 */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm font-mono text-secondary font-bold">PHASE 01</span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-semibold">
                        ACTIVE
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">Pilot &amp; Validate</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Deployment across 45 high-pressure RWAs and Outer Ring Road (ORR) tech corridor facilities in Bengaluru.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">
                    Target: 140M Liters Managed
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm font-mono text-secondary font-bold">PHASE 02</span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">
                        Q3-Q4 2026
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">Bengaluru Commercial Hubs</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Systematic expansion across Whitefield, Electronic City, Koramangala, and North Bengaluru aerospace corridors.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">
                    Target: 300+ Facilities
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm font-mono text-secondary font-bold">PHASE 03</span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">
                        2027
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">Major Indian Metros</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Launch in high water-stress metropolitan zones: Mumbai MMR, Delhi-NCR, Chennai coastal belt, and Hyderabad IT cluster.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">
                    Target: 1,500+ Hubs
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-outline-variant/15">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm font-mono text-secondary font-bold">PHASE 04</span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">
                        2027+
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">Smart City Integration</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct municipal integration with Smart City command centers, sharing macro-aquifer recharge data and emergency surplus balancing.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">
                    Target: National Aquifer Grid
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9: FINAL CONVERSION BANNER */}
          <section className="w-full px-space-md lg:px-margin py-space-xl bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary" id="demo">
            <div className="max-w-5xl mx-auto rounded-xl p-space-lg text-center">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur mb-space-md">
                <span className="material-symbols-outlined text-secondary-fixed text-base">verified</span>
                <span className="font-label-sm text-label-sm text-secondary-fixed tracking-wider uppercase font-semibold">
                  Incubated &amp; Recognized by CRCE x JAIN Launchpad Ideathon 2026
                </span>
              </div>
              <h2 className="font-display-lg text-2xl sm:text-headline-xl text-on-primary max-w-2xl mx-auto tracking-tight mb-space-md font-bold">
                Ready to Make Your Facility Water-Secure Before the Next Dry Season?
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl mx-auto mb-space-lg">
                Join leading tech parks and premier RWAs saving up to ₹4 Lakhs every month while eliminating water outage downtime.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-lg">
                <button
                  onClick={onOpenScheduleDemo}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-surface-container-lowest text-primary font-headline-sm text-headline-sm hover:shadow-xl transition-all font-bold"
                >
                  <span>Book an On-Site Audit</span>
                  <span className="material-symbols-outlined text-headline-sm">arrow_forward</span>
                </button>

                <button
                  onClick={onOpenRoiCalculator}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-primary-container/80 text-on-primary font-headline-sm text-headline-sm border border-outline-variant/30 hover:bg-primary-container transition-all font-semibold"
                >
                  <span>Try Interactive Calculator</span>
                  <span className="material-symbols-outlined text-headline-sm">calculate</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-space-lg font-label-sm text-label-sm text-primary-fixed-dim">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">schedule</span> On-site deployment in &lt; 48 hours</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">handshake</span> Performance-linked savings guarantee</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">lock</span> Zero modification to existing pipework</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-outline-variant/20">
        <div className="w-full px-space-md lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <AquaShieldLogo size="md" showBadge={true} />
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                To make every building, campus, and community in India water-secure by predicting shortages before they become emergencies.
              </p>
              <div className="pt-space-xs">
                <div className="inline-flex flex-col p-space-sm rounded-lg bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Incubated &amp; Recognized By</span>
                  <span className="font-label-md text-label-md text-primary font-semibold">CRCE x JAIN Launchpad Ideathon 2026</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">Solutions</span>
              <nav className="flex flex-col gap-space-xs">
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#solutions">Commercial Campuses</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#solutions">Industrial Manufacturing</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#solutions">Residential Townships</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#solutions">Municipal Reservoirs</a>
              </nav>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">Product &amp; Specs</span>
              <nav className="flex flex-col gap-space-xs">
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#features">IoT Sensor Arrays</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#features">Sub-Surface Aquifer Maps</a>
                <button onClick={onOpenRoiCalculator} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">
                  ROI Telemetry Modeling
                </button>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#market">Predictive ML Forecaster</a>
              </nav>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">Compliance</span>
              <nav className="flex flex-col gap-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">CGWA Guidelines</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">PCB Water Auditing</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">ISO 14046 Footprint</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Data Telemetry API</span>
              </nav>
            </div>
          </div>

          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-outline-variant/20">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © 2026 AquaShield Technologies India Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-space-md">
              <span className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface cursor-pointer">Privacy Policy</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface cursor-pointer">Terms of Service</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
