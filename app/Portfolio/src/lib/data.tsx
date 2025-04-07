import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Inc.',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    icon: <Icons.brain width={64} height={64} />,
    title: 'gnyan.ai',
    description: 'Secure vibe-coding platform for enterprises. From feature to release in hours, not sprints...',
    website: 'https://gnyan.ai'
  },
  {
    icon: <Icons.landmark width={64} height={64} />,
    title: 'fedworks.ai',
    description: 'Secure data, digital, accessible information and AI solutions for the federal clientele.',
    website: 'https://fedworks.ai'
  },
  {
    icon: <Icons.databloom width={64} height={64} />,
    title: 'data-bloom.com',
    description: 'Machine Learning and Data Science Solutions for the Fortune 100 Inc.',
    website: 'https://data-bloom.com'
  },
  {
    icon: <Icons.youtube width={64} height={64} />,
    title: 'enya media works',
    description:
      'Recoloring, Restoring and Curating old videos, photos, and audio footage with AI.',
    website: '/NTR_browser_safe.mp4',
  }
] as const;

export const experiencesData = [
  {
    title: 'Associate Director, NTIS',
    important: true,
    location: 'U.S. Department of Commerce',
    description:
      'Leading NTIS’s transformation into a federal AI and data consultancy. Architected AI/RPA/Cloud blueprints, federal GenAI initiatives, and strategic innovation partnerships with industry, academia.',
    date: '2024 – Present',
  },
  {
    title: 'AI Architect',
    location: 'ManTech (DHS TASPD Program)',
    important: false,
    description:
      'Delivered applied AI models for narcotics interdiction and financial crime networks. Deployed on-device LLM copilots/agentic assistants tailored for USCBP field agents.',
    date: '2023 – 2024',
  },
  {
    title: 'Principal AI Engineer',
    location: 'Hertz Corporation',
    important: false,
    description:
      'Architected MDM pipelines resolving 5x CRM duplications. Developed semantic cataloging, enterprise governance tools, and natural language BI analytics hub.',
    date: '2023 – 2024',
  },
  {
    title: 'Principal Data Architect',
    location: 'Raytheon Intelligence & Space',
    important: true,
    description:
      'Led .gov cloud migration and built predictive logistics management models (PFEP/Digital Twins). Delivered mission-critical lead-time and MRP simulations.',
    date: '2022 – 2023',
  },
  {
    title: 'Principal Program Manager, WebXT',
    location: 'Microsoft Bing',
    important: true,
    description:
      'Scaled Bing’s index to over 1 trillion pages. Led semantic search R&D, embedding quantization, and hybrid retrieval architecture.',
    date: '2021 – 2022',
  },
  {
    title: 'Director, EDW Modernization',
    location: 'Hewlett Packard Enterprise (HPE)',
    important: false,
    description:
      'Rescued a failed $16M cloud migration. Migrated 3PB+ data to Spark Delta Lake using ANTLR automation at a fraction of the projected cost.',
    date: '2020 – 2021',
  },
  {
    title: 'Partner Researcher',
    location: 'Google Cloud',
    important: true,
    description:
      'Implemented scalable ML pipelines and infrastructure on GCP for fortune 50 clients. Benchmarked Colab vs Databricks on AWS, Azure, and Databricks for GCP Vertex AI GTM planning; deployed Kubernetes-native data workflows.',
    date: '2020 - 2020',
  },
  {
    title: 'Director of Data Science',
    location: 'American Express Global Business Travel',
    important: false,
    description:
      'Launched AmexAI@2020. Delivered advanced traveler, supplier, client, and enterprise outcomes: operationalized recommender systems, executive operational dashboards, proactive duty-of-care engines, and premier BI solutions.',
    date: '2017 – 2020',
  },
  {
    title: 'Senior Manager, Big Data Programs',
    location: 'Intel Corporation',
    important: true,
    description:
      'Built the Intel Analytics Hub Datalake. Migrated manufacturing operational stores to Kafka/HBase/Spark Platform. Built pushed-down in-situ analytics for yield analysis ops.',
    date: '2013 – 2017',
  },
  {
    title: 'Chief Data Scientist',
    location: 'Manta Media',
    important: false,
    description:
      'Led analytics for fraud detection and SEO optimization. Developed deduplication and SMB exchange referral recommendation engine generating $5M+ in ad revenue.',
    date: '2012 – 2013',
  },
  {
    title: 'Consulting Research Scientist',
    location: 'LexisNexis R&D',
    important: false,
    description:
      'Engineered scalable legal search infrastructure and semantic deduplication systems. Co-led collaboration with Watson legal ontologies.',
    date: '2004 – 2012',
  },
  {
    title: 'Software Engineer & Research Associate',
    location: 'Intel Corporation',
    important: false,
    description:
      'Worked on web standards (SOAP/UDDI), x64 benchmarks, and embedded platforms on StrongARM for enterprise and mobile systems.',
    date: '1999 – 2002',
  },
] as const;


export const companyIcons = [
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">Commerce</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">Homeland Security</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">Microsoft</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">Google</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">Intel</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">HPE</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">Raytheon</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">LexisNexis</span> },
  { icon: <span className="px-3 py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded text-sm shadow-sm transform transition-transform duration-300 hover:scale-105">American Express</span> },
];

export const technicalSkillsData = [
  {
    category: 'Data Engineering',
    items: [
      'Spark, Databricks, Snowflake, BigQuery, Synapse, Exadata, SQL Server',
      'Hadoop, Kafka, Iceberg, Presto, Alteryx, Streamsets, Airflow, HPCC, Flink',
      'Data Fusion, DataFlow, PySpark, Kafka Streams',
    ],
  },
  {
    category: 'Cloud Platforms & DevOps',
    items: [
      'Azure, AWS, GCP (multi-cloud, VPCs, FedRAMP readiness)',
      'Kubernetes, Terraform, Podman, Docker, Istio, GitOps',
      'Delta Lakehouse Modernization, Observability, SOPs',
    ],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      'Recommenders, Search Quantization, RPA Bots, Anomaly Detection',
      'RAG pipelines, Embeddings, GPT Transformers, Computer Vision, NLP, Graph Analytics',
      'MLflow, Vertex AI, SageMaker, Kubeflow, Model Drift & Continuous Release',
    ],
  },
  {
    category: 'BI & Analytics',
    items: [
      'Tableau, Power BI, Looker, Custom dashboards',
      'Natural Language BI, What-If Engines',
      'Unsupervised Learning, Clustering, Classification, Regression, Deep Learning, Transformers, Diffusers',
    ],
  },
  {
    category: 'Search & Indexing',
    items: [
      'Bing Index, Lexis HPCC, Lucene, ElasticSearch',
      'UIMA, OWL, Knowledge Graphs, Semantic Deduplication',
      'Topic Modeling, Embedding Quantization, Hybrid Retrieval',
    ],
  },
  {
    category: 'Security & Compliance',
    items: [
      'Exfiltration tracking, fine-grained access control, Data Leak Prevention, Data Governance, Data Tagging',
      'FedRAMP, HIPAA, GDPR, ITAR compliance',
      'Zero Trust, Encryption, Tokenization, Data Masking',
    ],
  },
  {
    category: 'Languages & Libraries',
    items: [
      'Python, PySpark, Scala, Java, SQL, C#, R, Jupyter',
      'TensorFlow, PyTorch, Scikit-learn, XGBoost',
      'NumPy, Pandas, Matplotlib, Seaborn, Plotly',
    ],
  },
  {
    category: 'Product Innovation',
    items: [
      'Rapid Prototyping, MVP Launches, AI Venture Creation',
      'gnyan.ai, fedworks.ai, data-bloom.com, enya media works',
      'Innovation at scale in enterprise, startup, and federal domains',
    ],
  },
  {
    category: 'Apps & Accessibility',
    items: [
      'Flutter, WebAssembly, Android, React, Next.js',
      'Booking Chatbots, Voice Assistants, AI Copilots',
      'Sections 508, 504 Compliance, Responsive Design',
    ],
  },
] as const;

