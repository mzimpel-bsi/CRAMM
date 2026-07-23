const STORAGE_KEY = 'cra-maturity-survey-answers';
const LANGUAGE_KEY = 'cra-maturity-language';
const translations = {
  en: {
    title: 'CRA Maturity Model Survey',
    eyebrow: 'Self-assessment',
    intro: 'Rate each question on a 1–5 maturity scale to get an instant view of your current posture against the Cyber Resilience Act maturity model.',
    toggle: 'Deutsch',
    reset: 'Reset responses',
    completed: 'Completed',
    average: 'Average maturity',
    answered: 'Questions answered',
    prompt: 'Select your current maturity level for each question.',
    summary: 'Current outlook',
    error: 'Unable to load the survey data.',
    levels: [
      { label: 'Level 1', description: 'Ad hoc' },
      { label: 'Level 2', description: 'Emerging' },
      { label: 'Level 3', description: 'Defined' },
      { label: 'Level 4', description: 'Managed' },
      { label: 'Level 5', description: 'Optimized' },
    ],
    maturityNames: {
      strong: 'Strong and continuously improving',
      established: 'Well established',
      moderate: 'Moderate maturity',
      attention: 'Needs attention',
      foundational: 'Foundational / ad hoc',
    },
    domainNames: {
      'Governance And Documentation': 'Governance And Documentation',
      'Risk Management And Security By Design/Default': 'Risk Management And Security By Design/Default',
      'Vulnerability And Patch Management': 'Vulnerability And Patch Management',
      'Product Lifecycle Management': 'Product Lifecycle Management',
      'Awareness, Competence And Skills': 'Awareness, Competence And Skills',
    },
    questions: {
      '1.1.': 'Do you have written and approved product security policies?',
      '1.2.': 'Are roles and responsibilities clearly defined for product security activities (e.g. development, vulnerability management, updates)?',
      '1.3.': 'Do you maintain product-level technical documentation describing implemented security features, risk assessments, design decisions and update procedures?',
      '1.4.': 'Is there a process to regularly review product security and the quality of related documentation?',
      '1.5.': 'Are you aware of the Market Surveillance Authority responsible for enforcing the CRA, the conformity assessment procedure applicable to your products, and how to interact with relevant authorities if needed?',
      '2.1.': 'Do you perform cybersecurity risk assessments and use the results to guide product design, development, configuration and component management decisions?',
      '2.2.': 'Are products designed using security-by-design principles from the outset?',
      '2.3.': 'Are products delivered with secure-by-default configurations and settings?',
      '2.4.': 'Do you perform security checks and testing before releasing or updating a product, and to what extent are automated tools used?',
      '2.5.': 'When risks change or new threats emerge, are risk assessments, configurations and third-party components reviewed and updated?',
      '3.1.': 'Do you have a process to receive, acknowledge, record and track vulnerabilities reported by customers, researchers or internal staff?',
      '3.2.': 'Do you have a defined process for creating, testing, delivering and communicating security updates to customers for supported products?',
      '3.3.': 'Do you maintain and use a SBOM to support vulnerability and dependency management?',
      '3.4.': 'Are vulnerabilities and updates prioritized based on risk, potential impact?',
      '3.5': 'Do you verify that security updates effectively resolve reported vulnerabilities and maintain evidence of this verification?',
      '4.1.': 'Is there a defined approach to managing product security during the operational phase?',
      '4.2.': 'Is the product lifecycle management actively managed, including defined support periods, update responsibilities, end-of-life arrangements and communication with customers?',
      '4.3.': 'Is experience from product operation, post-incident reviews and customer input used to improve products over time?',
      '4.4.': 'Is there a structured and tested way to address identified product security issues?',
      '4.5.': 'Are products monitored during operation to identify security risks, vulnerabilities and emerging threats?',
      '5.1.': 'Are sufficient skills available to design, develop and maintain products in a secure way, including through external expertise where internal capacity is limited?',
      '5.2.': 'Do relevant staff receive appropriate training on cybersecurity practices relevant to their roles, including product risk management, vulnerability management, and security-by-design?',
      '5.3.': 'Does the organisation promote a culture of responsible product development, open reporting and awareness of product risks?',
      '5.4.': 'Do you follow relevant external product security information (e.g. advisories, alerts)?',
      '5.5.': 'Do you assess and validate that your team has the required skills and competence to maintain secure products?',
    },
  },
  de: {
    title: 'CRA-Reifegradmodell-Umfrage',
    eyebrow: 'Selbsteinschätzung',
    intro: 'Bewerten Sie jede Frage auf einer 1–5-Reifegradskala, um sofort einen Überblick über Ihre aktuelle Lage im Rahmen des Cyber Resilience Act zu erhalten.',
    toggle: 'English',
    reset: 'Antworten zurücksetzen',
    completed: 'Abgeschlossen',
    average: 'Durchschnittlicher Reifegrad',
    answered: 'Beantwortete Fragen',
    prompt: 'Wählen Sie den aktuellen Reifegrad für jede Frage aus.',
    summary: 'Aktuelle Einschätzung',
    error: 'Die Umfragedaten konnten nicht geladen werden.',
    levels: [
      { label: 'Stufe 1', description: 'Ad hoc' },
      { label: 'Stufe 2', description: 'Entwickelnd' },
      { label: 'Stufe 3', description: 'Definiert' },
      { label: 'Stufe 4', description: 'Gesteuert' },
      { label: 'Stufe 5', description: 'Optimiert' },
    ],
    maturityNames: {
      strong: 'Stark und kontinuierlich verbessernd',
      established: 'Gut etabliert',
      moderate: 'Mittlerer Reifegrad',
      attention: 'Benötigt Aufmerksamkeit',
      foundational: 'Grundlegend / ad hoc',
    },
    domainNames: {
      'Governance And Documentation': 'Governance und Dokumentation',
      'Risk Management And Security By Design/Default': 'Risikomanagement und Security-by-Design/Default',
      'Vulnerability And Patch Management': 'Schwachstellen- und Patch-Management',
      'Product Lifecycle Management': 'Produktlebenszyklus-Management',
      'Awareness, Competence And Skills': 'Awareness, Kompetenz und Fähigkeiten',
    },
    questions: {
      '1.1.': 'Verfügen Sie über schriftlich festgelegte und genehmigte Produkt-Sicherheitsrichtlinien?',
      '1.2.': 'Sind Rollen und Verantwortlichkeiten für Produkt-Sicherheitsaktivitäten klar definiert (z. B. Entwicklung, Schwachstellenmanagement, Updates)?',
      '1.3.': 'Pflegen Sie produktbezogene technische Dokumentation zu implementierten Sicherheitsfunktionen, Risikobewertungen, Designentscheidungen und Update-Prozeduren?',
      '1.4.': 'Gibt es einen Prozess zur regelmäßigen Überprüfung von Produktsicherheit und Qualität der zugehörigen Dokumentation?',
      '1.5.': 'Sind Sie über die Marktüberwachungsbehörde informiert, die für die Durchsetzung der CRA zuständig ist, über das für Ihre Produkte geltende Konformitätsbewertungsverfahren und über die Interaktion mit relevanten Behörden bei Bedarf?',
      '2.1.': 'Führen Sie Cybersecurity-Risikobewertungen durch und nutzen die Ergebnisse, um Produktdesign, Entwicklung, Konfiguration und Entscheidungen zum Komponentenmanagement zu steuern?',
      '2.2.': 'Werden Produkte von Anfang an nach Security-by-Design-Prinzipien entwickelt?',
      '2.3.': 'Werden Produkte mit sicheren Standardkonfigurationen und -einstellungen ausgeliefert?',
      '2.4.': 'Führen Sie Sicherheitsprüfungen und Tests vor der Veröffentlichung oder Aktualisierung eines Produkts durch und in welchem Umfang werden automatisierte Tools eingesetzt?',
      '2.5.': 'Werden Risikobewertungen, Konfigurationen und Drittanbieter-Komponenten bei Änderungen der Risiken oder neuen Bedrohungen überprüft und aktualisiert?',
      '3.1.': 'Verfügen Sie über einen Prozess, um Schwachstellen zu empfangen, zu bestätigen, aufzuzeichnen und zu verfolgen, die von Kunden, Forschenden oder Mitarbeitenden gemeldet werden?',
      '3.2.': 'Verfügen Sie über einen definierten Prozess zur Erstellung, Prüfung, Bereitstellung und Kommunikation von Sicherheitsupdates an Kunden für unterstützte Produkte?',
      '3.3.': 'Pflegen und verwenden Sie ein SBOM zur Unterstützung des Schwachstellen- und Dependency-Managements?',
      '3.4.': 'Werden Schwachstellen und Updates anhand von Risiko und potenzieller Auswirkung priorisiert?',
      '3.5': 'Prüfen Sie, dass Sicherheitsupdates gemeldete Schwachstellen effektiv beheben und führen Nachweise dieser Prüfung?',
      '4.1.': 'Gibt es einen definierten Ansatz zur Verwaltung der Produktsicherheit während der Betriebsphase?',
      '4.2.': 'Wird das Produktlebenszyklusmanagement aktiv gesteuert, einschließlich definierter Supportzeiträume, Zuständigkeiten für Updates, Auslaufregelungen und Kommunikation mit Kunden?',
      '4.3.': 'Werden Erfahrungen aus dem Produktbetrieb, Post-Incident-Reviews und Kundeneingaben genutzt, um Produkte im Laufe der Zeit zu verbessern?',
      '4.4.': 'Gibt es einen strukturierten und getesteten Weg, um identifizierte Produktsicherheitsprobleme zu behandeln?',
      '4.5.': 'Werden Produkte im Betrieb überwacht, um Sicherheitsrisiken, Schwachstellen und aufkommende Bedrohungen zu erkennen?',
      '5.1.': 'Sind ausreichend Fähigkeiten vorhanden, um Produkte sicher zu gestalten, zu entwickeln und zu warten, ggf. mit externer Expertise, wenn die interne Kapazität begrenzt ist?',
      '5.2.': 'Erhalten relevante Mitarbeitende angemessene Schulungen zu Cybersecurity-Praktiken, die für ihre Rolle relevant sind, einschließlich Produkt-Risikomanagement, Schwachstellenmanagement und Security-by-Design?',
      '5.3.': 'Fördert die Organisation eine Kultur verantwortungsvoller Produktentwicklung, offener Meldung und Awareness für Produkt-Risiken?',
      '5.4.': 'Verfolgen Sie relevante externe Informationen zur Produktsicherheit (z. B. Warnungen, Hinweise)?',
      '5.5.': 'Bewerten und validieren Sie, dass Ihr Team die erforderlichen Fähigkeiten und Kompetenzen besitzt, um sichere Produkte zu warten?',
    },
  },
};

let questions = [];
let answers = {};
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || 'de';

async function loadSurvey() {
  try {
    const response = await fetch('./scripts/survey_data.json');
    const data = await response.json();
    questions = data.filter((item) => {
      const text = (item.question || '').toLowerCase();
      return item.domain !== 'Overall Maturity Score' && !text.includes('out of 5');
    });

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      answers = JSON.parse(saved);
    }

    render();
  } catch (error) {
    console.error('Unable to load survey data', error);
    document.getElementById('questionnaire').innerHTML = '<p>Unable to load the survey data.</p>';
  }
}

function render() {
  const questionnaire = document.getElementById('questionnaire');
  const progressPercent = document.getElementById('progressPercent');
  const avgScore = document.getElementById('avgScore');
  const answeredCount = document.getElementById('answeredCount');
  const progressBar = document.getElementById('progressBar');
  const maturityLevel = document.getElementById('maturityLevel');
  const langToggle = document.getElementById('langToggle');
  const heroTitle = document.querySelector('h1');
  const heroEyebrow = document.querySelector('.eyebrow');
  const heroIntro = document.querySelector('.intro');
  const resetBtn = document.getElementById('resetBtn');
  const t = translations[currentLanguage];

  document.title = t.title;
  heroTitle.textContent = t.title;
  heroEyebrow.textContent = t.eyebrow;
  heroIntro.textContent = t.intro;
  langToggle.textContent = t.toggle;
  resetBtn.textContent = t.reset;

  const answered = Object.values(answers).filter(Boolean).length;
  const total = questions.length;
  const progress = total ? Math.round((answered / total) * 100) : 0;
  const average = answered
    ? (Object.values(answers).reduce((sum, value) => sum + Number(value), 0) / answered).toFixed(1)
    : '—';

  progressPercent.textContent = `${progress}%`;
  avgScore.textContent = average === '—' ? '—' : average;
  answeredCount.textContent = `${answered} / ${total}`;
  progressBar.style.width = `${progress}%`;

  const maturityName = getMaturityName(average === '—' ? 0 : Number(average));
  maturityLevel.textContent = answered
    ? `${t.summary}: ${maturityName}`
    : t.prompt;

  const grouped = questions.reduce((acc, question) => {
    acc[question.domain] = acc[question.domain] || [];
    acc[question.domain].push(question);
    return acc;
  }, {});

  questionnaire.innerHTML = '';
  Object.entries(grouped).forEach(([domain, items]) => {
    const section = document.createElement('div');
    section.className = 'domain-section';

    const heading = document.createElement('h2');
    heading.className = 'domain-title';
    heading.textContent = getDomainLabel(domain);
    section.appendChild(heading);

    items.forEach((question) => {
      const card = document.createElement('article');
      card.className = 'question-card';

      const meta = document.createElement('div');
      meta.className = 'question-meta';
      meta.innerHTML = `<span>${question.ref}</span><span>${getDomainLabel(domain)}</span>`;
      card.appendChild(meta);

      const text = document.createElement('p');
      text.className = 'question-text';
      text.textContent = getQuestionText(question);
      card.appendChild(text);

      const list = document.createElement('div');
      list.className = 'option-list';

      t.levels.forEach((level, index) => {
        const value = index + 1;
        const pill = document.createElement('label');
        pill.className = `option-pill ${answers[question.ref] === value ? 'active' : ''}`;
        pill.innerHTML = `
          <input type="radio" name="q-${question.ref}" value="${value}" ${answers[question.ref] === value ? 'checked' : ''} />
          <strong>${level.label}</strong>
          <span>${level.description}</span>
        `;

        pill.addEventListener('change', () => {
          answers[question.ref] = value;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
          render();
        });

        list.appendChild(pill);
      });

      card.appendChild(list);
      section.appendChild(card);
    });

    questionnaire.appendChild(section);
  });
}

function getQuestionText(question) {
  const t = translations[currentLanguage];
  return t.questions[question.ref] || question.question;
}

function getDomainLabel(domain) {
  const t = translations[currentLanguage];
  return t.domainNames[domain] || domain;
}

function getMaturityName(score) {
  const t = translations[currentLanguage];
  if (score >= 4.5) return t.maturityNames.strong;
  if (score >= 3.5) return t.maturityNames.established;
  if (score >= 2.5) return t.maturityNames.moderate;
  if (score >= 1.5) return t.maturityNames.attention;
  return t.maturityNames.foundational;
}

function resetAnswers() {
  answers = {};
  localStorage.removeItem(STORAGE_KEY);
  render();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  render();
}

document.getElementById('resetBtn').addEventListener('click', resetAnswers);
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

loadSurvey();
