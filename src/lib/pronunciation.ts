// Arabic pronunciation using Web Speech API
export function speakArabic(arabicText: string, name: string) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(arabicText);

  // Try to find an Arabic voice
  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find(v => v.lang.startsWith('ar')) 
    || voices.find(v => v.lang.includes('ar'))
    || null;

  if (arabicVoice) {
    utterance.voice = arabicVoice;
    utterance.lang = arabicVoice.lang;
  } else {
    utterance.lang = 'ar-SA';
  }

  utterance.rate = 0.8;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
}

// Preload voices (needed on some browsers)
export function preloadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(resolve => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}
