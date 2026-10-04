import { Campus, AcousticSensor, TankerDelivery, InflowSource } from '../types';

export const CAMPUSES: Campus[] = [
  {
    id: 'blr-prestige-vista',
    name: 'Prestige Tech Vista',
    city: 'Bengaluru, KA',
    location: 'Outer Ring Road (Kadubeesanahalli)',
    totalCapacityLiters: 850000,
    currentStorageLiters: 648500,
    occupancyCount: 14200,
    daysRemaining: 6.4,
    scadaNode: 'BLR-CENTRAL-09-V3'
  },
  {
    id: 'blr-manyata-embassy',
    name: 'Manyata Embassy Business Park',
    city: 'Bengaluru, KA',
    location: 'Nagavara / Hebbal Corridor',
    totalCapacityLiters: 2400000,
    currentStorageLiters: 1820000,
    occupancyCount: 38000,
    daysRemaining: 7.1,
    scadaNode: 'BLR-NORTH-04-V2'
  },
  {
    id: 'blr-bagmane-world',
    name: 'Bagmane World Technology Center',
    city: 'Bengaluru, KA',
    location: 'Marathahalli - KR Puram Outer Ring Rd',
    totalCapacityLiters: 1200000,
    currentStorageLiters: 910000,
    occupancyCount: 21500,
    daysRemaining: 5.8,
    scadaNode: 'BLR-EAST-12-V3'
  },
  {
    id: 'hyd-mindspace-sez',
    name: 'Raheja Mindspace IT Park',
    city: 'Hyderabad, TS',
    location: 'Hitec City, Madhapur',
    totalCapacityLiters: 1900000,
    currentStorageLiters: 1450000,
    occupancyCount: 29000,
    daysRemaining: 8.2,
    scadaNode: 'HYD-HITEC-01-V4'
  }
];

export const INITIAL_INFLOW_SOURCES: InflowSource[] = [
  {
    id: 'cauvery-grid',
    name: 'Cauvery / Municipal Grid',
    type: 'municipal',
    currentFlowRate: '108.4 m³/h',
    dailyTotalLiters: 108110,
    percentageShare: 38,
    costPerLiter: 0.038,
    qualityTds: 180,
    qualityPh: 7.3,
    status: 'optimal'
  },
  {
    id: 'stp-treated',
    name: 'STP Recycled Effluent (MFR/MBBR)',
    type: 'stp',
    currentFlowRate: '74.2 m³/h',
    dailyTotalLiters: 119490,
    percentageShare: 42,
    costPerLiter: 0.008,
    qualityTds: 420,
    qualityPh: 7.1,
    status: 'optimal'
  },
  {
    id: 'licensed-borewell',
    name: 'Licensed Borewells #1 & #2',
    type: 'borewell',
    currentFlowRate: '24.2 m³/h',
    dailyTotalLiters: 34140,
    percentageShare: 12,
    costPerLiter: 0.015,
    qualityTds: 620,
    qualityPh: 7.8,
    status: 'throttled'
  },
  {
    id: 'spot-tanker',
    name: 'Pre-negotiated Tankers (Suppressed)',
    type: 'tanker',
    currentFlowRate: '12.0 m³/h',
    dailyTotalLiters: 22760,
    percentageShare: 8,
    costPerLiter: 0.095,
    qualityTds: 240,
    qualityPh: 7.4,
    status: 'suppressed'
  }
];

export const INITIAL_ACOUSTIC_SENSORS: AcousticSensor[] = [
  {
    id: 'AL-09',
    name: 'Sensor AL-09',
    location: 'Cooling Tower Feed Riser',
    zone: 'Zone 09 Riser (Building C)',
    status: 'alert',
    varianceDb: '+1.4 dB Anomaly',
    leakRateLph: 14,
    lastChecked: '42 seconds ago'
  },
  {
    id: 'AL-04',
    name: 'Sensor AL-04',
    location: 'B2 Riser Trunk (Building B)',
    zone: 'Zone 04 Basement Loop',
    status: 'stable',
    varianceDb: '0.02 dB var',
    leakRateLph: 0,
    lastChecked: '18 seconds ago'
  },
  {
    id: 'AL-12',
    name: 'Sensor AL-12',
    location: 'Irrigation Sub-loop North',
    zone: 'Zone 12 Landscape',
    status: 'normal',
    varianceDb: 'Closed Loop (0.00 dB)',
    leakRateLph: 0,
    lastChecked: '1 minute ago'
  },
  {
    id: 'AL-01',
    name: 'Sensor AL-01',
    location: 'Municipal Inflow Flange',
    zone: 'Gate 1 Header',
    status: 'normal',
    varianceDb: '0.01 dB nominal',
    leakRateLph: 0,
    lastChecked: '30 seconds ago'
  }
];

export const ACTIVE_TANKER: TankerDelivery = {
  id: 'DISP-89201',
  carrierName: 'Kavery Bulk Carriers',
  vehicleNumber: 'KA-04-E-8821',
  capacityLiters: 12000,
  waterGrade: '12,000 L Potable Grade A',
  costPerLoad: 1150,
  marketSpotRate: 3200,
  etaMinutes: 42,
  verificationStatus: 'cleared',
  driverName: 'Manjunath Gowda',
  driverPhone: '+91 98450 28192',
  currentCoordinates: { lat: 12.9352, lng: 77.6946 }, // Near Bellandur ORR
  routeProgressPercent: 78
};

export const HOTLINKED_ASSETS = {
  logoLight: 'https://lh3.googleusercontent.com/aida/AEtjO1Ujmf71XFVZWqQUkbOl7xnpJXnLNWyHdZwQn82shALSX3eWdNM6xTvcxITZj-tsFOqUcC--e-hQa1yAjgVD0oC2s05in0TX_CCYsUOVIcaS0MTb6tnUMmklgM3ZCi1hA10G2Dabm6N00ZvCLvN1JL6abtWWy9r0xF3MVXew9zvE7m6N__xMy5PV3uvcg9_bUnvPFlED7yfk4E82qrXMv70aT-orYVWMT4nHt0buuFHWTGBpHgb2MzAwB4c',
  logoDashboard: 'https://lh3.googleusercontent.com/aida/AEtjO1VaNGBVNF2yygDfzrXpK5aANSNBw-muXIGvijXG_F-aGeNb-7v2fvMnFd2dLbq2WMgHrwif9O3djmHz_p7B3FeJr1qAc4ueNRy9QiasrsAQzXQX6o7LEX3OytqKBwYgyJDBZy-Njb0C03LzFUHo-FcGVMmbrae9Jp_EYXYX0G1YMun0lSi7Yq-lcaHoWkzEt1dXy1WccwkjjEpfNVaezGHgzWVEuA56_NlrBi0-U_Qr_L2LhcqS562h4tDw',
  avatarRadhika: 'https://lh3.googleusercontent.com/aida/AEtjO1W5fseNijhKABFx1t_F4UTCFOCzt7qET7rcxZQvUyiDKQIQqIDWfSE6M8F_9CmHRaAfjiIE7auqHVQVLXIkEy18JtJoVKRTVVQ6Z5s_sYasG-c3GuzbKR008GWIl4fMhJ9qxSRoxrIS76qeIuDq_R1JYiySPd3LlfangQPzF7zmXXWkaqHoj8QHwmvIwb7TyYAYkECs_AvjXA3GC9Ow287d41vNcht7iRGnlM6_yJ2UgWUJHWWjBe_ILUM',
  avatarGeneral: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWXgDH0DxqmORBucN4JfsEyvUCM6xh4Hy4p6mRckX_9JdHODrXOmpE75s0BIpymGRA6xsTbBOGDbyRZp5ivf8AsfCKe-5HXHutj7azXoXJlGk72nkSwp5p1Vao1THSfwrabuXFFMPntRb4sIeQKMuqiDwypCK36cDdRnkAwIkYVYwuvWal02ZkkAEyQs1XyD0sOuQW9MCmB5LZj0Mcz0QcvZT66rGxhEfEWFGaXV26CZQHVm72vxAJkA'
};
