import { CertificateOfAnalysis } from '../types';

export const COA_RECORDS: Record<string, CertificateOfAnalysis> = {
  'MS-2026-V9-0412': {
    lotNumber: 'MS-2026-V9-0412',
    catalogNumber: 'MS-HPLC-V09C',
    productName: '2.0 mL 9mm Screw Top Vial (Clear Type 1 Borosilicate)',
    manufactureDate: '2026-03-12',
    expiryDate: '2031-03-11',
    testDate: '2026-03-14',
    releaseStatus: 'Certified',
    analyst: 'Dr. V. Deshmukh (QC Officer)',
    approvedBy: 'R. K. Sharma (Head of QA)',
    regulatoryCompliance: [
      'USP <660> Containers - Glass (Type 1 Borosilicate Class A)',
      'European Pharmacopoeia EP 3.2.1 Glass Containers for Pharmaceutical Use',
      'ISO 1042 / DIN ISO 3585 Chemical Durability Class HGB 1',
      'RoHS & REACH Directive 2011/65/EU Compliant'
    ],
    storageConditions: 'Store in ambient dry cleanroom conditions (15°C - 30°C). Keep sealed until use.',
    tests: [
      { parameter: 'Visual Inspection (Clarity & Inclusions)', specification: 'Free from visible air bubbles, chips, or particulates', result: 'Pass (0/1000 defects)', status: 'Pass' },
      { parameter: 'Outer Diameter (OD)', specification: '11.60 ± 0.15 mm', result: '11.62 mm', status: 'Conforms' },
      { parameter: 'Total Height', specification: '32.00 ± 0.30 mm', result: '32.08 mm', status: 'Conforms' },
      { parameter: 'Neck Concentricity / Runout', specification: '≤ 0.30 mm TIR', result: '0.12 mm TIR', status: 'Conforms' },
      { parameter: 'Hydrolytic Resistance (Grain Test)', specification: '≤ 0.10 mL of 0.02M HCl / g glass', result: '0.04 mL / g glass', status: 'Pass' },
      { parameter: 'Extractable Leachables (HPLC-UV @ 210nm)', specification: 'No peak > 0.005 AU vs Blank', result: '< 0.002 AU (Zero Ghost Peaks)', status: 'Pass' },
      { parameter: 'Ceramic Enamel Adhesion (Organic Solvent Rub)', specification: 'No peel or smearing after 100 rubs with MeCN/MeOH', result: 'Pass (No degradation)', status: 'Pass' }
    ]
  },
  'MS-2026-SF-0891': {
    lotNumber: 'MS-2026-SF-0891',
    catalogNumber: 'MS-FILT-HP022',
    productName: '25mm 0.22 µm Hydrophilic PTFE Syringe Filter',
    manufactureDate: '2026-02-18',
    expiryDate: '2029-02-17',
    testDate: '2026-02-20',
    releaseStatus: 'Approved',
    analyst: 'A. Patel (Senior Analytical Chemist)',
    approvedBy: 'R. K. Sharma (Head of QA)',
    regulatoryCompliance: [
      'USP <88> Class VI Biological Reactivity in vivo Tests for Plastics',
      'FDA 21 CFR 177.1520 Polypropylene Homopolymer compliance',
      'ISO 9001:2015 Quality Management System',
      'Non-pyrogenic (< 0.25 EU/mL by LAL test)'
    ],
    storageConditions: 'Store in cool dry warehouse protected from direct sunlight.',
    tests: [
      { parameter: 'Bubble Point (Water @ 23°C)', specification: '≥ 2.6 bar (37.7 psi)', result: '3.1 bar (44.9 psi)', status: 'Pass' },
      { parameter: 'Water Flow Rate (1 bar differential)', specification: '≥ 18 mL/min/cm²', result: '22.4 mL/min/cm²', status: 'Pass' },
      { parameter: 'Housing Burst Pressure', specification: '≥ 6.0 bar (87 psi)', result: '7.8 bar (113 psi)', status: 'Conforms' },
      { parameter: 'Non-volatile UV Extractables (210 - 280 nm)', specification: '< 0.005 AU in 50% MeOH/H2O eluent', result: '0.0018 AU', status: 'Pass' },
      { parameter: 'Integrity Retention Test (B. diminuta)', specification: 'Complete retention (Titer Reduction > 10⁷)', result: 'Pass (Sterile Grade Efficiency)', status: 'Pass' }
    ]
  },
  'MS-2026-GW-1104': {
    lotNumber: 'MS-2026-GW-1104',
    catalogNumber: 'MS-GW-VF100A',
    productName: '100 mL Class A Volumetric Flask (Borosilicate 3.3)',
    manufactureDate: '2026-01-25',
    expiryDate: 'N/A (Permanent Calibration)',
    testDate: '2026-01-27',
    releaseStatus: 'Certified',
    analyst: 'S. N. Joshi (Metrology & Calibration)',
    approvedBy: 'R. K. Sharma (Head of QA)',
    regulatoryCompliance: [
      'ISO 1042 Laboratory Glassware - One-mark volumetric flasks',
      'DIN 12664 Class A Tolerances',
      'DIN ISO 3585 Borosilicate Glass 3.3 Hydrolytic Class 1'
    ],
    storageConditions: 'Clean laboratory cabinet. Avoid severe mechanical abrasion on calibration line.',
    tests: [
      { parameter: 'Gravimetric Volume at 20.0°C', specification: '100.00 ± 0.10 mL', result: '99.982 mL', status: 'Conforms' },
      { parameter: 'Expanded Uncertainty (k=2, 95% confidence)', specification: '≤ ± 0.04 mL', result: '± 0.028 mL', status: 'Pass' },
      { parameter: 'Linear Thermal Expansion Coefficient', specification: '(3.3 ± 0.1) × 10⁻⁶ K⁻¹', result: '3.31 × 10⁻⁶ K⁻¹', status: 'Conforms' },
      { parameter: 'Acid Resistance (Class according to ISO 1776)', specification: 'Class 1', result: 'Class 1 (Weight loss < 0.1 mg/100cm²)', status: 'Pass' },
      { parameter: 'Alkali Resistance (ISO 695)', specification: 'Class 2 or better', result: 'Class A2', status: 'Pass' }
    ]
  }
};
