# 🛺 BrajRide — Smart Transport for Mathura & Braj Villages

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Status](https://img.shields.io/badge/Project-Prototype-green)

**BrajRide** is a modern web-based transport booking interface designed for **Mathura and surrounding Braj villages**.
It allows users to easily **search, book, and manage local transport tickets** such as buses, mini buses, autos, and jeeps.

The project focuses on providing a **clean mobile-first UI** optimized for rural and semi-urban users.

---

# ✨ Demo Experience

BrajRide simulates a real booking system with:

• Route discovery
• Vehicle selection
• Seat selection
• Passenger details
• Ticket generation
• Ticket management

All inside a **single lightweight web interface.**

---

# 📱 Features

## 🚍 Ride Search

* Search rides between **Mathura and nearby villages**
* Date & passenger selection
* Smart ride filtering

## 💺 Seat Booking

* Interactive **bus seat layout**
* Seat availability visualization
* Multi-seat booking support

## 🎟 E-Ticket Generation

* Instant digital ticket
* Ticket barcode
* Booking confirmation view

## 📂 My Tickets

* View booked tickets
* Cancel bookings
* Status tracking

## 🔎 Smart Filtering

Filter rides by:

* Bus
* Mini Bus
* Auto / Jeep
* Cheapest ride

## 📍 Location Picker

* Searchable village list
* Distance indicators
* Quick popular routes

---

# 🖥 UI Screens

### 🏠 Home

Quick route discovery and popular destinations.

### 🔍 Booking

Select:

* Vehicle type
* Origin
* Destination
* Date
* Passengers

### 🚍 Ride Results

View available rides with:

* Departure / arrival
* Duration
* Amenities
* Seat availability

### 💺 Seat Selection

Interactive seat picker similar to real bus apps.

### 🎫 Ticket Confirmation

Generated e-ticket with passenger information and barcode.

### 📂 My Tickets

Track and cancel previously booked rides.

---

# 🧠 Tech Stack

| Technology         | Purpose            |
| ------------------ | ------------------ |
| HTML5              | Structure          |
| CSS3               | UI Styling         |
| Vanilla JavaScript | App Logic          |
| LocalStorage       | Ticket persistence |

This project intentionally avoids frameworks to keep it:

* **Lightweight**
* **Fast**
* **Easy to deploy**

---

# 📊 Project Architecture

```
BrajRide
│
├── index.html
│
├── UI Components
│   ├── Home Screen
│   ├── Booking Screen
│   ├── Results Screen
│   ├── Seat Selection Modal
│   ├── Ticket Generator
│   └── Help Screen
│
├── Data Models
│   ├── Cities
│   ├── Popular Routes
│   └── Vehicles
│
└── Core Logic
    ├── Search Engine
    ├── Seat Management
    ├── Ticket Storage
    └── UI Navigation
```

---

# 📍 Supported Locations

Example locations included in the dataset:

* Mathura
* Vrindavan
* Govardhan
* Barsana
* Nandgaon
* Radha Kund
* Farah
* Kosi Kalan
* Baldeo
* Mant
* Sonkh
* Shergarh
* Agra

---

# 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/brajride.git
```

---

### 2️⃣ Open the project

Simply open:

```
index.html
```

in your browser.

No server required.

---

# 💾 Local Data Storage

Tickets are saved locally using:

```
localStorage
```

Key used:

```
brajride_tickets
```

---

# 📌 Future Improvements

Possible upgrades for real deployment:

* Backend API integration
* Live vehicle tracking
* Real payment gateway
* Admin dashboard
* Real route database
* PWA support
* GPS location detection

---

# 👨‍💻 Team

Built with ❤️ by

**Anurag Raj Pandey**
**Astha Parua**
**Ayush Upadhyay**

---

# 🌏 Vision

BrajRide aims to simplify transportation across **Braj region villages** where digital transport services are still limited.

The goal is to create a **simple, accessible booking system for rural mobility.**

---

# 📄 License

This project is for **educational and prototype purposes**.

You are free to modify and improve it.

---

⭐ If you like the project, consider giving it a star on GitHub!
