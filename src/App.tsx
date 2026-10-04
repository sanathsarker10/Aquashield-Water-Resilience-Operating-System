/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, AcousticSensor, TankerDelivery } from './types';
import { INITIAL_ACOUSTIC_SENSORS, ACTIVE_TANKER } from './data/mockData';
import { LandingPage } from './components/landing/LandingPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { RoiCalculatorModal } from './components/landing/RoiCalculatorModal';
import { ScheduleDemoModal } from './components/landing/ScheduleDemoModal';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [isZone09Isolated, setIsZone09Isolated] = useState<boolean>(false);
  const [acousticSensors, setAcousticSensors] = useState<AcousticSensor[]>(INITIAL_ACOUSTIC_SENSORS);
  const [activeTanker, setActiveTanker] = useState<TankerDelivery>(ACTIVE_TANKER);
  const [isRoiModalOpen, setIsRoiModalOpen] = useState<boolean>(false);
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState<boolean>(false);

  // Isolate Zone 09 handler
  const handleIsolateZone09 = () => {
    setIsZone09Isolated(true);
    setAcousticSensors(prev =>
      prev.map(sensor =>
        sensor.id === 'AL-09'
          ? {
              ...sensor,
              status: 'isolated',
              varianceDb: '0.00 dB (Neutral)',
              leakRateLph: 0
            }
          : sensor
      )
    );
  };

  // Emergency tanker dispatch handler
  const handleConfirmEmergencyDispatch = (details: { capacity: number; gate: string; note: string }) => {
    setActiveTanker({
      ...activeTanker,
      capacityLiters: details.capacity,
      waterGrade: `${details.capacity.toLocaleString()} L Emergency Reserve`,
      etaMinutes: 28,
      routeProgressPercent: 88
    });
  };

  return (
    <div className="relative min-h-screen bg-surface">
      {/* Screen Switcher Floating Pill */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-1.5 p-1.5 bg-primary/95 text-on-primary rounded-full shadow-2xl backdrop-blur-md border border-primary-fixed/30 text-xs font-label-sm">
        <span className="pl-2 pr-1 font-semibold text-primary-fixed text-[11px] hidden sm:inline">
          View Screen:
        </span>
        <button
          onClick={() => setViewMode('landing')}
          className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 font-medium ${
            viewMode === 'landing'
              ? 'bg-primary-fixed text-on-primary-fixed font-bold shadow-sm'
              : 'text-on-primary/80 hover:text-on-primary hover:bg-white/10'
          }`}
          title="Switch to Public Landing Page"
        >
          <span className="material-symbols-outlined text-sm">home</span>
          <span>Landing Page</span>
        </button>
        <button
          onClick={() => setViewMode('dashboard')}
          className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 font-medium ${
            viewMode === 'dashboard'
              ? 'bg-secondary text-on-secondary font-bold shadow-sm'
              : 'text-on-primary/80 hover:text-on-primary hover:bg-white/10'
          }`}
          title="Switch to Enterprise Operations SCADA Cockpit"
        >
          <span className="material-symbols-outlined text-sm">hub</span>
          <span>Enterprise Cockpit</span>
          <span className="h-1.5 w-1.5 rounded-full bg-secondary-container animate-pulse"></span>
        </button>
      </div>

      {/* Screen 1: Public Marketing & Architecture Landing Page */}
      {viewMode === 'landing' ? (
        <LandingPage
          onLaunchDashboard={() => setViewMode('dashboard')}
          onOpenScheduleDemo={() => setIsScheduleDemoOpen(true)}
          onOpenRoiCalculator={() => setIsRoiModalOpen(true)}
        />
      ) : (
        /* Screen 2: Enterprise Telemetry & Digital Twin Operations Cockpit */
        <DashboardLayout
          onSwitchToLanding={() => setViewMode('landing')}
          acousticSensors={acousticSensors}
          onIsolateZone09={handleIsolateZone09}
          isZone09Isolated={isZone09Isolated}
          activeTanker={activeTanker}
          onConfirmEmergencyDispatch={handleConfirmEmergencyDispatch}
        />
      )}

      {/* Global Modals */}
      <RoiCalculatorModal
        isOpen={isRoiModalOpen}
        onClose={() => setIsRoiModalOpen(false)}
        onBookAudit={() => setIsScheduleDemoOpen(true)}
      />

      <ScheduleDemoModal
        isOpen={isScheduleDemoOpen}
        onClose={() => setIsScheduleDemoOpen(false)}
        onLaunchDashboard={() => setViewMode('dashboard')}
      />
    </div>
  );
}
