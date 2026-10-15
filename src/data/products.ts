import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // HPLC Consumables
  {
    id: 'ms-vial-9mm-clear',
    catalogNumber: 'MS-HPLC-V09C',
    name: '2.0 mL 9mm Screw Top Vial (Clear)',
    category: 'hplc-consumables',
    subCategory: 'Vials & Closures',
    description: 'Precision-engineered 2.0 mL short-thread screw autosampler vial manufactured from USP Type 1, Class A 33-expansion borosilicate glass. Features write-on patch and ceramic volumetric graduation lines at 0.5 mL, 1.0 mL, and 1.5 mL.',
    specifications: [
      { label: 'Volume', value: '2.0 mL (Usable: 1.5 mL)' },
      { label: 'Thread / Neck', value: '9-425 Short Thread' },
      { label: 'Glass Specification', value: 'USP Type 1, Class A Borosilicate 33' },
      { label: 'Dimensions', value: '11.6 mm OD × 32 mm Height' },
      { label: 'Bottom Geometry', value: 'Flat, uniform wall thickness' },
      { label: 'Autosampler Compatibility', value: 'Agilent, Waters, Shimadzu, Thermo Scientific, PerkinElmer' }
    ],
    material: 'USP Type 1 Class A Borosilicate',
    packSize: '100 pcs / Polypropylene Tray (Sealed)',
    compatibility: 'Universal 9-425 Autosamplers',
    inStock: true,
    leadTime: 'Immediate Dispatch (24-48 hrs pan-India)',
    features: [
      'Strict concentricity tolerance prevents needle strikes in robotic arms',
      'Ceramic graduated markings and labeling patch resistant to organic solvents',
      'Thermal shock resistant (-80°C to +300°C)',
      'Certified batch CoA for zero ghost peaks in HPLC-UV & LC-MS'
    ],
    dimensions: '11.6 × 32 mm',
    popularFor: 'Routine HPLC/UHPLC Assay & Stability Testing',
    recommendedSeptaOrAccessory: 'MS-HPLC-C09B (Blue Bonded PTFE/Silicone Cap)',
    lotNumberSample: 'MS-2026-V9-0412'
  },
  {
    id: 'ms-vial-9mm-amber',
    catalogNumber: 'MS-HPLC-V09A',
    name: '2.0 mL 9mm Screw Top Vial (Amber)',
    category: 'hplc-consumables',
    subCategory: 'Vials & Closures',
    description: 'Light-sensitive 2.0 mL short thread amber borosilicate vial meeting USP <660> and EP spectral transmission requirements (<10% UV transmittance between 290nm and 450nm) to preserve photo-labile compounds.',
    specifications: [
      { label: 'Volume', value: '2.0 mL' },
      { label: 'Thread / Neck', value: '9-425 Short Thread' },
      { label: 'Glass Specification', value: 'USP Type 1 Amber Borosilicate 51' },
      { label: 'Spectral Transmission', value: '< 10% UV light transmission' },
      { label: 'Dimensions', value: '11.6 mm OD × 32 mm Height' },
      { label: 'Markings', value: 'White ceramic graduation with marking field' }
    ],
    material: 'USP Type 1 Amber Borosilicate',
    packSize: '100 pcs / Polypropylene Tray',
    compatibility: 'Universal 9-425 Autosamplers',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'High UV protection for light-sensitive vitamins, antibiotics, and active compounds',
      'Consistent wall thickness ensures reproducible thermal exchange in heated autosamplers',
      'High hydrolytic resistance class 1 (HGB 1)',
      'Cleanroom double packaged'
    ],
    dimensions: '11.6 × 32 mm',
    popularFor: 'Light-sensitive APIs, Vitamins, Photosensitive Metabolites',
    recommendedSeptaOrAccessory: 'MS-HPLC-C09B or Pre-slit MS-HPLC-C09PS',
    lotNumberSample: 'MS-2026-V9-0520'
  },
  {
    id: 'ms-cap-bonded-ptfe-silicone',
    catalogNumber: 'MS-HPLC-C09B',
    name: '9mm Blue Polypropylene Screw Cap with Bonded PTFE/Silicone Septa',
    category: 'hplc-consumables',
    subCategory: 'Septa & Closures',
    description: 'Precision molecularly bonded PTFE/Silicone septa permanently fused to a ribbed blue polypropylene screw cap. Guarantees zero septa push-through during repetitive needle penetration and eliminates volatile solvent evaporation.',
    specifications: [
      { label: 'Cap Size', value: '9-425 Thread' },
      { label: 'Septa Material', value: 'Red PTFE / White High-Purity Silicone' },
      { label: 'Bonding Technology', value: 'Ultrasonic molecular fusion (No adhesive)' },
      { label: 'Thickness', value: '1.0 mm (0.040")' },
      { label: 'Durometer Hardness', value: '45° Shore A (Optimized pierce force)' },
      { label: 'Extractables Profile', value: '< 0.005 AU by HPLC-DAD at 210 nm' }
    ],
    material: 'Polypropylene + Ultra-pure Medical Silicone / PTFE',
    packSize: '100 pcs / Polyethylene Sealed Pouch',
    compatibility: '9-425 Thread Vials',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Adhesive-free bonding prevents contamination or chromatographic ghost peaks',
      'Superior resealing characteristics for multi-injection sequences',
      'Chemically inert PTFE face shields aggressive organic solvents (MeCN, MeOH, THF)',
      'Consistent torque retention during prolonged sample queueing'
    ],
    dimensions: '9 mm ID',
    popularFor: 'Agilent & Shimadzu Autosamplers, High-Throughput Batch QC',
    lotNumberSample: 'MS-2026-C9-0198'
  },
  {
    id: 'ms-cap-preslit-ptfe-silicone',
    catalogNumber: 'MS-HPLC-C09PS',
    name: '9mm Pre-Slit PTFE/Silicone Screw Cap (LC-MS Grade)',
    category: 'hplc-consumables',
    subCategory: 'Septa & Closures',
    description: 'High-purity pre-slit PTFE/silicone septa closure engineered for fragile syringe needles, blunt needles, and ultra-high-throughput autosamplers. Prevents vacuum formation inside the vial during high injection volumes.',
    specifications: [
      { label: 'Cap Size', value: '9-425 Thread' },
      { label: 'Slit Configuration', value: 'Precision X-Cut / Y-Cut Pre-slit' },
      { label: 'Piercing Force', value: '< 2.5 N (Protects thin gauge needles)' },
      { label: 'Septa Material', value: 'Blue PTFE / White Silicone' },
      { label: 'Venting', value: 'Self-venting without evaporation leakage' }
    ],
    material: 'Polypropylene / Pre-slit PTFE-Silicone',
    packSize: '100 pcs / Pack',
    compatibility: 'Waters Acquity, Agilent 1290, Shimadzu Prominence',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Zero coring: prevents needle clogging and sample contamination',
      'Essential for UHPLC, LC-MS/MS, and high-precision micro-sampling',
      'Tested for volatile loss < 0.5% over 24 hours at 25°C',
      'Lot-tested trace organic extractables'
    ],
    dimensions: '9 mm ID',
    popularFor: 'UHPLC, LC-MS/MS, Sensitive Mass Spec Assays',
    lotNumberSample: 'MS-2026-CPS-0304'
  },
  {
    id: 'ms-headspace-vial-20ml',
    catalogNumber: 'MS-HPLC-HS20',
    name: '20 mL Crimp Top Headspace Vial (Beveled Finish)',
    category: 'hplc-consumables',
    subCategory: 'Headspace Vials',
    description: 'Heavy-duty 20 mL clear borosilicate glass headspace vial with 20mm beveled crimp neck finish, engineered to withstand internal pressures up to 5 bar during thermostat incubation in GC headspace analysis.',
    specifications: [
      { label: 'Volume', value: '20 mL' },
      { label: 'Neck Finish', value: '20 mm Beveled Crimp Top' },
      { label: 'Glass Specification', value: 'USP Type 1 Borosilicate 33' },
      { label: 'Bottom Geometry', value: 'Rounded bottom for uniform heat distribution' },
      { label: 'Operating Pressure', value: 'Tested up to 500 kPa (5 bar)' },
      { label: 'Dimensions', value: '22.5 mm OD × 75.5 mm Height' }
    ],
    material: 'USP Type 1 Borosilicate Glass',
    packSize: '100 pcs / Box',
    compatibility: 'PerkinElmer, Agilent 7697A, CTC PAL, Dani GC Headspace',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Pressure-safety certified for high-temperature incubation up to 150°C',
      'Rounded bottom slips smoothly into robotic carousels and heating blocks',
      'Tight beveled lip ensures airtight seal with 20mm aluminum magnetic crimp caps',
      'Low background residual volatiles'
    ],
    dimensions: '22.5 × 75.5 mm',
    popularFor: 'Residual Solvents Testing (USP <467>), Blood Alcohol, Volatile GC',
    recommendedSeptaOrAccessory: 'MS-GC-AC20 (20mm Aluminum Crimp Cap with PTFE/Butyl Septa)',
    lotNumberSample: 'MS-2026-HS-0782'
  },
  {
    id: 'ms-micro-insert-polyspring',
    catalogNumber: 'MS-HPLC-INS250',
    name: '250 µL Conical Glass Micro-Insert with Bottom Polymer Spring',
    category: 'hplc-consumables',
    subCategory: 'Micro-Inserts',
    description: 'Precision conical micro-insert with integrated polymer bottom spring for 2.0 mL vials. Eliminates dead volume down to < 2 µL, ensuring maximum sample recovery for scarce or precious biological aliquots.',
    specifications: [
      { label: 'Capacity', value: '250 µL (Dead volume < 2 µL)' },
      { label: 'Design', value: 'Conical base with self-centering bottom spring' },
      { label: 'Material', value: 'Class A Clear Borosilicate Glass' },
      { label: 'Dimensions', value: '6 mm OD × 29 mm Height' },
      { label: 'Spring Material', value: 'Shock-absorbing inert polymer' }
    ],
    material: 'Type 1 Borosilicate + Inert Polymer Spring',
    packSize: '100 pcs / Pack',
    compatibility: 'Fits standard 2 mL 9mm, 11mm, 8mm Autosampler Vials',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Self-centering spring cushions against mechanical needle bottom contact',
      'Allows reliable 1 µL injections without air bubbles or needle bent hazards',
      'Essential for clinical trials, bio-analytical pharmacokinetics, and forensics'
    ],
    dimensions: '6 × 29 mm',
    popularFor: 'Bio-equivalence studies, scarce peptide/protein aliquots',
    lotNumberSample: 'MS-2026-INS-0221'
  },

  // Filtration & Sample Prep
  {
    id: 'ms-filter-ptfe-hydrophilic',
    catalogNumber: 'MS-FILT-HP022',
    name: '25mm 0.22 µm Hydrophilic PTFE Syringe Filter',
    category: 'filtration',
    subCategory: 'Syringe Filters',
    description: 'Universal compatibility syringe filter utilizing surface-modified hydrophilic PTFE membrane. Requires NO pre-wetting with alcohol; filters both aqueous and aggressive organic solvents with ultra-low UV extractable background.',
    specifications: [
      { label: 'Membrane Type', value: 'Hydrophilic Polytetrafluoroethylene (PTFE)' },
      { label: 'Diameter', value: '25 mm' },
      { label: 'Pore Size', value: '0.22 µm' },
      { label: 'Housing', value: 'Medical Grade Virgin Polypropylene (Ultrasonically Welded)' },
      { label: 'Filtration Area', value: '4.15 cm²' },
      { label: 'Hold-up Volume', value: '< 100 µL' },
      { label: 'Inlet / Outlet', value: 'Female Luer Lock inlet / Male Luer Slip outlet' }
    ],
    material: 'Hydrophilic PTFE / Virgin Polypropylene Housing',
    packSize: '100 pcs / Pack',
    compatibility: 'Acetonitrile, Methanol, THF, DMSO, Water, Strong Acids/Alkalis',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Universal compatibility: filters 100% aqueous, organic, or mixed mobile phases',
      'Zero adhesives or plasticizers: ultrasonic weld avoids leachables',
      'Protects HPLC/UHPLC column frits and injector rotor seals from clogging',
      'Burst pressure rated > 87 psi (6 bar)'
    ],
    dimensions: '25 mm Diameter',
    popularFor: 'UHPLC Sample Clarification, Dissolution Testing, Aggressive Solvents',
    lotNumberSample: 'MS-2026-SF-0891'
  },
  {
    id: 'ms-filter-pvdf-045',
    catalogNumber: 'MS-FILT-PV045',
    name: '25mm 0.45 µm PVDF Syringe Filter (Low Protein Binding)',
    category: 'filtration',
    subCategory: 'Syringe Filters',
    description: 'Hydrophilic Polyvinylidene Fluoride (PVDF) syringe filter offering exceptionally low protein and peptide adsorption. Preferred choice for biological sample preparation, monoclonal antibodies, and enzymatic solutions.',
    specifications: [
      { label: 'Membrane Type', value: 'Hydrophilic PVDF' },
      { label: 'Diameter', value: '25 mm' },
      { label: 'Pore Size', value: '0.45 µm' },
      { label: 'Protein Binding', value: '< 1.5 µg/cm² (Bovine Serum Albumin test)' },
      { label: 'Maximum Temp', value: '100°C' },
      { label: 'Operating Pressure', value: 'Max 75 psi (5.2 bar)' }
    ],
    material: 'PVDF Membrane / Polypropylene Housing',
    packSize: '100 pcs / Pack',
    compatibility: 'Biological solutions, dilute organics, aqueous HPLC eluents',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Preserves sample potency with near-zero active pharmaceutical binding',
      'Broad chemical compatibility with mild organic eluents',
      'Sterile gamma-irradiated versions available upon request'
    ],
    dimensions: '25 mm Diameter',
    popularFor: 'Biotech formulations, peptide sequencing, fermentation broth',
    lotNumberSample: 'MS-2026-SF-0914'
  },
  {
    id: 'ms-filter-nylon-022',
    catalogNumber: 'MS-FILT-NY022',
    name: '33mm 0.22 µm Nylon 66 Syringe Filter',
    category: 'filtration',
    subCategory: 'Syringe Filters',
    description: 'Naturally hydrophilic Nylon 66 membrane filter housed in a heavy-duty 33mm ring-reinforced casing. Engineered for high-throughput filtration of general analytical solutions and solvent degassing.',
    specifications: [
      { label: 'Membrane Type', value: 'Nylon 66 (Polyamide)' },
      { label: 'Diameter', value: '33 mm (Extra-large surface area)' },
      { label: 'Pore Size', value: '0.22 µm' },
      { label: 'Effective Filtration Area', value: '4.6 cm²' },
      { label: 'Burst Pressure', value: '> 100 psi' },
      { label: 'pH Range', value: '3 - 12' }
    ],
    material: 'Nylon 66 / Polypropylene Housing',
    packSize: '100 pcs / Pack',
    compatibility: 'Water, Methanol, Acetonitrile mixtures, alkaline buffers',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      '33mm housing provides 30% faster flow rates and less hand fatigue',
      'Robust chemical resistance to alkaline solutions and common alcohols',
      'Tight pore uniformity prevents particulate contamination in columns'
    ],
    dimensions: '33 mm Diameter',
    popularFor: 'General HPLC mobile phase preparation, routine QA/QC testing',
    lotNumberSample: 'MS-2026-SF-0773'
  },
  {
    id: 'ms-membrane-disc-47mm',
    catalogNumber: 'MS-MEMB-47NY',
    name: '47mm 0.45 µm Nylon Membrane Disc Filters',
    category: 'filtration',
    subCategory: 'Disc Membranes',
    description: 'High-purity disc membranes for solvent filtration and mobile phase degassing in glass vacuum assemblies. Prevents baseline noise and bubbles in high-pressure quaternary HPLC pump heads.',
    specifications: [
      { label: 'Diameter', value: '47 mm' },
      { label: 'Pore Size', value: '0.45 µm' },
      { label: 'Membrane Material', value: 'Hydrophilic Nylon 66' },
      { label: 'Wettability', value: 'Spontaneously Hydrophilic' },
      { label: 'Thickness', value: '130 ± 15 µm' },
      { label: 'Autoclavable', value: 'Yes (121°C at 1 bar for 30 min)' }
    ],
    material: 'Nylon 66 High-Grade Membrane',
    packSize: '100 Discs / Box (Interleaved paper separated)',
    compatibility: 'Standard 47mm Glass Filtration Assemblies',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Uniform pore structure eliminates pump check-valve sticking caused by debris',
      'Zero fibers or shed particulate matter',
      'Each pack includes lot-numbered compliance certificate'
    ],
    dimensions: '47 mm Disc',
    popularFor: 'Mobile Phase Preparation, Vacuum Degassing, Environmental Water Testing',
    lotNumberSample: 'MS-2026-MD-0129'
  },
  {
    id: 'ms-glass-filtration-assembly',
    catalogNumber: 'MS-FILT-GL1000',
    name: 'All-Glass Vacuum Filtration Assembly (1000 mL)',
    category: 'filtration',
    subCategory: 'Filtration Hardware',
    description: 'Complete 47mm borosilicate 3.3 vacuum filtration system consisting of a 1000 mL heavy-walled receiving flask, 300 mL graduated funnel, anodized aluminum clamp, and fritted glass filter support base with GL45 ground joint.',
    specifications: [
      { label: 'Flask Capacity', value: '1000 mL' },
      { label: 'Funnel Capacity', value: '300 mL (Graduated from 50 to 300 mL)' },
      { label: 'Filter Diameter', value: '47 mm / 50 mm' },
      { label: 'Fritted Disc Porosity', value: 'G2 / G3 (Coarse uniform distribution)' },
      { label: 'Vacuum Connection', value: '6 mm Hose Barb with GL14 screw thread' }
    ],
    material: 'Borosilicate 3.3 Glass + Anodized Aluminum Clamp',
    packSize: 'Complete Set (Flask, Funnel, Base, Clamp, Stopper)',
    compatibility: 'Vacuum pumps, 47mm Membrane Discs',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Heavy-wall borosilicate construction certified for safe vacuum down to 10 mbar',
      'Precision ground joint ensures leak-free vacuum retention',
      'Fritted glass disc provides flat, non-wrinkling support for membranes'
    ],
    dimensions: 'Height: 480 mm overall',
    popularFor: 'Daily HPLC Mobile Phase Degassing, Particulate Burden Testing',
    lotNumberSample: 'MS-2026-GFA-0441'
  },

  // Laboratory Glassware
  {
    id: 'ms-volumetric-flask-class-a',
    catalogNumber: 'MS-GW-VF100A',
    name: '100 mL Class A Volumetric Flask with Batch Certificate',
    category: 'laboratory-glassware',
    subCategory: 'Volumetric Ware',
    description: 'High-precision Class A volumetric flask manufactured in strict accordance with ISO 1042 and DIN 12664 standards. Calibrated "In" (to contain) at 20°C with printed calibration mark in durable blue enamel and individual certificate of conformity.',
    specifications: [
      { label: 'Nominal Volume', value: '100 mL' },
      { label: 'Accuracy Class', value: 'Class A (Batch Certified)' },
      { label: 'Tolerance', value: '± 0.10 mL' },
      { label: 'Stopper Size', value: 'NS 14/23 (Polyethylene & Glass Stopper)' },
      { label: 'Glass Specification', value: 'Borosilicate 3.3 (DIN ISO 3585)' },
      { label: 'Thermal Expansion', value: '3.3 × 10⁻⁶ K⁻¹' }
    ],
    material: 'Borosilicate 3.3 Glass',
    packSize: '2 pcs / Protective Foam Box (Includes Calibration Certificate)',
    compatibility: 'Standard Analytical Laboratory Reagents & Solvents',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Calibrated on robotic laser measurement benches for razor-sharp meniscus alignment',
      'Permanent high-contrast blue ceramic enamel fired at 580°C',
      'Outstanding chemical resistance to acid, alkaline, and neutral salt solutions',
      'Available with individual DAkkS/NABL traceable certificate on request'
    ],
    dimensions: 'Height: 180 mm, Base: 60 mm',
    popularFor: 'Standard solution preparation, pharmaceutical assay calibration curves',
    lotNumberSample: 'MS-2026-GW-1104'
  },
  {
    id: 'ms-beaker-low-form-500',
    catalogNumber: 'MS-GW-BK500',
    name: '500 mL Borosilicate 3.3 Low Form Beaker (Griffin Style)',
    category: 'laboratory-glassware',
    subCategory: 'General Labware',
    description: 'Heavy-duty borosilicate 3.3 beaker with reinforced rim and spout designed for clean, drip-free pouring. Uniform wall distribution maximizes mechanical strength and thermal shock resistance up to 500°C.',
    specifications: [
      { label: 'Capacity', value: '500 mL' },
      { label: 'Graduation Range', value: '100 to 400 mL (50 mL intervals)' },
      { label: 'Standard', value: 'DIN 12331 / ISO 3819' },
      { label: 'Dimensions', value: '88 mm OD × 120 mm Height' },
      { label: 'Pouring Spout', value: 'Optimized anti-drip contour' }
    ],
    material: 'Borosilicate 3.3 Glass',
    packSize: '6 pcs / Master Box',
    compatibility: 'Magnetic stirrers, hot plates, heating mantles',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Withstands rapid heating and sudden cooling cycles without micro-cracks',
      'White ceramic graduation lines and generous pencil matte marking area',
      'Chemically inert to aggressive mineral acids, organic solvents, and alkalis'
    ],
    dimensions: '88 × 120 mm',
    popularFor: 'Reagent dissolution, titration preparation, crystallization',
    lotNumberSample: 'MS-2026-GW-0655'
  },
  {
    id: 'ms-gl45-media-bottle-1000',
    catalogNumber: 'MS-GW-GL1000C',
    name: '1000 mL GL45 Laboratory Reagent / Media Storage Bottle (Clear)',
    category: 'laboratory-glassware',
    subCategory: 'Storage Bottles',
    description: 'Standard GL45 thread pharmaceutical storage bottle with blue polypropylene screw cap and anti-drip pouring ring. Autoclavable up to 140°C. Permanent white graduation marks and large labeling patch.',
    specifications: [
      { label: 'Volume', value: '1000 mL' },
      { label: 'Neck Thread', value: 'GL 45 (DIN 168-1)' },
      { label: 'Cap Material', value: 'Polypropylene (PP), steam autoclavable at 140°C' },
      { label: 'Pouring Ring', value: 'Replaceable anti-drip PP ring' },
      { label: 'Dimensions', value: '101 mm OD × 225 mm Height' }
    ],
    material: 'USP Type 1 Class A Borosilicate 3.3',
    packSize: '10 pcs / Master Carton',
    compatibility: 'HPLC mobile phase delivery systems, autoclave sterilizers',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Retains seal integrity under vacuum and positive pressure during solvent degassing',
      'Directly compatible with HPLC solvent reservoir caps and manifold tubes',
      'Thermal shock resistance delta 100 K'
    ],
    dimensions: '101 × 225 mm',
    popularFor: 'HPLC Eluent Storage, Cell Culture Media, Buffer Preparation',
    lotNumberSample: 'MS-2026-MB-0932'
  },
  {
    id: 'ms-measuring-cylinder-250',
    catalogNumber: 'MS-GW-CY250A',
    name: '250 mL Class A Graduated Measuring Cylinder',
    category: 'laboratory-glassware',
    subCategory: 'Volumetric Ware',
    description: 'Class A graduated cylinder with robust hexagonal base to prevent tipping and rolling. Features clear blue graduation markings with circular marks at main points and spout for controlled liquid dispensing.',
    specifications: [
      { label: 'Nominal Volume', value: '250 mL' },
      { label: 'Accuracy Class', value: 'Class A (DIN EN ISO 4788)' },
      { label: 'Tolerance', value: '± 1.00 mL' },
      { label: 'Subdivision', value: '2.0 mL' },
      { label: 'Base Geometry', value: 'Stable Hexagonal Glass Foot' }
    ],
    material: 'Borosilicate 3.3 Glass',
    packSize: '2 pcs / Pack with Batch Certificate',
    compatibility: 'Laboratory volumetric measuring',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Calibrated "Ex" (to deliver) with standardized 30-second drainage time',
      'High-impact hexagonal base minimizes breakage on laboratory benchtops',
      'Ceramic markings retain clarity after repeated dishwashing and autoclaving'
    ],
    dimensions: 'Height: 320 mm',
    popularFor: 'Accurate liquid measurement and solvent dispensing',
    lotNumberSample: 'MS-2026-CY-0428'
  },

  // Analytical Instruments
  {
    id: 'ms-inst-uvvis-spectro',
    catalogNumber: 'MS-INST-UV9100',
    name: 'UV-Vis Double Beam Spectrophotometer (190 - 1100 nm)',
    category: 'analytical-instruments',
    subCategory: 'Spectroscopy',
    description: 'High-performance split double-beam spectrophotometer with 1.0 nm spectral bandwidth. Equipped with pre-aligned deuterium and tungsten-halogen lamps, blazed holographic grating, and silicone photodiode detectors for pharmaceutical compliance (USP, EP, 21 CFR Part 11 ready).',
    specifications: [
      { label: 'Wavelength Range', value: '190.0 nm to 1100.0 nm' },
      { label: 'Spectral Bandwidth', value: '1.0 nm (High Resolution)' },
      { label: 'Photometric Accuracy', value: '± 0.002 A (0 - 0.5 A), ± 0.004 A (0.5 - 1.0 A)' },
      { label: 'Wavelength Accuracy', value: '± 0.3 nm with automatic wavelength calibration' },
      { label: 'Stray Light', value: '≤ 0.03% T at 220 nm (NaI) & 360 nm (NaNO₂)' },
      { label: 'Software & Connectivity', value: 'Touchscreen console + USB/LAN PC Workstation Suite' }
    ],
    material: 'Corrosion-resistant Coated Steel & Optical Quartz Subassemblies',
    packSize: 'Complete Instrument with 4-cell Glass & Quartz Cuvette Set',
    compatibility: 'PC Windows 10/11, 21 CFR Part 11 Compliant Audit Trail',
    inStock: true,
    leadTime: '3 - 5 Business Days Delivery & On-Site IQ/OQ Support',
    features: [
      'Automated baseline scan, photometric quantitative assay, kinetics, and DNA/protein ratio',
      'Dual-lamp source with automatic changeover between 300 - 360 nm',
      'Complete IQ/OQ validation protocols and NIST traceable holmium oxide check filters included'
    ],
    dimensions: '580 × 420 × 260 mm (Net Weight: 26 kg)',
    popularFor: 'Pharma Formulation QC, Dissolution Quantitation, R&D Method Development',
    lotNumberSample: 'MS-2026-UV-8801'
  },
  {
    id: 'ms-inst-ph-meter-bench',
    catalogNumber: 'MS-INST-PH800',
    name: 'Microprocessor Digital Benchtop pH / Conductivity / Temp Meter',
    category: 'analytical-instruments',
    subCategory: 'Electrochemistry',
    description: 'Multi-parameter analytical lab meter providing simultaneous readouts of pH, mV, conductivity, TDS, salinity, and temperature. Incorporates GLP data logging with up to 5-point automated buffer recognition.',
    specifications: [
      { label: 'pH Range & Resolution', value: '-2.000 to 20.000 pH (Resolution: 0.001 / 0.01 pH)' },
      { label: 'pH Accuracy', value: '± 0.002 pH' },
      { label: 'Conductivity Range', value: '0.000 µS/cm to 200.0 mS/cm (Auto-ranging)' },
      { label: 'Temperature Compensation', value: 'ATC 0.0 to 100.0°C' },
      { label: 'Calibration Points', value: '1 to 5 points (NIST, USA, DIN buffers automatic)' },
      { label: 'Data Memory', value: '500 data sets with GLP timestamp and ID' }
    ],
    material: 'Chemical-resistant ABS Casing + Glass Refillable pH Electrode',
    packSize: 'Unit with Electrode, ATC Probe, Articulated Stand, Buffer Solutions',
    compatibility: 'Laboratory bench, USB PC Export, Thermal Printer',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Large backlit graphic LCD displaying electrode slope and stability indicator',
      'Automatic endpoint recognition locks stable readings to eliminate operator bias',
      'Password protection and calibration reminder alerts'
    ],
    dimensions: '210 × 188 × 60 mm',
    popularFor: 'Mobile Phase pH Adjustment, Formulation Buffers, QC Compliance',
    lotNumberSample: 'MS-2026-PH-4109'
  },
  {
    id: 'ms-inst-sonic-bath-35l',
    catalogNumber: 'MS-INST-US35L',
    name: 'Digital Ultrasonic Bath with Sweep & Degas Mode (3.5 L)',
    category: 'analytical-instruments',
    subCategory: 'Sample Preparation',
    description: 'Laboratory-grade ultrasonic cleaner and mobile phase degassing bath. Features high-frequency 40 kHz transducers with specialized Degas Mode to rapidly expel micro-air bubbles from HPLC solvents.',
    specifications: [
      { label: 'Tank Capacity', value: '3.5 Liters' },
      { label: 'Ultrasonic Frequency', value: '40 kHz with Frequency Sweep Technology' },
      { label: 'Ultrasonic Power', value: '120 Watts (Peak: 240 W)' },
      { label: 'Heating Power', value: '150 Watts (Room temp to 80°C adjustable)' },
      { label: 'Tank Material', value: 'Deep-drawn Stainless Steel SUS 304' },
      { label: 'Degas Mode', value: 'Intermittent pulse degassing for HPLC eluents' }
    ],
    material: 'Stainless Steel SUS 304 Tank & Outer Shell',
    packSize: 'Unit includes Stainless Steel Basket & Acoustic Lid',
    compatibility: 'HPLC mobile phase bottles, glassware cleaning, dispersion',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Degas mode accelerates mobile phase preparation by 50% vs conventional sonicators',
      'Sweep mode eliminates ultrasonic dead zones and standing waves for uniform action',
      'Low noise acoustic damping and rear drain tap'
    ],
    dimensions: 'Tank: 240 × 140 × 100 mm',
    popularFor: 'HPLC Mobile Phase Degassing, Nanoparticle Dispersion, Syringe Cleaning',
    lotNumberSample: 'MS-2026-UB-1044'
  },
  {
    id: 'ms-inst-balance-analytical',
    catalogNumber: 'MS-INST-BAL220',
    name: 'Precision Analytical Electronic Balance (0.1 mg / 220 g)',
    category: 'analytical-instruments',
    subCategory: 'Precision Weighing',
    description: 'High-precision pharmaceutical analytical balance with 0.0001 g (0.1 mg) readability, motorized internal automated calibration, electromagnetic force restoration cell, and full-glass draft shield.',
    specifications: [
      { label: 'Weighing Capacity', value: '220 g' },
      { label: 'Readability', value: '0.1 mg (0.0001 g)' },
      { label: 'Repeatability', value: '± 0.1 mg' },
      { label: 'Linearity', value: '± 0.2 mg' },
      { label: 'Pan Size', value: 'Ø 90 mm Stainless Steel Pan' },
      { label: 'Draft Shield', value: '3-door sliding glass shield with anti-static coating' }
    ],
    material: 'Cast Aluminum Body, Glass Shield, Stainless Steel Weigh Pan',
    packSize: '1 Complete Unit with Leveling Feet, Power Adapter, Calibration Weight',
    compatibility: 'GLP/GMP Printer, RS232 & USB PC Link',
    inStock: true,
    leadTime: '2 - 4 Business Days',
    features: [
      'Internal motorized self-calibration triggered by time or ambient temperature change',
      'Settling time < 2.5 seconds with acoustic stabilization confirmation',
      'Density determination mode and formulation recipe weighing'
    ],
    dimensions: '345 × 215 × 345 mm',
    popularFor: 'Standard reference weighing, API micro-dispensing, assay prep',
    lotNumberSample: 'MS-2026-BAL-7720'
  },

  // Surgical & Cleanroom
  {
    id: 'ms-surg-gloves-nitrile',
    catalogNumber: 'MS-SURG-GLV-N',
    name: 'Medical Grade Powder-Free Cleanroom Nitrile Gloves',
    category: 'surgical-cleanroom',
    subCategory: 'Cleanroom Apparel',
    description: '100% synthetic nitrile examination gloves, accelerator-free and powder-free with textured fingertips for secure wet-grip handling. Certified for handling cytostatics, chemotherapy drugs, and chemical solvents.',
    specifications: [
      { label: 'Material', value: 'Pure Nitrile Butadiene Rubber (NBR)' },
      { label: 'Purity Standard', value: 'Powder-free, low chemical residues' },
      { label: 'AQL Quality Level', value: 'AQL 1.5 (EN 455 Medical Device Standards)' },
      { label: 'Thickness', value: 'Cuff 0.08mm, Palm 0.10mm, Finger 0.12mm' },
      { label: 'Sizes Available', value: 'Small (S), Medium (M), Large (L), XL' }
    ],
    material: 'Nitrile (Latex-Free & Accelerator-Free)',
    packSize: '100 pcs / Dispenser Box (10 Boxes / Case)',
    compatibility: 'Cleanroom environments ISO Class 6-8, chemical labs',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Zero natural rubber latex proteins: eliminates Type 1 allergic risks',
      'Micro-textured fingertips ensure tactile dexterity with micro-pipettes',
      'Chemical splash tested against acetonitrile, methanol, isopropanol'
    ],
    dimensions: 'Length: 240 mm standard bead cuff',
    popularFor: 'QC Laboratory testing, cleanroom manufacturing, surgical handling',
    lotNumberSample: 'MS-2026-GL-3301'
  },
  {
    id: 'ms-surg-forceps-ss316',
    catalogNumber: 'MS-SURG-FOR316',
    name: 'Precision Surgical & Membrane Forceps (Stainless Steel 316)',
    category: 'surgical-cleanroom',
    subCategory: 'Surgical Instruments',
    description: 'Premium surgical stainless steel 316 tweezers with smooth, flat non-serrated tips specifically designed for delicate handling of membrane filters without tearing or puncturing the microporous matrix.',
    specifications: [
      { label: 'Material', value: 'AISI 316 Surgical Grade Stainless Steel' },
      { label: 'Tip Style', value: 'Flat, rounded non-serrated spatula tips' },
      { label: 'Length', value: '115 mm (4.5")' },
      { label: 'Autoclavable', value: 'Yes (134°C steam sterilizable repeatedly)' },
      { label: 'Finish', value: 'Electropolished, corrosion-resistant matte' }
    ],
    material: 'AISI 316 Surgical Stainless Steel',
    packSize: 'Individual sterile pouch packaging',
    compatibility: 'Laboratory membrane handling, surgical sample transfer',
    inStock: true,
    leadTime: 'Immediate Dispatch',
    features: [
      'Rounded paddle tips prevent accidental membrane rupture during placement',
      'Molybdenum-bearing SS 316 provides superior resistance to chlorides and pitting',
      'Balanced spring tension reduces operator finger fatigue'
    ],
    dimensions: '115 mm length',
    popularFor: 'Membrane filtration handling, microbiological plating, dissection',
    lotNumberSample: 'MS-2026-SI-0599'
  }
];

export const CATEGORY_LABELS: Record<Product['category'], string> = {
  'all': 'All Products',
  'hplc-consumables': 'HPLC Consumables',
  'filtration': 'Filtration & Sample Prep',
  'laboratory-glassware': 'Laboratory Glassware',
  'analytical-instruments': 'Analytical Instruments',
  'surgical-cleanroom': 'Surgical & Cleanroom'
};
