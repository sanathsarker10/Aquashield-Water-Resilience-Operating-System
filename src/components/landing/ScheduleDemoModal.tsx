import React, { useState } from 'react';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchDashboard: () => void;
}

export const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({
  isOpen,
  onClose,
  onLaunchDashboard
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facilityName: '',
    city: 'Bengaluru',
    facilityType: 'Commercial Tech Park'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <div className="flex items-start justify-between pb-3 border-b border-outline-variant/20">
          <div>
            <div className="flex items-center gap-1.5 text-secondary font-label-sm uppercase font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              On-Site Audit &amp; Technical Briefing
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mt-1">
              Schedule an On-Site Audit
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Deploy non-invasive sensor arrays within 48 hours with zero pipe cutting.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <span className="w-14 h-14 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
            </span>
            <h4 className="font-headline-md text-primary font-bold">Audit Request Received!</h4>
            <p className="font-body-sm text-on-surface-variant mt-2 max-w-sm">
              Our regional field engineering team in {formData.city} will contact you at <strong>{formData.phone || 'your phone number'}</strong> within 4 hours to coordinate site access.
            </p>
            <div className="mt-6 flex flex-col gap-2 w-full">
              <button
                onClick={() => {
                  onClose();
                  onLaunchDashboard();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-primary-container text-on-primary font-headline-sm text-sm font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch Live Enterprise Cockpit Now</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 px-4 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-3 font-body-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-sm text-xs text-on-surface-variant mb-1 font-semibold">
                  FULL NAME
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary text-sm"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs text-on-surface-variant mb-1 font-semibold">
                  OFFICIAL EMAIL
                </label>
                <input
                  required
                  type="email"
                  placeholder="r.sharma@campus.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-sm text-xs text-on-surface-variant mb-1 font-semibold">
                  PHONE NUMBER
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98450 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary text-sm"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs text-on-surface-variant mb-1 font-semibold">
                  METRO CITY
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary text-sm"
                >
                  <option value="Bengaluru">Bengaluru (KA)</option>
                  <option value="Mumbai MMR">Mumbai MMR (MH)</option>
                  <option value="Hyderabad">Hyderabad (TS)</option>
                  <option value="Delhi-NCR">Delhi-NCR (DL/HR/UP)</option>
                  <option value="Chennai">Chennai (TN)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-xs text-on-surface-variant mb-1 font-semibold">
                CAMPUS OR SOCIETY NAME
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Prestige Tech Vista, Tower A-D"
                value={formData.facilityName}
                onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary text-sm"
              />
            </div>

            <div>
              <label className="block font-label-sm text-xs text-on-surface-variant mb-1 font-semibold">
                FACILITY CATEGORY
              </label>
              <select
                value={formData.facilityType}
                onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                className="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:border-secondary text-sm"
              >
                <option value="Commercial Tech Park">Commercial Tech Park / SEZ</option>
                <option value="Residential RWA">Residential High-Rise RWA (200+ Flats)</option>
                <option value="Hospital & Healthcare">Hospital &amp; Healthcare Facility</option>
                <option value="Manufacturing & Industrial">Manufacturing / Process Plant</option>
                <option value="Educational / Hospitality">University Township / Luxury Hotel</option>
              </select>
            </div>

            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Confirm &amp; Dispatch Field Engineer</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
