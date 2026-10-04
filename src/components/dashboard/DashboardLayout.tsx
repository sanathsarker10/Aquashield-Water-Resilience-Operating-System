import React, { useState } from 'react';
import { Campus, DashboardTab, AcousticSensor, TankerDelivery } from '../../types';
import { CAMPUSES, HOTLINKED_ASSETS } from '../../data/mockData';
import { AquaShieldLogo } from '../common/AquaShieldLogo';
import { DigitalTwinOverview } from './DigitalTwinOverview';
import { MultiSourceInflow } from './MultiSourceInflow';
import { TankerLogistics } from './TankerLogistics';
import { StpBalancing } from './StpBalancing';
import { LeakIsolation } from './LeakIsolation';
import { EsgCompliance } from './EsgCompliance';
import { CampusSettings } from './CampusSettings';
import { GpsTrackingModal } from './GpsTrackingModal';
import { EmergencyDispatchModal } from './EmergencyDispatchModal';
import { BrsrReportModal } from './BrsrReportModal';

interface DashboardLayoutProps {
  onSwitchToLanding: () => void;
  acousticSensors: AcousticSensor[];
  onIsolateZone09: () => void;
  isZone09Isolated: boolean;
  activeTanker: TankerDelivery;
  onConfirmEmergencyDispatch: (details: { capacity: number; gate: string; note: string }) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  onSwitchToLanding,
  acousticSensors,
  onIsolateZone09,
  isZone09Isolated,
  activeTanker,
  onConfirmEmergencyDispatch
}) => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('digital-twin-overview');
  const [selectedCampus, setSelectedCampus] = useState<Campus>(CAMPUSES[0]);
  const [isCampusDropdownOpen, setIsCampusDropdownOpen] = useState(false);
  const [manualBypassActive, setManualBypassActive] = useState(false);
  const [isGpsModalOpen, setIsGpsModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isBrsrModalOpen, setIsBrsrModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notifications = [
    {
      id: '1',
      title: 'Acoustic Anomaly Flagged',
      desc: 'Zone 09 Riser micro-loss ~14 L/hr seepage detected.',
      time: '18 mins ago',
      type: 'alert'
    },
    {
      id: '2',
      title: 'Rain Spike Warning (38mm)',
      desc: 'Auto-drawdown scheduled for tonight at 23:30.',
      time: '1 hour ago',
      type: 'info'
    },
    {
      id: '3',
      title: 'Tanker Delivery Inbound',
      desc: 'Kavery Bulk Carriers (KA-04-E-8821) ETA 42 mins.',
      time: '2 hours ago',
      type: 'info'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col">
      {/* SIDEBAR (Desktop Fixed) */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest/90 backdrop-blur-xl z-50 hidden lg:flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-outline-variant/20">
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="h-16 px-space-md flex items-center justify-between gap-space-sm bg-surface-container-low/60 border-b border-outline-variant/20">
            <div className="flex flex-col">
              <AquaShieldLogo size="sm" showBadge={true} />
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[9px] pl-8 -mt-1">
                Enterprise Telemetry
              </span>
            </div>
          </div>

          <div className="px-space-md pt-space-lg pb-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-space-xs font-semibold">
              Operations Architecture
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-space-sm">
            <button
              onClick={() => setActiveTab('digital-twin-overview')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'digital-twin-overview'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">hub</span>
              <span className="font-body-md text-body-md font-medium flex-1">Digital Twin Overview</span>
              <span className="h-2 w-2 rounded-full bg-secondary-container animate-pulse"></span>
            </button>

            <button
              onClick={() => setActiveTab('multi-source-inflow-and-reservoirs')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'multi-source-inflow-and-reservoirs'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">water_ph</span>
              <span className="font-body-md text-body-md font-medium flex-1">Multi-Source Inflow &amp; Reservoirs</span>
            </button>

            <button
              onClick={() => setActiveTab('tanker-logistics-and-marketplace')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'tanker-logistics-and-marketplace'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">local_shipping</span>
              <span className="font-body-md text-body-md font-medium flex-1">Tanker Logistics &amp; Marketplace</span>
            </button>

            <button
              onClick={() => setActiveTab('stp-recycled-balancing')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'stp-recycled-balancing'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">cyclone</span>
              <span className="font-body-md text-body-md font-medium flex-1">STP Recycled Balancing</span>
            </button>

            <button
              onClick={() => setActiveTab('predictive-leak-isolation')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'predictive-leak-isolation'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">precision_manufacturing</span>
              <span className="font-body-md text-body-md font-medium flex-1">Predictive Leak Isolation</span>
              <span
                className={`font-label-sm text-label-sm px-1.5 py-0.5 rounded ${
                  isZone09Isolated
                    ? 'bg-primary-fixed text-on-primary-fixed'
                    : 'bg-error-container text-on-error-container'
                }`}
              >
                {isZone09Isolated ? 'Secured' : '1 Alert'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('esg-and-brsr-compliance')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'esg-and-brsr-compliance'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">verified</span>
              <span className="font-body-md text-body-md font-medium flex-1">ESG &amp; BRSR Compliance</span>
            </button>

            <button
              onClick={() => setActiveTab('campus-settings')}
              className={`group flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all text-left ${
                activeTab === 'campus-settings'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-xl">tune</span>
              <span className="font-body-md text-body-md font-medium flex-1">Campus Settings</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-space-md flex flex-col gap-2">
          {/* Quick link to Landing Page */}
          <button
            onClick={onSwitchToLanding}
            className="w-full py-2 px-3 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-container font-label-sm text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-base">storefront</span>
            <span>View Public Landing Page</span>
          </button>

          <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/20">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                SCADA Node Gateway
              </span>
              <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            </div>
            <span className="font-label-md text-label-md text-primary font-semibold">
              {selectedCampus.scadaNode}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Lat: 42ms | Synced SEC-1
            </span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="lg:pl-72 flex-1 flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-40 h-16 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20 flex items-center justify-between px-space-md lg:px-space-lg">
          <div className="flex items-center gap-space-md">
            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>

            {/* Campus Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCampusDropdownOpen(!isCampusDropdownOpen)}
                className="flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container px-space-md py-1.5 rounded-lg transition-colors cursor-pointer border border-outline-variant/20"
              >
                <span className="material-symbols-outlined text-secondary text-base">domain</span>
                <span className="font-body-md text-body-md font-semibold text-on-surface truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {selectedCampus.name} — Campus Digital Twin ({selectedCampus.city.split(',')[0]})
                </span>
                <span className="material-symbols-outlined text-on-surface-variant text-base">expand_more</span>
              </button>

              {/* Campus Dropdown Menu */}
              {isCampusDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 py-1.5 z-50 animate-fadeIn">
                  <div className="px-3 py-1 text-[11px] font-label-sm text-on-surface-variant uppercase font-semibold">
                    Select Protected Facility
                  </div>
                  {CAMPUSES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCampus(c);
                        setIsCampusDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-surface-container-low transition-colors ${
                        selectedCampus.id === c.id ? 'bg-surface-container font-semibold text-primary' : 'text-on-surface'
                      }`}
                    >
                      <span className="font-bold">{c.name}</span>
                      <span className="text-[11px] text-on-surface-variant">{c.location} · {c.city}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Status Beacon */}
            <div className="hidden sm:flex items-center gap-2 bg-surface-container-low px-space-md py-1 rounded-full border border-outline-variant/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                Telemetry Active: 99.98%
              </span>
            </div>
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center gap-space-md">
            {/* Direct Switch to Public Landing Page */}
            <button
              onClick={onSwitchToLanding}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-xs font-semibold border border-outline-variant/30 transition-colors"
              title="Switch to Landing Page screen"
            >
              <span className="material-symbols-outlined text-base">public</span>
              <span>Landing Page</span>
            </button>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
                title="Notifications"
              >
                <span className="material-symbols-outlined text-xl">notifications</span>
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-[10px] font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Flyout */}
              {isNotificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-surface-container-lowest rounded-xl shadow-2xl border border-outline-variant/30 p-3 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                    <span className="font-headline-sm text-xs font-bold text-primary">SCADA Event Notifications</span>
                    <button
                      onClick={() => setUnreadCount(0)}
                      className="text-[11px] font-label-sm text-secondary hover:underline"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="divide-y divide-outline-variant/15 max-h-72 overflow-y-auto my-1">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className={`font-semibold ${n.type === 'alert' ? 'text-error' : 'text-primary'}`}>
                            {n.title}
                          </span>
                          <span className="text-[10px] text-on-surface-variant font-label-sm">{n.time}</span>
                        </div>
                        <p className="text-on-surface-variant text-[11px] mt-0.5">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emergency Alarm Trigger */}
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="p-2 rounded-lg text-error hover:bg-error-container/30 transition-colors"
              title="Emergency Procurement Protocol"
            >
              <span className="material-symbols-outlined text-xl">crisis_alert</span>
            </button>

            <div className="h-6 w-px bg-surface-variant"></div>

            {/* Profile */}
            <div className="flex items-center gap-space-sm">
              <img
                src={HOTLINKED_ASSETS.avatarRadhika}
                alt="Dr. Radhika Sen"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-body-md text-body-md font-semibold text-on-surface leading-tight">
                  Dr. Radhika Sen
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">
                  Director of Facilities &amp; Sustainability
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/20 p-4 space-y-2">
            <button
              onClick={() => { setActiveTab('digital-twin-overview'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              Digital Twin Overview
            </button>
            <button
              onClick={() => { setActiveTab('multi-source-inflow-and-reservoirs'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              Multi-Source Inflow &amp; Reservoirs
            </button>
            <button
              onClick={() => { setActiveTab('tanker-logistics-and-marketplace'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              Tanker Logistics &amp; Marketplace
            </button>
            <button
              onClick={() => { setActiveTab('stp-recycled-balancing'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              STP Recycled Balancing
            </button>
            <button
              onClick={() => { setActiveTab('predictive-leak-isolation'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              Predictive Leak Isolation
            </button>
            <button
              onClick={() => { setActiveTab('esg-and-brsr-compliance'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              ESG &amp; BRSR Compliance
            </button>
            <button
              onClick={() => { setActiveTab('campus-settings'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-medium text-sm text-primary"
            >
              Campus Settings
            </button>
            <button
              onClick={() => { onSwitchToLanding(); setMobileMenuOpen(false); }}
              className="w-full text-left p-2 rounded-lg font-bold text-sm text-secondary bg-surface-container-low"
            >
              ← Public Landing Page
            </button>
          </div>
        )}

        {/* View Router */}
        <main className="flex-1 w-full bg-background">
          {activeTab === 'digital-twin-overview' && (
            <DigitalTwinOverview
              campus={selectedCampus}
              acousticSensors={acousticSensors}
              activeTanker={activeTanker}
              onOpenGpsModal={() => setIsGpsModalOpen(true)}
              onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
              onOpenBrsrModal={() => setIsBrsrModalOpen(true)}
              isZone09Isolated={isZone09Isolated}
              onIsolateZone09={onIsolateZone09}
              manualBypassActive={manualBypassActive}
              onToggleManualBypass={() => setManualBypassActive(!manualBypassActive)}
            />
          )}

          {activeTab === 'multi-source-inflow-and-reservoirs' && (
            <MultiSourceInflow
              campus={selectedCampus}
              onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
            />
          )}

          {activeTab === 'tanker-logistics-and-marketplace' && (
            <TankerLogistics
              activeTanker={activeTanker}
              onOpenGpsModal={() => setIsGpsModalOpen(true)}
              onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
            />
          )}

          {activeTab === 'stp-recycled-balancing' && <StpBalancing />}

          {activeTab === 'predictive-leak-isolation' && (
            <LeakIsolation
              sensors={acousticSensors}
              isZone09Isolated={isZone09Isolated}
              onIsolateZone09={onIsolateZone09}
            />
          )}

          {activeTab === 'esg-and-brsr-compliance' && (
            <EsgCompliance
              campus={selectedCampus}
              onOpenBrsrModal={() => setIsBrsrModalOpen(true)}
            />
          )}

          {activeTab === 'campus-settings' && (
            <CampusSettings
              campus={selectedCampus}
              onUpdateCampus={(updated) => setSelectedCampus({ ...selectedCampus, ...updated })}
            />
          )}
        </main>
      </div>

      {/* Modals */}
      <GpsTrackingModal
        isOpen={isGpsModalOpen}
        onClose={() => setIsGpsModalOpen(false)}
      />

      <EmergencyDispatchModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onConfirmDispatch={onConfirmEmergencyDispatch}
      />

      <BrsrReportModal
        isOpen={isBrsrModalOpen}
        onClose={() => setIsBrsrModalOpen(false)}
        campus={selectedCampus}
      />
    </div>
  );
};
