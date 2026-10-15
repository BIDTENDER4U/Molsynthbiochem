import React, { useState } from 'react';
import { Truck, MapPin, Clock, ShieldCheck, Box } from 'lucide-react';

export const SupplyChainHubs: React.FC = () => {
  const [activeCorridor, setActiveCorridor] = useState<string>('mumbai-pune');

  const corridors = [
    {
      id: 'mumbai-pune',
      name: 'Mumbai - Thane - Pune Corridor',
      states: 'Maharashtra',
      transitTime: 'Same Day to 24 Hours',
      dispatchHub: 'Navi Mumbai HQ',
      keyClusters: 'Kurla, Turbhe, Rabale, Taloja, Chakan, Hinjewadi, Ranjangaon, Tarapur MIDC',
      description: 'Dedicated daily express couriers and direct company delivery vehicles for urgent QC release batches.',
    },
    {
      id: 'gujarat',
      name: 'Gujarat Pharmaceutical Belt',
      states: 'Gujarat',
      transitTime: '24 Hours',
      dispatchHub: 'Dhule & Navi Mumbai',
      keyClusters: 'Ahmedabad (Changodar/Sanand), Vadodara, Ankleshwar, Panoli, Bharuch, Vapi, Sarigam',
      description: 'Overnight road transport ensuring continuous replenishment for bulk API and formulation plants.',
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad Genome Valley & Pharma City',
      states: 'Telangana & Andhra Pradesh',
      transitTime: '24 - 48 Hours',
      dispatchHub: 'Navi Mumbai Air Express',
      keyClusters: 'Genome Valley, Shamirpet, Bollaram, Jeedimetla, Pashamylaram, Visakhapatnam Pharma City',
      description: 'Direct priority air freight and express surface logistics with lot-synchronized CoAs.',
    },
    {
      id: 'baddi-north',
      name: 'Northern Formulations & Baddi Cluster',
      states: 'Himachal Pradesh, Punjab, Delhi-NCR, Uttarakhand',
      transitTime: '48 Hours',
      dispatchHub: 'Navi Mumbai Air / Express Surface',
      keyClusters: 'Baddi-Barotiwala-Nalagarh, Paonta Sahib, Haridwar, Gurugram, Derabassi',
      description: 'Consolidated temperature-buffered air cargo dispatch to Chandigarh and Delhi airports.',
    },
    {
      id: 'bengaluru-south',
      name: 'Bengaluru Biotech & Chennai Formulations',
      states: 'Karnataka & Tamil Nadu',
      transitTime: '24 - 48 Hours',
      dispatchHub: 'Navi Mumbai Central Warehouse',
      keyClusters: 'Electronic City, Peenya, Bommasandra, Sriperumbudur, Guindy, Alathur',
      description: 'Seamless supply chain coverage for biologics, analytical CROs, and clinical research centers.',
    },
  ];

  const selectedCorridor = corridors.find((c) => c.id === activeCorridor) || corridors[0];

  return (
    <section id="supply-chain" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-700 font-mono">
            Pan-India Logistics &amp; Warehousing
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Strategic Dual-Hub Distribution Network
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Molsynth Biochem LLP maintains synchronized inventory at its Corporate Office in Navi Mumbai and Registered Hub in Dhule, eliminating stock-outs and ensuring rapid delivery to major pharmaceutical and biotech clusters.
          </p>
        </div>

        {/* Dual Hub Highlight Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hub 1: Navi Mumbai */}
          <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span className="font-semibold text-cyan-700">CORPORATE HQ &amp; IMPORT HUB</span>
                <span>MAHARASHTRA</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-900 shrink-0" />
                Navi Mumbai Operations Center
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Aaramus Complex CHS, Flat No. 802-C, Plot No. 87, Sector-21, Ulwe, Navi Mumbai - 410206. Strategic proximity to JNPT international container terminal and Mumbai air cargo.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-700 font-mono">
              <div>
                <span className="text-slate-400 block text-[11px]">Primary Function:</span>
                <span>Import QA &amp; Express Air Dispatch</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Inventory Depth:</span>
                <span>HPLC Vials, Septa &amp; Instruments</span>
              </div>
            </div>
          </div>

          {/* Hub 2: Dhule */}
          <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span className="font-semibold text-cyan-700">REGISTERED FACILITY &amp; CENTRAL DEPOT</span>
                <span>MAHARASHTRA</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-900 shrink-0" />
                Dhule Central Distribution Facility
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Plot No. 2, Aadhar Nagar, Nakane Road, Dhule - 424002. Strategically positioned at the intersection of National Highways connecting Maharashtra, Gujarat, and Central India.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-700 font-mono">
              <div>
                <span className="text-slate-400 block text-[11px]">Primary Function:</span>
                <span>Central Bulk Stock &amp; Road Logistics</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Inventory Depth:</span>
                <span>Glassware, Filtration &amp; Consumables</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Corridor Transit Explorer */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
              <Truck className="w-4 h-4 text-slate-700" />
              Pan-India Delivery Timelines &amp; Regional Corridors
            </h3>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Select corridor to inspect transit details
            </span>
          </div>

          {/* Corridor selector buttons */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {corridors.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCorridor(c.id)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCorridor === c.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Active Corridor Inspection Card */}
          <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <h4 className="text-base font-bold text-slate-900">{selectedCorridor.name}</h4>
                <div className="text-xs text-slate-500 font-mono">
                  Covering: {selectedCorridor.states}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-900 bg-white px-3 py-1.5 rounded border border-slate-200 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>Estimated Transit: {selectedCorridor.transitTime}</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-semibold text-slate-700 block mb-1">Industrial Clusters Served:</span>
                <p className="text-slate-600">{selectedCorridor.keyClusters}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-700 block mb-1">Dispatch Logistics Plan:</span>
                <p className="text-slate-600">{selectedCorridor.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Packaging Safety & Zero-Breakage Policy */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 mb-1">
              <Box className="w-4 h-4 text-cyan-600" />
              <span>Shock-Proof Glass Packaging</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vials are housed in rigid acrylic trays and nested in high-density honeycomb cartons to prevent transit micro-fractures.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Cleanroom Hermetic Sealing</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Syringe filters and closures are double-bagged in cleanroom moisture-barrier polyethylene to eliminate airborne particulates.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 mb-1">
              <Clock className="w-4 h-4 text-cyan-600" />
              <span>Synchronized CoA with Consignment</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every dispatched lot is matched with digitized certificates of analysis emailed instantly upon dispatch for seamless audit readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
