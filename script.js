const restaurantListEl = document.getElementById("restaurantList");
const selectedEl = document.getElementById("selected");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const cuisineSelect = document.getElementById("cuisineSelect");
const distanceSelect = document.getElementById("distance");

const restaurants = [
  { "name": "熊賀炒飯", "type": "晚餐", "distance": 300, "info": "炒飯", "area": "理園" },
  { "name": "愛玉早餐店", "type": "早餐", "distance": 500, "info": "早餐店", "area": "514巷小路進去" },
  { "name": "麵頑者", "type": "午餐", "distance": 500, "info": "拉麵", "area": "514巷" },
  { "name": "芊苡號", "type": "午餐", "distance": 500, "info": "便當", "area": "514巷" },
  { "name": "模飯生", "type": "午餐", "distance": 500, "info": "便當", "area": "514巷" },
  { "name": "玖零年代", "type": "午餐", "distance": 500, "info": "港式快餐", "area": "514巷" },
  { "name": "泰國象", "type": "晚餐", "distance": 500, "info": "泰式料理", "area": "514巷" },
  { "name": "71號咖哩", "type": "午餐", "distance": 500, "info": "日式咖哩", "area": "514巷" },
  { "name": "初胖", "type": "早餐", "distance": 500, "info": "早餐", "area": "514巷" },
  { "name": "冰糖茶店", "type": "午餐", "distance": 500, "info": "飯麵都有", "area": "514巷" },
  { "name": "屏東豆花", "type": "甜點", "distance": 500, "info": "甜點", "area": "514巷" },
  { "name": "饗食之屋冷熱飲專賣店", "type": "甜點", "distance": 500, "info": "飲料吧(?)", "area": "514巷" },
  { "name": "不可不吃鹹水雞", "type": "午餐", "distance": 500, "info": "鹹水雞", "area": "514巷" },
  { "name": "愛這味麻辣臭豆腐", "type": "午餐", "distance": 500, "info": "臭豆腐(?)", "area": "514巷" },
  { "name": "一口入魂雞白湯拉麵", "type": "午餐", "distance": 500, "info": "拉麵", "area": "514巷" },
  { "name": "The pizza", "type": "午餐", "distance": 500, "info": "薄餅", "area": "514巷" },
  { "name": "吃貓咖啡廳", "type": "咖啡廳", "distance": 500, "info": "有貓(廢話", "area": "514巷" },
  { "name": "安東尼義式廚房", "type": "午餐", "distance": 500, "info": "義大利麵", "area": "514巷" },
  { "name": "吉飽早餐", "type": "早餐", "distance": 500, "info": "早餐", "area": "514巷" },
  { "name": "雞加酒", "type": "午餐", "distance": 500, "info": "韓式料理", "area": "514巷" },
  { "name": "元珍食堂", "type": "午餐", "distance": 500, "info": "韓式料理", "area": "514巷" },
  { "name": "哈姆喫茶", "type": "咖啡廳", "distance": 500, "info": "不定時公休請看IG", "area": "514巷" },
  { "name": "晨間廚房", "type": "早餐", "distance": 500, "info": "早餐", "area": "514巷" },
  { "name": "韓聚食", "type": "午餐", "distance": 500, "info": "韓式料理", "area": "514巷" },
  { "name": "果汁霸", "type": "飲料", "distance": 500, "info": "水果果汁(?)", "area": "514巷" },
  { "name": "拾壹號", "type": "晚餐", "distance": 500, "info": "義大利麵", "area": "514巷" },
  { "name": "Mon 茫 bar", "type": "酒吧", "distance": 500, "info": "酒吧", "area": "514巷" },
  { "name": "悅來越饗", "type": "午餐", "distance": 500, "info": "越式河粉", "area": "514巷" },
  { "name": "陶花園輔大豬排", "type": "午餐", "distance": 500, "info": "日式炸豬排", "area": "514巷" },
  { "name": "雪城麻辣燙", "type": "午餐", "distance": 500, "info": "麻辣燙", "area": "514巷" },
  { "name": "方禾食呂", "type": "午餐", "distance": 500, "info": "健康餐 推薦!!", "area": "514巷小路走進去" },
  { "name": "劉家涼麵", "type": "午餐", "distance": 500, "info": "涼麵", "area": "514巷小路走進去" },
  { "name": "三舅媽的店", "type": "午餐", "distance": 500, "info": "中式", "area": "514巷小路走進去" },
  { "name": "Honey bar", "type": "酒吧", "distance": 500, "info": "酒吧", "area": "514巷" },
  { "name": "夯麵坊輔大店", "type": "午餐", "distance": 600, "info": "義大利麵", "area": "建國一路" },
  { "name": "靴子義大利餐館 輔大店", "type": "晚餐", "distance": 600, "info": "義大利麵", "area": "中正路" },
  { "name": "星巴克", "type": "咖啡廳", "distance": 650, "info": "知名咖啡廳", "area": "中正路" },
  { "name": "MY POKE買買波奇 夏威夷生魚飯", "type": "午餐", "distance": 650, "info": "好像只能外帶", "area": "中正路" },
  { "name": "麥當勞", "type": "午餐", "distance": 650, "info": "速食", "area": "中正路" },
  { "name": "清心福全", "type": "飲料", "distance": 650, "info": "手搖飲料", "area": "中正路" },
  { "name": "漢堡王 Burger King", "type": "午餐", "distance": 1900, "info": "速食", "area": "中正路" }
];


// 渲染卡片
function renderRestaurants(list) {
  restaurantListEl.innerHTML = "";
  list.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${r.name}<br>
      <span class="info">${r.info}</span>
      <span class="label">${r.area}</span>
      <span class="label">${r.distance}m</span>
    `;
    li.addEventListener("click", () => {
      const query = encodeURIComponent(r.name + " 輔仁大學");
      const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
      window.open(url, "_blank");
    });
    restaurantListEl.appendChild(li);
  });
}

// 篩選餐廳
const areaSelect = document.getElementById("areaSelect");

function filterRestaurants() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedType = cuisineSelect.value;
  const maxDistance = parseInt(distanceSelect.value);
  const selectedArea = areaSelect.value;

  const types = selectedType ? selectedType.split(",") : [];

  const filtered = restaurants.filter(r => {
    const matchName = r.name.toLowerCase().includes(keyword);
    const matchType = types.length === 0 || types.includes(r.type);
    const matchDistance = maxDistance ? r.distance <= maxDistance : true;
    const matchArea = selectedArea ? r.area === selectedArea : true;

    const excludeDrink = (types.includes("午餐") || types.includes("晚餐")) && r.type === "手搖";

    return matchName && matchType && matchDistance && matchArea && !excludeDrink;
  });

  renderRestaurants(filtered);
}


// 初始顯示
renderRestaurants(restaurants);

// 綁定事件
searchBtn.addEventListener("click", filterRestaurants);
cuisineSelect.addEventListener("change", filterRestaurants);
distanceSelect.addEventListener("change", filterRestaurants);
areaSelect.addEventListener("change", filterRestaurants);


// 隨機選餐廳
randomBtn.addEventListener("click", () => {
  const selectedType = cuisineSelect.value;
  const maxDistance = parseInt(distanceSelect.value);
  const selectedArea = areaSelect.value; // 新增地區條件
  const types = selectedType ? selectedType.split(",") : [];

  const filtered = restaurants.filter(r => {
    const matchType = types.length === 0 || types.includes(r.type);
    const matchDistance = maxDistance ? r.distance <= maxDistance : true;
    const matchArea = selectedArea ? r.area === selectedArea : true;
    const excludeDrink = 
      (types.includes("午餐") || types.includes("早餐") || types.includes("晚餐")) 
      && r.type === "手搖";

    return matchType && matchDistance && matchArea && !excludeDrink;
  });

  if (filtered.length === 0) {
    selectedEl.style.display = "block";
    selectedEl.textContent = "沒有符合條件的餐廳";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  const r = filtered[randomIndex];
  selectedEl.style.display = "block";

  // 加上 Google Maps 連結
  const query = encodeURIComponent(r.name + " 輔仁大學");
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  selectedEl.innerHTML = `
    <strong>${r.name}</strong><br>
    類型：${r.type}<br>
    距離：${r.distance} 公尺<br>
    地區：${r.area}<br>
    ${r.info || ""}<br>
    <a href="${googleUrl}" target="_blank">查看地址</a>
  `;
});

