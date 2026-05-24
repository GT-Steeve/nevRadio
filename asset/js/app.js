// ════════════════════════════════════════════════════════
//  PLAYLIST — Ajoute tes URLs dans les champs "url" ci-dessous
//
//  Format :  { title: "Nom de la piste", url: "TON_LIEN_ICI" }
//
//  Pour ajouter une catégorie :
//    { name: "Nom", tracks: [ ... ] }
// ════════════════════════════════════════════════════════

const CATEGORIES = [
  {
    name: "Musique",
    cover: "",
    tracks: [
      { title: "American Boy - Estelle (feat. Kanye West)", url: "https://soundcloud.com/estelleofficial/american-boy-feat-kanye-west" },
      { title: "Bad guy - Billie Eilish", url: "https://soundcloud.com/billieeilish/bad-guy" },
    ]
  },
  {
    name: "SNK",
    cover: "",
    tracks: [
      { title: "Piste 1", url: "" },
      { title: "Piste 2", url: "" },
    ]
  },
  {
    name: "Sonic",
    cover: "",
    tracks: [
      { title: "Piste 1", url: "" },
      { title: "Piste 2", url: "" },
    ]
  },
  {
    name: "Devil May Cry",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTG7GHxFSfl4ta2PxQfX0yPF0XpjyDgfNFzFl7U618VGkqmn4-QltTSN2gqyzIgcX8q0",
    tracks: [
      { title: "Arkham Battle 2",       url: "https://www.youtube.com/watch?v=VptStuoc4sI" },
      { title: "Devils Never Cry",       url: "https://www.youtube.com/watch?v=QiLlAgSIU40" },
      { title: "Legendary Battle",       url: "https://www.youtube.com/watch?v=l3bdMODR-KY&list=RDPJ0xaPS1wLY" },
      { title: "Lock & Load",       url: "https://www.youtube.com/watch?v=dCrR2j3CGdo&list=RDPJ0xaPS1wLY" },
      { title: "Psycho Siren",       url: "https://www.youtube.com/watch?v=H5jNlLbTN5w&list=RDPJ0xaPS1wLY" },
      { title: "Public Enemy", url: "https://www.youtube.com/watch?v=aUr9WJRkWMk" },
      { title: "The Time Has Come",  url: "https://www.youtube.com/watch?v=JxZX8_lAp6E" },
      { title: "Ultra Violet",  url: "https://www.youtube.com/watch?v=PJ0xaPS1wLY" },
      { title: "Vergil Battle 2",  url: "https://www.youtube.com/watch?v=l_kB97VrKBA" },
    ]
  },
];

// ════════════════════════════════════════════════════════
//  Lecteur — ne pas modifier en dessous
// ════════════════════════════════════════════════════════

const audio = new Audio();
let currentCategory   = null;
let currentTrackIndex = -1;

// ── Références DOM ──────────────────────────────────────
const categorySelect = document.getElementById('category-select');
const trackList      = document.getElementById('track-list');
const videoContainer = document.getElementById('video-container');
const ytIframe       = document.getElementById('yt-iframe');
const artBox         = document.getElementById('art-box');
const scControls     = document.getElementById('sc-controls');
const volDownBtn     = document.getElementById('vol-down');
const volUpBtn       = document.getElementById('vol-up');
const volMuteBtn     = document.getElementById('vol-mute');

// ── Volume SoundCloud ──────────────────────────────────
let scVolume = 80;
let scMuted  = false;
let scWidget = null;

function loadSCApi(cb) {
  if (window.SC) { cb(); return; }
  const s = document.createElement('script');
  s.src = 'https://w.soundcloud.com/player/api.js';
  s.onload = cb;
  document.head.appendChild(s);
}

function initSCWidget() {
  scWidget = SC.Widget(ytIframe);
  scWidget.bind(SC.Widget.Events.READY, () => scWidget.setVolume(scVolume));
}

function applyVolume() {
  if (scWidget) scWidget.setVolume(scMuted ? 0 : scVolume);
  if (scMuted || scVolume === 0) volMuteBtn.textContent = '🔇';
  else if (scVolume < 34)        volMuteBtn.textContent = '🔈';
  else if (scVolume < 67)        volMuteBtn.textContent = '🔉';
  else                           volMuteBtn.textContent = '🔊';
}

volDownBtn.addEventListener('click', () => {
  scVolume = Math.max(0, scVolume - 10);
  scMuted  = false;
  applyVolume();
});

volUpBtn.addEventListener('click', () => {
  scVolume = Math.min(100, scVolume + 10);
  scMuted  = false;
  applyVolume();
});

volMuteBtn.addEventListener('click', () => {
  scMuted = !scMuted;
  applyVolume();
});

// ── Peuple le <select> ─────────────────────────────────
function buildCategories() {
  CATEGORIES.forEach((cat, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = cat.name;
    categorySelect.appendChild(opt);
  });

  categorySelect.addEventListener('change', () => {
    const val = categorySelect.value;
    if (val === '') return;
    selectCategory(parseInt(val));
  });
}

// ── Sélectionne une catégorie ──────────────────────────
function selectCategory(index) {
  currentCategory = index;
  const cat = CATEGORIES[index];

  // Mise à jour de la pochette
  if (cat.cover) {
    artBox.style.backgroundImage    = `url('${cat.cover}')`;
    artBox.style.backgroundSize     = '100% 100%';
    artBox.style.backgroundPosition = 'center';
    artBox.textContent = '';
  } else {
    artBox.style.backgroundImage = '';
    artBox.textContent = '♪';
  }

  trackList.innerHTML = '';
  cat.tracks.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'track-item';

    const num = document.createElement('span');
    num.className = 'track-num';
    num.textContent = String(i + 1).padStart(2, '0');

    const title = document.createElement('span');
    title.className = 'track-title';
    title.textContent = track.title;

    item.appendChild(num);
    item.appendChild(title);

    if (!track.url) {
      const badge = document.createElement('span');
      badge.className = 'badge-nourl';
      badge.textContent = 'URL manquante';
      item.appendChild(badge);
    } else {
      item.addEventListener('click', () => playTrack(index, i));
    }

    trackList.appendChild(item);
  });
}

// ── Détection du type d'URL ────────────────────────────
function extractYTId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function isSoundCloud(url) {
  return /soundcloud\.com\//i.test(url);
}

// ── Lance la lecture ───────────────────────────────────
function playTrack(catIndex, trackIndex) {
  const track = CATEGORIES[catIndex].tracks[trackIndex];
  if (!track.url) return;

  currentCategory   = catIndex;
  currentTrackIndex = trackIndex;

  // Surligne la piste active
  document.querySelectorAll('.track-item').forEach((el, i) => {
    el.classList.toggle('active', i === trackIndex);
  });

  const ytId = extractYTId(track.url);

  if (ytId) {
    // YouTube → iframe YouTube
    audio.pause();
    audio.src = '';
    scWidget = null;
    scControls.classList.remove('visible');
    ytIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
    videoContainer.classList.add('visible');
  } else if (isSoundCloud(track.url)) {
    // SoundCloud → widget SoundCloud + bouton volume
    audio.pause();
    audio.src = '';
    scVolume = 80;
    scMuted  = false;
    volMuteBtn.textContent = '🔊';
    ytIframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&auto_play=true&hide_related=true&show_comments=false&visual=true`;
    videoContainer.classList.add('visible');
    scControls.classList.add('visible');
    ytIframe.onload = () => loadSCApi(initSCWidget);
  } else {
    // Lien direct (.mp3, etc.) → balise audio
    scWidget = null;
    scControls.classList.remove('visible');
    ytIframe.src = '';
    videoContainer.classList.remove('visible');
    audio.src = track.url;
    audio.play();
  }
}

// ── Piste suivante (auto-avance pour l'audio) ──────────
function nextTrack() {
  if (currentCategory === null) return;
  const tracks = CATEGORIES[currentCategory].tracks;
  let i = currentTrackIndex + 1;
  while (i < tracks.length && !tracks[i].url) i++;
  if (i < tracks.length) playTrack(currentCategory, i);
}

audio.addEventListener('ended', nextTrack);

// ── Init ───────────────────────────────────────────────
buildCategories();
