const START_DATE = new Date("2026-09-22T00:00:00");
const RESIDENT_COUNT = 179;
const COLLECTION_URL = "https://opensea.io/collection/nemocollection2023";

const PLACES = [
  ["パン屋", "🥐"], ["図書館", "📚"], ["池", "🫧"], ["森", "🌲"],
  ["花畑", "🌼"], ["温泉", "♨️"], ["広場", "🌿"], ["雑貨屋", "🧺"]
];
const TRAITS = [
  "おひるね好き", "おさんぽ好き", "お茶好き", "収集家", "お世話好き", "空想家", "夜ふかし屋", "食いしん坊",
  "ちょっぴり臆病", "冒険家", "気まぐれ", "工作好き", "読書家", "いたずら好き", "ぼんやり屋", "お花好き"
];
const LIKES = [
  "雨の音", "焼きたてのパン", "丸い石", "ふかふかの毛布", "夕焼け", "木漏れ日", "古い本", "甘いミルクティー",
  "小さなきのこ", "川の音", "星空", "どんぐり", "風の強い日", "あたたかいスープ", "花の匂い", "静かな午後"
];
const TREASURES = [
  "青い石", "どんぐり", "古いボタン", "小さな貝がら", "赤いリボン", "きれいな葉っぱ", "木の実", "白い羽根",
  "ちいさな鈴", "星形の小石", "押し花", "ふしぎな鍵", "木彫りのねこ", "空きびん", "銀色の糸", "小さなビー玉"
];
const ACTIONS = {
  "パン屋": ["焼きたてのパンの匂いにつられてやってきました。", "くるみパンをひとつ買って、広場で食べました。", "新作のパンをじっと眺めていました。", "パンを半分にして、誰かにおすそわけしました。"],
  "図書館": ["窓辺の席で、ゆっくり本を読んでいます。", "絵の多い本を見つけて、ごきげんです。", "本を開いたまま、少しだけ眠ってしまいました。", "気になる一文を見つけて、ノートに書きました。"],
  "池": ["水面をぼんやり眺めています。", "丸い石をひとつ拾いました。", "水鳥を数えていたら、途中で分からなくなりました。", "風で揺れる水面を、ずっと見ています。"],
  "森": ["木の実を探しながら、ゆっくり歩いています。", "名前の分からない葉っぱを見つけました。", "木漏れ日の下で、ひとやすみしています。", "少し道に迷いましたが、本人は楽しそうです。"],
  "花畑": ["花の匂いをかぎながら、のんびりしています。", "いちばん小さな花を探しています。", "風に揺れる花を見て、何か考えています。", "落ちていた花びらを一枚ひろいました。"],
  "温泉": ["湯気の向こうで、すっかりのびています。", "長湯しすぎて、ほかほかになりました。", "露天風呂で空を見上げています。", "お風呂あがりに、冷たい飲みものを飲みました。"],
  "広場": ["ベンチに座って、通り過ぎるみんなを眺めています。", "誰かと少しだけおしゃべりしました。", "何をするでもなく、日なたにいます。", "風に飛ばされた紙を追いかけています。"],
  "雑貨屋": ["棚のすみの小さな置物が気になっています。", "買う予定のないものを、ずっと眺めています。", "かわいいボタンをひとつ見つけました。", "店主とどうでもいい話をして帰りました。"]
};
const WEATHER = [["晴れ","☀️"],["くもり","☁️"],["小雨","🌧️"],["風がつよい","🍃"],["ぽかぽか","🌤️"]];
const VILLAGE_NOTES = [
  "今日はパンのいい匂いが村じゅうに流れています。", "風がゆっくり吹いています。急ぐ子は誰もいません。",
  "広場のベンチが、なぜか人気です。", "森のほうから鳥の声が聞こえます。", "なんとなく、みんな眠そうです。",
  "今日は静かな一日になりそうです。", "温泉から湯気がふわふわ上がっています。", "誰かが花畑に小さな石を並べたようです。"
];

let nftMap = new Map();

function hashString(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rand(seedText) {
  let a = hashString(seedText) + 0x6D2B79F5;
  let t = a;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
function pick(arr, seedText) { return arr[Math.floor(rand(seedText) * arr.length)]; }
function dateKey(date) { return [date.getFullYear(), String(date.getMonth()+1).padStart(2,"0"), String(date.getDate()).padStart(2,"0")].join("-"); }
function daysSinceStart(date) {
  const a = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const b = new Date(START_DATE.getFullYear(), START_DATE.getMonth(), START_DATE.getDate());
  return Math.max(0, Math.floor((a-b)/86400000));
}
function residentBase(id) {
  const trait1 = pick(TRAITS, `trait1-${id}`);
  let trait2 = pick(TRAITS, `trait2-${id}`);
  if (trait1 === trait2) trait2 = TRAITS[(TRAITS.indexOf(trait2)+3) % TRAITS.length];
  return {
    id, trait1, trait2,
    like: pick(LIKES, `like-${id}`),
    favoritePlace: pick(PLACES, `favorite-${id}`)[0],
    stats: {
      "ねむけ": 20 + Math.floor(rand(`sleep-${id}`)*81),
      "好奇心": 20 + Math.floor(rand(`curiosity-${id}`)*81),
      "人なつこさ": 20 + Math.floor(rand(`social-${id}`)*81),
      "のんびり度": 35 + Math.floor(rand(`slow-${id}`)*66)
    }
  };
}
function residentDay(id, date) {
  const base = residentBase(id), dkey = dateKey(date);
  const prefersFavorite = rand(`favchance-${id}-${dkey}`) < .34;
  const placeName = prefersFavorite ? base.favoritePlace : pick(PLACES, `place-${id}-${dkey}`)[0];
  return { placeName, action: pick(ACTIONS[placeName], `action-${id}-${dkey}`), mood: 3 + Math.floor(rand(`mood-${id}-${dkey}`)*3) };
}
function residentTreasures(id, date) {
  const count = Math.min(7, 1 + Math.floor(daysSinceStart(date)/4) + Math.floor(rand(`starter-treasure-${id}`)*2));
  const items = [];
  for (let i=0; i<count; i++) { const item = pick(TREASURES, `treasure-${id}-${i}`); if (!items.includes(item)) items.push(item); }
  return items;
}
function recentDiary(id, today, length=6) {
  const items=[];
  for (let i=0; i<length; i++) {
    const date = new Date(today); date.setDate(today.getDate()-i); if (date < START_DATE) break;
    const day = residentDay(id,date); items.push({date, text:`${day.placeName}で、${day.action}`});
  }
  return items;
}
function stars(n) { return "🌸".repeat(n); }
function placeIcon(name) { const found = PLACES.find(p => p[0] === name); return found ? found[1] : "🌿"; }
function fallbackAvatar(id) { const a=["🐱","🐈","🌱","🌼","🍞","🫧","🍵","📚"]; return a[id % a.length]; }
function nftFor(id) { return nftMap.get(Number(id)); }
function avatarHtml(id) {
  const nft = nftFor(id);
  if (nft?.image_url) return `<img src="${nft.image_url}" alt="Nemo2023 #${id}" loading="lazy" referrerpolicy="no-referrer">`;
  return fallbackAvatar(id);
}
function displayName(id) { return nftFor(id)?.name || `Nemo2023 #${String(id).padStart(2,"0")}`; }

const today = new Date();
const todayKey = dateKey(today);
const weather = pick(WEATHER, `weather-${todayKey}`);
const note = pick(VILLAGE_NOTES, `note-${todayKey}`);
document.getElementById("todayDate").textContent = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`;
document.getElementById("weather").textContent = `${weather[1]} ${weather[0]}`;
document.getElementById("villageNote").textContent = note;

const residents = Array.from({length: RESIDENT_COUNT}, (_,i) => {
  const id=i+1;
  return {...residentBase(id), ...residentDay(id,today), treasures: residentTreasures(id,today)};
});

const placeFilter=document.getElementById("placeFilter");
PLACES.forEach(([name,icon]) => { const opt=document.createElement("option"); opt.value=name; opt.textContent=`${icon} ${name}`; placeFilter.appendChild(opt); });
const grid=document.getElementById("residentGrid");
const dialog=document.getElementById("residentDialog");
const detail=document.getElementById("residentDetail");
const searchInput=document.getElementById("searchInput");
const syncStatus=document.getElementById("syncStatus");

function renderResidents() {
  const q=searchInput.value.trim().replace("#","");
  const place=placeFilter.value;
  const filtered=residents.filter(r => (!q || String(r.id).includes(q)) && (!place || r.placeName===place));
  if (!filtered.length) { grid.innerHTML=`<div class="empty">その条件のねもは、今日は見つかりませんでした。</div>`; return; }
  grid.innerHTML=filtered.map(r => `
    <button class="resident" data-id="${r.id}">
      <div class="resident-top">
        <div class="avatar">${avatarHtml(r.id)}</div>
        <div><div class="number">${displayName(r.id)}</div><div class="place">${placeIcon(r.placeName)} ${r.placeName}</div></div>
      </div>
      <p class="action">${r.action}</p>
      <div class="traits"><span class="tag">${r.trait1}</span><span class="tag">${r.trait2}</span></div>
    </button>`).join("");
  grid.querySelectorAll(".resident").forEach(btn => btn.addEventListener("click", () => openResident(Number(btn.dataset.id))));
}

function openResident(id) {
  const r=residents.find(x => x.id===id), diary=recentDiary(id,today,6), nft=nftFor(id);
  const openSeaLink = nft?.opensea_url ? `<a class="opensea-link" href="${nft.opensea_url}" target="_blank" rel="noopener">OpenSeaでこのNemoを見る ↗</a>` : `<a class="opensea-link" href="${COLLECTION_URL}" target="_blank" rel="noopener">NemoCollection2023を見る ↗</a>`;
  detail.innerHTML=`
    <div class="detail-hero"><div class="detail-title"><div class="avatar">${avatarHtml(r.id)}</div><div><h3>${displayName(r.id)}</h3><p>${r.trait1} × ${r.trait2}</p>${openSeaLink}</div></div></div>
    <div class="detail-body">
      <div class="detail-section"><h4>今日</h4><p>${placeIcon(r.placeName)} <strong>${r.placeName}</strong></p><p>${r.action}</p><p>ごきげん　${stars(r.mood)}</p></div>
      <div class="detail-section"><h4>この子のこと</h4><p>好きなもの：${r.like}</p><p>お気に入りの場所：${r.favoritePlace}</p>
        ${Object.entries(r.stats).map(([name,value]) => `<div class="meter-row"><span>${name}</span><div class="meter"><span style="width:${value}%"></span></div><span>${value}</span></div>`).join("")}
      </div>
      <div class="detail-section"><h4>たからもの</h4><div class="treasure-list">${r.treasures.map(x => `<span class="tag">🎒 ${x}</span>`).join("")}</div></div>
      <div class="detail-section"><h4>さいきんの日記</h4>${diary.map(d => `<div class="diary"><div class="diary-date">${d.date.getMonth()+1}月${d.date.getDate()}日</div><div>${d.text}</div></div>`).join("")}</div>
    </div>`;
  dialog.showModal();
}

document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target===dialog) dialog.close(); });
searchInput.addEventListener("input", renderResidents);
placeFilter.addEventListener("change", renderResidents);

async function loadNftData() {
  renderResidents();
  try {
    const response=await fetch(`nfts.json?v=${Date.now()}`, {cache:"no-store"});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload=await response.json();
    const items=Array.isArray(payload) ? payload : (payload.items || []);
    nftMap=new Map(items.filter(x => Number.isInteger(Number(x.number))).map(x => [Number(x.number), x]));
    if (!nftMap.size) throw new Error("NFT data is empty");
    syncStatus.textContent=`Nemo2023画像 ${nftMap.size}体を読み込みました。`;
    syncStatus.className="sync-status ready";
    renderResidents();
  } catch (err) {
    syncStatus.textContent="NFT画像の同期待ちです。村の暮らしはそのまま遊べます。";
    syncStatus.className="sync-status fallback";
    console.warn("nfts.json could not be loaded", err);
  }
}
loadNftData();
