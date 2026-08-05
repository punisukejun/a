const questions = [
  {
    words: [
      { word: "cot", ipa: "/kɑt/" },
      { word: "cut", ipa: "/kʌt/" },
      { word: "cat", ipa: "/kæt/" },
    ],
    answer: 2,
    sentence: "I heard her say ___ clearly.",
    label: "アメリカ英語の母音 /ɑ/・/ʌ/・/æ/",
    note: "「cat」の /æ/ は、あごを下げ、舌を前方の低い位置にして出す「あ」と「え」の間の音です。",
  },
  {
    words: [
      { word: "ship", ipa: "/ʃɪp/" },
      { word: "sheep", ipa: "/ʃip/" },
      { word: "sip", ipa: "/sɪp/" },
    ],
    answer: 1,
    sentence: "Please write the word ___ here.",
    label: "/ɪ/・/i/ と /ʃ/・/s/",
    note: "「sheep」の /i/ は「ship」の /ɪ/ より舌を高く前に置く、緊張した母音です。長さだけに頼らず音質も聞きましょう。",
  },
  {
    words: [
      { word: "light", ipa: "/laɪt/" },
      { word: "right", ipa: "/raɪt/" },
      { word: "night", ipa: "/naɪt/" },
    ],
    answer: 0,
    sentence: "The word ___ is on the card.",
    label: "子音 /l/・/r/・/n/",
    note: "「light」の /l/ は、舌先を上の前歯の裏につけます。",
  },
  {
    words: [
      { word: "fan", ipa: "/fæn/" },
      { word: "van", ipa: "/væn/" },
      { word: "fun", ipa: "/fʌn/" },
    ],
    answer: 1,
    sentence: "I think she said ___ first.",
    label: "子音 /f/・/v/ と母音 /æ/・/ʌ/",
    note: "「van」の /v/ は、下唇に上の歯を軽く当てて声を出します。",
  },
  {
    words: [
      { word: "rice", ipa: "/raɪs/" },
      { word: "lice", ipa: "/laɪs/" },
      { word: "rise", ipa: "/raɪz/" },
    ],
    answer: 2,
    sentence: "Did you hear the word ___ too?",
    label: "/r/・/l/ と /s/・/z/",
    note: "「rise」の最後は声のある /z/。喉の振動を意識しましょう。",
  },
  {
    words: [
      { word: "think", ipa: "/θɪŋk/" },
      { word: "sink", ipa: "/sɪŋk/" },
      { word: "zinc", ipa: "/zɪŋk/" },
    ],
    answer: 0,
    sentence: "He asked me to repeat ___ slowly.",
    label: "語頭の子音 /θ/・/s/・/z/",
    note: "「think」の /θ/ は、舌先を歯の間に軽く挟んで息を出します。",
  },
  {
    words: [
      { word: "work", ipa: "/wɝk/" },
      { word: "walk", ipa: "/wɔk/" },
      { word: "woke", ipa: "/woʊk/" },
    ],
    answer: 1,
    sentence: "She used the word ___ in class.",
    label: "アメリカ英語の母音 /ɝ/・/ɔ/・/oʊ/",
    note: "「walk」の /ɔ/ は唇を少し丸める母音です。地域によっては /ɑ/ に近く発音されます。",
  },
  {
    words: [
      { word: "berry", ipa: "/ˈbɛri/" },
      { word: "belly", ipa: "/ˈbɛli/" },
      { word: "very", ipa: "/ˈvɛri/" },
    ],
    answer: 0,
    sentence: "Can you say ___ one more time?",
    label: "子音 /r/・/l/ と /b/・/v/",
    note: "「berry」の /r/ では舌先を口の中のどこにも触れさせません。",
  },
];

const elements = {
  card: document.querySelector(".quiz-card"),
  play: document.querySelector("#playButton"),
  slow: document.querySelector("#slowButton"),
  choices: document.querySelector("#choices"),
  counter: document.querySelector("#questionCounter"),
  score: document.querySelector("#scoreDisplay"),
  progress: document.querySelector("#progressBar"),
  sentence: document.querySelector("#sentenceDisplay"),
  contrast: document.querySelector("#contrastLabel"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  next: document.querySelector("#nextButton"),
  streak: document.querySelector("#streakCount"),
  settings: document.querySelector("#settingsDialog"),
  settingsButton: document.querySelector("#settingsButton"),
  voiceSelect: document.querySelector("#voiceSelect"),
  rateRange: document.querySelector("#rateRange"),
  rateValue: document.querySelector("#rateValue"),
  closeSettings: document.querySelector("#closeSettingsButton"),
  doneSettings: document.querySelector("#doneSettingsButton"),
};

let current = 0;
let score = 0;
let streak = 0;
let answered = false;
let voices = [];
let selectedVoice = null;
let speechRate = 0.85;
let activeUtterance = null;
let quizFinished = false;

try {
  const savedRate = Number(localStorage.getItem("sound-check-rate"));
  if (savedRate >= 0.6 && savedRate <= 1.1) speechRate = savedRate;
} catch {
  // Storage may be unavailable in private or restricted browsing modes.
}

elements.rateRange.value = String(speechRate);
elements.rateValue.textContent = `${speechRate.toFixed(2).replace(/0$/, "")}×`;

function stopSpeech() {
  activeUtterance = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  elements.play.classList.remove("playing");
  elements.play.setAttribute("aria-label", "問題の音声を再生");
}

function renderQuestion() {
  const question = questions[current];
  answered = false;
  stopSpeech();
  elements.counter.textContent = `QUESTION ${current + 1} / ${questions.length}`;
  elements.score.textContent = `${score} PTS`;
  elements.progress.style.width = `${((current + 1) / questions.length) * 100}%`;
  elements.contrast.textContent = question.label;
  elements.sentence.innerHTML = `<span lang="en">“${question.sentence.replace("___", "<span>___</span>")}”</span>`;
  elements.feedback.className = "feedback";
  elements.next.classList.remove("visible");
  elements.choices.innerHTML = "";

  question.words.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `
      <span class="choice-number">0${index + 1}</span>
      <span class="choice-word" lang="en">${item.word}</span>
      <span class="choice-ipa" aria-hidden="true">${item.ipa}</span>
    `;
    button.addEventListener("click", () => selectAnswer(index));
    elements.choices.append(button);
  });
}

function speak(rate = speechRate) {
  if (!("speechSynthesis" in window)) {
    elements.feedback.classList.add("visible", "wrong");
    elements.feedbackTitle.textContent = "音声を再生できません";
    elements.feedbackText.textContent = "音声読み上げに対応したブラウザでお試しください。";
    return;
  }

  stopSpeech();
  const question = questions[current];
  const answer = question.words[question.answer].word;
  const utterance = new SpeechSynthesisUtterance(question.sentence.replace("___", answer));
  utterance.lang = selectedVoice?.lang || "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  if (selectedVoice) utterance.voice = selectedVoice;
  activeUtterance = utterance;
  utterance.onstart = () => {
    if (activeUtterance !== utterance) return;
    elements.play.classList.add("playing");
    elements.play.setAttribute("aria-label", "音声を停止");
  };
  utterance.onend = () => {
    if (activeUtterance === utterance) stopSpeech();
  };
  utterance.onerror = () => {
    if (activeUtterance === utterance) stopSpeech();
  };
  window.setTimeout(() => {
    if (activeUtterance === utterance) window.speechSynthesis.speak(utterance);
  }, 40);
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const question = questions[current];
  const buttons = [...elements.choices.children];
  buttons.forEach((button) => (button.disabled = true));
  buttons[question.answer].classList.add("correct");

  if (index === question.answer) {
    score += 100;
    streak += 1;
    elements.feedback.querySelector(".feedback-icon").textContent = "✓";
    elements.feedbackTitle.textContent = "正解！ よく聞き取れました";
  } else {
    streak = 0;
    buttons[index].classList.add("wrong");
    elements.feedback.querySelector(".feedback-icon").textContent = "×";
    elements.feedbackTitle.textContent = `正解は “${question.words[question.answer].word}”`;
  }

  elements.feedbackText.textContent = question.note;
  elements.feedback.className = `feedback visible${index === question.answer ? "" : " wrong"}`;
  elements.score.textContent = `${score} PTS`;
  elements.streak.textContent = streak;
  elements.streak.parentElement.setAttribute("aria-label", `連続正解数 ${streak}`);
  elements.next.textContent = current === questions.length - 1 ? "結果を見る" : "次の問題へ";
  elements.next.insertAdjacentHTML(
    "beforeend",
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>',
  );
  elements.next.classList.add("visible");
}

function showResult() {
  stopSpeech();
  quizFinished = true;
  const percentage = Math.round((score / (questions.length * 100)) * 100);
  const message =
    percentage >= 80
      ? "すばらしい耳です！細かな音の違いを聞き分けられています。"
      : percentage >= 50
        ? "いい調子です。苦手な音をもう一度練習してみましょう。"
        : "繰り返し聞くほど耳が慣れてきます。もう一度挑戦しましょう。";

  elements.card.innerHTML = `
    <div class="result">
      <p class="eyebrow" lang="en">QUIZ COMPLETE</p>
      <div class="result-score">${score}<small> pts</small></div>
      <h2 id="resultHeading" tabindex="-1">${questions.length}問中 ${score / 100}問 正解</h2>
      <p>${message}</p>
      <button class="next-button visible" id="restartButton" type="button">もう一度挑戦する</button>
    </div>
  `;
  elements.card.setAttribute("aria-labelledby", "resultHeading");
  document.querySelector("#restartButton").addEventListener("click", () => window.location.reload());
  document.querySelector("#resultHeading").focus();
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const previousVoiceURI = selectedVoice?.voiceURI || elements.voiceSelect.value;
  let savedVoiceURI = "";
  try {
    savedVoiceURI = localStorage.getItem("sound-check-voice") || "";
  } catch {
    // Keep the current in-memory selection when storage is unavailable.
  }
  voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.startsWith("en"));
  elements.voiceSelect.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "アメリカ英語のデフォルト音声";
  elements.voiceSelect.append(defaultOption);
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.voiceURI;
    option.textContent = `${voice.name} (${voice.lang})`;
    elements.voiceSelect.append(option);
  });
  const desiredVoiceURI = previousVoiceURI || savedVoiceURI;
  selectedVoice = voices.find((voice) => voice.voiceURI === desiredVoiceURI) || null;
  elements.voiceSelect.value = selectedVoice?.voiceURI || "";
}

elements.play.addEventListener("click", () => {
  if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
    stopSpeech();
  } else {
    speak();
  }
});
elements.slow.addEventListener("click", () => speak(0.6));
elements.next.addEventListener("click", () => {
  if (current === questions.length - 1) showResult();
  else {
    current += 1;
    renderQuestion();
  }
});

elements.settingsButton.addEventListener("click", () => {
  loadVoices();
  if (typeof elements.settings.showModal === "function") elements.settings.showModal();
  else elements.settings.setAttribute("open", "");
});
function closeSettings() {
  if (typeof elements.settings.close === "function") elements.settings.close();
  else elements.settings.removeAttribute("open");
  elements.settingsButton.focus();
}
elements.closeSettings.addEventListener("click", closeSettings);
elements.doneSettings.addEventListener("click", closeSettings);
elements.voiceSelect.addEventListener("change", () => {
  selectedVoice = voices.find((voice) => voice.voiceURI === elements.voiceSelect.value) || null;
  try {
    localStorage.setItem("sound-check-voice", selectedVoice?.voiceURI || "");
  } catch {
    // The setting still applies for the current page session.
  }
});
elements.rateRange.addEventListener("input", () => {
  speechRate = Number(elements.rateRange.value);
  elements.rateValue.textContent = `${speechRate.toFixed(2).replace(/0$/, "")}×`;
  try {
    localStorage.setItem("sound-check-rate", String(speechRate));
  } catch {
    // The setting still applies for the current page session.
  }
});

document.addEventListener("keydown", (event) => {
  if (elements.settings.open || quizFinished || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"].includes(target.tagName))
  ) {
    return;
  }
  if (event.code === "Space") {
    event.preventDefault();
    speak();
  }
  if (["1", "2", "3"].includes(event.key)) selectAnswer(Number(event.key) - 1);
});

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

renderQuestion();
