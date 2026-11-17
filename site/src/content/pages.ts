// Copy for the pages beyond Home.
// Same rule as home.ts: a block that states a fact carries `truth`; framing carries [].

export const safeWorkspace = {
  title: 'Safe Workspace — Trisian',
  description: 'Safe Workspace is a managed cloud desktop service. We build it for your organization, in your own cloud, and then run it.',
  lines: ['Built for you.'],
  ink: 'Run for you',
  lede: 'Safe Workspace is a managed cloud desktop service. We build it for your organization, in your own cloud, and then run it: the virtual desktop, Microsoft 365, endpoint security, monitoring, compliance controls and support, in a single managed relationship.',
  truth: ['BP §4.1', '01 §20'],
  parts: [
    { name: 'The desktop', body: 'A Windows desktop in the cloud, built from one golden image. Your files and settings follow you in a managed profile; nothing else lives on the desktop.', byPlan: '', truth: ['BP §4.6'] },
    { name: 'Microsoft 365', body: 'The license that comes with your plan, passed through with no markup.', byPlan: 'Business Premium on Core, E3 on Advanced, E5 on Enterprise.', truth: ['BP §5.1', 'BP §8.5'] },
    { name: 'Security', body: 'Every access verified, data encrypted at rest and in transit, CIS-hardened images, and a published baseline kept free of drift.', byPlan: 'Dedicated host pools and Zero Trust architecture on Enterprise.', truth: ['BP §1.4', 'BP §2.4', 'BP §4.4', 'BP §5.1', '01 §20d'] },
    { name: 'Monitoring', body: 'Automated, 24x7. Patching, re-imaging and scaling run on their own.', byPlan: '', truth: ['BP §4.4'] },
    { name: 'Compliance controls', body: 'Controls that support the frameworks your plan covers. We own the technical foundation; your program and your auditor stay yours.', byPlan: '', truth: ['BP §5.1', 'BP §10.3'] },
    { name: 'Support', body: 'One point of contact, one owner for every issue, a service desk from Level 1 to Level 3.', byPlan: 'A Named Technical Account Manager on Enterprise.', truth: ['BP §3.1', 'BP §3.3', 'BP §5.1'] },
  ],
  built: {
    lines: ['We build it'],
    ink: 'before we run it',
    truth: ['BP §6.4', 'BP §6.2', 'BP §3.2', 'BP §4.2', '01 §20'],
    steps: [
      { name: 'Assess', body: 'We look at where you stand on security, performance and compliance, and recommend the plan and the gaps to close.', truth: ['BP §6.4'] },
      { name: 'Build', body: 'We build your workspace on the curated foundation and shape it to you: your applications, your desktops, our security recommendations, the rules you answer to. Building is a project: scoped, quoted in writing, and finished.', truth: ['BP §6.2', '01 §20'] },
      { name: 'Run', body: 'From then on it is Safe Workspace: we support what we built, including what those projects put in place, inside a scope agreed in writing. When your environment needs to change, that is a project too, quoted before it begins.', truth: ['BP §3.2', 'BP §4.2', '01 §20.9'] },
    ],
    reach: 'Projects reach as far as the workspace does: moving you onto the platform, building it and its security, closing compliance gaps, and planning for the unexpected.',
    reachTruth: ['BP §6.2'],
  },
  where: {
    truth: ['BP §3.1', 'BP §4.3', 'BP §8.4', 'BP §11.2', '01 §20.7', '01 §20c'],
    items: [
      { question: 'Where does it run?', answer: 'In your own cloud.', body: 'We don’t host anything. Your workspace is built in your own Azure tenant, on your own subscription, and delivered on Azure Virtual Desktop.', truth: ['BP §3.1', 'BP §4.3', 'BP §8.4', '01 §20.7'] },
      { question: 'What if there’s already a datacenter?', answer: 'Then we connect it.', body: 'Your workspace still runs on Azure Virtual Desktop, joined to your datacenter by a private connection: one you already have, or one we help you put in place. If you would rather keep desktops in your datacenter, Safe Workspace can run there on Citrix.', truth: ['01 §20c', 'BP §4.3'] },
      { question: 'Whose tenant is it?', answer: 'Yours.', body: 'It is separate from ours, and your data is hosted in the region its regulation requires. Access is tiered, and no named Trisian user holds standing global administrator rights in your tenant.', truth: ['BP §4.3', 'BP §11.2'] },
    ],
  },
  outside: 'Outside every plan: application-level support for business software, hardware, software development and telecommunications. We run the infrastructure and operating system your applications need.',
  outsideTruth: ['BP §7.1'],
  before: {
    heading: ['Before,'],
    ink: 'and with',
    truth: ['BP §4.7'],
    rows: [
      { task: 'Operating system and application patching', before: 'Manual scheduling, testing, deployment', withIt: 'Automated on schedule, no intervention' },
      { task: 'Password resets and lockouts', before: 'Handled ticket by ticket', withIt: 'Self-service at no cost; resets that need the team use support hours' },
      { task: 'Vendor coordination', before: 'Several providers, separate contracts', withIt: 'One accountability chain for the vendors inside the managed scope' },
      { task: 'Security monitoring', before: 'Reactive, found when users complain', withIt: '24x7 automated monitoring' },
      { task: 'Compliance evidence', before: 'Collected by hand before each audit', withIt: 'Continuous collection with the compliance automation platform, as an add-on' },
      { task: 'Desktop standardization', before: 'Each machine different', withIt: 'One golden image, centrally managed' },
    ],
  },
};

export const projectsPage = {
  title: 'Projects — Trisian',
  description: 'Projects are how a Safe Workspace gets built, and how it changes afterwards. Each one is scoped and quoted in writing before work begins.',
  lines: ['Every project,'],
  ink: 'in writing first',
  lede: 'Projects are how your workspace gets built, and how it changes afterwards. Each one starts from what you need, and is scoped and quoted before any work begins.',
  truth: ['BP §6.2', '01 §20'],
  // The sheet in the opening: what is agreed before a project starts. No amounts, no dates.
  sheet: {
    title: 'A project, in writing',
    group: 'Agreed before work begins',
    truth: ['BP §6.2'],
    items: [
      { name: 'The need', what: 'What you asked for, in your words.', truth: ['BP §6.2'] },
      { name: 'The scope', what: 'What is in, and what is not.', truth: ['BP §6.2'] },
      { name: 'The timeline', what: 'When it starts, and when it is finished.', truth: ['BP §6.2'] },
      { name: 'The deliverables', what: 'What you have at the end.', truth: ['BP §6.2'] },
      { name: 'Acceptance', what: 'How we both know it is done.', truth: ['BP §6.2'] },
    ],
    price: { label: 'The price', value: 'Fixed, or time and materials' },
  },
  kinds: {
    lead: 'Six kinds of',
    ink: 'work',
    intro: 'This is where the work is, not a fixed list. If yours is not here, tell us what you need and we will scope it.',
    truth: ['BP §6.2', '01 §20e'],
    areas: [
      {
        name: 'Migrations',
        line: 'Getting onto the platform, from wherever you are today.',
        truth: ['BP §6.2', '01 §20e'],
        projects: [
          { name: 'Safe Workspace migration', what: 'The full move onto the platform, with your Microsoft 365 tenant where it needs to move too.' },
          { name: 'On-premises desktops to the cloud', what: 'From the servers in your building to cloud desktops.' },
          { name: 'Citrix to Azure Virtual Desktop', what: 'Off Citrix and onto Azure Virtual Desktop.' },
          { name: 'Multi-site rollout', what: 'More sites and acquired companies, brought onto the same workspace.' },
        ],
        note: '',
      },
      {
        name: 'Platform',
        line: 'Designing and building what the workspace runs on.',
        truth: ['BP §6.2', '01 §20.3', '01 §20e'],
        projects: [
          { name: 'Safe Workspace deployment', what: 'The workspace itself, designed and built around your applications and your people.' },
          { name: 'Azure infrastructure', what: 'The Azure environment in your own tenant that the workspace runs in.' },
          { name: 'Microsoft 365 tenant', what: 'Your Microsoft 365 tenant, designed and built with the workspace.' },
        ],
        note: 'For Enterprise clients: multi-region infrastructure, designed and quoted for each client.',
      },
      {
        name: 'Security and identity',
        line: 'Building the defenses around the workspace.',
        truth: ['BP §6.2', 'BP §4.5', 'BP §5.1', '01 §20e'],
        projects: [
          { name: 'Phishing-resistant sign-in', what: 'Passwordless sign-in for your users and administrators.' },
          { name: 'Privileged access', what: 'How administrator access is granted, and to whom.' },
          { name: 'Endpoint detection policies', what: 'The endpoint detection policies in your Microsoft 365 license, designed and configured.' },
          { name: 'Data loss prevention', what: 'Data loss prevention policies, designed and configured.' },
          { name: 'Device management and web filtering', what: 'Management of the devices that reach the workspace, with web filtering.' },
        ],
        note: '',
      },
      {
        name: 'Compliance',
        line: 'Closing the gap between where you stand and the rules you answer to.',
        truth: ['BP §6.2', 'BP §6.1', 'BP §10.3', '01 §20e'],
        projects: [
          { name: 'Control gap analysis', what: 'Your environment measured against the controls of your framework.' },
          { name: 'Technical remediation', what: 'The configuration changes that close the gaps, with the evidence of each.' },
          { name: 'Compliance automation', what: 'Continuous control monitoring and evidence collection, set up for you.' },
        ],
        note: 'Your program, your policies and your auditor stay yours.',
      },
      {
        name: 'Continuity and infrastructure',
        line: 'Planning for the unexpected.',
        truth: ['BP §6.2', '01 §20c', '01 §20e'],
        projects: [
          { name: 'Disaster recovery and backup', what: 'Recovery designed for the workspace and its data.' },
          { name: 'Annual recovery test', what: 'The recovery plan, tested once a year.' },
          { name: 'Business continuity', what: 'Continuity planning for the managed environment.' },
          { name: 'Network', what: 'Network design for the workspace, including a private connection to your datacenter.' },
        ],
        note: '',
      },
      {
        name: 'Your sector',
        line: 'Work specific to financial services and to healthcare.',
        truth: ['BP §6.2', '01 §20e'],
        projects: [
          { name: 'Financial services', what: 'Sector-specific work for firms that answer to a regulator.', door: 'financial-services' },
          { name: 'Healthcare', what: 'Sector-specific work for organizations that hold patient information.', door: 'healthcare' },
        ],
        note: 'For Enterprise clients: customized industry images, designed and quoted for each client.',
      },
    ],
  },
  ends: {
    lead: 'What a project builds,',
    ink: 'we then run',
    body: 'A project has an end. What it put in place does not leave with it: from then on it is part of Safe Workspace, supported inside a scope agreed in writing.',
    truth: ['BP §3.2', 'BP §4.2', '01 §20.9'],
    zoneLabel: 'Inside the Managed Scope',
    zoneTerms: 'an owner · a service level · a resolution path',
    built: ['Your workspace', 'Your Azure environment', 'Device management', 'The private connection'],
  },
  questions: [
    { question: 'Can we hire you for one project?', answer: 'As the start of Safe Workspace, yes.', body: 'Projects are for Safe Workspace clients: inside an agreement you already have, or as the project that starts one.', truth: ['BP §6.2'] },
    { question: 'How is a project priced?', answer: 'On its own, before it starts.', body: 'Each project is quoted separately, at a fixed price or on time and materials. It is a line of its own on your invoice, apart from the platform fee.', truth: ['BP §6.2', 'BP §8.1'] },
    { question: 'Are add-ons projects?', answer: 'Setting one up is.', body: 'Each add-on has a license that recurs and a set-up that happens once. The set-up is scoped and quoted like any other project.', truth: ['BP §6.1', '01 §20e'] },
    { question: 'What is never a project?', answer: 'Four things, on every plan.', body: 'Application-level support for business software, hardware, software development and telecommunications. We run the infrastructure and operating system your applications need.', truth: ['BP §7.1'] },
  ],
};

export const plansPage = {
  title: 'Plans — Trisian',
  description: 'Core, Advanced and Enterprise. Each has one price per user, per month, and every plan starts at 50 users.',
  lines: ['Three plans.'],
  ink: 'One price per user',
  lede: 'Core, Advanced and Enterprise. Each builds on the one before, and each has one price per user, per month. Every plan starts at 50 users.',
  truth: ['BP §5.1'],
  invoice: {
    question: 'What’s on the invoice?',
    answer: 'Four things.',
    truth: ['BP §8.1', 'BP §8.4', 'BP §8.5'],
    // The invoice figure, on Home and on Plans, is drawn from this one block.
    title: 'Your monthly invoice',
    oursLabel: 'What you pay us for',
    items: [
      { name: 'The platform fee', body: 'Per user, per month. Everything automated at your plan.', truth: ['BP §8.1'] },
      { name: 'Support hours', body: 'For the work that needs a person.', truth: ['BP §8.1'] },
      { name: 'Projects', body: 'Quoted before they begin.', truth: ['BP §8.1'] },
      { name: 'Add-ons', body: 'If you want them.', truth: ['BP §8.1'] },
    ],
    throughLabel: 'Passed through',
    through: [
      { name: 'Azure', body: 'Exactly what your subscription shows.', truth: ['BP §8.4'] },
      { name: 'Microsoft 365 licenses', body: 'Passed through the same way.', truth: ['BP §8.5'] },
    ],
    total: { label: 'Markup', value: '$0' },
  },
  around: {
    heading: 'Around the platform',
    truth: ['BP §6.1', 'BP §6.2', 'BP §6.3'],
    items: [
      { name: 'Add-ons', body: 'Long-term log archival, Microsoft 365 data protection and recovery, a compliance automation platform, and others by plan.', truth: ['BP §6.1'] },
      { name: 'Projects', body: 'How your workspace gets built, and how it changes afterwards. Each one is scoped, quoted and finished.', truth: ['BP §6.2'] },
      { name: 'Retainers', body: 'Incident response on any plan. Out-of-hours cover for Core.', truth: ['BP §6.3'] },
    ],
  },
  price: { question: 'Where’s the price?', body: 'Each plan has one price per user, per month. We quote it in writing with your assessment.', truth: ['BP §5.1'] },
  questions: [
    { question: 'Which plan fits?', answer: 'The assessment recommends it.', body: 'It looks at where you stand on security, performance and compliance, and at what you answer to.', truth: ['BP §6.4'] },
    { question: 'What happens outside business hours?', answer: 'It depends on the plan.', body: 'Core is supported Monday to Friday, 9:00 AM to 5:00 PM, your local time. On Advanced and Enterprise, critical and high-impact incidents are covered 24/7. Platform monitoring is automated and runs 24x7 on every plan.', truth: ['BP §5.1', 'BP §4.4'] },
    { question: 'Why does Core stop at 300 users?', answer: 'Microsoft’s limit, not ours.', body: 'Microsoft 365 Business Premium stops at 300 seats. Past that, you move to Advanced.', truth: ['BP §5.1'] },
  ],
};

export const whoPage = {
  title: 'Who it’s for — Trisian',
  description: 'Safe Workspace is built for organizations that have to defend their decisions, with 50 people or more.',
  truth: ['BP §1.4', 'BP §5.1'],
  seats: {
    heading: 'Four seats at one table',
    truth: ['BP §4.1', 'BP §4.2', 'BP §4.3', 'BP §4.7'],
    items: [
      { seat: 'If you own the business', line: 'One service instead of six vendors, and one price per user.', truth: ['BP §4.1', 'BP §5.1'] },
      { seat: 'If you run operations', line: 'Every issue has one owner, and the scope is in writing.', truth: ['BP §3.1', 'BP §4.2'] },
      { seat: 'If you lead technology', line: 'Azure Virtual Desktop in your own tenant, a published baseline, and a clear account of who can reach what.', truth: ['BP §4.3', 'BP §4.4', '01 §20c'] },
      { seat: 'If you run IT', line: 'Nobody files a ticket for a patch, and you stop being the one who chases vendors.', truth: ['BP §4.7', 'BP §4.2'] },
    ],
  },
};

export const doorPages = [
  {
    id: 'financial-services', name: 'Financial services', light: 'noon',
    lines: ['For firms that answer to a regulator,'], ink: 'and to clients who read the fine print',
    protect: 'You hold other people’s money and the records that go with it. The questions come from two directions: the regulator’s examiners, and the due-diligence teams of the clients you want to keep.',
    facts: [
      { body: 'A published security baseline for your plan, applied and kept free of drift.', truth: ['BP §4.4'] },
      { body: 'A scope agreed in writing, so you can say who is answerable for what.', truth: ['BP §4.2'] },
      { body: 'Your tenant stays yours. Access to it is tiered, and no named Trisian user holds standing global administrator rights.', truth: ['BP §4.3', 'BP §11.2'] },
    ],
    start: 'Organizations with a framework to answer to are on Advanced or Enterprise. The assessment recommends the plan.',
    truth: ['BP §5.1', 'BP §6.4'],
  },
  {
    id: 'healthcare', name: 'Healthcare', light: 'morning',
    lines: ['Patient information stays in the workspace,'], ink: 'not on the device',
    protect: 'You hold patient information, and you are asked to account for it by auditors and by the health systems and payers you work with.',
    facts: [
      { body: 'The work and the data stay in the managed cloud, not on the device in someone’s hands.', truth: ['BP §2.4'] },
      { body: 'Desktops are non-persistent: every sign-out ends the session, and nothing lives on the desktop in between.', truth: ['BP §4.6'] },
      { body: 'Controls that support HIPAA on Advanced, and HITRUST on Enterprise. Your compliance program and your auditor stay yours.', truth: ['BP §5.1', 'BP §10.3'] },
    ],
    start: 'Organizations with a framework to answer to are on Advanced or Enterprise. The assessment recommends the plan.',
    truth: ['BP §5.1', 'BP §6.4'],
  },
  {
    id: 'legal', name: 'Legal', light: 'gold',
    lines: ['Privileged work, from any device,'], ink: 'with nothing left on it',
    protect: 'You hold privileged client matter. The questions come from your clients’ general counsel, and from your insurer.',
    facts: [
      { body: 'Privileged work can be opened from any device, and nothing is left on it.', truth: ['BP §2.4', 'BP §4.6'] },
      { body: 'Every access is verified.', truth: ['BP §1.4'] },
      { body: 'One accountable partner: one point of contact, one owner for every issue.', truth: ['BP §3.1'] },
    ],
    start: 'The assessment recommends the plan, and the gaps to close.',
    truth: ['BP §6.4'],
  },
  {
    id: 'growing-businesses', name: 'Growing businesses', light: 'dusk',
    lines: ['Growth stops waiting for IT'], ink: 'to catch up',
    protect: 'The proposal is bigger than the last five combined. Somewhere in it: “Describe your infrastructure’s ability to scale.” You are not regulated, but the clients you want are, and they pass their questions down to the firms they hire.',
    facts: [
      { body: 'Safe Workspace runs from 50 users. Core runs to 300; past that, you move to Advanced.', truth: ['BP §5.1'] },
      { body: 'Capacity follows demand: session hosts are created and removed as your people sign in and out.', truth: ['BP §4.6'] },
      { body: 'The approach is the same on every plan: one golden image, one published baseline, kept free of drift.', truth: ['BP §4.4'] },
    ],
    start: 'Most growing businesses start on Core and move to Advanced when a client asks for a framework. The assessment recommends the plan.',
    truth: ['BP §5.1', 'BP §6.4'],
  },
];

export const trustPage = {
  title: 'Trust — Trisian',
  description: 'What Trisian holds, what its controls support, who is responsible for what, and where to check it.',
  statement: 'Not protection.',
  ink: 'Proof.',
  lede: 'Our mission is to run a workspace that is secure, reliable and provable, on terms you can read in advance. This page is the provable part.',
  truth: ['BP §1.4'],
  questions: [
    { question: 'What certification do you hold?', answer: 'ISO/IEC 27001:2022.', body: 'Certified by an accredited certification body. The scope names Safe Workspace.', truth: ['BP §10.1'] },
    { question: 'What do you support, as opposed to hold?', answer: 'Six frameworks, by plan.', body: 'Holding a certification and supporting yours are different statements. We hold one. Our controls support your obligations under six.', truth: ['BP §10.2', 'BP §5.1'] },
    { question: 'Who is responsible for what?', answer: 'The technical foundation is ours. The program is yours.', body: 'We set up and configure the platform, remediate findings, and collect the evidence for the controls. Your policies, your training and your auditor stay with you.', truth: ['BP §10.3'] },
    { question: 'Whose tenant is it, and who can reach it?', answer: 'Yours.', body: 'Your tenant belongs to you and is separate from ours. Access is tiered, and no named Trisian user holds standing global administrator rights in it.', truth: ['BP §4.3', 'BP §11.2'] },
    { question: 'Do you work the way you ask us to?', answer: 'Yes.', body: 'Trisian has no office and no datacenter of its own. The company runs on the same managed cloud model it sells.', truth: ['BP §3.1'] },
  ],
  closing: 'Nothing is claimed before the document that proves it is issued.',
  closingTruth: ['BP §11.3'],
};

export const companyPage = {
  title: 'Company — Trisian',
  description: 'In business since 1998. Cloud desktops since 2010. One brand, one product: Safe Workspace.',
  lines: ['In business since 1998.'],
  ink: 'Still answerable',
  truth: ['BP §1.3'],
  mission: 'Run a secure, reliable and provable workspace for our clients, on terms they can read in advance, so their people can focus on the work that moves the business.',
  missionTruth: ['BP §1.4'],
  pillars: [
    { name: 'Security', line: 'Every access is verified, data is protected, and each environment is kept to a published baseline.', truth: ['BP §1.4'] },
    { name: 'Performance', line: 'The workspace runs well every day and grows with you.', truth: ['BP §1.4'] },
    { name: 'Compliance', line: 'What can be proven about the first two.', truth: ['BP §1.4'] },
  ],
  // How we work: the claim is the section's main line, and the plain fact beneath it is what makes it true.
  work: { question: 'How we work', lead: 'Trisian runs on the same managed cloud model', ink: 'it sells', body: 'We have no office and no datacenter of our own.', truth: ['BP §3.1'] },
  oneBrand: 'Trisian is one brand with one product. Everything we offer relates to Safe Workspace.',
  oneBrandTruth: ['BP §1.2'],
};

export const startPage = {
  title: 'Start with an assessment — Trisian',
  description: 'It starts with a conversation about your environment and what you answer to.',
  lines: ['Ask us the'],
  ink: 'hard question',
  after: 'first.',
  lede: 'It starts with a conversation about your environment and what you answer to. If we’re a fit, you’ll get a qualification report. If we’re not, we’ll say so plainly.',
  truth: ['BP §6.4'],
  phases: [
    { name: 'First, a qualification', body: 'A conversation, and a qualification report. Free for every qualified organization.', truth: ['BP §6.4'] },
    { name: 'Then, a deep dive', body: 'A strategic assessment of where you stand on security, performance and compliance, with the plan we recommend, the gaps to close and a formal proposal. It is paid, and credited against your first invoice if you sign.', truth: ['BP §6.4'] },
    // What comes after the proposal: the page used to stop there.
    { name: 'Then, the build', body: 'Building your workspace is a project: scoped, quoted and finished.', truth: ['BP §6.2', '01 §20'] },
    { name: 'From then on, Safe Workspace', body: 'We support what we built, inside a scope agreed in writing.', truth: ['BP §3.2', 'BP §4.2', '01 §20.9'] },
  ],
  minimum: 'Safe Workspace starts at 50 users. Fewer than that? Write anyway, and we’ll point you somewhere useful.',
  minimumTruth: ['BP §5.1'],
};
