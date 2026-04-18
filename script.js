// ── DATA ──────────────────────────────────────────────────

const CITIES = [
  { name: "Mathura",    emoji: "🏙️", dist: "Hub city" },
  { name: "Vrindavan",  emoji: "🛕",  dist: "12 km from Mathura" },
  { name: "Govardhan",  emoji: "⛰️",  dist: "26 km from Mathura" },
  { name: "Barsana",    emoji: "🌸",  dist: "42 km from Mathura" },
  { name: "Nandgaon",   emoji: "🛕",  dist: "47 km from Mathura" },
  { name: "Radha Kund", emoji: "🪷",  dist: "26 km from Mathura" },
  { name: "Kosi Kalan", emoji: "🏘️",  dist: "38 km from Mathura" },
  { name: "Chhata",     emoji: "🌾",  dist: "32 km from Mathura" },
  { name: "Mant",       emoji: "🌿",  dist: "22 km from Mathura" },
  { name: "Farah",      emoji: "🌻",  dist: "18 km from Mathura" },
  { name: "Baldeo",     emoji: "🐄",  dist: "28 km from Mathura" },
  { name: "Mahaban",    emoji: "🌳",  dist: "30 km from Mathura" },
  { name: "Sonkh",      emoji: "🏡",  dist: "20 km from Mathura" },
  { name: "Aring",      emoji: "🛤️",  dist: "35 km from Mathura" },
  { name: "Shergarh",   emoji: "🏰",  dist: "40 km from Mathura" },
  { name: "Agra",       emoji: "🕌",  dist: "58 km from Mathura" },
];

const ROUTES = [
  { from: "Mathura",    to: "Vrindavan", price: 20, dur: "25 min",  icon: "🛺" },
  { from: "Mathura",    to: "Govardhan", price: 35, dur: "45 min",  icon: "🚌" },
  { from: "Mathura",    to: "Barsana",   price: 55, dur: "1h 10m",  icon: "🚌" },
  { from: "Mathura",    to: "Farah",     price: 25, dur: "30 min",  icon: "🛺" },
  { from: "Mathura",    to: "Baldeo",    price: 30, dur: "40 min",  icon: "🚐" },
  { from: "Mathura",    to: "Agra",      price: 85, dur: "1h 30m",  icon: "🚌" },
  { from: "Vrindavan",  to: "Barsana",   price: 45, dur: "50 min",  icon: "🚐" },
  { from: "Kosi Kalan", to: "Mathura",   price: 55, dur: "1h",      icon: "🚌" },
];

const VEHICLES = [
  { id: "V1", name: "Mathura Roadways Bus",   type: "bus",  icon: "🚌", ac: false, govt: true,  dep: "06:00", arr: "07:30", dur: "1h 30m",   fare: 85,  seats: 40, amenities: ["🧳", "💡"] },
  { id: "V2", name: "Shree Krishna AC Bus",   type: "bus",  icon: "🚌", ac: true,  govt: false, dep: "07:30", arr: "09:00", dur: "1h 30m",   fare: 120, seats: 36, amenities: ["❄️", "🔌", "🛏️"] },
  { id: "V3", name: "Braj Express Mini Bus",  type: "mini", icon: "🚐", ac: false, govt: false, dep: "08:00", arr: "09:00", dur: "1h",       fare: 65,  seats: 16, amenities: ["🎵", "⚡"] },
  { id: "V4", name: "Yamuna Parivahan Bus",   type: "bus",  icon: "🚌", ac: false, govt: true,  dep: "10:00", arr: "11:30", dur: "1h 30m",   fare: 75,  seats: 44, amenities: ["🧳", "🏛️"] },
  { id: "V5", name: "Village Jeep / Auto",    type: "auto", icon: "🛺", ac: false, govt: false, dep: "Any",   arr: "—",     dur: "Flexible", fare: 40,  seats: 8,  amenities: ["⏰", "🚪"] },
  { id: "V6", name: "Radha Rani Sleeper Bus", type: "bus",  icon: "🚌", ac: true,  govt: false, dep: "22:00", arr: "05:30", dur: "7h 30m",   fare: 350, seats: 30, amenities: ["🛏️", "❄️", "🔋"] },
  { id: "V7", name: "Braj Bhoomi Shuttle",    type: "mini", icon: "🚐", ac: false, govt: false, dep: "14:00", arr: "15:10", dur: "1h 10m",   fare: 70,  seats: 14, amenities: ["🎵", "💧"] },
  { id: "V8", name: "Govardhan Express Bus",  type: "bus",  icon: "🚌", ac: false, govt: true,  dep: "09:00", arr: "09:45", dur: "45 min",   fare: 35,  seats: 44, amenities: ["🧳"] },
];

// ── APPLICATION STATE ──────────────────────────────────────

let S = {
  from: "",
  to: "",
  date: new Date().toISOString().split("T")[0],
  pass: 1,
  travelType: "bus",
  pickerTarget: "from",
  results: [],
  selectedVehicle: null,
  selectedSeats: [],
  tickets: JSON.parse(localStorage.getItem("brajride_v2") || "[]"),
};

// ── INIT ──────────────────────────────────────────────────

window.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("dateInput");
  dateInput.value = S.date;
  dateInput.min   = S.date;
  dateInput.addEventListener("change", e => S.date = e.target.value);

  document.getElementById("passInput").addEventListener("change", e => S.pass = parseInt(e.target.value));

  renderRoutes();
  renderCitiesGrid();
});

// ── NAVIGATION ────────────────────────────────────────────

const TITLES = {
  home:    { title: "Home",            sub: "Welcome back, यात्री!" },
  book:    { title: "Book a Ride",     sub: "Find the best transport for your journey" },
  results: { title: "Search Results",  sub: "Choose from available vehicles" },
  tickets: { title: "My Tickets",      sub: "Your booking history" },
  help:    { title: "Help & Support",  sub: "We're here to assist you" },
};

function goScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + name).classList.add("active");

  document.querySelectorAll(".nav-item, [data-screen]").forEach(n => {
    n.classList.toggle("active", n.dataset.screen === name);
  });

  const t = TITLES[name] || { title: name, sub: "" };
  document.getElementById("topbarTitle").textContent = t.title;
  document.getElementById("topbarSub").textContent   = t.sub;

  if (name === "tickets") renderMyTickets();
  if (name === "book" || name === "home") renderRoutes();

  window.scrollTo(0, 0);
  closeSidebar();
}

// ── SIDEBAR ───────────────────────────────────────────────

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("sidebarOverlay").classList.toggle("open");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarOverlay").classList.remove("open");
}

// ── HOME — RENDER GRIDS ───────────────────────────────────

function renderRoutes() {
  const html = ROUTES.map(r => `
    <div class="route-card" onclick="quickSearch('${r.from}', '${r.to}')">
      <span class="rc-icon">${r.icon}</span>
      <div class="rc-info">
        <div class="rc-name">${r.from} → ${r.to}</div>
        <div class="rc-meta">${r.dur}</div>
      </div>
      <div class="rc-price">₹${r.price}</div>
    </div>`).join("");

  ["routesGrid", "bookRoutesGrid"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
}

function renderCitiesGrid() {
  const html = CITIES.map(c => `
    <div class="city-card" onclick="quickSearch('Mathura', '${c.name}')">
      <span class="cc-icon">${c.emoji}</span>
      <div>
        <div class="cc-name">${c.name}</div>
        <div class="cc-dist">${c.dist}</div>
      </div>
    </div>`).join("");

  ["citiesGrid", "bookCitiesGrid"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
}

function quickSearch(from, to) {
  S.from = from;
  S.to   = to;
  updateLocDisplays();
  goScreen("book");
  setTimeout(doSearch, 300);
}

// ── BOOK SCREEN ───────────────────────────────────────────

function selType(btn, type) {
  document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  S.travelType = type;
}

function updateLocDisplays() {
  const fd = document.getElementById("fromDisplay");
  const td = document.getElementById("toDisplay");

  fd.textContent = S.from || "Select starting point";
  fd.classList.toggle("ph", !S.from);

  td.textContent = S.to || "Select destination";
  td.classList.toggle("ph", !S.to);
}

function swapCities() {
  [S.from, S.to] = [S.to, S.from];
  updateLocDisplays();
}

// ── CITY PICKER ───────────────────────────────────────────

function openPicker(target) {
  S.pickerTarget = target;
  document.getElementById("pickerTitle").textContent =
    target === "from" ? "📍 Select Starting Point" : "🏁 Select Destination";
  document.getElementById("citySearch").value = "";
  renderPickerList(CITIES);
  document.getElementById("cityOverlay").classList.add("open");
}

function renderPickerList(cities) {
  document.getElementById("cityList").innerHTML = cities.map(c => `
    <div class="city-item" onclick="selectCity('${c.name}')">
      <div class="ci-icon">${c.emoji}</div>
      <div>
        <div class="ci-name">${c.name}</div>
        <div class="ci-dist">${c.dist}</div>
      </div>
    </div>`).join("");
}

function filterCities(q) {
  renderPickerList(CITIES.filter(c => c.name.toLowerCase().includes(q.toLowerCase())));
}

function selectCity(name) {
  if (S.pickerTarget === "from") S.from = name;
  else S.to = name;
  updateLocDisplays();
  closePicker();
}

function closePicker(e) {
  if (!e || e.target === document.getElementById("cityOverlay")) {
    document.getElementById("cityOverlay").classList.remove("open");
  }
}

// ── SEARCH ────────────────────────────────────────────────

function doSearch() {
  if (!S.from) { toast("Please select a starting point", "red"); return; }
  if (!S.to)   { toast("Please select a destination",    "red"); return; }
  if (S.from === S.to) { toast("Origin and destination cannot be same", "red"); return; }

  document.getElementById("loadingOverlay").classList.add("show");

  setTimeout(() => {
    document.getElementById("loadingOverlay").classList.remove("show");
    S.results = VEHICLES.map(v => ({ ...v, bookedSeats: randBooked(v.seats) }));
    showResults(S.results);
    goScreen("results");
  }, 900);
}

function randBooked(total) {
  const out = [];
  const n   = Math.floor(Math.random() * total * 0.45);
  while (out.length < n) {
    const s = Math.floor(Math.random() * total) + 1;
    if (!out.includes(s)) out.push(s);
  }
  return out;
}

function showResults(vehicles) {
  document.getElementById("rRoute").textContent = `${S.from} → ${S.to}`;
  const d = new Date(S.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", weekday: "short" });
  document.getElementById("rMeta").textContent  = `${vehicles.length} rides · ${d} · ${S.pass} Passenger(s)`;
  renderVCards(vehicles);
}

function renderVCards(vehicles) {
  const list = document.getElementById("resultsList");

  if (!vehicles.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="es-icon">😔</div>
        <div class="es-title">No rides found</div>
        <div class="es-sub">Try a different date or nearby location</div>
      </div>`;
    return;
  }

  list.innerHTML = vehicles.map((v, i) => {
    const avail = v.seats - v.bookedSeats.length;
    const sc    = avail > 10 ? "seats-ok" : avail > 2 ? "seats-low" : avail === 0 ? "seats-no" : "seats-low";
    const st    = avail > 0 ? `${avail} seats left` : "Sold out";

    const badges = [
      v.ac        ? `<span class="v-badge badge-ac">❄️ AC</span>`         : "",
      v.govt      ? `<span class="v-badge badge-govt">🏛 Govt</span>`     : `<span class="v-badge badge-pvt">🏢 Private</span>`,
      v.fare >= 300 ? `<span class="v-badge badge-sleep">🌙 Sleeper</span>` : "",
    ].filter(Boolean).join("");

    return `
    <div class="v-card">
      <div class="v-top">
        <div class="v-icon">${v.icon}</div>
        <div class="v-name-block">
          <div class="v-name">${v.name}</div>
          <div class="v-badges">${badges}</div>
        </div>
        <div class="v-price-block">
          <div class="v-price">₹${v.fare}</div>
          <div class="v-price-lbl">per seat</div>
        </div>
      </div>
      <div class="v-mid">
        <div style="text-align:center">
          <div class="v-time">${v.dep}</div>
          <div class="v-city">${S.from}</div>
        </div>
        <div class="v-dur">
          <div class="v-dur-text">${v.dur}</div>
          <div class="v-line">
            <div class="v-line-bar"></div>
            <div class="v-line-dot"></div>
            <div class="v-line-bar"></div>
          </div>
        </div>
        <div style="text-align:center">
          <div class="v-time">${v.arr}</div>
          <div class="v-city">${S.to}</div>
        </div>
      </div>
      <div class="v-bot">
        <span class="v-seats ${sc}">${st}</span>
        <div class="v-amenities">${v.amenities.map(a => `<span class="v-amen">${a}</span>`).join("")}</div>
        <button class="book-now-btn" onclick="openBookModal('${v.id}')" ${avail === 0 ? "disabled" : ""}>
          ${avail > 0 ? "Book Now" : "Full"}
        </button>
      </div>
    </div>`;
  }).join("");
}

function applyFilter(btn, type) {
  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");

  let filtered = [...S.results];
  if (type === "bus")  filtered = filtered.filter(v => v.type === "bus");
  if (type === "mini") filtered = filtered.filter(v => v.type === "mini");
  if (type === "auto") filtered = filtered.filter(v => v.type === "auto");
  if (type === "low")  filtered = [...filtered].sort((a, b) => a.fare - b.fare);

  renderVCards(filtered);
}

// ── BOOKING MODAL ─────────────────────────────────────────

function openBookModal(id) {
  const v  = VEHICLES.find(x => x.id === id);
  const vs = S.results.find(x => x.id === id) || v;
  S.selectedVehicle = { ...v, bookedSeats: vs.bookedSeats || [] };
  S.selectedSeats   = [];

  document.getElementById("modalTitle").textContent = "💺 Choose Seats";
  document.getElementById("modalBody").innerHTML    = buildSeatView();
  document.getElementById("bookModal").classList.add("open");
}

function closeModal() {
  document.getElementById("bookModal").classList.remove("open");
  S.selectedSeats = [];
}

function buildSeatView() {
  const v     = S.selectedVehicle;
  const total = Math.min(v.seats, 36);
  let seatsHtml = "";

  for (let i = 1; i <= total; i++) {
    const booked = v.bookedSeats.includes(i);
    const sel    = S.selectedSeats.includes(i);
    const cls    = booked ? "booked" : sel ? "selected" : "";
    seatsHtml += `<div class="seat-el ${cls}" onclick="toggleSeat(${i})">${i}</div>`;
    if (((i - 1) % 4) === 1 && i < total) seatsHtml += `<div class="seat-aisle"></div>`;
  }

  return `
    <div class="seat-legend">
      <div class="legend-item"><div class="l-dot l-avail"></div> Available</div>
      <div class="legend-item"><div class="l-dot l-sel"></div> Selected</div>
      <div class="legend-item"><div class="l-dot l-book"></div> Booked</div>
    </div>
    <div class="bus-shell">
      <div class="bus-driver">
        <span>DRIVER</span><span style="font-size:20px">🎯</span>
      </div>
      <div class="seat-grid" id="seatGrid">${seatsHtml}</div>
    </div>
    <div class="seat-summary" id="seatSummary">
      <div>
        <div class="ss-label">Selected Seats</div>
        <div class="ss-val" id="selSeatsDisp">None</div>
      </div>
      <div style="text-align:right">
        <div class="ss-label">Total Fare</div>
        <div class="ss-val accent" id="totalFareDisp">₹0</div>
      </div>
    </div>
    <button class="search-btn" id="proceedBtn" onclick="showPassForm()" disabled style="opacity:0.4">
      Continue to Passenger Details →
    </button>
    <div class="pass-form" id="passFormSection">
      <div style="display:flex;align-items:center;gap:8px;margin:16px 0;cursor:pointer" onclick="backToSeats()">
        <span style="color:var(--accent);font-size:18px">←</span>
        <span style="font-size:13px;font-weight:600;color:var(--accent)">Back to seats</span>
      </div>
      <div class="form-section-lbl">Passenger Details</div>
      <div class="input-grid">
        <div class="f-wrap"><div class="f-lbl">Full Name</div><input type="text" id="fName" placeholder="Enter name"></div>
        <div class="f-wrap"><div class="f-lbl">Age</div><input type="number" id="fAge" placeholder="Age" min="1" max="120"></div>
      </div>
      <div class="input-grid">
        <div class="f-wrap"><div class="f-lbl">Gender</div><select id="fGender"><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
        <div class="f-wrap"><div class="f-lbl">Mobile No.</div><input type="tel" id="fPhone" placeholder="10 digits" maxlength="10"></div>
      </div>
      <div class="input-full">
        <div class="f-wrap"><div class="f-lbl">ID Proof</div>
          <select id="fId">
            <option value="">Select ID Proof</option>
            <option>Aadhaar Card</option>
            <option>Voter ID</option>
            <option>Driving License</option>
            <option>PAN Card</option>
          </select>
        </div>
      </div>
      <div class="form-section-lbl">Payment Method</div>
      <div class="pay-grid" id="payGrid">
        <div class="pay-opt selected" onclick="selPay(this)"><span class="po-icon">💵</span><span class="po-name">Cash on Bus</span></div>
        <div class="pay-opt" onclick="selPay(this)"><span class="po-icon">📱</span><span class="po-name">UPI / QR</span></div>
        <div class="pay-opt" onclick="selPay(this)"><span class="po-icon">💳</span><span class="po-name">Card</span></div>
        <div class="pay-opt" onclick="selPay(this)"><span class="po-icon">🏦</span><span class="po-name">Net Banking</span></div>
      </div>
      <div class="booking-summary" id="bookSumStrip"></div>
      <button class="search-btn" onclick="confirmBooking()">✅ Confirm Booking</button>
    </div>
    <div class="ticket-view" id="ticketConfirmSection"></div>
  `;
}

function toggleSeat(num) {
  const v   = S.selectedVehicle;
  if (v.bookedSeats.includes(num)) return;

  const max = S.pass;
  if (S.selectedSeats.includes(num)) {
    S.selectedSeats = S.selectedSeats.filter(s => s !== num);
  } else {
    if (S.selectedSeats.length >= max) {
      toast(`Max ${max} seat(s) for ${max} passenger(s)`, "red");
      return;
    }
    S.selectedSeats.push(num);
  }

  refreshGrid();
  refreshSummary();
}

function refreshGrid() {
  const v     = S.selectedVehicle;
  const total = Math.min(v.seats, 36);
  let html    = "";

  for (let i = 1; i <= total; i++) {
    const cls = v.bookedSeats.includes(i) ? "booked" : S.selectedSeats.includes(i) ? "selected" : "";
    html += `<div class="seat-el ${cls}" onclick="toggleSeat(${i})">${i}</div>`;
    if (((i - 1) % 4) === 1 && i < total) html += `<div class="seat-aisle"></div>`;
  }

  const g = document.getElementById("seatGrid");
  if (g) g.innerHTML = html;
}

function refreshSummary() {
  const v     = S.selectedVehicle;
  const total = S.selectedSeats.length * v.fare;
  const sd    = document.getElementById("selSeatsDisp");
  const tf    = document.getElementById("totalFareDisp");
  const btn   = document.getElementById("proceedBtn");

  if (sd) sd.textContent = S.selectedSeats.length
    ? S.selectedSeats.sort((a, b) => a - b).join(", ")
    : "None";
  if (tf) tf.textContent = `₹${total}`;
  if (btn) {
    btn.disabled    = S.selectedSeats.length === 0;
    btn.style.opacity = S.selectedSeats.length ? "1" : "0.4";
  }
}

function showPassForm() {
  const s = document.getElementById("passFormSection");
  if (!s) return;
  s.classList.add("visible");

  const v    = S.selectedVehicle;
  const fare = S.selectedSeats.length * v.fare;
  const strip = document.getElementById("bookSumStrip");

  if (strip) {
    strip.innerHTML = `
      <div class="sum-grid">
        <div class="sum-item"><div class="si-lbl">Route</div><div class="si-val">${S.from} → ${S.to}</div></div>
        <div class="sum-item"><div class="si-lbl">Date</div><div class="si-val">${fmtDate(S.date)}</div></div>
        <div class="sum-item"><div class="si-lbl">Seats</div><div class="si-val">${S.selectedSeats.sort((a, b) => a - b).join(", ")}</div></div>
        <div class="sum-item"><div class="si-lbl">Total Fare</div><div class="si-val accent">₹${fare}</div></div>
      </div>`;
  }

  s.scrollIntoView({ behavior: "smooth" });
}

function backToSeats() {
  const s = document.getElementById("passFormSection");
  if (s) s.classList.remove("visible");
}

function selPay(el) {
  document.querySelectorAll(".pay-opt").forEach(p => p.classList.remove("selected"));
  el.classList.add("selected");
}

function confirmBooking() {
  const name   = document.getElementById("fName")?.value.trim();
  const age    = document.getElementById("fAge")?.value.trim();
  const gender = document.getElementById("fGender")?.value;
  const phone  = document.getElementById("fPhone")?.value.trim();

  if (!name)                       { toast("Enter passenger name", "red"); return; }
  if (!age || age < 1)             { toast("Enter valid age", "red"); return; }
  if (!gender)                     { toast("Select gender", "red"); return; }
  if (!phone || phone.length !== 10) { toast("Enter valid 10-digit phone", "red"); return; }

  const payEl   = document.querySelector(".pay-opt.selected");
  const payment = payEl?.querySelector(".po-name")?.textContent || "Cash";
  const v       = S.selectedVehicle;
  const fare    = S.selectedSeats.length * v.fare;
  const id      = "BR" + Date.now().toString().slice(-8);

  const ticket = {
    id,
    vehicleId:   v.id,
    vehicleName: v.name,
    vehicleIcon: v.icon,
    from:        S.from,
    to:          S.to,
    date:        S.date,
    dep:         v.dep,
    arr:         v.arr,
    seats:       [...S.selectedSeats].sort((a, b) => a - b),
    name, age, gender, phone, payment, fare,
    status:      "confirmed",
    bookedOn:    new Date().toISOString(),
  };

  S.tickets.unshift(ticket);
  localStorage.setItem("brajride_v2", JSON.stringify(S.tickets));

  showTicketConfirm(ticket);
  toast("🎉 Ticket booked successfully!", "green");
}

function showTicketConfirm(t) {
  const s  = document.getElementById("ticketConfirmSection");
  const ps = document.getElementById("passFormSection");
  if (ps) ps.classList.remove("visible");

  const bars = Array.from({ length: 28 }, (_, i) => {
    const w = [2,3,1,3,2,4,1,2,3,1,4,2,1,3,2,3,1,4,2,1,3,2,4,1,2,3,1,2][i];
    return `<span style="width:${w}px"></span>`;
  }).join("");

  s.innerHTML = `
    <div class="t-success-icon">✅</div>
    <div class="t-success-title">Booking Confirmed!</div>
    <div class="t-success-sub">Show this e-ticket to the conductor</div>
    <div class="e-ticket">
      <div class="et-head">
        <div class="et-id">TICKET · ${t.id}</div>
        <div class="et-route">${t.from} → ${t.to}</div>
        <div class="et-date">${fmtDate(t.date)} · Dep: ${t.dep}</div>
      </div>
      <div class="et-notch">
        <div class="et-notch-circle" style="margin-left:-9px"></div>
        <div class="et-notch-line"></div>
        <div class="et-notch-circle" style="margin-right:-9px"></div>
      </div>
      <div class="et-body">
        <div class="et-grid">
          <div><div class="etf-lbl">Passenger</div><div class="etf-val">${t.name}</div></div>
          <div><div class="etf-lbl">Seats</div><div class="etf-val">${t.seats.join(", ")}</div></div>
          <div><div class="etf-lbl">Fare</div><div class="etf-val orange">₹${t.fare}</div></div>
          <div><div class="etf-lbl">Vehicle</div><div class="etf-val" style="font-size:12px">${t.vehicleIcon} ${t.vehicleName}</div></div>
          <div><div class="etf-lbl">Payment</div><div class="etf-val" style="font-size:12px">${t.payment}</div></div>
          <div><div class="etf-lbl">Status</div><div class="etf-val green">✅ Confirmed</div></div>
        </div>
        <div class="barcode-wrap">
          <div class="barcode-bars">${bars}</div>
          <div class="barcode-num">${t.id}</div>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
      <button class="search-btn" style="background:var(--bg);color:var(--text);font-size:14px" onclick="window.print()">🖨 Print</button>
      <button class="search-btn" onclick="closeAndGoTickets()" style="font-size:14px">My Tickets →</button>
    </div>
  `;

  s.classList.add("visible");
  s.scrollIntoView({ behavior: "smooth" });
}

function closeAndGoTickets() {
  closeModal();
  goScreen("tickets");
}

// ── MY TICKETS ────────────────────────────────────────────

function renderMyTickets() {
  const list = document.getElementById("myTicketsList");

  if (!S.tickets.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="es-icon">🎫</div>
        <div class="es-title">No tickets yet</div>
        <div class="es-sub">Book your first ride from the Book tab</div>
      </div>`;
    return;
  }

  list.innerHTML = S.tickets.map(t => `
    <div class="my-ticket">
      <div class="my-tc-head">
        <span class="my-tc-id">${t.vehicleIcon} ${t.id}</span>
        <span class="status-tag ${t.status === "confirmed" ? "st-ok" : "st-cancel"}">
          ${t.status === "confirmed" ? "✅ Confirmed" : "❌ Cancelled"}
        </span>
      </div>
      <div class="my-tc-body">
        <div class="my-tc-route">${t.from} → ${t.to}</div>
        <div class="my-tc-meta">
          📅 ${fmtDate(t.date)}&nbsp;&nbsp;·&nbsp;&nbsp;⏰ ${t.dep}&nbsp;&nbsp;·&nbsp;&nbsp;💺 ${t.seats.join(", ")}<br>
          👤 ${t.name}&nbsp;&nbsp;·&nbsp;&nbsp;🚌 ${t.vehicleName}
        </div>
      </div>
      <div class="my-tc-foot">
        <span class="my-tc-fare">₹${t.fare}</span>
        ${t.status === "confirmed"
          ? `<button class="cancel-btn" onclick="cancelTicket('${t.id}')">Cancel</button>`
          : `<span style="font-size:12px;color:var(--text3)">Cancelled</span>`}
      </div>
    </div>`).join("");
}

function cancelTicket(id) {
  if (!confirm("Cancel this ticket? Refund in 3–5 working days.")) return;
  const t = S.tickets.find(x => x.id === id);
  if (t) t.status = "cancelled";
  localStorage.setItem("brajride_v2", JSON.stringify(S.tickets));
  renderMyTickets();
  toast("Ticket cancelled. Refund processing.");
}

// ── UTILITIES ─────────────────────────────────────────────

function fmtDate(d) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", weekday: "short",
  });
}

function toast(msg, type = "") {
  const wrap = document.getElementById("toastWrap");
  const el   = document.createElement("div");
  el.className   = `toast ${type}`;
  el.textContent = msg;
  wrap.appendChild(el);

  setTimeout(() => {
    el.style.opacity   = "0";
    el.style.transform = "translateX(20px)";
    el.style.transition = "all 0.3s";
    setTimeout(() => el.remove(), 300);
  }, 2800);
}

// Keyboard: close modal on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
