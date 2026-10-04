export type ViewMode = 'landing' | 'dashboard';

export type DashboardTab = 
  | 'digital-twin-overview'
  | 'multi-source-inflow-and-reservoirs'
  | 'tanker-logistics-and-marketplace'
  | 'stp-recycled-balancing'
  | 'predictive-leak-isolation'
  | 'esg-and-brsr-compliance'
  | 'campus-settings';

export interface Campus {
  id: string;
  name: string;
  city: string;
  location: string;
  totalCapacityLiters: number;
  currentStorageLiters: number;
  occupancyCount: number;
  daysRemaining: number;
  scadaNode: string;
}

export interface AcousticSensor {
  id: string;
  name: string;
  location: string;
  zone: string;
  status: 'normal' | 'stable' | 'alert' | 'isolated';
  varianceDb: string;
  leakRateLph?: number;
  lastChecked: string;
}

export interface TankerDelivery {
  id: string;
  carrierName: string;
  vehicleNumber: string;
  capacityLiters: number;
  waterGrade: string;
  costPerLoad: number;
  marketSpotRate: number;
  etaMinutes: number;
  verificationStatus: 'cleared' | 'in_transit' | 'at_gate' | 'discharged';
  driverName: string;
  driverPhone: string;
  currentCoordinates: { lat: number; lng: number };
  routeProgressPercent: number;
}

export interface InflowSource {
  id: string;
  name: string;
  type: 'municipal' | 'stp' | 'borewell' | 'tanker' | 'rainwater';
  currentFlowRate: string;
  dailyTotalLiters: number;
  percentageShare: number;
  costPerLiter: number;
  qualityTds: number;
  qualityPh: number;
  status: 'optimal' | 'throttled' | 'suppressed' | 'offline';
}

export interface SchematicNodeData {
  id: string;
  title: string;
  subtitle: string;
  type: 'source' | 'treatment' | 'storage' | 'booster' | 'destination';
  status: 'normal' | 'alert' | 'restricted' | 'standby';
  details: {
    flowRate?: string;
    capacity?: string;
    levelPercent?: number;
    pressure?: string;
    tds?: string;
    ph?: string;
    temperature?: string;
    chlorine?: string;
    turbidity?: string;
    pumpsStatus?: string;
  };
}
