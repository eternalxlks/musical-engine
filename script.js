const keys = document.querySelectorAll('.key');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const frequencies = {
  C: 261.63,
  'C#': 277.18,
  D: 293.66,
  'D#': 311.13,
  E: 329.63,
  F: 349.23,
  'F#': 369.99,
  G: 392.00,
  'G#': 415.30,
  A: 440.00,
  'A#': 466.16,
  B: 493.88,
};

function playNote(note) {
  const osc = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  osc.type = 'sine';
  osc.frequency.value = frequencies[note];
  osc.connect(gainNode);
  gainNode.connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + 0.5);
}

keys.forEach(key => {
  key.addEventListener('mousedown', () => {
    const note = key.dataset.note;
    playNote(note);
  });
});
