const START_DATE = new Date("2026-09-22T00:00:00");
const RESIDENT_COUNT = 179;
const COLLECTION_URL = "https://opensea.io/collection/nemocollection2023";
const POLYGON_RPCS = [
  "https://polygon-bor-rpc.publicnode.com",
  "https://polygon-rpc.com"
];

const PLACES = [
  ["パン屋", "🥐"], ["図書館", "📚"], ["池", "🫧"], ["森", "🌲"],
  ["花畑", "🌼"], ["温泉", "♨️"], ["広場", "🌿"], ["雑貨屋", "🧺"]
];

const TRAITS = [
  "おひるね好き", "おさんぽ好き", "お茶好き", "収集家",
  "お世話好き", "空想家", "夜ふかし屋", "食いしん坊",
  "ちょっぴり臆病", "冒険家", "気まぐれ", "工作好き",
  "読書家", "いたずら好き", "ぼんやり屋", "お花好き"
];

const LIKES = [
  "雨の音", "焼きたてのパン", "丸い石", "ふかふかの毛布",
  "夕焼け", "木漏れ日", "古い本", "甘いミルクティー",
  "小さなきのこ", "川の音", "星空", "どんぐり",
  "風の強い日", "あたたかいスープ", "花の匂い", "静かな午後"
];

const TREASURES = [
  "青い石", "どんぐり", "古いボタン", "小さな貝がら",
  "赤いリボン", "きれいな葉っぱ", "木の実", "白い羽根",
  "ちいさな鈴", "星形の小石", "押し花", "ふしぎな鍵",
  "木彫りのねこ", "空きびん", "銀色の糸", "小さなビー玉"
];

const ACTIONS = {
  "パン屋": [
    "焼きたてのパンの匂いにつられてやってきました。",
    "くるみパンをひとつ買って、広場で食べました。",
    "新作のパンをじっと眺めていました。",
    "パンを半分にして、誰かにおすそわけしました。"
  ],
  "図書館": [
    "窓辺の席で、ゆっくり本を読んでいます。",
    "絵の多い本を見つけて、ごきげんです。",
    "本を開いたまま、少しだけ眠ってしまいました。",
    "気になる一文を見つけて、ノートに書きました。"
  ],
  "池": [
    "水面をぼんやり眺めています。",
    "丸い石をひとつ拾いました。",
    "水鳥を数えていたら、途中で分からなくなりました。",
    "風で揺れる水面を、ずっと見ています。"
  ],
  "森": [
    "木の実を探しながら、ゆっくり歩いています。",
    "名前の分からない葉っぱを見つけました。",
    "木漏れ日の下で、ひとやすみしています。",
    "少し道に迷いましたが、本人は楽しそうです。"
  ],
  "花畑": [
    "花の匂いをかぎながら、のんびりしています。",
    "いちばん小さな花を探しています。",
    "風に揺れる花を見て、何か考えています。",
    "落ちていた花びらを一枚ひろいました。"
  ],
  "温泉": [
    "湯気の向こうで、すっかりのびています。",
    "長湯しすぎて、ほかほかになりました。",
    "露天風呂で空を見上げています。",
    "お風呂あがりに、冷たい飲みものを飲みました。"
  ],
  "広場": [
    "ベンチに座って、通り過ぎるみんなを眺めています。",
    "誰かと少しだけおしゃべりしました。",
    "何をするでもなく、日なたにいます。",
    "風に飛ばされた紙を追いかけています。"
  ],
  "雑貨屋": [
    "棚のすみの小さな置物が気になっています。",
    "買う予定のないものを、ずっと眺めています。",
    "かわいいボタンをひとつ見つけました。",
    "店主とどうでもいい話をして帰りました。"
  ]
};

const SEASONS = {
  spring: {
    name: "春", emoji: "🌸", months: [3,4,5],
    preferredPlaces: ["花畑","広場","森"],
    treasures: ["桜の花びら", "四つ葉のクローバー", "小さなつぼみ", "淡い色のリボン"],
    notes: [
      "花畑がいつもよりにぎやかです。",
      "村のあちこちで小さな花が咲いています。",
      "やわらかい風が広場を通りぬけています。"
    ],
    actions: {
      "花畑": ["春の花をひとつずつ見比べています。", "桜の花びらを手のひらにのせています。"],
      "広場": ["春風にあたりながら、のんびりしています。"],
      "森": ["新しい芽を見つけて、じっと眺めています。"]
    }
  },
  summer: {
    name: "夏", emoji: "🌻", months: [6,7,8],
    preferredPlaces: ["池","広場","森"],
    treasures: ["青い貝がら", "朝顔の種", "涼しげなビー玉", "小さなうちわ"],
    notes: [
      "池の近くが少しだけ涼しそうです。",
      "木陰に集まるねもが増えています。",
      "夕方の広場にゆっくり風が吹いています。"
    ],
    actions: {
      "池": ["水面のきらきらを眺めながら、涼んでいます。", "足元の水をそっとさわっています。"],
      "広場": ["日陰のベンチを見つけて、ひとやすみしています。"],
      "森": ["木陰を選びながら、ゆっくり歩いています。"]
    }
  },
  autumn: {
    name: "秋", emoji: "🍂", months: [9,10,11],
    preferredPlaces: ["森","パン屋","図書館"],
    treasures: ["どんぐり", "赤い落ち葉", "小さな松ぼっくり", "栗", "木の実"],
    notes: [
      "森から落ち葉の匂いがしてきます。",
      "パン屋から甘い匂いが流れてきます。",
      "村の道に少しずつ落ち葉が増えています。"
    ],
    actions: {
      "森": ["どんぐりを探しながら、落ち葉の上を歩いています。", "きれいな色の落ち葉を一枚ひろいました。"],
      "パン屋": ["秋の新作パンをじっと見ています。", "あたたかいパンを抱えて、ごきげんです。"],
      "図書館": ["静かな窓辺で、秋の午後を過ごしています。"]
    }
  },
  winter: {
    name: "冬", emoji: "❄️", months: [12,1,2],
    preferredPlaces: ["温泉","図書館","パン屋"],
    treasures: ["小さな雪の結晶", "赤い手袋", "白い羽根", "あたたかい毛糸"],
    notes: [
      "温泉の湯気がいつもより白く見えます。",
      "パン屋の窓がほんのり曇っています。",
      "村のみんなが少しだけ早足です。"
    ],
    actions: {
      "温泉": ["湯気の中で、すっかりあたたまっています。", "露天風呂から冷たい空を眺めています。"],
      "図書館": ["あたたかい席で本を読んでいます。"],
      "パン屋": ["焼きたてのパンで手をあたためています。"]
    }
  }
};

const WEATHER = [
  ["晴れ","☀️"], ["くもり","☁️"], ["小雨","🌧️"],
  ["風がつよい","🍃"], ["ぽかぽか","🌤️"]
];

const VILLAGE_NOTES = [
  "今日はパンのいい匂いが村じゅうに流れています。",
  "風がゆっくり吹いています。急ぐ子は誰もいません。",
  "広場のベンチが、なぜか人気です。",
  "森のほうから鳥の声が聞こえます。",
  "なんとなく、みんな眠そうです。",
  "今日は静かな一日になりそうです。",
  "温泉から湯気がふわふわ上がっています。",
  "誰かが花畑に小さな石を並べたようです。"
];


const FRIEND_RELATIONS = [
  "なんとなく気が合う",
  "おさんぽ仲間",
  "お茶仲間",
  "読書仲間",
  "温泉仲間",
  "パン屋仲間",
  "静かな時間を一緒に過ごす仲",
  "会うとつい長話になる仲"
];

const FRIEND_MOMENTS = [
  "少しだけ一緒に歩いていました。",
  "どうでもいい話をして笑っていました。",
  "隣に座って、しばらくぼんやりしていました。",
  "見つけたものを見せ合っていました。",
  "帰り道をなんとなく一緒に歩いていました。",
  "同じ景色を眺めながら、静かに過ごしていました。"
];

const HOLDER_MESSAGES = [
  "今日はあなたの気配を感じて、少しごきげんです。",
  "秘密の庭の入口を、ちらっと見に行っていました。",
  "あなたが来るかもしれないので、広場を気にしていました。",
  "たからものをひとつ見せようか迷っているようです。",
  "今日はいつもより少しだけ、足取りが軽そうです。",
  "あなたのことを思い出して、のんびりしていました。"
];

const HOLDER_SIGNS = [
  "小さな星のお守り",
  "ねものしるし",
  "ひみつの庭の鍵",
  "淡い光のビー玉",
  "ちいさな鈴のお守り",
  "星待ちのリボン"
];

let nftMap = new Map();
let nftItems = [];
let walletAddress = null;
let ownedIds = new Set();
let ownedOnly = false;
let nftDataReady = false;
let walletBridgeReady = false;
let walletBridgeError = null;

const COLLECTION_MILESTONES = [
  {count: 1,   icon: "🌱", name: "はじめまして"},
  {count: 3,   icon: "🫶", name: "小さな仲間たち"},
  {count: 5,   icon: "🏡", name: "ねも部屋"},
  {count: 10,  icon: "✨", name: "にぎやかな家"},
  {count: 20,  icon: "🌿", name: "小さな一族"},
  {count: 50,  icon: "🌳", name: "村の大所帯"},
  {count: 100, icon: "🌟", name: "ねも大集合"},
  {count: 179, icon: "🎉", name: "村のみんな"}
];


const OUTING_RESULTS = {
  "パン屋": [
    "焼きたての匂いにつられて、予定より長居していました。",
    "どのパンにするか真剣に悩んでいました。",
    "店先でひと休みして、満足そうに帰ってきました。",
    "小さなパンを見つけて、うれしそうに眺めていました。"
  ],
  "図書館": [
    "窓辺で本を読んでいたら、あっという間に時間が過ぎました。",
    "気になる本を何冊も手に取っていました。",
    "静かな席を見つけて、のんびり過ごしてきました。",
    "本の間から小さな発見を持ち帰ってきました。"
  ],
  "池": [
    "水面のきらきらを眺めながら、ゆっくり歩いてきました。",
    "丸い石を探すのに夢中になっていました。",
    "水鳥を眺めながら、ぼんやり過ごしてきました。",
    "池のそばの風が気持ちよかったようです。"
  ],
  "森": [
    "木の実を探しながら、奥まで探検してきました。",
    "木漏れ日の下で寄り道ばかりしていました。",
    "少し道に迷ったものの、本人は楽しそうでした。",
    "落ち葉を踏みながら、ゆっくり歩いてきました。"
  ],
  "花畑": [
    "いちばん気になる花を探して歩いてきました。",
    "花びらを眺めながら、ずいぶん長居していました。",
    "風に揺れる花を見て、ごきげんで帰ってきました。",
    "小さな花を見つけて、しばらく観察していました。"
  ],
  "温泉": [
    "すっかり温まって、ほかほかで帰ってきました。",
    "長湯して、いつも以上にのんびりしていました。",
    "露天風呂で空を眺めてきたようです。",
    "お風呂あがりまで満喫して帰ってきました。"
  ],
  "広場": [
    "ベンチで休みながら、村のみんなを眺めていました。",
    "気になるものを見つけて、あちこち歩き回っていました。",
    "誰かの話し声を聞きながら、のんびり過ごしました。",
    "風に吹かれながら、気ままに散歩してきました。"
  ],
  "雑貨屋": [
    "棚のすみまでじっくり見て回ってきました。",
    "小さな雑貨を眺めるだけで満足したようです。",
    "かわいいものを見つけて、ずっと気にしていました。",
    "店主と少しおしゃべりして帰ってきました。"
  ]
};

const OUTING_SOUVENIRS = {
  "パン屋": ["小さなパン", "クッキー", "パン屋の紙袋", "小麦の飾り"],
  "図書館": ["紙のしおり", "小さなメモ", "紙の星", "古い栞"],
  "池": ["水色の小石", "小さな貝がら", "水草のかけら", "透明な小びん"],
  "森": ["どんぐり", "木の実", "きれいな葉っぱ", "小さな松ぼっくり"],
  "花畑": ["花びら", "押し花", "四つ葉のクローバー", "小さな花冠"],
  "温泉": ["温泉まんじゅう", "つるつるの石", "小さな手ぬぐい", "湯の花の包み"],
  "広場": ["赤いリボン", "風船のかけら", "小さなボタン", "紙ひこうき"],
  "雑貨屋": ["ガラス玉", "ちいさな鈴", "ふしぎな鍵", "絵はがき"]
};

const OUTING_MOODS = [
  "ごきげんで帰ってきました。",
  "ちょっと疲れたけれど、満足そうです。",
  "何か考えごとをしながら帰ってきました。",
  "また行きたそうにしています。",
  "今日はいい一日だったようです。"
];

const OUTING_STORAGE_VERSION = "v1";

const PLACE_SET_TARGET = 3;
let collectionFilter = "all";


function hashString(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rand(seedText) {
  let a = hashString(seedText) + 0x6D2B79F5;
  let t = a;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function pick(arr, seedText) {
  return arr[Math.floor(rand(seedText) * arr.length)];
}

function dateKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth()+1).padStart(2,"0"),
    String(date.getDate()).padStart(2,"0")
  ].join("-");
}

function dateLabel(date) {
  return `${date.getMonth()+1}月${date.getDate()}日`;
}

function daysSinceStart(date) {
  const a = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const b = new Date(START_DATE.getFullYear(), START_DATE.getMonth(), START_DATE.getDate());
  return Math.max(0, Math.floor((a-b)/86400000));
}

function seasonFor(date) {
  const month = date.getMonth()+1;
  return Object.values(SEASONS).find(s => s.months.includes(month)) || SEASONS.spring;
}


function friendshipScore(a, b) {
  const x = Math.min(a, b);
  const y = Math.max(a, b);
  const baseScore = rand(`friend-score-${x}-${y}`);

  const ra = residentBaseRaw(a);
  const rb = residentBaseRaw(b);

  let bonus = 0;
  if (ra.favoritePlace === rb.favoritePlace) bonus += 0.08;
  if (ra.trait1 === rb.trait1 || ra.trait1 === rb.trait2 ||
      ra.trait2 === rb.trait1 || ra.trait2 === rb.trait2) {
    bonus += 0.05;
  }

  return Math.min(0.999999, baseScore + bonus);
}

function residentBaseRaw(id) {
  const trait1 = pick(TRAITS, `trait1-${id}`);
  let trait2 = pick(TRAITS, `trait2-${id}`);

  if (trait1 === trait2) {
    trait2 = TRAITS[(TRAITS.indexOf(trait2)+3) % TRAITS.length];
  }

  return {
    id,
    trait1,
    trait2,
    like: pick(LIKES, `like-${id}`),
    favoritePlace: pick(PLACES, `favorite-${id}`)[0]
  };
}

function closeFriends(id, count=3) {
  const ranked = [];

  for (let other = 1; other <= RESIDENT_COUNT; other++) {
    if (other === id) continue;
    ranked.push({
      id: other,
      score: friendshipScore(id, other)
    });
  }

  ranked.sort((a,b) => b.score - a.score);
  return ranked.slice(0, count).map(x => x.id);
}

function relationshipLabel(a, b) {
  const x = Math.min(a, b);
  const y = Math.max(a, b);
  return pick(FRIEND_RELATIONS, `friend-label-${x}-${y}`);
}

function relationshipPlace(a, b) {
  const x = Math.min(a, b);
  const y = Math.max(a, b);
  return pick(PLACES, `friend-place-${x}-${y}`)[0];
}

function friendMoment(a, b, date) {
  const x = Math.min(a, b);
  const y = Math.max(a, b);
  return pick(FRIEND_MOMENTS, `friend-moment-${x}-${y}-${dateKey(date)}`);
}

function residentBase(id) {
  const raw = residentBaseRaw(id);

  return {
    ...raw,
    stats: {
      "ねむけ": 20 + Math.floor(rand(`sleep-${id}`)*81),
      "好奇心": 20 + Math.floor(rand(`curiosity-${id}`)*81),
      "人なつこさ": 20 + Math.floor(rand(`social-${id}`)*81),
      "のんびり度": 35 + Math.floor(rand(`slow-${id}`)*66)
    }
  };
}

function residentDay(id, date) {
  const base = residentBase(id);
  const dkey = dateKey(date);
  const season = seasonFor(date);
  const chooser = rand(`place-choice-${id}-${dkey}`);

  let placeName;
  if (chooser < 0.28) {
    placeName = base.favoritePlace;
  } else if (chooser < 0.68) {
    placeName = pick(season.preferredPlaces, `season-place-${id}-${dkey}`);
  } else {
    placeName = pick(PLACES, `place-${id}-${dkey}`)[0];
  }

  const seasonalActions = season.actions[placeName] || [];
  const useSeasonalAction =
    seasonalActions.length &&
    rand(`season-action-chance-${id}-${dkey}`) < 0.55;

  const action = useSeasonalAction
    ? pick(seasonalActions, `season-action-${id}-${dkey}`)
    : pick(ACTIONS[placeName], `action-${id}-${dkey}`);

  return {
    placeName,
    action,
    mood: 3 + Math.floor(rand(`mood-${id}-${dkey}`)*3),
    season
  };
}

function treasureHistory(id, untilDate) {
  const base = residentBase(id);
  const history = [];
  const cursor = new Date(START_DATE);
  const last = new Date(
    untilDate.getFullYear(),
    untilDate.getMonth(),
    untilDate.getDate()
  );

  while (cursor <= last) {
    const d = new Date(cursor);
    const dkey = dateKey(d);
    const dayNo = daysSinceStart(d);
    const season = seasonFor(d);

    let found = false;
    if (dayNo === 0) {
      found = true;
    } else {
      let chance = 0.20;
      if (base.trait1 === "収集家" || base.trait2 === "収集家") chance += 0.16;
      if (base.trait1 === "おさんぽ好き" || base.trait2 === "おさんぽ好き") chance += 0.06;
      found = rand(`treasure-found-${id}-${dkey}`) < chance;
    }

    if (found) {
      const useSeasonal = rand(`treasure-season-${id}-${dkey}`) < 0.62;
      const pool = useSeasonal ? season.treasures : TREASURES;
      const item = pick(pool, `treasure-item-${id}-${dkey}`);
      const day = residentDay(id, d);

      history.push({
        date: d,
        item,
        place: day.placeName,
        season
      });
    }

    cursor.setDate(cursor.getDate()+1);
  }

  return history.slice(-18).reverse();
}

function residentTreasures(id, date) {
  const history = treasureHistory(id, date);
  const unique = [];

  for (const entry of history) {
    if (!unique.includes(entry.item)) unique.push(entry.item);
    if (unique.length >= 8) break;
  }

  return unique;
}

function recentDiary(id, date, length=6) {
  const items = [];

  for (let i=0; i<length; i++) {
    const d = new Date(date);
    d.setDate(date.getDate()-i);
    if (d < START_DATE) break;

    const day = residentDay(id,d);
    items.push({
      date: d,
      text: `${day.placeName}で、${day.action}`
    });
  }

  return items;
}

function stars(n) {
  return "🌸".repeat(n);
}

function placeIcon(name) {
  const found = PLACES.find(p => p[0] === name);
  return found ? found[1] : "🌿";
}

function fallbackAvatar(id) {
  const icons = ["🐱","🐈","🌱","🌼","🍞","🫧","🍵","📚"];
  return icons[id % icons.length];
}

function nftFor(id) {
  return nftMap.get(Number(id));
}

function avatarHtml(id) {
  const nft = nftFor(id);
  if (nft?.image_url) {
    return `<img src="${nft.image_url}" alt="Nemo2023 #${id}" loading="lazy" referrerpolicy="no-referrer">`;
  }
  return fallbackAvatar(id);
}

function displayName(id) {
  return nftFor(id)?.name || `Nemo2023 #${String(id).padStart(2,"0")}`;
}

function shortAddress(address) {
  if (!address || address.length < 12) return address || "";
  return `${address.slice(0,6)}…${address.slice(-4)}`;
}

function padWord(value) {
  return BigInt(value).toString(16).padStart(64, "0");
}

function addressWord(address) {
  return address.toLowerCase().replace(/^0x/, "").padStart(64, "0");
}

/* ERC-1155 balanceOfBatch(address[],uint256[]) */
function encodeBalanceOfBatch(accounts, tokenIds) {
  if (accounts.length !== tokenIds.length) {
    throw new Error("accounts / tokenIds length mismatch");
  }

  const count = accounts.length;
  const accountsSection =
    padWord(count) +
    accounts.map(addressWord).join("");

  const idsSection =
    padWord(count) +
    tokenIds.map(id => padWord(BigInt(id))).join("");

  const accountsOffset = 64n;
  const idsOffset =
    accountsOffset +
    BigInt(accountsSection.length / 2);

  return "0x4e1273f4" +
    padWord(accountsOffset) +
    padWord(idsOffset) +
    accountsSection +
    idsSection;
}

function decodeUintArray(result) {
  if (!result || result === "0x") {
    throw new Error("empty RPC result");
  }

  const hex = result.replace(/^0x/, "");
  const offset = Number(BigInt("0x" + hex.slice(0,64)));
  const start = offset * 2;
  const length = Number(
    BigInt("0x" + hex.slice(start, start+64))
  );

  const values = [];

  for (let i=0; i<length; i++) {
    const pos = start + 64 + i*64;
    values.push(
      BigInt("0x" + hex.slice(pos, pos+64))
    );
  }

  return values;
}

async function publicPolygonCall(tx) {
  let lastError = null;

  for (const rpc of POLYGON_RPCS) {
    try {
      const response = await fetch(rpc, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "eth_call",
          params: [tx, "latest"]
        })
      });

      if (!response.ok) {
        throw new Error(`RPC HTTP ${response.status}`);
      }

      const payload = await response.json();

      if (payload.error) {
        throw new Error(
          payload.error.message || "Polygon RPC error"
        );
      }

      if (!payload.result) {
        throw new Error("Polygon RPC returned no result");
      }

      return payload.result;
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("Polygon RPC unavailable");
}

async function checkOwnedNemos(address) {
  if (!nftItems.length) {
    throw new Error("NFT画像データをまだ読み込み中です。");
  }

  const items = nftItems.filter(item =>
    item.contract &&
    item.identifier &&
    item.number
  );

  if (!items.length) {
    throw new Error("Nemo2023のNFT情報が見つかりません。");
  }

  const contract = items[0].contract;
  const accounts = items.map(() => address);
  const tokenIds = items.map(item => item.identifier);

  const data =
    encodeBalanceOfBatch(accounts, tokenIds);

  const result =
    await publicPolygonCall({
      to: contract,
      data
    });

  const balances =
    decodeUintArray(result);

  const found = new Set();

  items.forEach((item, index) => {
    if ((balances[index] || 0n) > 0n) {
      found.add(Number(item.number));
    }
  });

  return found;
}

function holderMessage(id) {
  return pick(
    HOLDER_MESSAGES,
    `holder-message-${id}-${todayKey}`
  );
}

function holderSign(id) {
  return pick(
    HOLDER_SIGNS,
    `holder-sign-${id}`
  );
}

const today = new Date();
const todayKey = dateKey(today);
const currentSeason = seasonFor(today);
const weather = pick(WEATHER, `weather-${todayKey}`);

const useSeasonNote =
  rand(`season-note-${todayKey}`) < 0.72;

const note = useSeasonNote
  ? pick(
      currentSeason.notes,
      `season-village-note-${todayKey}`
    )
  : pick(
      VILLAGE_NOTES,
      `note-${todayKey}`
    );

document.body.dataset.season =
  currentSeason.name;

document.getElementById("todayDate").textContent =
  `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`;

document.getElementById("weather").textContent =
  `${weather[1]} ${weather[0]}　${currentSeason.emoji} ${currentSeason.name}`;

document.getElementById("villageNote").textContent =
  note;

const residents =
  Array.from(
    {length: RESIDENT_COUNT},
    (_,i) => {
      const id = i+1;
      const history =
        treasureHistory(id, today);

      return {
        ...residentBase(id),
        ...residentDay(id,today),
        treasures:
          residentTreasures(id,today),
        treasureHistory: history,
        friends: closeFriends(id, 3)
      };
    }
  );

const placeFilter =
  document.getElementById("placeFilter");

PLACES.forEach(([name,icon]) => {
  const opt =
    document.createElement("option");

  opt.value = name;
  opt.textContent = `${icon} ${name}`;

  placeFilter.appendChild(opt);
});

const grid =
  document.getElementById("residentGrid");

const dialog =
  document.getElementById("residentDialog");

const detail =
  document.getElementById("residentDetail");

const searchInput =
  document.getElementById("searchInput");

const syncStatus =
  document.getElementById("syncStatus");

const connectWalletButton =
  document.getElementById("connectWalletButton");

const ownedOnlyButton =
  document.getElementById("ownedOnlyButton");

const clearWalletButton =
  document.getElementById("clearWalletButton");

const walletStatus =
  document.getElementById("walletStatus");

const openCollectionButton =
  document.getElementById("openCollectionButton");

const collectionCount =
  document.getElementById("collectionCount");

const collectionSummary =
  document.getElementById("collectionSummary");

const collectionDialog =
  document.getElementById("collectionDialog");

const collectionDetail =
  document.getElementById("collectionDetail");

const closeCollectionDialog =
  document.getElementById("closeCollectionDialog");


connectWalletButton.disabled = true;
openCollectionButton.disabled = true;



function outingStorageKey() {
  if (!walletAddress) return null;
  return `nemo-village-outings-${OUTING_STORAGE_VERSION}:${walletAddress.toLowerCase()}`;
}

function loadOutingStore() {
  const key = outingStorageKey();
  if (!key) return {};

  try {
    const raw = localStorage.getItem(key);
    const data = raw ? JSON.parse(raw) : {};
    return data && typeof data === "object" ? data : {};
  } catch (err) {
    console.warn("outing store load failed", err);
    return {};
  }
}

function saveOutingStore(store) {
  const key = outingStorageKey();
  if (!key) return;

  try {
    localStorage.setItem(key, JSON.stringify(store));
  } catch (err) {
    console.warn("outing store save failed", err);
  }
}

function outingRecordKey(id, dkey=todayKey) {
  return `${dkey}:${id}`;
}

function todayOuting(id) {
  const store = loadOutingStore();
  return store[outingRecordKey(id)] || null;
}

function outingHistoryFor(id, limit=4) {
  const store = loadOutingStore();

  return Object.values(store)
    .filter(item => Number(item?.id) === Number(id))
    .sort((a,b) => {
      if (a.date !== b.date) return String(b.date).localeCompare(String(a.date));
      return String(b.time || "").localeCompare(String(a.time || ""));
    })
    .slice(0, limit);
}

function allOutingHistory() {
  return Object.values(loadOutingStore())
    .filter(item => item && item.date && item.id)
    .sort((a,b) => {
      if (a.date !== b.date) return String(b.date).localeCompare(String(a.date));
      return String(b.time || "").localeCompare(String(a.time || ""));
    });
}

function todayOutingRecords() {
  return allOutingHistory().filter(item => item.date === todayKey);
}

function outingStats() {
  const all = allOutingHistory();
  const places = new Set(all.map(item => item.place).filter(Boolean));

  return {
    total: all.length,
    places: places.size,
    today: all.filter(item => item.date === todayKey).length
  };
}

function outingMeetId(id, place) {
  const seedBase = `outing-meet-${walletAddress?.toLowerCase() || "guest"}-${todayKey}-${id}-${place}`;

  if (rand(`${seedBase}-chance`) >= 0.72) {
    return null;
  }

  const r = residents.find(x => x.id === id);

  if (r?.friends?.length && rand(`${seedBase}-friend`) < 0.64) {
    return pick(r.friends, `${seedBase}-friend-pick`);
  }

  const candidates = residents
    .map(x => x.id)
    .filter(otherId => otherId !== id);

  return pick(candidates, `${seedBase}-resident-pick`);
}

function createTodayOuting(id, requestedPlace) {
  if (!walletAddress || !ownedIds.has(id)) {
    throw new Error("このNemoの保有を確認できません。");
  }

  const existing = todayOuting(id);
  if (existing) return existing;

  let place = requestedPlace;

  if (!OUTING_RESULTS[place]) {
    place = pick(
      PLACES.map(([name]) => name),
      `outing-random-place-${walletAddress.toLowerCase()}-${todayKey}-${id}`
    );
  }

  const seedBase =
    `outing-${walletAddress.toLowerCase()}-${todayKey}-${id}-${place}`;

  const meetId = outingMeetId(id, place);
  const now = new Date();

  const record = {
    id,
    date: todayKey,
    time: `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`,
    place,
    result: pick(OUTING_RESULTS[place], `${seedBase}-result`),
    souvenir: pick(OUTING_SOUVENIRS[place], `${seedBase}-souvenir`),
    mood: pick(OUTING_MOODS, `${seedBase}-mood`),
    meetId
  };

  const store = loadOutingStore();
  store[outingRecordKey(id)] = record;

  // Keep the static site lightweight even after long-term use.
  // Newest 1200 outing records per wallet are retained on this browser.
  const entries = Object.entries(store).sort((a,b) => {
    const ad = String(a[1]?.date || "");
    const bd = String(b[1]?.date || "");
    if (ad !== bd) return bd.localeCompare(ad);
    return String(b[1]?.time || "").localeCompare(String(a[1]?.time || ""));
  });

  const trimmed = Object.fromEntries(entries.slice(0, 1200));
  saveOutingStore(trimmed);

  return record;
}

function outingEncounterHtml(record) {
  if (!record?.meetId) return "";

  const metOwned = ownedIds.has(Number(record.meetId));

  return `
    <div class="outing-encounter">
      <span class="outing-mini-avatar avatar">${avatarHtml(Number(record.meetId))}</span>
      <span>
        <small>途中で会いました</small>
        <strong>${displayName(Number(record.meetId))}${metOwned ? " ✨" : ""}</strong>
      </span>
    </div>
  `;
}

function outingHistoryHtml(id, skipToday=true) {
  let history = outingHistoryFor(id, 5);

  if (skipToday) {
    history = history.filter(item => item.date !== todayKey);
  }

  history = history.slice(0, 3);

  if (!history.length) return "";

  return `
    <div class="outing-past">
      <strong class="outing-past-title">さいきんのおでかけ</strong>
      ${history.map(item => `
        <div class="outing-past-row">
          <span>${item.date.slice(5).replace("-", "/")}</span>
          <span>${placeIcon(item.place)} ${item.place}</span>
          <span>🎁 ${item.souvenir}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function outingPanelHtml(id) {
  if (!walletAddress || !ownedIds.has(id)) return "";

  const record = todayOuting(id);
  const past = outingHistoryHtml(id, true);

  if (record) {
    return `
      <div class="detail-section outing-panel">
        <div class="outing-heading">
          <div>
            <h4>🚶 今日のおでかけ</h4>
            <p>今日はもうおでかけしてきました。</p>
          </div>
          <span class="outing-done">✓ 帰宅済み</span>
        </div>

        <div class="outing-result">
          <div class="outing-place">
            <span>${placeIcon(record.place)}</span>
            <strong>${record.place}</strong>
            <small>${record.time}</small>
          </div>

          <p>${record.result}</p>
          ${outingEncounterHtml(record)}
          <p class="outing-mood">${record.mood}</p>

          <div class="outing-souvenir">
            <span>今日のおみやげ</span>
            <strong>🎁 ${record.souvenir}</strong>
          </div>
        </div>

        ${past}

        <p class="outing-note">1体につき1日1回。明日になると、またおでかけできます。</p>
      </div>
    `;
  }

  const destinationOptions = [
    `<option value="__random__">🎲 おまかせ</option>`,
    ...PLACES.map(([name,icon]) =>
      `<option value="${name}" ${residentBase(id).favoritePlace === name ? "selected" : ""}>${icon} ${name}</option>`
    )
  ].join("");

  return `
    <div class="detail-section outing-panel">
      <div class="outing-heading">
        <div>
          <h4>🚶 おでかけ</h4>
          <p>今日はどこへ行こう？</p>
        </div>
        <span class="outing-available">今日1回</span>
      </div>

      <div class="outing-controls">
        <label>
          <span>行き先</span>
          <select id="outingDestination">${destinationOptions}</select>
        </label>

        <button id="outingStartButton" type="button" data-outing-id="${id}">
          おでかけする
        </button>
      </div>

      <p class="outing-hint">
        行った先で何かを見つけたり、別のねもに会ったり、おみやげを持ち帰ることがあります。
      </p>

      ${past}

      <p class="outing-note">
        おでかけ記録は、この端末のブラウザに保存されます。署名・送金・ガス代はありません。
      </p>
    </div>
  `;
}

function outingBookHtml() {
  if (!walletAddress) return "";

  const stats = outingStats();
  const records = todayOutingRecords()
    .filter(item => ownedIds.has(Number(item.id)));

  const todayRows = records.length
    ? records.map(record => `
        <button class="outing-book-row" type="button" data-outing-book-id="${record.id}">
          <span class="outing-book-avatar avatar">${avatarHtml(Number(record.id))}</span>
          <span class="outing-book-copy">
            <strong>${displayName(Number(record.id))}</strong>
            <small>${placeIcon(record.place)} ${record.place}　🎁 ${record.souvenir}</small>
          </span>
        </button>
      `).join("")
    : `<p class="collection-muted">今日はまだ誰もおでかけしていません。所持済みのねもを開いて、行き先を選んでみてください。</p>`;

  return `
    <section class="collection-section outing-book-section">
      <div class="outing-book-head">
        <div>
          <h4>🚶 おでかけ手帳</h4>
          <p>自分のねもを、1体につき1日1回おでかけさせられます。</p>
        </div>
        <div class="outing-book-stats">
          <span><strong>${stats.today}</strong> 今日</span>
          <span><strong>${stats.total}</strong> 累計</span>
          <span><strong>${stats.places}/8</strong> 行き先</span>
        </div>
      </div>

      <div class="outing-book-list">${todayRows}</div>

      <p class="outing-book-note">※記録はこのブラウザに保存されるため、別の端末とは自動同期されません。</p>
    </section>
  `;
}


function collectionOwnedCount() {
  return ownedIds.size;
}

function nextMilestone(count) {
  return COLLECTION_MILESTONES.find(m => m.count > count) || null;
}

function ownedPlaceCounts() {
  const counts = new Map(PLACES.map(([name]) => [name, 0]));

  ownedIds.forEach(id => {
    const place = residentBase(id).favoritePlace;
    counts.set(place, (counts.get(place) || 0) + 1);
  });

  return counts;
}

function totalPlaceCounts() {
  const counts = new Map(PLACES.map(([name]) => [name, 0]));

  residents.forEach(r => {
    counts.set(r.favoritePlace, (counts.get(r.favoritePlace) || 0) + 1);
  });

  return counts;
}

function uniqueOwnedFriendPairs() {
  const pairs = new Map();

  ownedIds.forEach(id => {
    const r = residents.find(x => x.id === id);
    if (!r) return;

    r.friends.forEach(friendId => {
      if (!ownedIds.has(friendId)) return;

      const a = Math.min(id, friendId);
      const b = Math.max(id, friendId);
      const key = `${a}-${b}`;

      if (!pairs.has(key)) {
        pairs.set(key, {
          a,
          b,
          label: relationshipLabel(a, b)
        });
      }
    });
  });

  return Array.from(pairs.values()).sort((x, y) => {
    if (x.a !== y.a) return x.a - y.a;
    return x.b - y.b;
  });
}

function nearFriendPairs() {
  const items = new Map();

  ownedIds.forEach(id => {
    const r = residents.find(x => x.id === id);
    if (!r) return;

    r.friends.forEach(friendId => {
      if (ownedIds.has(friendId)) return;

      const key = `${id}-${friendId}`;
      if (!items.has(key)) {
        items.set(key, {
          owned: id,
          missing: friendId,
          label: relationshipLabel(id, friendId)
        });
      }
    });
  });

  return Array.from(items.values()).slice(0, 8);
}

function updateCollectionPanel() {
  if (!nftDataReady) {
    openCollectionButton.disabled = true;
    collectionCount.textContent = "— / 179";
    collectionSummary.textContent = "Nemo2023情報を読み込み中です…";
    return;
  }

  openCollectionButton.disabled = false;

  if (!walletAddress) {
    collectionCount.textContent = `179体`;
    collectionSummary.textContent =
      "ウォレットをつなぐと「所持済み」スタンプとコレクションしるしが表示されます。";
    return;
  }

  const count = collectionOwnedCount();
  const next = nextMilestone(count);

  collectionCount.textContent = `${count} / ${RESIDENT_COUNT}`;

  const outingToday = todayOutingRecords()
    .filter(item => ownedIds.has(Number(item.id))).length;
  const outingText = `今日のおでかけ ${outingToday}/${count}体。`;

  if (next) {
    const remaining = next.count - count;
    collectionSummary.textContent =
      `あなたのねも ${count}体。${outingText} 次のしるし「${next.icon} ${next.name}」まであと${remaining}体。`;
  } else {
    collectionSummary.textContent =
      `あなたのねも ${count}体。${outingText} 179体すべてのしるしがそろっています。`;
  }
}

function collectionCardHtml(r) {
  const owned = ownedIds.has(r.id);

  return `
    <button class="collection-card ${owned ? "is-owned" : "is-unowned"}"
            type="button"
            data-collection-id="${r.id}">
      <span class="collection-thumb avatar">${avatarHtml(r.id)}</span>
      <span class="collection-card-copy">
        <strong>${displayName(r.id)}</strong>
        <small>${placeIcon(r.favoritePlace)} ${r.favoritePlace}</small>
        <span class="collection-stamp">
          ${walletAddress
            ? (owned ? "✓ 所持済み" : "未所持")
            : "村の住人"}
        </span>
      </span>
    </button>
  `;
}

function renderCollectionGrid() {
  const grid = collectionDetail.querySelector("#collectionGrid");
  if (!grid) return;

  let list = residents;

  if (walletAddress && collectionFilter === "owned") {
    list = residents.filter(r => ownedIds.has(r.id));
  } else if (walletAddress && collectionFilter === "unowned") {
    list = residents.filter(r => !ownedIds.has(r.id));
  }

  grid.innerHTML = list.map(collectionCardHtml).join("");

  grid.querySelectorAll(".collection-card").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.collectionId);
      collectionDialog.close();
      openResident(id);
    });
  });
}

function openCollection() {
  if (!nftDataReady) return;

  const count = collectionOwnedCount();
  const totalPlaces = totalPlaceCounts();
  const ownedPlaces = ownedPlaceCounts();
  const pairs = uniqueOwnedFriendPairs();
  const nearPairs = nearFriendPairs();

  const milestoneHtml = COLLECTION_MILESTONES.map(m => {
    const unlocked = walletAddress && count >= m.count;

    return `
      <div class="milestone ${unlocked ? "unlocked" : "locked"}">
        <span class="milestone-icon">${m.icon}</span>
        <div>
          <strong>${m.name}</strong>
          <small>${m.count}体</small>
        </div>
        <span class="milestone-state">${unlocked ? "解放済み" : "🔒"}</span>
      </div>
    `;
  }).join("");

  const placeHtml = PLACES.map(([name, icon]) => {
    const owned = ownedPlaces.get(name) || 0;
    const total = totalPlaces.get(name) || 0;
    const unlocked = walletAddress && owned >= PLACE_SET_TARGET;

    return `
      <div class="place-set ${unlocked ? "unlocked" : ""}">
        <div class="place-set-title">
          <span>${icon} ${name}</span>
          <strong>${walletAddress ? `${owned} / ${total}` : `${total}体`}</strong>
        </div>
        <div class="place-set-bar">
          <span style="width:${walletAddress ? Math.min(100, (owned / PLACE_SET_TARGET) * 100) : 0}%"></span>
        </div>
        <small>
          ${walletAddress
            ? (unlocked
                ? `✓ 「${name}の仲間」しるし解放`
                : `あと${Math.max(0, PLACE_SET_TARGET - owned)}体で場所しるし`)
            : `お気に入りが${name}のねも`}
        </small>
      </div>
    `;
  }).join("");

  const pairsHtml = walletAddress
    ? (
        pairs.length
          ? pairs.slice(0, 12).map(pair => `
              <button class="pair-card" type="button" data-pair-id="${pair.a}">
                <span class="pair-avatars">
                  <span class="pair-avatar avatar">${avatarHtml(pair.a)}</span>
                  <span class="pair-avatar avatar">${avatarHtml(pair.b)}</span>
                </span>
                <span>
                  <strong>${displayName(pair.a)} × ${displayName(pair.b)}</strong>
                  <small>🤝 ${pair.label}</small>
                </span>
              </button>
            `).join("")
          : `<p class="collection-muted">まだ「自分のねも同士」のなかよしペアは見つかっていません。</p>`
      )
    : `<p class="collection-muted">ウォレットをつなぐと、自分が持っているねも同士の「なかよしペア」が見つかります。</p>`;

  const nearHtml = walletAddress && nearPairs.length
    ? `
      <div class="near-pairs">
        ${nearPairs.map(pair => `
          <button class="near-pair-card" type="button" data-near-id="${pair.missing}">
            <span class="near-pair-images">
              <span class="near-avatar avatar">${avatarHtml(pair.owned)}</span>
              <span class="near-arrow">＋</span>
              <span class="near-avatar avatar muted-avatar">${avatarHtml(pair.missing)}</span>
            </span>
            <span class="near-pair-copy">
              <strong>${displayName(pair.owned)} のなかよし</strong>
              <small>${displayName(pair.missing)} ・ ${pair.label}</small>
              <span>この子がそろうと「あなたのねも同士」のペアになります。</span>
            </span>
          </button>
        `).join("")}
      </div>
    `
    : "";

  const countText = walletAddress
    ? `${count} / ${RESIDENT_COUNT}`
    : `${RESIDENT_COUNT}体`;

  collectionDetail.innerHTML = `
    <div class="collection-hero">
      <p class="collection-kicker">NEMO COLLECTION</p>
      <h3>📖 ねも図鑑</h3>
      <p>179体のねもを、村の住人として眺める図鑑です。</p>

      <div class="collection-total">
        <strong>${countText}</strong>
        <span>${walletAddress ? "あなたのねも" : "村の住人"}</span>
      </div>
    </div>

    <div class="collection-body">
      ${outingBookHtml()}

      <section class="collection-section">
        <h4>コレクションしるし</h4>
        <p>持っているねもの数に応じて、小さなしるしが解放されます。</p>
        <div class="milestone-grid">${milestoneHtml}</div>
      </section>

      <section class="collection-section">
        <h4>お気に入りの場所セット</h4>
        <p>同じ場所がお気に入りのねもが3体そろうと、場所しるしが解放されます。</p>
        <div class="place-set-grid">${placeHtml}</div>
      </section>

      <section class="collection-section">
        <h4>あなたのねも同士の なかよし</h4>
        <p>村で仲良しの2人をどちらも持っていると、ここにペアとして現れます。</p>
        <div class="pair-grid">${pairsHtml}</div>
      </section>

      ${nearHtml ? `
        <section class="collection-section">
          <h4>あと1人で なかよしペア</h4>
          <p>今いるねもの、まだ手元にいない仲良したちです。</p>
          ${nearHtml}
        </section>
      ` : ""}

      <section class="collection-section">
        <div class="collection-grid-head">
          <div>
            <h4>179体の図鑑</h4>
            <p>カードを押すと、その子の暮らしを見られます。</p>
          </div>

          ${walletAddress ? `
            <div class="collection-filters" role="group" aria-label="図鑑フィルター">
              <button type="button" data-collection-filter="all" class="${collectionFilter === "all" ? "active" : ""}">すべて</button>
              <button type="button" data-collection-filter="owned" class="${collectionFilter === "owned" ? "active" : ""}">所持済み</button>
              <button type="button" data-collection-filter="unowned" class="${collectionFilter === "unowned" ? "active" : ""}">未所持</button>
            </div>
          ` : ""}
        </div>

        <div id="collectionGrid" class="collection-grid"></div>
      </section>
    </div>
  `;

  collectionDetail.querySelectorAll("[data-collection-filter]").forEach(button => {
    button.addEventListener("click", () => {
      collectionFilter = button.dataset.collectionFilter;

      collectionDetail.querySelectorAll("[data-collection-filter]").forEach(x => {
        x.classList.toggle("active", x.dataset.collectionFilter === collectionFilter);
      });

      renderCollectionGrid();
    });
  });

  collectionDetail.querySelectorAll("[data-pair-id]").forEach(button => {
    button.addEventListener("click", () => {
      collectionDialog.close();
      openResident(Number(button.dataset.pairId));
    });
  });

  collectionDetail.querySelectorAll("[data-near-id]").forEach(button => {
    button.addEventListener("click", () => {
      collectionDialog.close();
      openResident(Number(button.dataset.nearId));
    });
  });

  collectionDetail.querySelectorAll("[data-outing-book-id]").forEach(button => {
    button.addEventListener("click", () => {
      collectionDialog.close();
      openResident(Number(button.dataset.outingBookId));
    });
  });

  renderCollectionGrid();
  if (!collectionDialog.open) collectionDialog.showModal();
}


function renderResidents() {
  const q =
    searchInput.value.trim().replace("#","");

  const place =
    placeFilter.value;

  const filtered =
    residents.filter(r =>
      (!q || String(r.id).includes(q)) &&
      (!place || r.placeName===place) &&
      (!ownedOnly || ownedIds.has(r.id))
    );

  if (!filtered.length) {
    grid.innerHTML =
      `<div class="empty">その条件のねもは、今日は見つかりませんでした。</div>`;
    return;
  }

  grid.innerHTML =
    filtered.map(r => `
      <button class="resident ${ownedIds.has(r.id) ? "owned-resident" : ""}" data-id="${r.id}">
        <div class="resident-top">
          <div class="avatar">${avatarHtml(r.id)}</div>
          <div>
            <div class="number">${displayName(r.id)}</div>
            ${ownedIds.has(r.id) ? `<span class="owner-badge">✨ あなたのねも</span>` : ""}
            <div class="place">${placeIcon(r.placeName)} ${r.placeName}</div>
          </div>
        </div>

        <p class="action">${r.action}</p>

        <div class="traits">
          <span class="tag">${r.trait1}</span>
          <span class="tag">${r.trait2}</span>
          <span class="season-chip">${r.season.emoji} ${r.season.name}</span>
        </div>
      </button>
    `).join("");

  grid
    .querySelectorAll(".resident")
    .forEach(btn =>
      btn.addEventListener(
        "click",
        () => openResident(
          Number(btn.dataset.id)
        )
      )
    );
}

function openResident(id) {
  const r =
    residents.find(x => x.id===id);

  const diary =
    recentDiary(id,today,6);

  const nft =
    nftFor(id);

  const openSeaLink =
    nft?.opensea_url
      ? `<a class="opensea-link" href="${nft.opensea_url}" target="_blank" rel="noopener">OpenSeaでこのNemoを見る ↗</a>`
      : `<a class="opensea-link" href="${COLLECTION_URL}" target="_blank" rel="noopener">NemoCollection2023を見る ↗</a>`;

  const isOwned =
    ownedIds.has(id);

  const holderPanel =
    isOwned
      ? `
        <div class="detail-section holder-panel">
          <h4>✨ あなたのねも</h4>
          <p class="holder-message">${holderMessage(id)}</p>

          <div class="holder-sign">
            <span>今日のホルダーしるし</span>
            <strong>🔑 ${holderSign(id)}</strong>
          </div>

          <p class="holder-note">ウォレットで保有が確認できた時だけ表示されます。</p>
        </div>
      `
      : "";

  const friendRows = r.friends.map(friendId => {
    const friend = residents.find(x => x.id === friendId);
    const samePlaceToday = friend && friend.placeName === r.placeName;
    const label = relationshipLabel(id, friendId);
    const usualPlace = relationshipPlace(id, friendId);
    const moment = samePlaceToday
      ? `今日は${placeIcon(r.placeName)} ${r.placeName}で、${friendMoment(id, friendId, today)}`
      : `最近は${placeIcon(usualPlace)} ${usualPlace}で顔を合わせることが多いようです。`;

    return `
      <button class="friend-card" type="button" data-friend-id="${friendId}">
        <span class="friend-avatar avatar">${avatarHtml(friendId)}</span>
        <span class="friend-copy">
          <strong>${displayName(friendId)}</strong>
          <small>${label}</small>
          <span>${moment}</span>
        </span>
      </button>
    `;
  }).join("");

  const todayTogether = r.friends
    .map(friendId => residents.find(x => x.id === friendId))
    .filter(friend => friend && friend.placeName === r.placeName);

  const todayFriendNote = todayTogether.length
    ? `<div class="friend-today">🤝 今日は <strong>${todayTogether.map(x => displayName(x.id)).join("・")}</strong> と同じ場所にいます。</div>`
    : "";

  const treasureHistoryHtml =
    r.treasureHistory.length
      ? r.treasureHistory
          .map(entry => `
            <div class="treasure-history-row">
              <div class="treasure-history-date">${dateLabel(entry.date)}</div>
              <div class="treasure-history-main">
                <strong>🎒 ${entry.item}</strong>
                <span>${placeIcon(entry.place)} ${entry.place}で見つけました。</span>
              </div>
            </div>
          `).join("")
      : `<p class="muted">まだ、たからものの記録はありません。</p>`;

  detail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-title">
        <div class="avatar">${avatarHtml(r.id)}</div>

        <div>
          <h3>${displayName(r.id)}</h3>
          <p>${r.trait1} × ${r.trait2}</p>
          ${walletAddress && !isOwned ? `<span class="collection-mini-status">図鑑：未所持</span>` : ""}
          ${isOwned ? `<span class="owner-badge owner-badge-large">✨ あなたのねも</span>` : ""}
          <span class="season-chip">${currentSeason.emoji} ${currentSeason.name}</span>
          ${openSeaLink}
        </div>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-section">
        <h4>今日</h4>
        <p>${placeIcon(r.placeName)} <strong>${r.placeName}</strong></p>
        <p>${r.action}</p>
        <p>ごきげん　${stars(r.mood)}</p>
        ${todayFriendNote}
      </div>

      ${holderPanel}
      ${outingPanelHtml(id)}

      <div class="detail-section">
        <h4>なかよし</h4>
        <p class="friend-intro">この子が村でよく一緒にいる3人です。</p>
        <div class="friend-list">${friendRows}</div>
      </div>

      <div class="detail-section">
        <h4>この子のこと</h4>

        <p>好きなもの：${r.like}</p>
        <p>お気に入りの場所：${r.favoritePlace}</p>

        ${Object.entries(r.stats)
          .map(([name,value]) =>
            `<div class="meter-row">
              <span>${name}</span>
              <div class="meter">
                <span style="width:${value}%"></span>
              </div>
              <span>${value}</span>
            </div>`
          ).join("")
        }
      </div>

      <div class="detail-section">
        <h4>いま持っている たからもの</h4>

        <div class="treasure-list">
          ${r.treasures
            .map(x =>
              `<span class="tag">🎒 ${x}</span>`
            ).join("")
          }
        </div>
      </div>

      <div class="detail-section">
        <h4>たからもの履歴</h4>
        <div class="treasure-history">
          ${treasureHistoryHtml}
        </div>
      </div>

      <div class="detail-section">
        <h4>さいきんの日記</h4>

        ${diary
          .map(d => `
            <div class="diary">
              <div class="diary-date">${dateLabel(d.date)}</div>
              <div>${d.text}</div>
            </div>
          `).join("")
        }
      </div>
    </div>
  `;

  const outingStartButton = detail.querySelector("#outingStartButton");
  if (outingStartButton) {
    outingStartButton.addEventListener("click", () => {
      const outingId = Number(outingStartButton.dataset.outingId);
      const destination = detail.querySelector("#outingDestination")?.value || "__random__";

      try {
        outingStartButton.disabled = true;
        outingStartButton.textContent = "おでかけ中…";

        createTodayOuting(outingId, destination);
        updateCollectionPanel();
        openResident(outingId);
      } catch (err) {
        console.warn("outing failed", err);
        outingStartButton.disabled = false;
        outingStartButton.textContent = "おでかけする";
        alert(String(err?.message || err || "おでかけできませんでした。"));
      }
    });
  }

  detail.querySelectorAll(".friend-card").forEach(button => {
    button.addEventListener("click", () => {
      const friendId = Number(button.dataset.friendId);
      openResident(friendId);
    });
  });

  if (!dialog.open) dialog.showModal();
}


function refreshWalletConnectAvailability() {
  const hasInjectedWallet = !!window.ethereum;
  const canConnect = nftDataReady && (walletBridgeReady || hasInjectedWallet);

  connectWalletButton.disabled = !canConnect;

  if (!nftDataReady) {
    walletStatus.textContent = "Nemo2023情報を読み込み中です…";
  } else if (!walletBridgeReady && !hasInjectedWallet && !walletBridgeError) {
    walletStatus.textContent = "スマホウォレット接続を準備中です…";
  } else if (walletBridgeError && !hasInjectedWallet) {
    walletStatus.textContent = "ウォレット接続機能を読み込めませんでした。ページを更新してください。";
  } else if (!walletAddress) {
    walletStatus.textContent = "未接続";
  }
}

async function applyConnectedWallet(address) {
  if (!address) return;

  try {
    walletAddress = address;
    walletStatus.textContent = "Polygon上のNemo2023を確認しています…";

    ownedIds = await checkOwnedNemos(address);
    ownedOnly = false;

    connectWalletButton.hidden = true;
    clearWalletButton.hidden = false;

    if (ownedIds.size > 0) {
      ownedOnlyButton.hidden = false;
      ownedOnlyButton.classList.remove("active");
      ownedOnlyButton.textContent = "✨ 自分のねもだけ";
      walletStatus.textContent =
        `${shortAddress(address)}　✨ Nemo2023を ${ownedIds.size}体 見つけました。`;
    } else {
      ownedOnlyButton.hidden = true;
      walletStatus.textContent =
        `${shortAddress(address)}　このウォレットにはNemo2023が見つかりませんでした。`;
    }

    renderResidents();
    updateCollectionPanel();
  } catch (err) {
    console.warn("ownership check failed", err);
    walletStatus.textContent =
      `保有Nemoを確認できませんでした：${String(err?.message || err || "")}`;
  }
}

function resetWalletView() {
  walletAddress = null;
  ownedIds = new Set();
  ownedOnly = false;

  ownedOnlyButton.hidden = true;
  ownedOnlyButton.classList.remove("active");
  ownedOnlyButton.textContent = "✨ 自分のねもだけ";

  clearWalletButton.hidden = true;
  connectWalletButton.hidden = false;
  connectWalletButton.textContent = "ウォレットをつなぐ";

  renderResidents();
  refreshWalletConnectAvailability();
  updateCollectionPanel();
}

async function connectWallet() {
  try {
    if (window.NemoWalletConnect?.open) {
      connectWalletButton.disabled = true;
      walletStatus.textContent = "ウォレットを選んでください…";
      await window.NemoWalletConnect.open();
      return;
    }

    // Fallback for desktop extension wallets if AppKit failed to load.
    if (window.ethereum) {
      connectWalletButton.disabled = true;
      walletStatus.textContent = "ウォレットに接続しています…";

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });

      const address = accounts && accounts[0];
      if (!address) throw new Error("ウォレットアドレスを取得できませんでした。");

      await applyConnectedWallet(address);
      return;
    }

    walletStatus.textContent =
      "スマホウォレット接続をまだ準備中です。少し待ってからもう一度押してください。";

  } catch (err) {
    console.warn("wallet connect failed", err);
    const message = String(err?.message || err || "");

    if (
      message.toLowerCase().includes("user rejected") ||
      message.toLowerCase().includes("rejected") ||
      message.includes("4001")
    ) {
      walletStatus.textContent = "ウォレット接続がキャンセルされました。";
    } else {
      walletStatus.textContent = `接続できませんでした：${message}`;
    }
  } finally {
    refreshWalletConnectAvailability();
  }
}


openCollectionButton.addEventListener(
  "click",
  openCollection
);

closeCollectionDialog.addEventListener(
  "click",
  () => collectionDialog.close()
);

collectionDialog.addEventListener(
  "click",
  event => {
    if (event.target === collectionDialog) {
      collectionDialog.close();
    }
  }
);

document
  .getElementById("closeDialog")
  .addEventListener(
    "click",
    () => dialog.close()
  );

dialog.addEventListener(
  "click",
  e => {
    if (e.target===dialog) {
      dialog.close();
    }
  }
);

searchInput.addEventListener(
  "input",
  renderResidents
);

placeFilter.addEventListener(
  "change",
  renderResidents
);

connectWalletButton.addEventListener(
  "click",
  connectWallet
);

ownedOnlyButton.addEventListener(
  "click",
  () => {
    ownedOnly = !ownedOnly;

    ownedOnlyButton.classList.toggle(
      "active",
      ownedOnly
    );

    ownedOnlyButton.textContent =
      ownedOnly
        ? "← 村のみんなに戻す"
        : "✨ 自分のねもだけ";

    renderResidents();
  }
);

clearWalletButton.addEventListener(
  "click",
  async () => {
    try {
      if (window.NemoWalletConnect?.disconnect) {
        await window.NemoWalletConnect.disconnect();
      }
    } catch (err) {
      console.warn("wallet disconnect failed", err);
    }
    resetWalletView();
  }
);


window.addEventListener("nemo-wallet-ready", () => {
  walletBridgeReady = true;
  walletBridgeError = null;
  refreshWalletConnectAvailability();
});

window.addEventListener("nemo-wallet-error", event => {
  walletBridgeError = event.detail || "AppKit load error";
  console.warn("AppKit load error", walletBridgeError);
  refreshWalletConnectAvailability();
});

window.addEventListener("nemo-wallet-account", async event => {
  const state = event.detail || {};

  if (state.isConnected && state.address) {
    // Avoid repeating the expensive 179-token ownership check for the same account.
    if (walletAddress?.toLowerCase() === state.address.toLowerCase() && ownedIds.size >= 0) {
      if (connectWalletButton.hidden) return;
    }
    await applyConnectedWallet(state.address);
  } else if (walletAddress) {
    resetWalletView();
  }
});

if (window.ethereum?.on) {
  window.ethereum.on(
    "accountsChanged",
    accounts => {
      if (!walletAddress) return;

      if (!accounts || !accounts.length) {
        resetWalletView();
        return;
      }

      walletAddress = accounts[0];
      ownedIds = new Set();
      ownedOnly = false;

      walletStatus.textContent =
        "ウォレットが変わったので、保有Nemoを再確認してください。";

      connectWalletButton.hidden = false;
      connectWalletButton.textContent =
        "保有Nemoを再確認";

      ownedOnlyButton.hidden = true;
      clearWalletButton.hidden = false;

      renderResidents();
      updateCollectionPanel();
    }
  );
}

async function loadNftData() {
  renderResidents();

  try {
    const response =
      await fetch(
        `nfts.json?v=${Date.now()}`,
        {cache:"no-store"}
      );

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}`
      );
    }

    const payload =
      await response.json();

    const items =
      Array.isArray(payload)
        ? payload
        : (payload.items || []);

    nftItems = items;

    nftMap =
      new Map(
        items
          .filter(x =>
            Number.isInteger(
              Number(x.number)
            )
          )
          .map(x => [
            Number(x.number),
            x
          ])
      );

    if (!nftMap.size) {
      throw new Error(
        "NFT data is empty"
      );
    }

    syncStatus.textContent =
      `Nemo2023画像 ${nftMap.size}体を読み込みました。`;

    syncStatus.className =
      "sync-status ready";

    nftDataReady = true;
    refreshWalletConnectAvailability();

    renderResidents();
    updateCollectionPanel();

  } catch (err) {
    syncStatus.textContent =
      "NFT画像の同期待ちです。村の暮らしはそのまま遊べます。";

    syncStatus.className =
      "sync-status fallback";

    nftDataReady = false;
    walletStatus.textContent =
      "NFT情報の読み込み後にウォレット連携できます。";
    refreshWalletConnectAvailability();
    updateCollectionPanel();

    console.warn(
      "nfts.json could not be loaded",
      err
    );
  }
}

loadNftData();
