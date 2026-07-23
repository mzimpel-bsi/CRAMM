const STORAGE_KEY = 'cra-maturity-survey-answers';
const maturityLevels = [
  { label: 'Level 1', description: 'Ad hoc' },
  { label: 'Level 2', description: 'Emerging' },
  { label: 'Level 3', description: 'Defined' },
  { label: 'Level 4', description: 'Managed' },
  { label: 'Level 5', description: 'Optimized' },
];

let questions = [];
let answers = {};

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
    ? `Current outlook: ${maturityName}`
    : 'Select your current maturity level for each question.';

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
    heading.textContent = domain;
    section.appendChild(heading);

    items.forEach((question) => {
      const card = document.createElement('article');
      card.className = 'question-card';

      const meta = document.createElement('div');
      meta.className = 'question-meta';
      meta.innerHTML = `<span>${question.ref}</span><span>${domain}</span>`;
      card.appendChild(meta);

      const text = document.createElement('p');
      text.className = 'question-text';
      text.textContent = question.question;
      card.appendChild(text);

      const list = document.createElement('div');
      list.className = 'option-list';

      maturityLevels.forEach((level, index) => {
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

function getMaturityName(score) {
  if (score >= 4.5) return 'Strong and continuously improving';
  if (score >= 3.5) return 'Well established';
  if (score >= 2.5) return 'Moderate maturity';
  if (score >= 1.5) return 'Needs attention';
  return 'Foundational / ad hoc';
}

function resetAnswers() {
  answers = {};
  localStorage.removeItem(STORAGE_KEY);
  render();
}

document.getElementById('resetBtn').addEventListener('click', resetAnswers);

loadSurvey();
