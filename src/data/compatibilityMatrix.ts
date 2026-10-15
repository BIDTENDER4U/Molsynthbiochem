import { SolventCompatibility } from '../types';

export const COMPATIBILITY_MATRIX: SolventCompatibility[] = [
  {
    solvent: 'Acetonitrile (HPLC Grade)',
    category: 'Organic Polar',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Compatible',
    nylon: 'Compatible',
    pes: 'Moderate',
    mce: 'Not Recommended',
    notes: 'Universal HPLC reverse-phase eluent. Hydrophilic PTFE & Nylon are gold standards.'
  },
  {
    solvent: 'Methanol',
    category: 'Organic Polar',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Compatible',
    nylon: 'Compatible',
    pes: 'Compatible',
    mce: 'Moderate',
    notes: 'Widely used in HPLC mobile phases. Hydrophilic PTFE & PVDF provide minimal extractables.'
  },
  {
    solvent: 'Water & Aqueous Buffers (pH 2 - 10)',
    category: 'Aqueous',
    ptfeHydrophobic: 'Requires Pre-wetting',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Compatible',
    nylon: 'Compatible',
    pes: 'Compatible',
    mce: 'Compatible',
    notes: 'Hydrophobic PTFE requires alcohol pre-wet. Hydrophilic PTFE or PES provides fastest flow.'
  },
  {
    solvent: 'Tetrahydrofuran (THF)',
    category: 'Organic Polar',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Not Recommended',
    nylon: 'Moderate',
    pes: 'Not Recommended',
    mce: 'Not Recommended',
    notes: 'Aggressive cyclic ether. Strictly require PTFE membrane and virgin PP housing.'
  },
  {
    solvent: 'Dimethylsulfoxide (DMSO)',
    category: 'Organic Polar',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Moderate',
    nylon: 'Compatible',
    pes: 'Not Recommended',
    mce: 'Not Recommended',
    notes: 'High boiling polar solvent for solubility screening. PTFE recommended.'
  },
  {
    solvent: 'Hexane / Heptane (Normal Phase)',
    category: 'Organic Non-Polar',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Compatible',
    nylon: 'Compatible',
    pes: 'Not Recommended',
    mce: 'Compatible',
    notes: 'Typical normal phase chromatography solvent. Hydrophobic PTFE ideal.'
  },
  {
    solvent: 'Dichloromethane / Chloroform',
    category: 'Organic Non-Polar',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Not Recommended',
    nylon: 'Moderate',
    pes: 'Not Recommended',
    mce: 'Not Recommended',
    notes: 'Halogenated solvent. Attack PES and PVDF. Always use PTFE.'
  },
  {
    solvent: 'Trifluoroacetic Acid (TFA 0.1% - 1%)',
    category: 'Strong Acid / Base',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Compatible',
    nylon: 'Moderate',
    pes: 'Moderate',
    mce: 'Not Recommended',
    notes: 'Common ion-pairing agent in peptide HPLC. PTFE and PVDF demonstrate zero degradation.'
  },
  {
    solvent: 'Biological Proteins / Peptides / Enzymes',
    category: 'Aqueous',
    ptfeHydrophobic: 'Requires Pre-wetting',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Compatible',
    nylon: 'Moderate',
    pes: 'Compatible',
    mce: 'Moderate',
    notes: 'PVDF exhibits lowest non-specific protein binding (<1.5 µg/cm²), preserving titer.'
  },
  {
    solvent: 'Sodium Hydroxide (1M NaOH pH > 12)',
    category: 'Strong Acid / Base',
    ptfeHydrophobic: 'Compatible',
    ptfeHydrophilic: 'Compatible',
    pvdf: 'Moderate',
    nylon: 'Compatible',
    pes: 'Moderate',
    mce: 'Not Recommended',
    notes: 'Strong caustic wash. PTFE and Nylon 66 resist high alkaline conditions.'
  }
];
