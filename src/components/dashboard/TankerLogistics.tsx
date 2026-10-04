import React, { useState } from 'react';
import { TankerDelivery } from '../../types';

interface TankerLogisticsProps {
  activeTanker: TankerDelivery;
  onOpenGpsModal: () => void;
  onOpenEmergencyModal: () => void;
}

export const TankerLogistics: React.FC<TankerLogisticsProps> = ({
  activeTanker,
  onOpenGpsModal,
  onOpenEmergencyModal
}) => {
  const [orders, setOrders] = useState([
    {
      id: 'DISP-89201',
      carrier: 'Kavery Bulk Carriers',
      vehicle: 'KA-04-E-8821',
      volume: 12000,
      cost: 1150,
      spotCost: 3200,
      status: 'In Transit',
      eta: '42 mins',
      gate: 'Gate 3 South Logistics',
      purityTds: '180 ppm (Potable)'
    },
    {
      id: 'DISP-89194',
      carrier: 'Chamundi Hydro Logistics',
      vehicle: 'KA-51-M-4402',
      volume: 12000,
      cost: 1150,
      spotCost: 3400,
      status: 'Delivered',
      eta: 'Completed 06:14 AM',
      gate: 'Gate 1 Main Inflow',
      purityTds: '175 ppm (Potable)'
    },
    {
      id: 'DISP-89182',
      carrier: 'Whitefield Clean Waters',
      vehicle: 'KA-03-D-9912',
      volume: 24000,
      cost: 2100,
      spotCost: 6500,
      status: 'Delivered',
      eta: 'Completed Yesterday',
      gate: 'Gate 2 Utility Yard',
      purityTds: '190 ppm (Potable)'
    }
  ]);

  return (
    <div className="p-space-margin flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-outline-variant/20 gap-3">
        <div>
          <span className="font-label-sm text-secondary uppercase font-semibold">
            Supply Chain &amp; Logistics Protocol
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            Tanker Logistics &amp; Smart Marketplace
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            Pre-negotiated bulk tanker orders with gate ultrasonic weighbridge verification, TDS testing, and anti-spot gouging index.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEmergencyModal}
            className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">local_shipping</span>
            Book Scheduled Tanker
          </button>
        </div>
      </div>

      {/* Live Dispatched Tanker Card */}
      <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-secondary/30 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-start gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">local_shipping</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-semibold">
                ACTIVE IN-TRANSIT
              </span>
              <span className="font-label-sm text-xs text-on-surface-variant">ID #{activeTanker.id}</span>
            </div>
            <h3 className="font-headline-md text-primary font-bold mt-1">
              {activeTanker.carrierName} ({activeTanker.vehicleNumber})
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              Driver: {activeTanker.driverName} · ETA to Kadubeesanahalli Gate 3: <strong>{activeTanker.etaMinutes} mins</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onOpenGpsModal}
            className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-sm text-xs font-semibold hover:opacity-95 transition-opacity flex items-center gap-1.5 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            Track Live GPS
          </button>
          <div className="px-3 py-2 bg-surface-container-low rounded-lg font-label-sm text-xs text-primary font-bold border border-outline-variant/20">
            Saved ₹2,050 vs Spot Market
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/20 overflow-hidden shadow-sm">
        <div className="p-space-md bg-surface-container-low border-b border-outline-variant/20 flex items-center justify-between">
          <span className="font-headline-sm text-sm text-primary font-bold">Tanker Procurement Log</span>
          <span className="font-label-sm text-xs text-on-surface-variant">100% Volumetric Audit Enabled</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body-sm">
            <thead className="bg-surface-container-high/40 font-label-sm text-on-surface-variant uppercase">
              <tr>
                <th className="p-3">Order ID &amp; Vendor</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Water Volume</th>
                <th className="p-3">Pre-negotiated Price</th>
                <th className="p-3">Spot Market Price</th>
                <th className="p-3">Purity Log</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-3">
                    <span className="font-bold text-primary block">{o.carrier}</span>
                    <span className="text-on-surface-variant font-label-sm text-[10px]">{o.id}</span>
                  </td>
                  <td className="p-3 font-label-md">{o.vehicle}</td>
                  <td className="p-3 font-label-md font-semibold text-primary">{o.volume.toLocaleString()} L</td>
                  <td className="p-3 font-label-md font-bold text-primary">₹{o.cost.toLocaleString()}</td>
                  <td className="p-3 font-label-md line-through text-error">₹{o.spotCost.toLocaleString()}</td>
                  <td className="p-3 font-label-sm text-secondary font-medium">{o.purityTds}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-label-sm text-[10px] font-bold ${
                        o.status === 'Delivered'
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : 'bg-secondary-fixed text-on-secondary-fixed'
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
