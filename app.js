const questions = [
  {
    words: [
      { word: "cot", ipa: "/kɑːt/" },
      { word: "cut", ipa: "/kʌt/" },
      { word: "cat", ipa: "/kæt/" },
    ],
    answer: 2,
    sentence: "I heard her say ___ clearly.",
    label: "母音 /ɑː/・/ʌ/・/æ/",
    note: "「cat」の /æ/ は、口を横に開いて「あ」と「え」の間の音です。",
  },
  {
    words: [
      { word: "ship", ipa: "/ʃɪp/" },
      { word: "sheep", ipa: "/ʃiːp/" },
      { word: "sip", ipa: "/sɪp/" },
    ],
    answer: 1,
    sentence: "Please write the word ___ here.",
    label: "/ɪ/・/iː/ と /ʃ/・/s/",
    note: "「sheep」は /iː/ を長く、口角を横に引いて発音します。",
  },
  {
    words: [
      { word: "light", ipa: "/laɪt/" },
      { word: "right", ipa: "/raɪt/" },
      { word: "write", ipa: "/raɪt/" },
    ],
    answer: 0,
    sentence: "The word ___ is on the card.",
    label: "子音 /l/ と /r/",
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
      { word: "thing", ipa: "/θɪŋ/" },
    ],
    answer: 0,
    sentence: "He asked me to repeat ___ slowly.",
    label: "子音 /θ/ と /s/",
    note: "「think」の /θ/ は、舌先を歯の間に軽く挟んで息を出します。",
  },
  {
    words: [
      { word: "work", ipa: "/wɜːrk/" },
      { word: "walk", ipa: "/wɔːk/" },
      { word: "woke", ipa: "/woʊk/" },
    ],
    answer: 1,
    sentence: "She used the word ___ in class.",
    label: "母音 /ɜːr/・/ɔː/・/oʊ/",
    note: "「walk」の母音は、唇を少し丸める長めの /ɔː/ です。",
  },
  {
    words: [
      { word: "berry", ipa: "/ˈberi/" },
      { word: "belly", ipa: "/ˈbeli/" },
      { word: "very", ipa: "/ˈveri/" },
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
};

let current = 0;
let score = 0;
let streak = 0;
let answered = false;
let voices = [];
let selectedVoice = null;
let speechRate = 0.85;
let activeUtterance = null;

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
  elements.sentence.innerHTML = `“${question.sentence.replace("___", "<span>___</span>")}”`;
  elements.feedback.className = "feedback";
  elements.next.classList.remove("visible");
  elements.choices.innerHTML = "";

  question.words.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `
      <span class="choice-number">0${index + 1}</span>
      <span class="choice-word">${item.word}</span>
      <span class="choice-ipa">${item.ipa}</span>
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
  utterance.lang = "en-US";
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
  window.speechSynthesis.speak(utterance);
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
    elements.feedback.classList.add("visible");
    elements.feedback.querySelector(".feedback-icon").textContent = "✓";
    elements.feedbackTitle.textContent = "正解！ よく聞き取れました";
  } else {
    streak = 0;
    buttons[index].classList.add("wrong");
    elements.feedback.classList.add("visible", "wrong");
    elements.feedback.querySelector(".feedback-icon").textContent = "×";
    elements.feedbackTitle.textContent = `正解は “${question.words[question.answer].word}”`;
  }

  elements.feedbackText.textContent = question.note;
  elements.score.textContent = `${score} PTS`;
  elements.streak.textContent = streak;
  elements.next.textContent = current === questions.length - 1 ? "結果を見る" : "次の問題へ";
  elements.next.insertAdjacentHTML(
    "beforeend",
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>',
  );
  elements.next.classList.add("visible");
}

function showResult() {
  const percentage = Math.round((score / (questions.length * 100)) * 100);
  const message =
    percentage >= 80
      ? "すばらしい耳です！細かな音の違いを聞き分けられています。"
      : percentage >= 50
        ? "いい調子です。苦手な音をもう一度練習してみましょう。"
        : "繰り返し聞くほど耳が慣れてきます。もう一度挑戦しましょう。";

  elements.card.innerHTML = `
    <div class="result">
      <p class="eyebrow">QUIZ COMPLETE</p>
      <div class="result-score">${score}<small> pts</small></div>
      <h2>${questions.length}問中 ${score / 100}問 正解</h2>
      <p>${message}</p>
      <button class="next-button visible" id="restartButton" type="button">もう一度挑戦する</button>
    </div>
  `;
  document.querySelector("#restartButton").addEventListener("click", () => window.location.reload());
}

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((voice) => voice.lang.startsWith("en"));
  elements.voiceSelect.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "-1";
  defaultOption.textContent = "端末のデフォルト音声（英語）";
  elements.voiceSelect.append(defaultOption);
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${voice.name} (${voice.lang})`;
    elements.voiceSelect.append(option);
  });
  selectedVoice = null;
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

elements.settingsButton.addEventListener("click", () => elements.settings.showModal());
elements.voiceSelect.addEventListener("change", () => {
  selectedVoice = voices[Number(elements.voiceSelect.value)] || null;
});
elements.rateRange.addEventListener("input", () => {
  speechRate = Number(elements.rateRange.value);
  elements.rateValue.textContent = `${speechRate.toFixed(2).replace(/0$/, "")}×`;
});

document.addEventListener("keydown", (event) => {
  if (elements.settings.open) return;
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
  speechSynthesis.onvoiceschanged = loadVoices;
}

renderQuestion();
