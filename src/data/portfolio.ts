export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const impactMetrics = [
  {
    value: '40%',
    label: 'faster average search',
    context: 'Saving 2,000+ engineering hours annually',
  },
  {
    value: '$30K+',
    label: 'saved every month',
    context: '50% infrastructure cost reduction',
  },
  {
    value: '72%',
    label: 'faster reservation workflow',
    context: 'Global event operations',
  },
  {
    value: '200ms',
    label: 'critical workflow response',
    context: 'Reduced from as long as two minutes',
  },
];

export const experiences: Experience[] = [
  {
    company: 'American Express',
    role: 'Software Engineer II',
    location: 'New York, NY',
    period: 'Feb 2024 — Present',
    summary:
      'Building enterprise AI, search, data, security, and developer-productivity systems that turn complex internal workflows into dependable software.',
    highlights: [
      'Integrated OpenAI APIs into an enterprise-wide internal search platform, adding natural-language querying that cut average search time by 40%, saving more than 2,000 engineering hours annually.',
      'Led a production migration from Microsoft SQL Server to PostgreSQL, redesigning schemas and backend services for full feature parity while cutting infrastructure costs by 50%—more than $30K per month.',
      'Led adoption of Claude Code and OpenAI Codex across internal repositories, building reusable agentic workflows that pull in ticket and codebase context and support implementation, testing, and review.',
      'Migrated internal search from Solr to Elasticsearch, re-architecting indexing pipelines for more than one million records and building Kibana dashboards with vector-based relevance scoring.',
      'Designed a natural-language-to-SQL assistant with a React front end and Kotlin service that translates plain-English questions into validated database queries.',
      'Built an AI code-remediation agent that applies security patches from a single IDE command, driving open vulnerabilities to zero across five production repositories.',
      'Stepped in for the engineering manager during a two-week absence, coordinating five developers and two QA engineers through a successful production release.',
    ],
    technologies: ['OpenAI APIs', 'Claude Code', 'OpenAI Codex', 'Elasticsearch', 'Kibana', 'PostgreSQL', 'React', 'Kotlin'],
  },
  {
    company: 'American Express',
    role: 'Software Engineer I',
    location: 'New York, NY',
    period: 'Aug 2022 — Feb 2024',
    summary:
      'Built global scheduling, cloud deployment, fulfillment, performance, and service-integration systems for production operations.',
    highlights: [
      'Built a global event scheduling and resource-allocation platform with Kotlin, Ktor, and SQL, creating a reservation workflow that became 72% faster than the legacy process.',
      'Spearheaded a production-service migration to a new internal cloud platform, making the team the first in the enterprise to achieve successful blue-green deployments.',
      'Designed and shipped a Spring Boot API for automated shipping-label generation that processed more than 11,000 requests and saved servicing engineers over 1,000 hours after launch.',
      'Reduced a production-critical workflow from as long as two minutes to 200 milliseconds by diagnosing network and backend bottlenecks and restructuring request execution.',
      'Built a production integration between ServiceNow and an internal microservice platform, delivering a custom UI component and backend service that established a new enterprise integration pattern.',
    ],
    technologies: ['Kotlin', 'Ktor', 'SQL', 'Java', 'Spring Boot', 'ServiceNow', 'CI/CD'],
  },
];

export const capabilityGroups = [
  {
    number: '01',
    title: 'AI & applied ML',
    description:
      'Production AI systems and agentic workflows that turn natural language and repository context into useful, validated outcomes.',
    technologies: ['Generative AI', 'LLM integration', 'AI agents', 'Agentic workflows', 'RAG', 'Semantic search', 'Vector search', 'Hugging Face'],
  },
  {
    number: '02',
    title: 'Product engineering',
    description:
      'Accessible interfaces and end-to-end product experiences that stay clear even when the workflows are not.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    number: '03',
    title: 'Platforms & APIs',
    description:
      'Resilient services, integrations, automation, and delivery pipelines designed for real operational constraints and scale.',
    technologies: ['Java', 'Python', 'Kotlin', 'Spring Boot', 'Ktor', 'Node.js', 'Fastify', 'Django', 'REST APIs', 'CI/CD'],
  },
  {
    number: '04',
    title: 'Data & infrastructure',
    description:
      'Practical data architecture and delivery systems that improve performance, reliability, and cost.',
    technologies: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Elasticsearch', 'Kibana', 'AWS S3', 'Docker'],
  },
];

export const links = {
  email: 'mailto:redhwanrahi1@gmail.com',
  github: 'https://github.com/redhwan-rahi',
  linkedin: 'https://www.linkedin.com/in/redhwanrahi/',
};
