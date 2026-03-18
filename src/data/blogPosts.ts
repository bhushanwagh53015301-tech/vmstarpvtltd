export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-security-guards',
    title: 'How to Choose the Right Security Guards for Your Facility',
    date: '2026-03-10',
    excerpt:
      'A simple checklist to evaluate training, deployment planning, and compliance before you hire a security team.',
    tags: ['Security', 'Compliance', 'Facility Management'],
    image: new URL('../assets/security-service.jpg', import.meta.url).toString(),
    content: [
      'Security coverage is only as strong as the planning behind it. Start by mapping your entry points, shift requirements, and risk areas.',
      'Ask for PSARA licensing, background checks, and refresher training schedules. These are non-negotiable for regulated sites.',
      'A professional agency should propose post orders, escalation protocols, and reporting templates before deployment.',
      'Finally, review monthly performance reports to ensure attendance, incident response time, and visitor logs stay consistent.',
    ],
  },
  {
    slug: 'housekeeping-standards-for-commercial-sites',
    title: 'Housekeeping Standards That Keep Commercial Sites Audit-Ready',
    date: '2026-03-06',
    excerpt:
      'From daily checklists to deep-clean schedules, here is a practical routine that keeps sites clean and compliant.',
    tags: ['Housekeeping', 'Hygiene', 'Operations'],
    image: new URL('../assets/housekeeping-service.jpg', import.meta.url).toString(),
    content: [
      'Define daily, weekly, and monthly checklists for each zone, and tie them to visual QA inspections.',
      'Use eco-friendly chemicals with clear dilution ratios to protect surfaces and keep costs predictable.',
      'Maintain a logbook for consumables, washroom sanitization, and spill response to show audit readiness.',
      'Train staff on equipment handling and color-coded cleaning to prevent cross-contamination.',
    ],
  },
  {
    slug: 'facility-management-costs',
    title: 'Reducing Facility Management Costs Without Cutting Corners',
    date: '2026-03-01',
    excerpt:
      'Small process improvements can reduce expenses while improving safety and uptime across sites.',
    tags: ['Cost Control', 'Facility Management'],
    image: new URL('../assets/manpower-service.jpg', import.meta.url).toString(),
    content: [
      'Combine security and housekeeping schedules to reduce idle time and improve coverage.',
      'Digitize attendance and incident reporting to speed up approvals and reduce manual errors.',
      'Track asset usage and replaceables to prevent last-minute procurement and emergency downtime.',
      'Set quarterly audits to align vendor performance with service level expectations.',
    ],
  },
];
