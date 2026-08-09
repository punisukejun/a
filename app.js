const questionSets = [
  {
    label: "アメリカ英語の母音 /ɑ/・/ʌ/・/æ/",
    variants: [
      { audio: "q1", words: [["cot", "/kɑt/"], ["cut", "/kʌt/"], ["cat", "/kæt/"]], answer: 2, sentence: "I heard her say ___ clearly.", note: "「cat」の /æ/ は、あごを下げ、舌を前方の低い位置にして出す「あ」と「え」の間の音です。" },
      { audio: "q1v2", words: [["lock", "/lɑk/"], ["luck", "/lʌk/"], ["lack", "/læk/"]], answer: 1, sentence: "Please write the word ___ here.", note: "「luck」の /ʌ/ は、口を力ませず中央で短く出す母音です。" },
      { audio: "q1v3", words: [["hot", "/hɑt/"], ["hut", "/hʌt/"], ["hat", "/hæt/"]], answer: 0, sentence: "She used the word ___ in class.", note: "「hot」の /ɑ/ は、口を縦に開き、舌を低く後ろに置いて出します。" },
      { audio: "q1v4", words: [["cop", "/kɑp/"], ["cup", "/kʌp/"], ["cap", "/kæp/"]], answer: 2, sentence: "Did you hear the word ___ too?", note: "「cap」の /æ/ は、あごをしっかり下げて舌を前方に置きます。" },
    ],
  },
  {
    label: "母音 /ɪ/・/i/ を中心とした聞き分け",
    variants: [
      { audio: "q2", words: [["ship", "/ʃɪp/"], ["sheep", "/ʃip/"], ["sip", "/sɪp/"]], answer: 1, sentence: "Please write the word ___ here.", note: "「sheep」の /i/ は「ship」の /ɪ/ より舌を高く前に置く、緊張した母音です。" },
      { audio: "q2v2", words: [["bit", "/bɪt/"], ["beat", "/bit/"], ["seat", "/sit/"]], answer: 1, sentence: "The word ___ is on the card.", note: "「beat」の /i/ は、口角を少し横に引き、舌を高く前に置きます。" },
      { audio: "q2v3", words: [["fill", "/fɪl/"], ["feel", "/fil/"], ["seal", "/sil/"]], answer: 0, sentence: "I think she said ___ first.", note: "「fill」の /ɪ/ は、/i/ より舌の位置を少し低くして短く出します。" },
      { audio: "q2v4", words: [["chip", "/tʃɪp/"], ["cheap", "/tʃip/"], ["sip", "/sɪp/"]], answer: 1, sentence: "Can you say ___ one more time?", note: "「cheap」の /i/ は長さだけでなく、舌の高さと緊張度も意識しましょう。" },
    ],
  },
  {
    label: "子音 /l/・/r/ とその他の子音",
    variants: [
      { audio: "q3", words: [["light", "/laɪt/"], ["right", "/raɪt/"], ["night", "/naɪt/"]], answer: 0, sentence: "The word ___ is on the card.", note: "「light」の /l/ は、舌先を上の前歯の裏につけます。" },
      { audio: "q3v2", words: [["play", "/pleɪ/"], ["pray", "/preɪ/"], ["pay", "/peɪ/"]], answer: 1, sentence: "I heard her say ___ clearly.", note: "「pray」の /r/ は、舌先を口の中のどこにも触れさせずに出します。" },
      { audio: "q3v3", words: [["glass", "/ɡlæs/"], ["grass", "/ɡræs/"], ["gas", "/ɡæs/"]], answer: 0, sentence: "Please write the word ___ here.", note: "「glass」の /l/ では、/ɡ/ の直後に舌先を上の歯茎へつけます。" },
      { audio: "q3v4", words: [["fly", "/flaɪ/"], ["fry", "/fraɪ/"], ["cry", "/kraɪ/"]], answer: 1, sentence: "Did you hear the word ___ too?", note: "「fry」の /r/ では、唇を少し丸めながら舌をどこにも触れさせません。" },
    ],
  },
  {
    label: "子音 /f/・/v/ と母音の違い",
    variants: [
      { audio: "q4", words: [["fan", "/fæn/"], ["van", "/væn/"], ["fun", "/fʌn/"]], answer: 1, sentence: "I think she said ___ first.", note: "「van」の /v/ は、下唇に上の歯を軽く当てて声を出します。" },
      { audio: "q4v2", words: [["fine", "/faɪn/"], ["vine", "/vaɪn/"], ["fun", "/fʌn/"]], answer: 1, sentence: "She used the word ___ in class.", note: "「vine」の /v/ は、唇と歯の間で摩擦を作りながら喉を振動させます。" },
      { audio: "q4v3", words: [["fail", "/feɪl/"], ["veil", "/veɪl/"], ["fell", "/fɛl/"]], answer: 0, sentence: "He asked me to repeat ___ slowly.", note: "「fail」の /f/ は声を出さず、下唇と上の歯の間から息を出します。" },
      { audio: "q4v4", words: [["fast", "/fæst/"], ["vast", "/væst/"], ["vest", "/vɛst/"]], answer: 1, sentence: "The word ___ is on the card.", note: "「vast」は語頭の有声音 /v/ と母音 /æ/ の両方を聞き取りましょう。" },
    ],
  },
  {
    label: "子音 /r/・/l/ と語末の違い",
    variants: [
      { audio: "q5", words: [["rice", "/raɪs/"], ["lice", "/laɪs/"], ["rise", "/raɪz/"]], answer: 2, sentence: "Did you hear the word ___ too?", note: "「rise」の最後は声のある /z/。喉の振動を意識しましょう。" },
      { audio: "q5v2", words: [["race", "/reɪs/"], ["lace", "/leɪs/"], ["raise", "/reɪz/"]], answer: 1, sentence: "Can you say ___ one more time?", note: "「lace」の /l/ は舌先を歯茎につけ、語末は声のない /s/ です。" },
      { audio: "q5v3", words: [["rip", "/rɪp/"], ["lip", "/lɪp/"], ["rib", "/rɪb/"]], answer: 0, sentence: "I heard her say ___ clearly.", note: "「rip」の /r/ は舌を触れさせず、語末の /p/ は声を出さずに閉じます。" },
      { audio: "q5v4", words: [["rock", "/rɑk/"], ["lock", "/lɑk/"], ["log", "/lɑɡ/"]], answer: 1, sentence: "Please write the word ___ here.", note: "「lock」の /l/ と、声のない語末の /k/ を聞き分けましょう。" },
    ],
  },
  {
    label: "日本語にない語頭の子音を聞き分ける",
    variants: [
      { audio: "q6", words: [["think", "/θɪŋk/"], ["sink", "/sɪŋk/"], ["zinc", "/zɪŋk/"]], answer: 0, sentence: "He asked me to repeat ___ slowly.", note: "「think」の /θ/ は、舌先を歯の間に軽く挟んで息を出します。" },
      { audio: "q6v2", words: [["three", "/θri/"], ["free", "/fri/"], ["tree", "/tri/"]], answer: 0, sentence: "The word ___ is on the card.", note: "「three」は /θ/ の直後に、舌を触れさせない /r/ が続きます。" },
      { audio: "q6v3", words: [["thought", "/θɔt/"], ["sought", "/sɔt/"], ["fought", "/fɔt/"]], answer: 1, sentence: "I think she said ___ first.", note: "「sought」の語頭 /s/ は、舌を歯の間に出さずに摩擦音を作ります。" },
      { audio: "q6v4", words: [["thank", "/θæŋk/"], ["sank", "/sæŋk/"], ["tank", "/tæŋk/"]], answer: 0, sentence: "Did you hear the word ___ too?", note: "「thank」の /θ/ は、舌先を歯の間に置き、声を出さずに息を通します。" },
    ],
  },
  {
    label: "アメリカ英語の /ɝ/・/ɔ/・二重母音",
    variants: [
      { audio: "q7", words: [["work", "/wɝk/"], ["walk", "/wɔk/"], ["woke", "/woʊk/"]], answer: 1, sentence: "She used the word ___ in class.", note: "「walk」の /ɔ/ は唇を少し丸める母音です。地域によっては /ɑ/ に近く発音されます。" },
      { audio: "q7v2", words: [["burn", "/bɝn/"], ["born", "/bɔrn/"], ["bone", "/boʊn/"]], answer: 1, sentence: "Please write the word ___ here.", note: "「born」の /ɔr/ は、唇を丸めてから舌を /r/ の位置へ動かします。" },
      { audio: "q7v3", words: [["turn", "/tɝn/"], ["torn", "/tɔrn/"], ["tone", "/toʊn/"]], answer: 0, sentence: "Can you say ___ one more time?", note: "「turn」の /ɝ/ は、舌をどこにも触れさせず中央で響かせます。" },
      { audio: "q7v4", words: [["shirt", "/ʃɝt/"], ["short", "/ʃɔrt/"], ["shout", "/ʃaʊt/"]], answer: 1, sentence: "I heard her say ___ clearly.", note: "「short」は唇を丸めた /ɔ/ から /r/ へ滑らかに移ります。" },
    ],
  },
  {
    label: "子音 /r/・/l/ とその他の子音",
    variants: [
      { audio: "q8", words: [["berry", "/ˈbɛri/"], ["belly", "/ˈbɛli/"], ["very", "/ˈvɛri/"]], answer: 0, sentence: "Can you say ___ one more time?", note: "「berry」の /r/ では舌先を口の中のどこにも触れさせません。" },
      { audio: "q8v2", words: [["river", "/ˈrɪvɚ/"], ["liver", "/ˈlɪvɚ/"], ["lever", "/ˈlɛvɚ/"]], answer: 0, sentence: "She used the word ___ in class.", note: "「river」は語頭と語中の両方で、舌を触れさせない /r/ を使います。" },
      { audio: "q8v3", words: [["correct", "/kəˈrɛkt/"], ["collect", "/kəˈlɛkt/"], ["connect", "/kəˈnɛkt/"]], answer: 1, sentence: "He asked me to repeat ___ slowly.", note: "「collect」の /l/ は、舌先を上の歯茎へつけてから離します。" },
      { audio: "q8v4", words: [["rake", "/reɪk/"], ["lake", "/leɪk/"], ["vague", "/veɪɡ/"]], answer: 1, sentence: "The word ___ is on the card.", note: "「lake」の /l/ は舌先を歯茎につけ、語末は声のない /k/ です。" },
    ],
  },
];

function createRandomQuestion(setIndex, previousQuestion = null) {
  const set = questionSets[setIndex];
  let previousTarget = previousQuestion?.targetWord || null;
  try {
    previousTarget ||= localStorage.getItem(`sound-check-target-${setIndex}`);
  } catch {
    // Random selection still works when storage is unavailable.
  }
  const availableVariants = previousQuestion
    ? [set.variants.find((variant) => variant.audio === previousQuestion.audio) || set.variants[0]]
    : set.variants;
  const candidates = availableVariants.flatMap((variant) =>
    variant.words.map((_, targetIndex) => ({ variant, targetIndex })),
  ).filter(({ variant, targetIndex }) => variant.words[targetIndex][0] !== previousTarget);
  const { variant, targetIndex } = candidates[Math.floor(Math.random() * candidates.length)];
  const [correctWord, correctIpa] = variant.words[targetIndex];
  const shuffledWords = variant.words.map((word) => [...word]);
  for (let index = shuffledWords.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledWords[index], shuffledWords[randomIndex]] = [shuffledWords[randomIndex], shuffledWords[index]];
  }
  try {
    localStorage.setItem(`sound-check-target-${setIndex}`, correctWord);
  } catch {
    // The selected version only needs to last for this quiz session.
  }
  return {
    ...variant,
    label: set.label,
    clip: targetIndex === variant.answer ? variant.audio : `${variant.audio}-a${targetIndex}`,
    targetWord: correctWord,
    answer: shuffledWords.findIndex(([word]) => word === correctWord),
    words: shuffledWords.map(([word, ipa]) => ({ word, ipa })),
    note:
      targetIndex === variant.answer
        ? variant.note
        : `「${correctWord}」の発音は ${correctIpa} です。もう一度音声を聞いて、似た音との違いを確認しましょう。`,
  };
}

const questions = questionSets.map((_, setIndex) => createRandomQuestion(setIndex));

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
  retry: document.querySelector("#retryButton"),
  streak: document.querySelector("#streakCount"),
  settings: document.querySelector("#settingsDialog"),
  settingsButton: document.querySelector("#settingsButton"),
  voiceSelect: document.querySelector("#voiceSelect"),
  rateRange: document.querySelector("#rateRange"),
  rateValue: document.querySelector("#rateValue"),
  volumeRange: document.querySelector("#volumeRange"),
  volumeValue: document.querySelector("#volumeValue"),
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
let audioVolume = 1;
let activeUtterance = null;
let activeAudio = null;
let quizFinished = false;
let scoreBeforeAnswer = 0;
let streakBeforeAnswer = 0;

try {
  const savedRate = Number(localStorage.getItem("sound-check-rate"));
  if (savedRate >= 0.6 && savedRate <= 1.1) speechRate = savedRate;
  const savedVolume = localStorage.getItem("sound-check-volume");
  if (savedVolume !== null && Number(savedVolume) >= 0 && Number(savedVolume) <= 1) {
    audioVolume = Number(savedVolume);
  }
} catch {
  // Storage may be unavailable in private or restricted browsing modes.
}

elements.rateRange.value = String(speechRate);
elements.rateValue.textContent = `${speechRate.toFixed(2).replace(/0$/, "")}×`;
elements.volumeRange.value = String(audioVolume);
elements.volumeValue.textContent = `${Math.round(audioVolume * 100)}%`;

function stopPlayback() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  activeUtterance = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  elements.play.classList.remove("playing");
  elements.play.setAttribute("aria-label", "問題の音声を再生");
}

function renderQuestion() {
  const question = questions[current];
  answered = false;
  stopPlayback();
  elements.counter.textContent = `QUESTION ${current + 1} / ${questions.length}`;
  elements.score.textContent = `${score} PTS`;
  elements.progress.style.width = `${((current + 1) / questions.length) * 100}%`;
  elements.contrast.textContent = question.label;
  elements.sentence.innerHTML = `<span lang="en">“${question.sentence.replace("___", "<span>___</span>")}”</span>`;
  elements.feedback.className = "feedback";
  elements.next.classList.remove("visible");
  elements.retry.classList.remove("visible");
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

function speakFallback(rate = speechRate) {
  if (!("speechSynthesis" in window)) {
    elements.feedback.classList.add("visible", "wrong");
    elements.feedbackTitle.textContent = "音声を再生できません";
    elements.feedbackText.textContent = "音声読み上げに対応したブラウザでお試しください。";
    return;
  }

  stopPlayback();
  const question = questions[current];
  const answer = question.words[question.answer].word;
  const utterance = new SpeechSynthesisUtterance(question.sentence.replace("___", answer));
  utterance.lang = selectedVoice?.lang || "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = audioVolume;
  if (selectedVoice) utterance.voice = selectedVoice;
  activeUtterance = utterance;
  utterance.onstart = () => {
    if (activeUtterance !== utterance) return;
    elements.play.classList.add("playing");
    elements.play.setAttribute("aria-label", "音声を停止");
  };
  utterance.onend = () => {
    if (activeUtterance === utterance) stopPlayback();
  };
  utterance.onerror = () => {
    if (activeUtterance === utterance) stopPlayback();
  };
  window.setTimeout(() => {
    if (activeUtterance === utterance) window.speechSynthesis.speak(utterance);
  }, 40);
}

function playAudio(slow = false) {
  stopPlayback();
  const audio = new Audio(`audio/${questions[current].clip}${slow ? "-slow" : ""}.mp3`);
  activeAudio = audio;
  audio.volume = audioVolume;
  audio.preload = "auto";
  audio.onplay = () => {
    if (activeAudio !== audio) return;
    elements.play.classList.add("playing");
    elements.play.setAttribute("aria-label", "音声を停止");
  };
  audio.onended = () => {
    if (activeAudio === audio) stopPlayback();
  };
  audio.play().catch(() => {
    if (activeAudio !== audio) return;
    activeAudio = null;
    speakFallback(slow ? 0.6 : speechRate);
  });
}

function selectAnswer(index) {
  if (answered) return;
  scoreBeforeAnswer = score;
  streakBeforeAnswer = streak;
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
  elements.retry.classList.add("visible");
}

function showResult() {
  stopPlayback();
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
  if (activeAudio || activeUtterance || ("speechSynthesis" in window && window.speechSynthesis.speaking)) {
    stopPlayback();
  } else {
    playAudio();
  }
});
elements.slow.addEventListener("click", () => playAudio(true));
elements.retry.addEventListener("click", () => {
  if (!answered) return;
  score = scoreBeforeAnswer;
  streak = streakBeforeAnswer;
  questions[current] = createRandomQuestion(current, questions[current]);
  elements.streak.textContent = streak;
  elements.streak.parentElement.setAttribute("aria-label", `連続正解数 ${streak}`);
  renderQuestion();
  playAudio();
});
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
elements.volumeRange.addEventListener("input", () => {
  audioVolume = Number(elements.volumeRange.value);
  elements.volumeValue.textContent = `${Math.round(audioVolume * 100)}%`;
  if (activeAudio) activeAudio.volume = audioVolume;
  try {
    localStorage.setItem("sound-check-volume", String(audioVolume));
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
    playAudio();
  }
  if (["1", "2", "3"].includes(event.key)) selectAnswer(Number(event.key) - 1);
});

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

renderQuestion();
