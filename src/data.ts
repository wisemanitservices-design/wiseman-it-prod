/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, BlogArticle, AssessmentQuestion } from './types';

export const WISEMAN_SERVICES: Service[] = [
  {
    id: 'mdr-siem',
    title: 'Managed Threat Detection and Response (MDR)',
    tagline: 'Continuous 24/7 Security Operations & Incident Containment',
    description: 'We orchestrate elite threat hunting, SIEM automation, and continuous analysis to neutralize complex threats before they disrupt your business operations.',
    iconName: 'ShieldAlert',
    bullets: [
      '24/7 Security Operations Center (SOC) continuous monitoring & alert response',
      'SIEM Integration & Orchestration (Enterprise SIEM, SOAR Platform Solutions)',
      'MITRE ATT&CK® aligned threat modelling for predictive behavior mapping',
      'Rapid incident containment playbooks compliant with NCSC & NIST security guidelines'
    ],
    roiMetric: '99.4%',
    roiLabel: 'Reduction in mean-time-to-detection (MTTD) & rapid automated quarantine',
    details: [
      'Engineered for rapid identification and remediation of sophisticated threat vectors within minutes, not days.',
      'Deployment of light-weight host agents to filter signal from noise, reducing false-positive alerts by up to 85%.',
      'Dedicated cyber analysts continuously hunt for hidden advanced persistent threats (APTs) targeting your specific infrastructure.',
      'Comprehensive monthly executive intelligence reports detailing blocked threat activity, system health, and vector trends.'
    ]
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Assessments & CSPM',
    tagline: 'Continuous Cloud Posture Hardening & Regulatory Governance',
    description: 'Establish robust Guardrails and structural compliance across AWS, Azure, & GCP architectures using advanced Cloud Security Posture Management (CSPM).',
    iconName: 'CloudShield',
    bullets: [
      'Continuous Cloud Security Posture Management (CSPM & CNAPP integration)',
      'Architectural alignment to NIST 800-53, ISO 27001, and CIS benchmarks',
      'Secure-by-design baseline blueprints for secure VMs, AKS/Kubernetes, and subnets',
      'Unified cloud posture scorecards detailing immediate remediation targets'
    ],
    roiMetric: '100%',
    roiLabel: 'Compliance audit alignment across hybrid & multi-cloud server setups',
    details: [
      'Architectural reviews of your High-Level (HLD) and Low-Level Designs (LLD) to build security in from day one.',
      'Automated API-driven vulnerability scanners continuously auditing cloud resource configurations for security drifting.',
      'Expert IAM alignment to Zero-Trust architecture, enforcing strict privilege isolation for microservices and cloud workspaces.',
      'Pre-configured compliance reporting for SOC2, HIPAA, ISO 27001, and G-Suite / Microsoft 365 environments.'
    ]
  },
  {
    id: 'vuln-remediation',
    title: 'Proactive Vulnerability Remediation',
    tagline: 'Threat-Prioritized Assessment, Patch Orchestration & Hardening',
    description: 'We run end-to-end vulnerability scanning and execute automated, risk-prioritized patching so that your servers represent an absolute fortress.',
    iconName: 'Activity',
    bullets: [
      'Automated SAST/DAST scanner deployment across web applications & endpoints',
      'Threat-prioritized analysis using Asset Exposure, ACR, and VPR scoring vectors',
      'Automated patch management campaigns (WSUS & custom scripting mechanics)',
      'Validation of security baseline resilience via coordinated penetration testing'
    ],
    roiMetric: '92%',
    roiLabel: 'Decrease in exploitable threat surface areas within the first 60 days',
    details: [
      'Ditched the infinite list of benign scan results; we prioritize vulnerabilities leveraging real-world threat telemetry.',
      'Comprehensive scans powered by leading enterprise vulnerability engines and modern WAS scanners to catch OWASP Top 10 vulnerabilities.',
      'Automated PowerShell, Python, and shell patching routines designed to protect legacy and web applications without downtime.',
      'Regular coordinated security sprints and stakeholder feedback sessions to guarantee standard compliance and team alignment.'
    ]
  }
];

export const WISEMAN_BLOGS: BlogArticle[] = [
  {
    id: 'remediation-vs-response',
    title: 'The Shift Left Mandate: Why Vulnerability Remediation Outperforms Incident Response',
    excerpt: 'Relying exclusively on incident response is an expensive security strategy. Learn how risk-prioritized threat remediation limits attack damage vectors from day one.',
    content: `
### The Real Cost of Reactive Security

For decades, enterprise security focused heavily on the outer perimeter—building wider searchlights and bigger firewalls. Standard industry indicators show that organizations spend upwards of 80% of their operational security budget on reactive containment rather than proactive engineering. 

However, once a malicious actor successfully breaches an unpatched endpoint or an orphaned cloud server, the financial and reputational losses scale infinitely. Let us explore why shifting resources towards **Proactive Vulnerability & Patch Management** offers measurable strategic advantage.

---

### Understanding Threat-Prioritized Prioritization

Traditional vulnerability scanning generates an overwhelming PDF listing thousands of unpatched vulnerabilities. This creates analysis paralysis. True remediation requires sorting these anomalies using three critical matrices:

1. **Asset Criticality Rating (ACR):** How critical is the host to the company's core operations?
2. **Vulnerability Priority Rating (VPR):** Is this specific vulnerability actively leveraged in wild exploit kits right now?
3. **Exploit Exposure Score (EES):** Is the vector exposed directly to public internet routers?

By combining these vectors, security teams focus exclusively on the top **3% of critical exploits** that represent actual imminent threats.

\`\`\`
   [Raw Vulnerability Scan Results (~10,000 Alerts)]
                       │
                       ▼ (Apply ACR & Resource Context)
   [System Asset Criticality Filtration (~1,500 Alerts)]
                       │
                       ▼ (Correlate with Real-time VPR Telemetry)
   [Priority Remediation Targets (~150 High-Risk Exploits)]
\`\`\`

---

### Step-by-Step Vulnerability Remediation Lifecycle

To maintain compliance and structural robustness on an enterprise network, Wiseman IT Services institutes a rigorous 4-stage operational process:

* **Assess:** Deploying automated endpoint agents and deep-network scanners to catalog all hardware, firmware, and operating systems.
* **Prioritize:** Leveraging VPR algorithms to identify which unpatched bugs represent severe entry-points.
* **Remediate:** Orchestrating targeted patch campaigns, custom PowerShell baseline scripts, and group policy objects (GPOs).
* **Verify:** Executing isolated validation scans to certify the exploit is fully eradicated and cannot be re-introduced.

### Achieving a Measurable ROI

Investing in structured vulnerability remediation yields immediate, auditable results. Organizations utilizing Wiseman's proactive patch program show an average **92% decrease in system vulnerability surface area** within the first 60 days, significantly reducing cyber insurance premiums and securing prospective partner trust.
    `,
    category: 'Vulnerability Management',
    readingTime: '6 min read',
    publishDate: 'June 1, 2026',
    author: {
      name: 'Wiseman Security Practice',
      role: 'Principal Cybersecurity Analysts',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
    },
    tags: ['Vulnerability Management', 'Risk-Based Scanning', 'Patching']
  },
  {
    id: 'securing-azure-aws-cspm',
    title: 'Mastering Cloud Security: Navigating CSPM across Multi-Cloud Architectures',
    excerpt: 'As companies scale across AWS, Azure, and Google Cloud, misconfigurations represent a major risk point. Discover the absolute security principles of CSPM.',
    content: `
### The Multi-Cloud Configuration Crisis

As organizations increasingly split workloads across AWS and Microsoft Azure, compliance and configuration oversight become incredibly fragmented. Misconfigured S3 buckets, open security group parameters, and overly permissive IAM identities account for **more than 80% of documented cloud data breaches**.

To combat this vulnerability, modern security architects rely on **Cloud Security Posture Management (CSPM)**.

---

### Core Tenets of Effective CSPM

Continuous cloud posture management shifts the standard paradigm from manual scheduled audits to continuous machine-learning-driven guardrails:

* **Real-time Threat Modeling:** Discovering unmanaged assets and evaluating how security groups interact.
* **Compliance Benchmarking:** Automated mapping of resources to CIS Benchmarks, NIST 800-53, and HIPAA rules.
* **Unified Secure Score:** Consolidating cloud accounts into a single dashboard of systemic risk metrics.

---

### The Zero-Trust Cloud Implementation Matrix

To securely manage accounts across multi-tenant environments, we implement strict zero-trust parameters directly into the deployment pipeline:

| Cloud Attribute | AWS Baseline Strategy | Azure Baseline Strategy |
| :--- | :--- | :--- |
| **Identity Management** | AWS IAM with strictly separated IAM Identity Center roles | Entra ID with Conditional Access and strict Just-In-Time role elevation |
| **Postures & Compliance** | Cloud-native posture & continuous threat audits | Enterprise cloud defender security baselines |
| **Compute Hardening** | ECS/EKS with customized AWS Fargate task security profiles | Azure Kubernetes Service (AKS) coupled with Azure Policy enforcement |

---

### Building in Security-by-Design

Rather than reacting to cloud configuration alerts, enterprise agencies must build cloud security *into their code templates* (Infrastructure as Code - IaC). By utilizing GitOps pipelines integrated with DAST validation tools (like tfsec and Checkov), secure configurations are validated and locked long before a server is provisioned.
    `,
    category: 'Cloud Security',
    readingTime: '5 min read',
    publishDate: 'May 28, 2026',
    author: {
      name: 'Wiseman Cloud Security Team',
      role: 'Lead Posture & Defenses',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
    },
    tags: ['Cloud Security', 'CSPM', 'AWS', 'Azure']
  },
  {
    id: 'siem-orchestration-mitre',
    title: 'Modern Threat Hunting: High-Fidelity Alert Monitoring via MITRE ATT&CK',
    excerpt: 'Are your security analysts drowning in false positive fatigue? Read how orchestrating enterprise SIEM systems and aligning with MITRE ATT&CK restores sanity.',
    content: `
### Navigating SIEM Complexity

A security information and event management (SIEM) tool is the heartbeat of a security operations center. It collects billions of log entries across active directories, firewalls, G-Suite instances, and virtual servers. 

However, legacy SIEM platforms generate a tsunami of low-fidelity alerts. This triggers alert fatigue, which in turn leads analysts to bypass critical compromise indicators.

---

### The Strategy of SIEM Orchestration

At Wiseman IT Services, we resolve warning-fatigue by re-engineering security orchestration mechanics. We focus on feeding and parsing clean telemetry vectors:

1. **Host-Level Log Filtering:** Fine-tuning agent rules on active directory servers to eliminate normal system noise (such as administrative logon cycles) before it enters log ingestion pipes.
2. **Behavioral Correlative Bundling:** Standardized rules that assemble isolated events into unified incidents. For instance: an unusual VPN login from another country, followed by immediate admin privilege changes, followed by bulk file downloads is flagged as a single, urgent critical alert.
3. **SOAR Integration:** Automatically executing response playbooks—like blocking an IP segment at the firewall or triggering conditional MFA—the millisecond a correlation rule is validated.

---

\`\`\`
   [Raw Log Ingestion (1 Billon+ events/day)]
                       │
                       ▼ (Local Smart Filtering on Endpoint Agents)
   [High-Value Signals Ingested to SIEM (10,000/day)]
                       │
                       ▼ (Correlative Rules & MITRE ATT&CK Alignment)
   [Unified Security Incidents (3-5/day)]
                       │
                       ▼ (SOAR Response Playbooks Activated)
   [Threat Neutralized Instantly]
\`\`\`

---

### Aligning to the MITRE ATT&CK Framework

We map all SIEM detection parameters directly to the global **MITRE ATT&CK® matrix**. This ensures our threat hunting operations cover the entire hacker lifecycle:

* **Reconnaissance & Initial Access:** Identifying external scans or phishing vectors.
* **Credential Access & Lateral Movement:** Spotting unusual remote procedure calls (RPC) and pass-the-hash attacks.
* **Exfiltration & Impact:** Tracking unauthorized S3 backups or local encryption attempts.

By utilizing this structured grid, we measure our prevention and detection coverage against real-world advanced persistent groups (APTs). Wiseman's clients gain robust 24/7 coverage and sleep soundly knowing their systems are monitored by SIEM tools fine-tuned by over two decades of cybersecurity experience.
    `,
    category: 'Threat Detection',
    readingTime: '7 min read',
    publishDate: 'May 15, 2026',
    author: {
      name: 'Wiseman SOC Engineering',
      role: 'SIEM & Threat Hunters',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
    },
    tags: ['Threat Detection', 'SIEM', 'Enterprise SOAR', 'SOC']
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    category: 'Vulnerability Management',
    text: 'How frequently does your organization scan internal systems, endpoints, and servers for unpatched vulnerabilities?',
    options: [
      {
        text: 'Continuous, automated scanning with instant risk-based prioritization',
        score: 5,
        recommendation: 'Excellent. Your vulnerability visibility matches elite industry profiles. Ensure these scans trigger automated patch pipelines.'
      },
      {
        text: 'Monthly or quarterly scans, evaluated and remediated manually',
        score: 3,
        recommendation: 'Moderate Risk. Exploit-kits are developed in hours. A monthly gap leaves windows of opportunity for ransomware operators.'
      },
      {
        text: 'Only during formal annual compliance reviews or penetration tests',
        score: 1,
        recommendation: 'HIGH RISK. Annual assessments render you blind to zero-day vulnerabilities in local drivers, network configurations, and web APIs.'
      },
      {
        text: 'We currently do not run vulnerability scans',
        score: 0,
        recommendation: 'CRITICAL THREAT. Your systems represent a massive, blind surface area. Threat actors look specifically for unscanned, legacy backbones.'
      }
    ]
  },
  {
    id: 2,
    category: 'Cloud Governance',
    text: 'What measures are in place to audit cloud infrastructure configurations and ensure IAM access meets Zero-Trust baselines?',
    options: [
      {
        text: 'Continuous API auditing with CSPM tools & strict Just-In-Time role elevation (MFA enabled)',
        score: 5,
        recommendation: 'Outstanding posture. Multi-cloud architecture drift is safely mitigated.'
      },
      {
        text: 'Static, manual security configurations verified periodically by systemic admins',
        score: 3,
        recommendation: 'Significant risk. Dynamic additions to cloud resources by developer teams easily bypass static baseline checkpoints.'
      },
      {
        text: 'Single cloud root accounts shared among developer crews, occasional credential reviews',
        score: 1,
        recommendation: 'CRITICAL DANGER. Root access sharing is a catastrophic hazard. Compromise of a single credential hands over your entire database assets.'
      }
    ]
  },
  {
    id: 3,
    category: 'Threat Detection',
    text: 'Do you operate a 24/7 continuous log monitoring SIEM solution mapped to track complex intrusion behaviors?',
    options: [
      {
        text: 'Yes, 24/7 security orchestration with modern high-fidelity SIEM, mapped to the MITRE ATT&CK framework',
        score: 5,
        recommendation: 'Top-tier threat identification. Your SOC analysts maintain strong, proactive hunting guidelines.'
      },
      {
        text: 'Log files are compiled in servers, but we only inspect them after an anomaly or crash is detected',
        score: 2,
        recommendation: 'Post-Mortem Risk. Logs are useless if a hacker wipes the server dry. Active logging must happen in a decoupled cloud vaults.'
      },
      {
        text: 'No centralized system logging or threat telemetry program exists',
        score: 0,
        recommendation: 'EXTREME CRITICAL RISK. Hackers could dwell inside your system for months stealing sensitive customer files completely undetected.'
      }
    ]
  },
  {
    id: 4,
    category: 'Backup & Business Continuity',
    text: 'How frequently are backup systems validated, tested, and stored in isolated (air-gapped) databases?',
    options: [
      {
        text: 'Automated daily backup mirroring, with air-gapped encryption and weekly restore simulations',
        score: 5,
        recommendation: 'Brilliant. Ransomware groups cannot hold your systems hostage when backups can rebuild systems in hours.'
      },
      {
        text: 'Weekly backups stored locally or in connected cloud folders, tested twice a year',
        score: 3,
        recommendation: 'Elevated Threat. Connected backups are frequently targeted, encrypted, and completely destroyed by modern ransomware scripts first.'
      },
      {
        text: 'Backups are run sporadically, or restore success has not been verified recently',
        score: 1,
        recommendation: 'HIGH DANGER. Untested backups frequently fail during critical recovery efforts, risking complete catastrophic data loss.'
      }
    ]
  },
  {
    id: 5,
    category: 'Endpoint Enforcement & Email Sec',
    text: 'What defenses secure company emails, user workstations, and smart endpoints against phishing and malware entry points?',
    options: [
      {
        text: 'Advanced Endpoint Detection & Response (EDR) with strict enterprise email security standards & DMARC enforcement',
        score: 5,
        recommendation: 'Elite setup. You possess high-fidelity containment capacities for phishing vectors.'
      },
      {
        text: 'Standard antivirus applications on employee laptops, sporadic spam filters',
        score: 2,
        recommendation: 'Severe vector vulnerabilities. Basic antivirus lacks behavioral analysis capability needed to catch ransomware scripts.'
      },
      {
        text: 'No formal security policies for employee browsers, home PCs, or external email streams',
        score: 0,
        recommendation: 'CRITICAL CONCERN. 91% of cyber breaches begin with a simple employee clicking a clever phishing email on an unprotected device.'
      }
    ]
  }
];
