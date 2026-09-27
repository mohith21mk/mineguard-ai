// MINEGUARD AI - Core Mock Data Foundation (SIH26024)
// Clearly labeled [DEMO DATA] for prototype initialization

export const summaryStats = [
  {
    id: 'approvals',
    title: 'Statutory Clearances',
    value: '14',
    subtitle: 'DGMS / MoEFCC / SPCB',
    icon: 'ClipboardCheck',
    accent: 'blue',
    trend: '10 active, 4 under renewal [DEMO DATA]',
  },
  {
    id: 'tasks',
    title: 'Compliance Actions',
    value: '8',
    subtitle: 'Statutory Actions',
    icon: 'ListTodo',
    accent: 'orange',
    trend: '3 due this week [DEMO DATA]',
  },
  {
    id: 'deadlines',
    title: 'Permit Renewals',
    value: '3',
    subtitle: 'Clearance Expiry',
    icon: 'CalendarDays',
    accent: 'red',
    trend: 'Next: SPCB CTO in 18 days [DEMO DATA]',
  },
  {
    id: 'score',
    title: 'Mine Compliance Index',
    value: '92%',
    subtitle: 'DGMS Audit Ready',
    icon: 'Gauge',
    accent: 'green',
    trend: '+3.8% over last inspection [DEMO DATA]',
  },
];

export const roadmapSteps = [
  {
    step: 1,
    title: 'DGMS Mine Opening Permission (CMR Reg 104)',
    authority: 'Directorate General of Mines Safety',
    status: 'Completed',
    estimatedDays: 'Cleared on 14 Jan 2026',
    category: 'Safety & DGMS',
  },
  {
    step: 2,
    title: 'MoEFCC Environmental Clearance (EC)',
    authority: 'Ministry of Environment, Forest & CC',
    status: 'Completed',
    estimatedDays: 'Valid for 3.5 MTPA capacity',
    category: 'Environmental',
  },
  {
    step: 3,
    title: 'Consent to Operate (CTO - Air/Water)',
    authority: 'State Pollution Control Board',
    status: 'In Progress',
    estimatedDays: 'Renewal review by SPCB Board',
    category: 'Environmental',
  },
  {
    step: 4,
    title: 'PESO Explosives Magazine License',
    authority: 'Petroleum & Explosives Safety Org.',
    status: 'In Progress',
    estimatedDays: 'Site inspection scheduled',
    category: 'Operational',
  },
  {
    step: 5,
    title: 'Statutory Mine Safety Management Plan (SMP)',
    authority: 'DGMS Eastern Zone / CCO',
    status: 'Completed',
    estimatedDays: 'Approved by DGMS Inspector',
    category: 'Safety & DGMS',
  },
];

export const complianceTasks = [
  {
    id: 'task-1',
    title: 'Quarterly Environmental Monitoring Return (SPCB)',
    due: 'Due in 6 days',
    status: 'Upcoming',
    priority: 'High',
  },
  {
    id: 'task-2',
    title: 'DGMS Annual Safety & Accident Return (Form I/II)',
    due: 'Due in 14 days',
    status: 'Upcoming',
    priority: 'High',
  },
  {
    id: 'task-3',
    title: 'HEMM Heavy Machinery Fitness Audit',
    due: 'Due in 18 days',
    status: 'Upcoming',
    priority: 'Medium',
  },
  {
    id: 'task-4',
    title: 'Mines Vocational Training (VT Rules) Refresher Batch',
    due: 'Completed on 10 Sep',
    status: 'Completed',
    priority: 'Low',
  },
];

export const documentStatusData = {
  total: 42,
  verified: 34,
  pending: 6,
  rejected: 2,
};

export const recommendedSchemes = [
  {
    id: 'scheme-1',
    title: 'Coal Mine Land Reclamation & Eco-Park Grant',
    description: 'Statutory funding for biological reclamation of overburden dumps',
    benefit: '100% CIL Afforestation Support',
    icon: 'Landmark',
    badge: 'Ministry of Coal [DEMO DATA]',
  },
  {
    id: 'scheme-2',
    title: 'Surface Miner & Dust Suppression Incentive',
    description: 'Financial incentives for continuous mining with zero blasting impact',
    benefit: 'Clean Coal Technology Subsidy',
    icon: 'TrendingUp',
    badge: 'National Clean Energy [DEMO DATA]',
  },
];

export const applicationTracking = [
  {
    id: 'APP-CLR-2026-001',
    department: 'Directorate General of Mines Safety',
    application: 'Deep Hole Blasting Permission (CMR Reg 164)',
    status: 'Under Review',
    updatedOn: '20 Sep 2026',
    referenceNo: 'DGMS/EZ/DNB/BL-9912',
  },
  {
    id: 'APP-CLR-2026-002',
    department: 'State Pollution Control Board',
    application: 'CTO Renewal (Air & Water Act)',
    status: 'Approved',
    updatedOn: '18 Sep 2026',
    referenceNo: 'SPCB/CTO/RN-8819',
  },
  {
    id: 'APP-CLR-2026-003',
    department: 'Ministry of Environment, Forest & CC',
    application: 'Forest Land Diversion (Stage II Clearance)',
    status: 'Pending',
    updatedOn: '15 Sep 2026',
    referenceNo: 'MOEF/FC/ST2-3104',
  },
  {
    id: 'APP-CLR-2026-004',
    department: 'Central Ground Water Authority',
    application: 'Mine Dewatering NOC Renewal',
    status: 'In Progress',
    updatedOn: '12 Sep 2026',
    referenceNo: 'CGWA/NOC/CL-5421',
  },
];

export const notificationsList = [
  {
    id: 1,
    title: 'SPCB CTO Renewal granted for Coal Handling Plant',
    time: '15 minutes ago',
    unread: true,
    type: 'success',
  },
  {
    id: 2,
    title: 'DGMS Quarterly Safety Return due in 6 days',
    time: '2 hours ago',
    unread: true,
    type: 'warning',
  },
  {
    id: 3,
    title: 'Ambient PM10 real-time sensor calibration required',
    time: '1 day ago',
    unread: true,
    type: 'info',
  },
];

export const navItems = [
  { id: 'overview', label: 'Mine Control Tower', icon: 'LayoutDashboard' },
  { id: 'business-profile', label: 'Mine Profile', icon: 'Building' },
  { id: 'approvals', label: 'Clearances & Permits', icon: 'FileText' },
  { id: 'compliance-tasks', label: 'Compliance Actions', icon: 'CalendarCheck' },
  { id: 'documents', label: 'Compliance Vault', icon: 'FolderLock' },
  { id: 'alerts', label: 'Safety & Alerts', icon: 'Bell', badge: '3' },
  { id: 'reports', label: 'Audit & Reports', icon: 'BarChart3' },
  { id: 'ai', label: 'MineGuard AI Advisor', icon: 'Brain' },
  { id: 'green-flow', label: 'Environmental Monitor', icon: 'Leaf' },
  { id: 'supply-chain', label: 'Coal Evacuation & HEMM', icon: 'Truck' },
  { id: 'workforce', label: 'Workforce & Safety', icon: 'Users' },
  { id: 'applications', label: 'Clearance Filings', icon: 'Send' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];
