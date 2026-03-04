/* ══════════════════════════════════════════════
   BrajRide — app.js
   Mathura Village Transport Booking System
   Team: Anurag Raj Pandey · Astha Parua · Ayush Upadhyay
══════════════════════════════════════════════ */

'use strict';

/* ─── DATA ───────────────────────────────────────────────── */

const CITIES = [
  { name: 'Mathura',    emoji: '🏙️', dist: 'Hub city' },
  { name: 'Vrindavan',  emoji: '🕌',  dist: '12 km from Mathura' },
  { name: 'Govardhan',  emoji: '⛰️',  dist: '26 km from Mathura' },
  { name: 'Barsana',    emoji: '🌸',  dist: '42 km from Mathura' },
  { name: 'Nandgaon',   emoji: '🛕',  dist: '47 km from Mathura' },
  { name: 'Radha Kund', emoji: '🪷',  dist: '26 km from Mathura' },
  { name: 'Kosi Kalan', emoji: '🏘️', dist: '38 km from Mathura' },
  { name: 'Chhata',     emoji: '🌾',  dist: '32 km from Mathura' },
  { name: 'Mant',       emoji: '🌿',  dist: '22 km from Mathura' },
  { name: 'Farah',      emoji: '🌻',  dist: '18 km from Mathura' },
  { name: 'Baldeo',     emoji: '🐄',  dist: '28 km from Mathura' },
  { name: 'Mahaban',    emoji: '🌳',  dist: '30 km from Mathura' },
  { name: 'Sonkh',      emoji: '🏡',  dist: '20 km from Mathura' },
  { name: 'Aring',      emoji: '🛤️', dist: '35 km from Mathura' },
  { name: 'Shergarh',   emoji: '🏰',  dist: '40 km from Mathura' },
  { name: 'Agra',       emoji: '🕌',  dist: '58 km from Mathura' },
];

const POPULAR_ROUTES = [
  { from: 'Mathura',    to: 'Vrindavan',  price: 20,  dur: '25 min',  icon: '🛺' },
  { from: 'Mathura',    to: 'Govardhan',  price: 35,  dur: '45 min',  icon: '🚌' },
  { from: 'Mathura',    to: 'Barsana',    price: 55,  dur: '1h 10m',  icon: '🚌' },
  { from: 'Mathura',    to: 'Farah',      price: 25,  dur: '30 min',  icon: '🛺' },
  { from: 'Mathura',    to: 'Baldeo',     price: 30,  dur: '40 min',  icon: '🚐' },
  { from: 'Mathura',    to: 'Agra',       price: 85,  dur: '1h 30m',  icon: '🚌' },
  { from: 'Vrindavan',  to: 'Barsana',    price: 45,  dur: '50 min',  icon: '🚐' },
  { from: 'Kosi Kalan', to: 'Mathura',    price: 55,  dur: '1h',      icon: '🚌' },
];

const VEHICLES = [
  { id: 'V1', name: 'Mathura Roadways Bus',   type: 'bus',  icon: '🚌', ac: false, govt: true,  dep: '06:00', arr: '07:30', dur: '1h 30m',   fare: 85,  seats: 40, amenities: ['🧳','💡'] },
  { id: 'V2', name: 'Shree Krishna AC Bus',   type: 'bus',  icon: '🚌', ac: true,  govt: false, dep: '07:30', arr: '09:00', dur: '1h 30m',   fare: 120, seats: 36, amenities: ['❄️','🔌','🛏️'] },
  { id: 'V3', name: 'Braj Express Mini Bus',  type: 'mini', icon: '🚐', ac: false, govt: false, dep: '08:00', arr: '09:00', dur: '1h',        fare: 65,  seats: 16, amenities: ['🎵','⚡'] },
  { id: 'V4', name: 'Yamuna Parivahan Bus',   type: 'bus',  icon: '🚌', ac: false, govt: true,  dep: '10:00', arr: '11:30', dur: '1h 30m',   fare: 75,  seats: 44, amenities: ['🧳','🏛️'] },
  { id: 'V5', name: 'Village Jeep / Auto',    type: 'auto', icon: '🛺', ac: false, govt: false, dep: 'Any',   arr: '—',     dur: 'Flexible',  fare: 40,  seats: 8,  amenities: ['⏰','🚪'] },
  { id: 'V6', name: 'Radha Rani Sleeper Bus', type: 'bus',  icon: '🚌', ac: true,  govt: false, dep: '22:00', arr: '05:30', dur: '7h 30m',   fare: 350, seats: 30, amenities: ['🛏️','❄️','🔋'] },
  { id: 'V7', name: 'Braj Bhoomi Shuttle',    type: 'mini', icon: '🚐', ac: false, govt: false, dep: '14:00', arr: '15:10', dur: '1h 10m',   fare: 70,  seats: 14, amenities: ['🎵','💧'] },
  { id: 'V8', name: 'Govardhan Express Bus',  type: 'bus',  icon: '🚌', ac: false, govt: true,  dep: '09:00', arr: '09:45', dur: '45 min',   fare: 35,  seats: 44, amenities: ['🧳'] },
];

/* ─── STATE ──────────────────────────────────────────────── */

const state = {
  from:           '',
  to:             '',
  date:           new Date().toISOString().split('T')[0],
  pass:           1,
  travelType:     'bus',
  pickerTarget:   'from',
  currentResults: [],
  selectedVehicle: null,
  selectedSeats:  [],
  bookedTickets:  JSON.parse(localStorage.getItem('brajride_tickets') || '[]'),
};

/* ─── INIT ───────────────────────────────────────────────── */

window.addEventListener('DOMContentLoaded', () => {
  const dateEl = document.getElementById('dateInput');
  dateEl.value = state.date;
  dateEl.min   = state.date;
  dateEl.addEventListener('change', e => { state.date = e.target.value; });

  document.getElementById('passInput')
    .addEventListener('change', e => { state.pass = parseInt(e.target.value); });

  renderRoutePills();
  renderAllCities();
});

/* ─── SCREEN NAVIGATION ──────────────────────────────────── */

function goScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.screen === name);
  });

  if (name === 'tickets') renderMyTickets();
  window.scrollTo(0, 0);
}

/* ─── HOME SCREEN ────────────────────────────────────────── */

function renderRoutePills() {
  document.getElementById('routesPills').innerHTML = POPULAR_ROUTES.map(r => `
    <button class="route-pill" onclick="quickSearchRoute('${r.from}','${r.to}')">
      <span class="rp-icon">${r.icon}</span>
      <span class="rp-text">${r.from} → ${r.to}</span>
      <span class="rp-price">₹${r.price}</span>
    </button>
  `).join('');
}

function renderAllCities() {
  document.getElementById('allCitiesList').innerHTML = CITIES.map((c, i) => `
    <div
      style="display:flex;align-items:center;gap:14px;padding:13px 18px;
             ${i < CITIES.length - 1 ? 'border-bottom:1px solid var(--border);' : ''}
             cursor:pointer;transition:background 0.12s;border-radius:var(--radius-sm);"
      onclick="quickSearchRoute('Mathura','${c.name}')"
      onmousedown="this.style.background='var(--bg)'"
      onmouseup="this.style.background=''"
      ontouchstart="this.style.background='var(--bg)'"
      ontouchend="this.style.background=''">
      <div style="width:38px;height:38px;background:var(--bg);border-radius:50%;
                  display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">
        ${c.emoji}
      </div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:600;color:var(--text);">${c.name}</div>
        <div style="font-size:12px;color:var(--text-2);margin-top:1px;">${c.dist}</div>
      </div>
      <span style="font-size:12px;color:var(--text-3);">›</span>
    </div>
  `).join('');
}

function quickSearchRoute(from, to) {
  state.from = from;
  state.to   = to;
  updateLocDisplays();
  goScreen('book');
  setTimeout(doSearch, 200);
}

/* ─── BOOK SCREEN ────────────────────────────────────────── */

function selectType(btn, type) {
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.travelType = type;
}

function updateLocDisplays() {
  const fd = document.getElementById('fromDisplay');
  const td = document.getElementById('toDisplay');

  if (state.from) { fd.textContent = state.from; fd.classList.remove('placeholder'); }
  else            { fd.textContent = 'Select village or city'; fd.classList.add('placeholder'); }

  if (state.to)   { td.textContent = state.to;   td.classList.remove('placeholder'); }
  else            { td.textContent = 'Select destination'; td.classList.add('placeholder'); }
}

function swapCities() {
  [state.from, state.to] = [state.to, state.from];
  updateLocDisplays();
}

/* ─── CITY PICKER ────────────────────────────────────────── */

function openCityPicker(target) {
  state.pickerTarget = target;
  document.getElementById('cityPickerTitle').textContent =
    target === 'from' ? '📍 Select Starting Point' : '🏁 Select Destination';
  document.getElementById('citySearchInput').value = '';
  renderCityList(CITIES);
  document.getElementById('cityPickerOverlay').classList.add('open');
}

function renderCityList(cities) {
  document.getElementById('cityList').innerHTML = cities.map(c => `
    <div class="city-item" onclick="selectCity('${c.name}')">
      <div class="city-dot">${c.emoji}</div>
      <div>
        <div class="city-name">${c.name}</div>
        <div class="city-dist">${c.dist}</div>
      </div>
    </div>
  `).join('');
}

function filterCities(q) {
  const filtered = CITIES.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
  renderCityList(filtered);
}

function selectCity(name) {
  if (state.pickerTarget === 'from') state.from = name;
  else                               state.to   = name;
  updateLocDisplays();
  closeCityPicker();
}

function closeCityPicker(e) {
  if (!e || e.target === document.getElementById('cityPickerOverlay'))
    document.getElementById('cityPickerOverlay').classList.remove('open');
}

/* ─── SEARCH ─────────────────────────────────────────────── */

function doSearch() {
  if (!state.from)                  { toast('Please select a starting point', 'red'); return; }
  if (!state.to)                    { toast('Please select a destination',    'red'); return; }
  if (state.from === state.to)      { toast("Origin and destination can't be same", 'red'); return; }

  document.getElementById('loadingScreen').classList.add('show');

  setTimeout(() => {
    document.getElementById('loadingScreen').classList.remove('show');

    const results = VEHICLES.map(v => ({
      ...v,
      bookedSeats: randBookedSeats(v.seats),
    }));

    state.currentResults = results;
    showResults(results);
    goScreen('results');
  }, 900);
}

function randBookedSeats(total) {
  const out = [];
  const n   = Math.floor(Math.random() * total * 0.45);
  while (out.length < n) {
    const s = Math.floor(Math.random() * total) + 1;
    if (!out.includes(s)) out.push(s);
  }
  return out;
}

function showResults(vehicles) {
  document.getElementById('rRoute').textContent = `${state.from} → ${state.to}`;
  const d = new Date(state.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', weekday: 'short' });
  document.getElementById('rMeta').textContent  = `${vehicles.length} rides · ${d} · ${state.pass} Passenger(s)`;
  renderVehicleCards(vehicles);
}

function renderVehicleCards(vehicles) {
  const list = document.getElementById('resultsList');

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
    const avail      = v.seats - v.bookedSeats.length;
    const seatsClass = avail > 10 ? 'seats-ok' : avail > 2 ? 'seats-low' : avail === 0 ? 'seats-no' : 'seats-low';
    const seatsText  = avail > 0 ? `${avail} seats left` : 'Sold out';

    const badges = [
      v.ac       ? `<span class="v-badge badge-ac">❄️ AC</span>`         : '',
      v.govt     ? `<span class="v-badge badge-govt">🏛 Govt</span>`     : `<span class="v-badge badge-pvt">🏢 Private</span>`,
      v.fare >= 300 ? `<span class="v-badge badge-sleeper">🌙 Sleeper</span>` : '',
    ].filter(Boolean).join('');

    return `
    <div class="v-card" style="animation-delay:${i * 0.06}s">
      <div class="v-card-top">
        <div class="v-icon-wrap">${v.icon}</div>
        <div class="v-name-block">
          <div class="v-name">${v.name}</div>
          <div class="v-badges">${badges}</div>
        </div>
        <div class="v-price-block">
          <div class="v-price">₹${v.fare}</div>
          <div class="v-price-lbl">per seat</div>
        </div>
      </div>
      <div class="v-card-mid">
        <div class="v-time-block">
          <div class="v-time">${v.dep}</div>
          <div class="v-city">${state.from}</div>
        </div>
        <div class="v-dur">
          <div class="v-dur-text">${v.dur}</div>
          <div class="v-line">
            <div class="v-line-bar"></div>
            <div class="v-line-dot"></div>
            <div class="v-line-bar"></div>
          </div>
        </div>
        <div class="v-time-block">
          <div class="v-time">${v.arr}</div>
          <div class="v-city">${state.to}</div>
        </div>
      </div>
      <div class="v-card-bot">
        <span class="v-seats ${seatsClass}">${seatsText}</span>
        <div class="v-amenities">
          ${v.amenities.map(a => `<span class="v-amen" title="${a}">${a}</span>`).join('')}
        </div>
        <button class="book-now-btn" onclick="openBookModal('${v.id}')" ${avail === 0 ? 'disabled' : ''}>
          ${avail > 0 ? 'Book' : 'Full'}
        </button>
      </div>
    </div>`;
  }).join('');
}

function applyFilter(btn, type) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  let filtered = [...state.currentResults];
  if      (type === 'bus')  filtered = filtered.filter(v => v.type === 'bus');
  else if (type === 'mini') filtered = filtered.filter(v => v.type === 'mini');
  else if (type === 'auto') filtered = filtered.filter(v => v.type === 'auto');
  else if (type === 'low')  filtered = [...filtered].sort((a, b) => a.fare - b.fare);

  renderVehicleCards(filtered);
}

/* ─── BOOKING MODAL ──────────────────────────────────────── */

function openBookModal(id) {
  const v      = VEHICLES.find(x => x.id === id);
  const vState = state.currentResults.find(x => x.id === id) || v;

  state.selectedVehicle = { ...v, bookedSeats: vState.bookedSeats || [] };
  state.selectedSeats   = [];

  document.getElementById('modalTitle').textContent       = '💺 Choose Seats';
  document.getElementById('modalBody').innerHTML          = buildSeatView();
  document.getElementById('bookModal').classList.add('open');
}

function closeBookModal() {
  document.getElementById('bookModal').classList.remove('open');
  state.selectedSeats = [];
}

function buildSeatView() {
  const v     = state.selectedVehicle;
  const total = Math.min(v.seats, 36);
  let seatsHtml = '';

  for (let i = 1; i <= total; i++) {
    const booked   = v.bookedSeats.includes(i);
    const selected = state.selectedSeats.includes(i);
    const cls      = booked ? 'booked' : selected ? 'selected' : '';
    const col      = (i - 1) % 4;

    seatsHtml += `<div class="seat-el ${cls}" onclick="toggleSeat(${i})">${i}</div>`;
    if (col === 1 && i < total) seatsHtml += `<div class="seat-aisle"></div>`;
  }

  return `
    <div class="seat-legend">
      <div class="legend-item"><div class="l-seat l-avail"></div> Available</div>
      <div class="legend-item"><div class="l-seat l-sel"></div>   Selected</div>
      <div class="legend-item"><div class="l-seat l-book"></div>  Booked</div>
    </div>

    <div class="bus-shell">
      <div class="bus-driver-row">
        <span>DRIVER</span>
        <span style="font-size:22px;">🎯</span>
      </div>
      <div class="seat-layout" id="seatGrid">${seatsHtml}</div>
    </div>

    <div id="seatSummary"
         style="background:var(--bg);border-radius:var(--radius-md);padding:14px 16px;
                margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:11px;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.5px;">Selected</div>
        <div style="font-size:15px;font-weight:700;color:var(--text);" id="selSeatsDisp">None</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:11px;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:.5px;">Total</div>
        <div style="font-size:20px;font-weight:700;color:var(--accent);" id="totalFareDisp">₹0</div>
      </div>
    </div>

    <button class="search-main-btn" id="proceedToFormBtn"
            onclick="showPassengerForm()" disabled style="opacity:0.4;">
      Continue →
    </button>

    <div class="pass-form" id="passengerFormSection">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;cursor:pointer;"
           onclick="backToSeats()">
        <span style="font-size:18px;color:var(--accent);">←</span>
        <span style="font-size:14px;font-weight:600;color:var(--accent);">Back to seats</span>
      </div>

      <div class="form-section-label">Passenger Details</div>
      <div class="input-row">
        <div class="f-input-wrap">
          <div class="f-label">Full Name</div>
          <input type="text" id="fName" placeholder="Enter name">
        </div>
        <div class="f-input-wrap">
          <div class="f-label">Age</div>
          <input type="number" id="fAge" placeholder="Age" min="1" max="120">
        </div>
      </div>
      <div class="input-row">
        <div class="f-input-wrap">
          <div class="f-label">Gender</div>
          <select id="fGender">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div class="f-input-wrap">
          <div class="f-label">Mobile No.</div>
          <input type="tel" id="fPhone" placeholder="10 digits" maxlength="10">
        </div>
      </div>
      <div class="input-full">
        <div class="f-input-wrap">
          <div class="f-label">ID Proof</div>
          <select id="fId">
            <option value="">Select ID Proof</option>
            <option>Aadhaar Card</option>
            <option>Voter ID</option>
            <option>Ration Card</option>
            <option>Driving License</option>
            <option>PAN Card</option>
          </select>
        </div>
      </div>

      <div class="form-section-label">Payment Method</div>
      <div class="pay-grid" id="payGrid">
        <div class="pay-option selected" onclick="selectPay(this,'cash')">
          <span class="pay-icon">💵</span><span class="pay-name">Cash on Bus</span>
        </div>
        <div class="pay-option" onclick="selectPay(this,'upi')">
          <span class="pay-icon">📱</span><span class="pay-name">UPI / QR</span>
        </div>
        <div class="pay-option" onclick="selectPay(this,'card')">
          <span class="pay-icon">💳</span><span class="pay-name">Card</span>
        </div>
        <div class="pay-option" onclick="selectPay(this,'bank')">
          <span class="pay-icon">🏦</span><span class="pay-name">Net Banking</span>
        </div>
      </div>

      <div id="bookingSumStrip" class="summary-strip"></div>
      <button class="search-main-btn" onclick="confirmBooking()">✅ Confirm Booking</button>
    </div>

    <div id="ticketConfirmSection" class="ticket-view"></div>
  `;
}

/* ─── SEAT SELECTION ─────────────────────────────────────── */

function toggleSeat(num) {
  const v   = state.selectedVehicle;
  const max = state.pass;

  if (v.bookedSeats.includes(num)) return;

  if (state.selectedSeats.includes(num)) {
    state.selectedSeats = state.selectedSeats.filter(s => s !== num);
  } else {
    if (state.selectedSeats.length >= max) {
      toast(`Max ${max} seat(s) for ${max} passenger(s)`, 'red');
      return;
    }
    state.selectedSeats.push(num);
  }

  refreshSeatGrid();
  refreshSeatSummary();
}

function refreshSeatGrid() {
  const v     = state.selectedVehicle;
  const total = Math.min(v.seats, 36);
  let html    = '';

  for (let i = 1; i <= total; i++) {
    const booked   = v.bookedSeats.includes(i);
    const selected = state.selectedSeats.includes(i);
    const cls      = booked ? 'booked' : selected ? 'selected' : '';
    const col      = (i - 1) % 4;

    html += `<div class="seat-el ${cls}" onclick="toggleSeat(${i})">${i}</div>`;
    if (col === 1 && i < total) html += `<div class="seat-aisle"></div>`;
  }

  const grid = document.getElementById('seatGrid');
  if (grid) grid.innerHTML = html;
}

function refreshSeatSummary() {
  const v     = state.selectedVehicle;
  const total = state.selectedSeats.length * v.fare;

  const sd  = document.getElementById('selSeatsDisp');
  const tf  = document.getElementById('totalFareDisp');
  const btn = document.getElementById('proceedToFormBtn');

  if (sd)  sd.textContent  = state.selectedSeats.length
    ? state.selectedSeats.sort((a, b) => a - b).join(', ')
    : 'None';

  if (tf)  tf.textContent  = `₹${total}`;

  if (btn) {
    btn.disabled    = state.selectedSeats.length === 0;
    btn.style.opacity = state.selectedSeats.length ? '1' : '0.4';
  }
}

/* ─── PASSENGER FORM ─────────────────────────────────────── */

function showPassengerForm() {
  const section = document.getElementById('passengerFormSection');
  if (!section) return;

  section.classList.add('visible');

  const v    = state.selectedVehicle;
  const fare = state.selectedSeats.length * v.fare;
  const strip = document.getElementById('bookingSumStrip');

  if (strip) strip.innerHTML = `
    <div class="sum-item">
      <div class="sum-label">Route</div>
      <div class="sum-val">${state.from} → ${state.to}</div>
    </div>
    <div class="sum-item">
      <div class="sum-label">Date</div>
      <div class="sum-val">${fmtDate(state.date)}</div>
    </div>
    <div class="sum-item">
      <div class="sum-label">Seats</div>
      <div class="sum-val">${state.selectedSeats.sort((a, b) => a - b).join(', ')}</div>
    </div>
    <div class="sum-item">
      <div class="sum-label">Total Fare</div>
      <div class="sum-val accent">₹${fare}</div>
    </div>
  `;

  section.scrollIntoView({ behavior: 'smooth' });
}

function backToSeats() {
  const s = document.getElementById('passengerFormSection');
  if (s) s.classList.remove('visible');
}

function selectPay(el) {
  document.querySelectorAll('.pay-option').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

/* ─── CONFIRM BOOKING ────────────────────────────────────── */

function confirmBooking() {
  const name   = document.getElementById('fName')?.value.trim();
  const age    = document.getElementById('fAge')?.value.trim();
  const gender = document.getElementById('fGender')?.value;
  const phone  = document.getElementById('fPhone')?.value.trim();

  if (!name)                              { toast('Enter passenger name',         'red'); return; }
  if (!age || age < 1)                   { toast('Enter valid age',               'red'); return; }
  if (!gender)                           { toast('Select gender',                 'red'); return; }
  if (!phone || phone.length !== 10)     { toast('Enter valid 10-digit phone',    'red'); return; }

  const payEl   = document.querySelector('.pay-option.selected');
  const payment = payEl?.textContent.trim() || 'Cash';
  const v       = state.selectedVehicle;
  const fare    = state.selectedSeats.length * v.fare;
  const id      = 'BR' + Date.now().toString().slice(-8);

  const ticket = {
    id,
    vehicleId:   v.id,
    vehicleName: v.name,
    vehicleIcon: v.icon,
    from:        state.from,
    to:          state.to,
    date:        state.date,
    dep:         v.dep,
    arr:         v.arr,
    seats:       [...state.selectedSeats].sort((a, b) => a - b),
    name, age, gender, phone, payment, fare,
    status:   'confirmed',
    bookedOn: new Date().toISOString(),
  };

  state.bookedTickets.unshift(ticket);
  localStorage.setItem('brajride_tickets', JSON.stringify(state.bookedTickets));

  showTicketConfirm(ticket);
  toast('🎉 Ticket booked!', 'green');
}

/* ─── TICKET CONFIRMATION ────────────────────────────────── */

function showTicketConfirm(t) {
  const section     = document.getElementById('ticketConfirmSection');
  const passSection = document.getElementById('passengerFormSection');

  if (passSection) passSection.classList.remove('visible');

  const barWidths = [2,3,1,3,2,4,1,2,3,1,4,2,1,3,2,3,1,4,2,1,3,2,4,1,2,3,1,2];
  const bars      = Array.from({ length: 28 }, (_, i) =>
    `<span style="width:${barWidths[i]}px;"></span>`
  ).join('');

  section.innerHTML = `
    <div class="ticket-success-icon">✅</div>
    <div class="ticket-success-title">Booking Confirmed!</div>
    <div class="ticket-success-sub">Show this e-ticket to the conductor</div>

    <div class="e-ticket">
      <div class="et-header">
        <div class="et-id">TICKET · ${t.id}</div>
        <div class="et-route">${t.from} → ${t.to}</div>
        <div class="et-date">${fmtDate(t.date)} · Dep: ${t.dep}</div>
      </div>
      <div class="ticket-notch">
        <div class="notch-circle" style="margin-left:-10px;"></div>
        <div class="notch-line"></div>
        <div class="notch-circle" style="margin-right:-10px;"></div>
      </div>
      <div class="et-body">
        <div class="et-grid">
          <div class="et-field">
            <div class="etf-label">Passenger</div>
            <div class="etf-val">${t.name}</div>
          </div>
          <div class="et-field">
            <div class="etf-label">Seats</div>
            <div class="etf-val">${t.seats.join(', ')}</div>
          </div>
          <div class="et-field">
            <div class="etf-label">Fare</div>
            <div class="etf-val orange">₹${t.fare}</div>
          </div>
          <div class="et-field">
            <div class="etf-label">Vehicle</div>
            <div class="etf-val" style="font-size:12px;">${t.vehicleIcon} ${t.vehicleName}</div>
          </div>
          <div class="et-field">
            <div class="etf-label">Payment</div>
            <div class="etf-val" style="font-size:12px;">${t.payment}</div>
          </div>
          <div class="et-field">
            <div class="etf-label">Status</div>
            <div class="etf-val green">✅ Confirmed</div>
          </div>
        </div>
        <div class="barcode-wrap">
          <div class="barcode-bars">${bars}</div>
          <div class="barcode-num">${t.id}</div>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px;">
      <button class="search-main-btn"
              style="background:var(--bg);color:var(--text);box-shadow:none;font-size:15px;"
              onclick="window.print()">
        🖨 Print
      </button>
      <button class="search-main-btn" onclick="closeAndGoTickets()" style="font-size:15px;">
        My Tickets →
      </button>
    </div>
  `;

  section.classList.add('visible');
  section.scrollIntoView({ behavior: 'smooth' });
}

function closeAndGoTickets() {
  closeBookModal();
  goScreen('tickets');
}

/* ─── MY TICKETS ─────────────────────────────────────────── */

function renderMyTickets() {
  const list    = document.getElementById('myTicketsList');
  const tickets = state.bookedTickets;

  if (!tickets.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="es-icon">🎫</div>
        <div class="es-title">No tickets yet</div>
        <div class="es-sub">Book your first ride from the Book tab</div>
      </div>`;
    return;
  }

  list.innerHTML = tickets.map(t => `
    <div class="my-ticket-card">
      <div class="my-tc-header">
        <span class="my-tc-id">${t.vehicleIcon} ${t.id}</span>
        <span class="status-tag ${t.status === 'confirmed' ? 'st-ok' : 'st-cancel'}">
          ${t.status === 'confirmed' ? '✅ Confirmed' : '❌ Cancelled'}
        </span>
      </div>
      <div class="my-tc-body">
        <div class="my-tc-route">${t.from} → ${t.to}</div>
        <div class="my-tc-meta">
          📅 ${fmtDate(t.date)}<br>
          ⏰ Departure: ${t.dep} · 💺 Seats: ${t.seats.join(', ')}<br>
          👤 ${t.name} · 🚌 ${t.vehicleName}
        </div>
      </div>
      <div class="my-tc-footer">
        <span class="my-tc-fare">₹${t.fare}</span>
        ${t.status === 'confirmed'
          ? `<button class="cancel-tag-btn" onclick="cancelTicket('${t.id}')">Cancel</button>`
          : `<span style="font-size:12px;color:var(--text-3);">Cancelled</span>`
        }
      </div>
    </div>
  `).join('');
}

function cancelTicket(id) {
  if (!confirm('Cancel this ticket? Refund in 3–5 days.')) return;
  const t = state.bookedTickets.find(x => x.id === id);
  if (t) t.status = 'cancelled';
  localStorage.setItem('brajride_tickets', JSON.stringify(state.bookedTickets));
  renderMyTickets();
  toast('Ticket cancelled. Refund processing.');
}

/* ─── UTILITIES ──────────────────────────────────────────── */

function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', weekday: 'short' });
}

function toast(msg, type = '') {
  const wrap = document.getElementById('toastWrap');
  const el   = document.createElement('div');
  el.className  = `toast-item ${type}`;
  el.textContent = msg;
  wrap.appendChild(el);

  setTimeout(() => {
    el.style.opacity   = '0';
    el.style.transform = 'scale(0.8)';
    el.style.transition = 'all 0.3s';
    setTimeout(() => el.remove(), 300);
  }, 2800);
}

/* ─── KEYBOARD SHORTCUT ──────────────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBookModal();
});
