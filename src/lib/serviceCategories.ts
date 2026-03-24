export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  overview: string;
  highlights: string[];
  scope: string[];
  industries: string[];
};

import ifmImg from '@/assets/Gallery/security1.webp';
import technicalImg from '@/assets/Gallery/security2.webp';
import alliedImg from '@/assets/Gallery/housekeeping1.webp';
import floorCareImg from '@/assets/Gallery/housekeeping2.webp';

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'security-services',
    title: 'Security Services',
    summary: 'Trained guards, disciplined supervision, and rapid response coverage for every site.',
    image: ifmImg,
    overview:
      'We deploy trained security personnel with clear post orders, shift rosters, and supervisor-led audits. Our coverage focuses on access control, incident response, and disciplined reporting so your site stays protected 24/7.',
    highlights: [
      'PSARA-compliant staffing and documentation',
      'Supervisor-led audits with daily reporting',
      'Rapid escalation and replacement coverage',
      'Visitor management and access control',
    ],
    scope: [
      'Residential and society guarding',
      'Corporate office security',
      'Industrial and warehouse security',
      'Event and crowd management',
    ],
    industries: ['Residential communities', 'Corporate offices', 'Retail complexes', 'Industrial sites'],
  },
  {
    slug: 'housekeeping-services',
    title: 'Housekeeping Services',
    summary: 'Hygiene-focused housekeeping with zone-wise checklists and quality audits.',
    image: alliedImg,
    overview:
      'Our housekeeping teams follow structured daily, weekly, and monthly routines. We track consumables, hygiene SOPs, and supervisor checklists to keep sites audit-ready and consistently clean.',
    highlights: [
      'Zone-wise checklists and supervisor sign-offs',
      'Modern equipment and eco-friendly chemicals',
      'Consumable tracking and hygiene logs',
      'Quality audits with corrective action',
    ],
    scope: [
      'Daily cleaning and maintenance',
      'Deep-cleaning schedules',
      'Pantry and washroom hygiene',
      'Facade and glass cleaning coordination',
    ],
    industries: ['Corporate offices', 'Hospitals', 'Retail spaces', 'Education campuses'],
  },
  {
    slug: 'manpower-services',
    title: 'Manpower Services',
    summary: 'Reliable staffing support for operations, logistics, and facility assistance.',
    image: technicalImg,
    overview:
      'We provide trained manpower for operational support roles with disciplined attendance tracking and supervisor monitoring. Each deployment is tailored to shift requirements and site-specific SOPs.',
    highlights: [
      'Trained staff with attendance tracking',
      'Shift planning and replacement support',
      'Site-specific SOP orientation',
      'Supervisor coordination',
    ],
    scope: [
      'Loading and unloading support',
      'Material handling assistance',
      'Operational support roles',
      'Event and logistics staffing',
    ],
    industries: ['Warehouses', 'Manufacturing units', 'Retail operations', 'Logistics hubs'],
  },
  {
    slug: 'bouncer-services',
    title: 'Bouncer Services',
    summary: 'Professional bouncer teams for events, hospitality, and high-footfall venues.',
    image: floorCareImg,
    overview:
      'Our bouncer teams are trained in crowd control, entry screening, and de-escalation. We ensure guest safety while maintaining a professional and respectful presence.',
    highlights: [
      'Event-ready trained teams',
      'Entry screening and access control',
      'Crowd management and de-escalation',
      'Coordination with venue SOPs',
    ],
    scope: [
      'Event and concert security',
      'Hospitality and club coverage',
      'VIP and private function support',
      'High-footfall venue control',
    ],
    industries: ['Hospitality venues', 'Event organizers', 'Corporate events', 'Private functions'],
  },
  {
    slug: 'ifm-services',
    title: 'IFM Services',
    summary: 'Integrated Facility Management solutions under a single accountable service model.',
    image: ifmImg,
    overview:
      'Our IFM Services combine multiple facility operations into one streamlined framework, improving service quality, response time, and cost control. We manage people, process, and technology to ensure smooth day-to-day operations across your premises.',
    highlights: ['Single-point accountability', 'Standardized SOP-driven operations', 'Performance dashboards and compliance tracking', 'Scalable deployment across multiple locations'],
    scope: ['Housekeeping, security, technical and support functions', 'Helpdesk and vendor coordination', 'Planned and preventive maintenance governance', 'Quality audits and periodic service reviews'],
    industries: ['Corporate offices', 'IT parks', 'Commercial complexes', 'Residential communities'],
  },
  {
    slug: 'technical-services',
    title: 'Technical Services',
    summary: 'Reliable technical operations support for critical building systems and utilities.',
    image: technicalImg,
    overview:
      'Our Technical Services team maintains core systems through preventive planning and responsive troubleshooting. We focus on reducing downtime, extending asset life, and ensuring safe operations of essential infrastructure.',
    highlights: ['Preventive and corrective maintenance', 'System health checks and routine inspections', 'Rapid fault identification and escalation', 'Documentation and compliance-ready logs'],
    scope: ['Electrical and lighting support', 'HVAC and utility monitoring', 'Plumbing and minor civil upkeep', 'Equipment servicing coordination'],
    industries: ['Industrial units', 'Warehouses', 'Commercial properties', 'Institutional campuses'],
  },
  {
    slug: 'facility-management-allied-services',
    title: 'Facility Management Allied Services',
    summary: 'Complementary facility services that strengthen overall site operations and upkeep.',
    image: alliedImg,
    overview:
      'Our allied services extend core facility operations with practical support modules tailored to your site needs. We align manpower and service quality to help maintain a safe, organized, and functional environment.',
    highlights: ['Modular service combinations', 'Site-specific deployment planning', 'Quality supervision and routine checks', 'Reliable support for peak operational periods'],
    scope: ['Pantry and utility area support', 'Loading-unloading assistance', 'Premises upkeep support functions', 'General operational utility services'],
    industries: ['Commercial properties', 'Residential townships', 'Industrial campuses', 'Mixed-use facilities'],
  },
  {
    slug: 'floor-care-services',
    title: 'Floor Care Services',
    summary: 'Professional floor maintenance programs for lasting cleanliness, safety, and appearance.',
    image: floorCareImg,
    overview:
      'Our Floor Care Services preserve surface quality, enhance visual standards, and support hygiene goals across high-footfall environments. We apply method-driven cleaning and treatment schedules based on floor type and usage.',
    highlights: ['Surface-specific treatment methods', 'Scheduled deep-clean and restoration cycles', 'Slip-risk reduction focus', 'Use of modern machines and approved chemicals'],
    scope: ['Scrubbing, polishing, and buffing', 'Marble/granite care and maintenance', 'Carpet and hard-floor deep cleaning', 'Stain treatment and appearance recovery'],
    industries: ['Malls and retail stores', 'Corporate offices', 'Hospitals', 'Hospitality spaces'],
  },
];

export const serviceCategoryMap = Object.fromEntries(serviceCategories.map((item) => [item.slug, item]));
