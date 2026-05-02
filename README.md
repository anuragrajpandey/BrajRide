# 🛺 BrajRide — Braj Village Transport Platform

> Connecting Mathura, Vrindavan, Govardhan, and 13+ nearby villages — one ride at a time.

![Version](https://img.shields.io/badge/version-2.0-orange) ![License](https://img.shields.io/badge/license-MIT-green) ![Stack](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20Vanilla%20JS-blue) ![Email](https://img.shields.io/badge/email-EmailJS-red)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Dynamic Pricing System](#dynamic-pricing-system)
- [Admin Panel](#admin-panel)
- [Email Notifications Setup](#email-notifications-setup)
- [Project Structure](#project-structure)
- [Cities & Routes](#cities--routes)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## Overview

BrajRide is a **single-file web application** that allows travellers to search, compare, and book bus/auto/jeep rides across the Braj region of Uttar Pradesh. It requires no backend, no database, and no installation — just open the HTML file in any browser.

The platform covers **16 cities and villages** including Mathura, Vrindavan, Govardhan, Barsana, Nandgaon, Agra, and more, with fares calculated dynamically based on real geographic distances.

---

## Features

### For Travellers
- 🔍 **Search rides** between any two cities in the Braj region
- 💰 **Fare estimate preview** shown before searching, based on distance
- 🚌 **8 vehicle types** — Govt buses, AC buses, mini buses, sleeper coaches, autos & jeeps
- 💺 **Interactive seat selector** — pick your exact seats with visual bus layout
- 📋 **Passenger form** — name, age, gender, phone, email, ID proof
- 💳 **4 payment options** — Cash, UPI, Card, Net Banking
- 🎫 **E-ticket with barcode** — generated instantly after booking
- 🖨️ **Print ticket** directly from browser
- 📜 **My Tickets** — view all bookings, cancel with refund notice
- ❄️ **Filter results** — by vehicle type, AC, or cheapest first
- 📱 **Fully responsive** — works on mobile, tablet, and desktop

### For Admins
- 🔐 **Secure login** with configurable credentials
- 📊 **Live dashboard** — bookings, revenue, cancellation rate, 7-day chart
- 🎫 **Booking management** — search, filter, cancel any ticket
- ⬇️ **Export to CSV** — download all booking data
- 🔔 **Real-time alerts** — every new booking triggers an in-app notification
- 💰 **Live pricing control** — change rates per km and minimum fares instantly
- 📧 **Email configuration** — set up EmailJS credentials from within the panel
- 🔑 **Password management** — change admin username and password

---

## Getting Started

No installation or server required.

```bash
# Option 1: Just open the file
open brajride_v2.html

# Option 2: Serve locally (recommended for email features)
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080/brajride_v2.html` in your browser.

> **Note:** EmailJS email sending requires the page to be served over HTTP/HTTPS, not opened as a local `file://` URL.

---

## Dynamic Pricing System

BrajRide v2 uses a fully dynamic, distance-based fare engine. There are no hardcoded prices.

### How Fares Are Calculated

```
Fare = max( round(Distance × Rate/km ÷ 5) × 5,  Minimum Fare )
```

Distances are calculated using the **Haversine formula** on real GPS coordinates of each city, multiplied by a **1.25 road factor** to account for non-straight routes.

### Default Rate Cards

| Vehicle Type     | Rate/km | Minimum Fare | Notes                  |
|-----------------|---------|-------------|------------------------|
| Bus (Non-AC)    | ₹1.80   | ₹20         | Govt & private buses   |
| Bus (AC)        | ₹2.80   | ₹40         | AC buses               |
| Mini Bus        | ₹2.20   | ₹25         | Shared vans / mini bus |
| Auto / Jeep     | ₹3.50   | ₹25         | Auto-rickshaw or jeep  |
| Sleeper Bus     | ₹4.50   | ₹200        | Overnight coaches      |

### Sample Calculated Fares

| Route                   | Distance | Bus (Non-AC) | AC Bus | Auto |
|------------------------|----------|-------------|--------|------|
| Mathura → Vrindavan    | ~12 km   | ₹25         | ₹35    | ₹65  |
| Mathura → Govardhan    | ~26 km   | ₹60         | ₹95    | ₹115 |
| Mathura → Barsana      | ~42 km   | ₹95         | ₹120   | ₹185 |
| Mathura → Agra         | ~58 km   | ₹130        | ₹205   | ₹255 |

> Fares are rounded to the nearest ₹5 for clean pricing.

### Changing Rates (Admin)

1. Login to Admin Panel → **💰 Pricing** tab
2. Edit Rate/km or Minimum Fare for any vehicle type
3. Click **Save** — changes take effect immediately for all new searches
4. Click **Reset** to restore factory defaults

---

## Admin Panel

### Logging In

Navigate to **Admin Panel** from the sidebar.

| Field    | Default      |
|----------|-------------|
| Username | `admin`      |
| Password | `admin123`   |

> Change credentials immediately after first login via **Admin → Email Setup → Change Admin Password**.

### Dashboard Tab

- Total bookings, confirmed count, total revenue, active routes
- 7-day revenue bar chart
- Latest 5 bookings table

### Bookings Tab

- Full table of all bookings with passenger details
- Live search across all fields
- Cancel any booking (with confirmation prompt)
- **Export CSV** button — downloads complete booking data as a spreadsheet

### Alerts Tab

- Every booking creates an in-app notification
- Unread count shown as badge on sidebar nav item
- Notifications marked as read automatically when the tab is opened

### Pricing Tab

- Edit per-km rate and minimum fare for each vehicle category
- Live preview: shows calculated fare for Mathura→Vrindavan at current rates
- Reset all rates to defaults with one click

### Email Setup Tab

- Configure EmailJS credentials (Public Key, Service ID, Template IDs)
- Set admin alert email address
- Toggle email notifications on/off
- Send a test email to verify configuration
- Change admin username and password

---

## Email Notifications Setup

BrajRide uses [EmailJS](https://emailjs.com) — a free service that sends emails directly from the browser without any backend.

### Step 1 — Create EmailJS Account

Go to [emailjs.com](https://emailjs.com) and sign up for a free account (up to 200 emails/month free).

### Step 2 — Add an Email Service

In your EmailJS dashboard:
1. Go to **Email Services** → **Add New Service**
2. Choose Gmail, Outlook, or any SMTP provider
3. Authenticate and copy the **Service ID**

### Step 3 — Create Two Email Templates

#### Template 1: User Booking Confirmation

Create a template named `brajride_user` with these variables:

| Variable          | Description              |
|------------------|--------------------------|
| `{{to_name}}`    | Passenger's name         |
| `{{to_email}}`   | Passenger's email        |
| `{{booking_id}}` | Ticket ID (e.g. BR12345) |
| `{{from_city}}`  | Departure city           |
| `{{to_city}}`    | Destination city         |
| `{{date}}`       | Travel date              |
| `{{departure}}`  | Departure time           |
| `{{seats}}`      | Seat numbers             |
| `{{fare}}`       | Total fare (e.g. ₹120)   |
| `{{vehicle_name}}`| Bus/vehicle name        |
| `{{payment}}`    | Payment method           |
| `{{distance}}`   | Route distance in km     |

**Example subject:** `Your BrajRide Ticket Confirmed — {{booking_id}}`

**Example body:**
```
Dear {{to_name}},

Your ride is confirmed! 🎉

Route:     {{from_city}} → {{to_city}}
Date:      {{date}} at {{departure}}
Seats:     {{seats}}
Vehicle:   {{vehicle_name}}
Fare:      {{fare}}
Distance:  {{distance}}
Payment:   {{payment}}
Ticket ID: {{booking_id}}

Show this ticket to the conductor when boarding.

Safe travels,
BrajRide Team
```

#### Template 2: Admin New Booking Alert

Create a template named `brajride_admin` with these variables:

| Variable             | Description                   |
|--------------------|-------------------------------|
| `{{admin_email}}`  | Admin's email (recipient)     |
| `{{booking_id}}`   | Ticket ID                     |
| `{{passenger_name}}`| Passenger name               |
| `{{from_city}}`    | Departure city                |
| `{{to_city}}`      | Destination city              |
| `{{date}}`         | Travel date                   |
| `{{seats}}`        | Seat numbers booked           |
| `{{fare}}`         | Total fare collected          |
| `{{phone}}`        | Passenger phone number        |
| `{{vehicle_name}}` | Vehicle name                  |
| `{{payment}}`      | Payment method                |
| `{{booked_on}}`    | Booking timestamp             |

**Example subject:** `🔔 New Booking Alert — {{booking_id}}`

### Step 4 — Configure in Admin Panel

1. Open BrajRide → Admin Panel → **📧 Email Setup**
2. Fill in:
   - **Public Key** — from EmailJS Account → API Keys
   - **Service ID** — from your Email Service
   - **User Template ID** — Template 1's ID
   - **Admin Template ID** — Template 2's ID
   - **Admin Email** — where you want booking alerts sent
3. Check **Enable email notifications**
4. Click **Save Email Config**
5. Click **Send Test Email** to verify everything works

---

## Project Structure

```
brajride_v2.html          ← Entire application (single file)
README.md                 ← This file
```

The entire app is self-contained in one HTML file with no external dependencies except:
- Google Fonts (Inter) — loaded from CDN
- EmailJS SDK — loaded from CDN (only used when email is configured)

### Internal Architecture

```
brajride_v2.html
├── <style>               CSS variables, layout, components
├── <body>
│   ├── Sidebar           Desktop navigation
│   ├── Top Bar           Title + action buttons
│   ├── screen-home       Hero, quick actions, route cards, city grid
│   ├── screen-book       Search form + popular routes panel
│   ├── screen-results    Vehicle cards with dynamic fares + filters
│   ├── screen-tickets    Booking history with cancel option
│   ├── screen-help       Support links + FAQs
│   ├── screen-admin-login  Admin auth form
│   ├── screen-admin      Admin dashboard (tabs rendered via JS)
│   ├── City Picker       Overlay modal for city selection
│   └── Booking Modal     Seat selector + passenger form + ticket view
└── <script>
    ├── EMAIL_CFG         EmailJS configuration (stored in localStorage)
    ├── CITY_COORDS       GPS coordinates for distance calculation
    ├── haversine()       Great-circle distance formula
    ├── getDistance()     City-to-city road distance estimate
    ├── DEFAULT_RATES     Per-km and minimum fare defaults
    ├── getRates()        Reads live rates (localStorage overrides defaults)
    ├── calcFare()        Computes fare for a route + vehicle type
    ├── getFareRange()    Min–max fare across all vehicle types
    ├── VEHICLE_TEMPLATES Static vehicle definitions (no hardcoded fares)
    ├── doSearch()        Triggers search, builds dynamic vehicle results
    ├── confirmBooking()  Creates ticket, saves to localStorage
    ├── sendEmailNotifications() Fires EmailJS calls
    ├── addNotification() Adds in-app admin alert
    ├── Admin functions   Dashboard, bookings table, pricing editor, email config
    └── State (S{})       Global app state object
```

### Data Storage

All data is stored in `localStorage` — no server required.

| Key                   | Contents                            |
|-----------------------|-------------------------------------|
| `brajride_v3`         | Array of all booking objects        |
| `brajride_rates`      | Custom per-km rates (if changed)    |
| `brajride_notifs`     | Admin notification history          |
| `brajride_email_cfg`  | EmailJS credentials                 |
| `brajride_admin_creds`| Custom admin username + password    |

---

## Cities & Routes

### Supported Cities (16)

| City        | Distance from Mathura | Emoji |
|------------|----------------------|-------|
| Mathura     | Hub city             | 🏙️   |
| Vrindavan   | 12 km                | 🛕    |
| Govardhan   | 26 km                | ⛰️   |
| Barsana     | 42 km                | 🌸    |
| Nandgaon    | 47 km                | 🛕    |
| Radha Kund  | 26 km                | 🪷    |
| Kosi Kalan  | 38 km                | 🏘️   |
| Chhata      | 32 km                | 🌾    |
| Mant        | 22 km                | 🌿    |
| Farah       | 18 km                | 🌻    |
| Baldeo      | 28 km                | 🐄    |
| Mahaban     | 30 km                | 🌳    |
| Sonkh       | 20 km                | 🏡    |
| Aring       | 35 km                | 🛤️   |
| Shergarh    | 40 km                | 🏰    |
| Agra        | 58 km                | 🕌    |

Any city-to-city combination is searchable — not just routes from Mathura.

---

## Tech Stack

| Layer        | Technology                        |
|-------------|-----------------------------------|
| UI          | Pure HTML5 + CSS3 (no framework)  |
| Logic       | Vanilla JavaScript (ES6+)         |
| Fonts       | Google Fonts — Inter              |
| Emails      | EmailJS (free, browser-based)     |
| Storage     | Browser localStorage              |
| Hosting     | Any static host (GitHub Pages, Netlify, Vercel, etc.) |

No Node.js. No React. No database. No backend. Zero build step.

### Deploying to GitHub Pages

```bash
git init
git add brajride_v2.html README.md
git commit -m "Initial commit"
git remote add origin https://github.com/anuragrajpandey/brajride.git
git push -u origin main
# Enable GitHub Pages in repo Settings → Pages → Branch: main
```

Once live, your app will be at:
**https://anuragrajpandey.github.io/brajride/**

### Deploying to Netlify

Drag and drop `brajride_v2.html` onto [netlify.com/drop](https://app.netlify.com/drop) — live in seconds.

---

## Team

Built with ❤️ for the Braj region.

| Name               | Role          | GitHub |
|-------------------|---------------|--------|
| Anurag Raj Pandey  | Developer     | [@anuragrajpandey](https://github.com/anuragrajpandey) |
| Astha Parua        | Developer     | —      |
| Ayush Upadhyay     | Developer     | —      |

---

## License

MIT License — free to use, modify, and distribute.

---

*BrajRide v2.0 · © 2026 · Mathura, Uttar Pradesh*
