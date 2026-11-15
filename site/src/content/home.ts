// Home page copy. Every block that states a fact carries its source references in `truth`.
// Framing lines carry [].
// `tools/truth-check.mjs` fails the build if a block is missing the field.

export const hero = {
  eyebrow: 'Safe Workspace · a managed cloud desktop service',
  lines: ['Your workspace,', 'answered in'],
  ink: 'advance',
  lede: 'We build your organization’s desktop environment in your own cloud, then run it for you: the desktop, Microsoft 365, security, monitoring, compliance controls and support. One accountable team. One price per user. A scope agreed in writing.',
  facts: ['In business since 1998', 'ISO/IEC 27001:2022 certified', 'Built in your own cloud', 'Passthrough, no markup', 'From 50 users'],
  signin: ['Good morning.', 'Signed in.', 'Your desktop is ready, built fresh from the golden image.', 'Your files and settings are where you left them.'],
  truth: ['BP §4.1', 'BP §1.4', 'BP §1.3', 'BP §10.1', 'BP §4.3', 'BP §8.4', 'BP §5.1', 'BP §4.6', '01 §20'],
};

export const layers = {
  question: 'What’s behind the desktop your people sign in to?',
  heading: ['Six things,', 'working as'],
  ink: 'one',
  intro: 'Most organizations buy these from six vendors and hold the pieces together themselves. Safe Workspace is all six in a single managed relationship.',
  closing: ['One window wide. Six layers deep.', 'One name on the outcome.'],
  closingNote: 'Inside the Managed Scope.',
  truth: ['BP §4.1', 'BP §4.7', 'BP §4.2'],
  items: [
    { id: 'desktop', title: 'The desktop', body: 'A Windows desktop in the cloud, delivered on Azure Virtual Desktop. Every one is built from the same golden image, so every desktop starts the same way.', detail: 'Your files and settings follow you in a managed profile.', truth: ['BP §4.3', 'BP §4.6', '01 §20c'] },
    { id: 'm365', title: 'Microsoft 365', body: 'Mail, files and meetings, with the license that comes with your plan: Business Premium, E3 or E5. Passed through, no markup.', detail: 'One less agreement to manage.', truth: ['BP §5.1', 'BP §8.5'] },
    { id: 'security', title: 'Security', body: 'Every access is verified. Data is encrypted at rest and in transit. And the whole environment is held to a published security baseline that is applied and kept free of drift.', detail: 'Endpoint protection is included with your Microsoft 365 license.', truth: ['BP §1.4', 'BP §2.4', 'BP §4.4', 'BP §4.5'] },
    { id: 'monitoring', title: 'Monitoring', body: 'Platform monitoring is automated and runs 24x7. Patching, re-imaging and scaling happen on their own, on schedule.', detail: 'No one files a ticket for a patch.', truth: ['BP §4.4', 'BP §4.7'] },
    { id: 'compliance', title: 'Compliance controls', body: 'Technical controls that support the frameworks your plan covers, and a clear line between what we own and what stays with you.', detail: 'Six frameworks, by plan.', truth: ['BP §5.1', 'BP §10.3'] },
    { id: 'support', title: 'Support', body: 'One point of contact. One owner for every issue. A service desk that goes from Level 1 to Level 3.', detail: 'People, not a queue.', truth: ['BP §3.1', 'BP §3.3'] },
  ],
};

export const built = {
  statement: 'One foundation.',
  rest: 'Built around',
  ink: 'you',
  question: 'Is it the same for everyone?',
  intro: 'We build desktop environments for a living. Every one starts from the same curated foundation, and no two finish the same.',
  truth: ['01 §20', 'BP §1.5'],
  steps: [
    { id: 'foundation', title: 'The foundation', body: 'The same for everyone on a plan: one golden image, a published security baseline, automated patching, scaling and monitoring.', truth: ['BP §4.4', 'BP §5.1'] },
    { id: 'yours', title: 'Made yours', body: 'Your applications in the image. Single- or multi-session desktops, chosen for how your people work. The add-ons you need, and none you don’t.', truth: ['BP §4.6', 'BP §6.1'] },
    { id: 'shaped', title: 'Shaped by what we recommend, and what you answer to', body: 'The assessment shows where you stand on security, performance and compliance. We recommend the plan and the gaps to close, and build around the rules you answer to.', truth: ['BP §6.4', 'BP §5.1', 'BP §10.3'] },
    { id: 'supported', title: 'Built, then supported', body: 'Building it is a project: scoped, quoted and finished. Then we support what we built, including everything those projects put in place. That is Safe Workspace.', truth: ['BP §6.2', 'BP §3.2', 'BP §4.2', '01 §20.9'] },
  ],
  where: {
    question: 'Where does it run?',
    answer: 'In your own cloud.',
    body: 'We don’t host anything. Your workspace is built in your own Azure tenant, on your own subscription. Already have a datacenter? We connect it privately to Azure.',
    truth: ['BP §4.3', 'BP §8.4', 'BP §3.1', '01 §20.7', '01 §20c'],
  },
  notes: ['Each plan has one price per user, per month, and every plan starts at 50 users.', 'Core stops at 300 users because Microsoft 365 Business Premium does. That limit is Microsoft’s, not ours.'],
  notesTruth: ['BP §5.1', 'BP §8.2'],
};

export const scope = {
  question: 'When something goes wrong, whose problem is it?',
  heading: ['Inside the scope,'],
  ink: 'ours',
  after: 'Not just the ticket. The outcome.',
  body: 'Managed Scope is everything across infrastructure, security, compliance and support that we take operational responsibility for. Anything inside it has an owner, a service level and a resolution path. Anything outside it is defined as such, in writing. You know in advance, not during an incident.',
  principle: 'We support what we build.',
  truth: ['BP §4.2', '01 §20.9', '01 §20.10'],
  line: [
    { area: 'Day to day', ours: 'The workspace we built, and everything our projects put in place', yours: 'Your business applications, your devices, your internet connection', truth: ['BP §4.2', 'BP §7.1'] },
    { area: 'Compliance', ours: 'The technical controls, and the evidence for them', yours: 'Your program, your policies, your auditor', truth: ['BP §10.3'] },
    { area: 'The cloud', ours: 'Building it and running it', yours: 'The tenant and the subscription. They are in your name', truth: ['BP §4.3', 'BP §8.4'] },
  ],
  commitments: [
    { lead: 'You don’t chase vendors.', body: 'If it starts inside and we can’t resolve it alone, we own the escalation and the communication.' },
    { lead: 'The boundary was set in writing.', body: 'If it starts outside (a third-party application, hardware, an internet provider), you knew that at onboarding.' },
    { lead: 'Scope doesn’t move mid-contract.', body: 'Additions go through a formal change order, documented and priced before work begins.' },
  ],
  commitmentsTruth: ['BP §4.2'],
  explorerPrompt: 'Whose problem is it? Try a few.',
  qualifier: 'Examples. Your own scope is set in writing at onboarding.',
};

export const tuesday = {
  heading: ['A Tuesday,', 'answered in'],
  ink: 'advance',
  intro: 'Not in a brochure. On an ordinary Tuesday.',
  signoff: 'Where probably stops, Trisian starts.',
  truth: ['BP §4.4', 'BP §4.6', 'BP §5.1', 'BP §3.1'],
  beats: [
    { id: 'morning', time: 'Morning', scene: 'Sign-in', ground: 'morning', hosts: 3, question: 'Is this the same desktop as yesterday?', answer: 'No. It’s a clean one.', body: 'Every sign-in starts fresh from the golden image. Your files and settings are waiting in your profile.', truth: ['BP §4.6'] },
    { id: 'midmorning', time: 'Mid-morning', scene: 'Everyone arrives', ground: 'noon', hosts: 7, question: 'Will it cope?', answer: 'Capacity follows people.', body: 'Session hosts are created as demand rises and removed as it falls.', truth: ['BP §4.4', 'BP §4.6'] },
    { id: 'afternoon', time: 'Afternoon', scene: 'Someone needs help', ground: 'gold', hosts: 6, question: 'Who do they call?', answer: 'One service desk. One owner for the issue.', body: '', truth: ['BP §3.1'] },
    { id: 'evening', time: 'Evening', scene: 'Sign-out', ground: 'dusk', hosts: 2, question: 'What’s left behind?', answer: 'Nothing on the desktop.', body: 'Every sign-out ends the session.', truth: ['BP §4.6'] },
    { id: 'night', time: 'Night', scene: 'The office is dark', ground: 'night', hosts: 1, question: 'Did the patches run? Is anyone watching?', answer: 'Patching is automated, on schedule. Platform monitoring is automated, 24x7.', body: 'The golden image is backed up for platform recovery. On Advanced and Enterprise, critical and high-impact incidents are covered around the clock.', truth: ['BP §4.4', 'BP §5.1'] },
    { id: 'dawn', time: 'Dawn', scene: 'Tomorrow', ground: 'gold', hosts: 2, question: '', answer: 'It starts clean again.', body: '', truth: ['BP §4.6'] },
  ],
};

export const proof = {
  statement: 'Not protection.',
  ink: 'Proof.',
  intro: 'Sooner or later someone asks what you knew, and when: an auditor, a board, a client. It’s an easier question when the answer was written before it was asked. Here are three things about Safe Workspace you can check for yourself.',
  truth: [],
  exhibits: [
    { id: 'clean', title: 'A clean start, every sign-in', question: 'What happens to a desktop after someone has used it?', answer: 'It ends with the session.', body: 'Every sign-out ends the session, and the next sign-in starts clean from the golden image. People can’t install software or save files outside their profile, so nothing lives on the desktop in between. Their files and settings follow them in a managed profile.', note: 'On Azure Virtual Desktop, session hosts are created and removed with demand.', aside: 'Think of a hotel room: reset for the next guest. Your luggage is already in it.', check: 'Ask us to show you a sign-in.', truth: ['BP §4.6'] },
    { id: 'passthrough', title: 'Passthrough, no markup', question: 'What are we actually paying for?', answer: 'Azure, at exactly what your subscription shows.', body: 'Your Azure subscription sits in your own tenant, and you pay exactly the amount shown on it. Microsoft 365 licenses pass through the same way. What you pay us for is running it: one price per user, per month.', note: '', aside: 'It’s a sentence worth asking any provider to put in writing.', check: 'Open your Azure subscription and compare.', truth: ['BP §8.4', 'BP §8.5', 'BP §5.1'] },
    { id: 'certified', title: 'Certified, and exact about it', question: 'What can you prove about yourselves?', answer: 'ISO/IEC 27001:2022, certified', body: 'by an accredited certification body. The scope names Safe Workspace. Holding a certification and supporting yours are different statements. We keep them apart.', note: '', aside: '', check: 'The certificate details and how to verify them are on the Trust Center.', truth: ['BP §10.1', 'BP §10.2'] },
  ],
  hold: 'ISO/IEC 27001:2022',
  support: [
    { plan: 'Advanced', frameworks: ['CIS Controls v8.1', 'NIST CSF 2.0', 'HIPAA'] },
    { plan: 'Enterprise adds', frameworks: ['SOC 2', 'ISO/IEC 27001', 'HITRUST'] },
  ],
  supportTruth: ['BP §5.1', 'BP §10.2'],
  qualifier: 'Our controls support your obligations under these frameworks. Certifications and attestation reports are issued only by your independent certification body, CPA firm or assessor.',
  qualifierTruth: ['BP §10.3', 'BP §10.4'],
};

export const who = {
  heading: ['Built for organizations', 'that have to'],
  ink: 'defend their decisions',
  sub: 'To a regulator. To an auditor. To a board. To the client you just won.',
  truth: ['BP §1.4', 'BP §2.1', 'BP §2.2'],
  isThisYou: [
    'You hold information that has to be protected: a client’s, a patient’s, an investor’s.',
    'Someone asks you to account for it, or soon will.',
    'Your people work from wherever they are, on whatever they have.',
    'You’d rather have one accountable partner than six vendors.',
    'You want a cost you can predict and a scope you can read.',
    'You have 50 people or more.',
  ],
  doors: [
    { id: 'financial-services', name: 'Financial services', line: 'For firms that answer to a regulator, and to clients who read the fine print.', sub: 'A published baseline, a written scope, and a clear account of who can reach your tenant.', light: 'noon', truth: ['BP §4.4', 'BP §4.2', 'BP §4.3'] },
    { id: 'healthcare', name: 'Healthcare', line: 'Patient information stays in the workspace, not on the device.', sub: 'Non-persistent desktops, and controls that support HIPAA and HITRUST.', light: 'morning', truth: ['BP §2.4', 'BP §4.6', 'BP §5.1'] },
    { id: 'legal', name: 'Legal', line: 'Privileged work, from any device, with nothing left on it.', sub: 'Every access verified. One accountable partner.', light: 'gold', truth: ['BP §4.6', 'BP §1.4', 'BP §3.1'] },
    { id: 'growing-businesses', name: 'Growing businesses', line: 'Growth stops waiting for IT to catch up.', sub: 'From 50 people. Capacity that follows demand. Ready when a bigger client starts asking questions.', light: 'dusk', truth: ['BP §5.1', 'BP §4.6'] },
  ],
  open: 'Not on this list? If the description fits, so does the workspace.',
  rule: 'The rules don’t shrink with the headcount.',
};

export const since = {
  heading: 'of running IT.',
  ink: 'in the cloud',
  intro: 'Safe Workspace wasn’t designed in a quarter. Each part of it is something we learned by running desktops for clients, one era at a time.',
  closing: 'Today we have no office and no datacenter of our own. Trisian runs on the same managed cloud model it sells.',
  truth: ['BP §1.3', 'BP §3.1'],
  eras: [
    { year: '1998', name: 'ILS Inc.', what: 'We start in Florida: technical support, and PCs built to order.', taught: 'People don’t call about technology. They call because work has stopped.', part: 'Support', truth: ['BP §1.3'] },
    { year: '2010', name: 'All IT Host', what: 'We take the desktop off the desk: Citrix desktops, hosted on our own servers in a datacenter.', taught: 'Work is safer in one well-run place than on a hundred devices.', part: 'The desktop', truth: ['BP §1.3'] },
    { year: '2010–24', name: 'The Citrix years', what: 'We follow the Citrix line all the way to Citrix DaaS.', taught: 'A hundred identical desktops are easier to keep right than a hundred unique ones.', part: 'Security · Monitoring', truth: ['BP §1.3'] },
    { year: '2024', name: 'To Azure', what: 'We leave the datacenter for Microsoft Azure, and add Azure Virtual Desktop alongside Citrix.', taught: 'Capacity should follow people. And your cloud should sit in your own tenant.', part: 'Microsoft 365 · scaling', truth: ['BP §1.3'] },
    { year: '2026', name: 'Trisian', what: 'A new name, and ISO/IEC 27001:2022 certification.', taught: 'If it can’t be shown, it doesn’t count.', part: 'Compliance controls', truth: ['BP §1.3'] },
  ],
};

export const start = {
  lines: ['Ask us the'],
  ink: 'hard question',
  after: 'first.',
  sub: 'The one your auditor, your board or your biggest client would ask. We’ll answer it in writing.',
  how: 'It starts with an assessment, not a pitch: a conversation and a qualification report, free for every qualified organization. Then we build your workspace as a project, scoped and quoted in writing. Then we run it.',
  signoff: 'Answered in advance.',
  truth: ['BP §6.4', 'BP §6.2', 'BP §3.2'],
};
