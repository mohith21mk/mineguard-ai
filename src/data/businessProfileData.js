// MINEGUARD AI - Default Mine Profile Foundation (SIH26024)
// Clearly labeled [DEMO DATA] for prototype initialization

export const initialBusinessProfile = {
  businessName: 'North Karanpura Coal Block 04 [DEMO DATA]',
  businessType: 'Public Sector Undertaking / CIL Joint Venture',
  industry: 'Coal Mining & Mineral Extraction',
  sector: 'Opencast Coal Mining (OCP)',
  establishedDate: '12 January 2019',
  companySize: 'Major Mining Lease (3.5 MTPA)',
  employees: 1250,
  annualTurnover: '₹480.0 Crore',
  registeredAddress: 'North Karanpura Coalfield, Sector IV,\nBarkagaon Block',
  city: 'Ranchi',
  state: 'Jharkhand',
  country: 'India',
  pinCode: '834001',
  operatingLocation: 'Ranchi / Hazaribagh, Jharkhand',
  primaryActivity: 'Opencast Coal Extraction & Heavy Blasting',
  secondaryActivities: 'Coal Handling Plant (CHP), Rake Loading, Land Reclamation',
  manufacturingActivity: 'Yes',
  importActivities: 'No',
  exportActivities: 'No',
  environmentalImpact: 'Critical (Red Category - Coal Mining)',
  operatingStatus: 'Active',
  cin: 'U10100JH2019GOI012345',
  pan: 'AAACR1234F',
  gstin: '20AAACR1234F1Z5',
  msmeRegistration: 'Mining Lease Reg: JHK-CL-2026-004',
  udyamNumber: 'DGMS-EZ-RNC-CMR-1049',
};

export const profileOptions = {
  businessTypes: [
    'Public Sector Undertaking / CIL Joint Venture',
    'Captive Coal Mining Company',
    'Commercial Coal Mine Allottee',
    'Joint Venture Mining Operator (MDO)',
    'State Mineral Development Corporation',
  ],
  industries: [
    'Coal Mining & Mineral Extraction',
    'Opencast Mining (OCP)',
    'Underground Coal Mining (UGP)',
    'Coal Washery & Beneficiation',
    'Coal Evacuation & Siding Logistics',
  ],
  sectors: [
    'Opencast Coal Mining (OCP)',
    'Underground Coal Mining (UGP)',
    'Mixed / Contiguous Seam Mining',
    'Coal Washery / Heavy Media Separation',
    'Rail Siding & Rapid Loading System',
  ],
  companySizes: [
    'Small Mine Lease (< 0.5 MTPA)',
    'Medium Mine Lease (0.5 - 2.0 MTPA)',
    'Major Mining Lease (2.0 - 5.0 MTPA)',
    'Mega Mining Complex (> 5.0 MTPA)',
  ],
  states: [
    'Jharkhand',
    'Odisha',
    'Chhattisgarh',
    'West Bengal',
    'Madhya Pradesh',
    'Telangana',
    'Maharashtra',
    'Assam',
  ],
  environmentalImpacts: [
    'Critical (Red Category - Coal Mining)',
    'High Impact (Blasting & Overburden)',
    'Moderate Impact (Washery / Siding)',
  ],
  operatingStatuses: [
    'Active',
    'Under Development / Stage II Clearance',
    'Production Expansion',
    'Temporary Maintenance Hold',
  ],
  yesNoOptions: ['Yes', 'No'],
};

export const profileStatusChecklist = [
  { id: 'business-info', label: 'Mine Site Information', status: 'Completed' },
  { id: 'location-details', label: 'Geo-Coordinates & Lease Boundary', status: 'Completed' },
  { id: 'operations', label: 'Mining Operations & Heavy Machinery', status: 'Completed' },
  { id: 'registration-details', label: 'DGMS & Ministry Clearances', status: 'Completed' },
  { id: 'financial-details', label: 'Production Limits & Coal Evacuation', status: 'Completed' },
  { id: 'environmental-info', label: 'Environmental & Mine Closure Plan', status: 'Completed' },
];
