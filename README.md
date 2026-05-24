#  RentShare — Frontend

> React.js frontend for **RentShare** — a peer-to-peer item rental marketplace.

[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

---


[🌐 Live Demo](https://rent-share-frontend.vercel.app)

##  Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Features](#pages--features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Connecting to Backend](#connecting-to-backend)
- [Deployment](#deployment)

---

##  About

This is the frontend repository for **RentShare**. It is a React.js Single Page Application (SPA) that connects to the [RentShare Backend](https://github.com/yourusername/rentshare-backend) via REST APIs.

Users can browse item listings, make rental requests, complete payments via Razorpay, and manage their rentals — all from this interface.

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based UI framework |
| **Tailwind CSS** | Utility-first CSS for rapid styling |
| **Vite** | Fast dev server and build tool |
| **React Router v6** | Client-side routing |
| **Axios** | HTTP requests to backend API |
| **Razorpay JS SDK** | Payment checkout integration |
| **Context API** | Global auth state management |

---

##  Project Structure

```
frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/            # Images, icons
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── ItemCard.jsx
│   │   ├── RentalCard.jsx
│   │   ├── ReviewCard.jsx
│   │   └── ...
│   ├── pages/             # Route-level page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Browse.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── MyListings.jsx
│   │   ├── MyRentals.jsx
│   │   ├── OwnerRentals.jsx
│   │   ├── KYC.jsx
│   │   ├── Profile.jsx
│   │   └── Admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminKYC.jsx
│   │       └── AdminDamage.jsx
│   ├── context/
│   │   └── AuthContext.jsx  # Global auth state
│   ├── utils/
│   │   └── api.js           # Axios instance + interceptors
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .env.example
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

##  Pages & Features

### Public Pages
| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with hero section |
| Browse | `/browse` | Browse all available items with filters |
| Item Detail | `/items/:id` | Full item info, pricing, date picker |
| Login | `/login` | Email + password login |
| Register | `/register` | Register + email OTP verification |
| Forgot Password | `/forgot-password` | OTP-based password reset |

### User Pages (Auth Required)
| Page | Route | Description |
|---|---|---|
| Profile | `/profile` | View & edit profile, UPI ID, location |
| KYC | `/kyc` | Submit Aadhaar/PAN for verification |
| My Rentals | `/my-rentals` | Renter view — active, past rentals + OTP display |
| My Listings | `/my-listings` | Owner view — manage listed items |
| Owner Rentals | `/owner-rentals` | Owner view — incoming rentals, OTP verify, damage report |
| Cart | `/cart` | Saved items |

### Admin Pages (Admin Role Required)
| Page | Route | Description |
|---|---|---|
| Admin Dashboard | `/admin` | Overview |
| KYC Approval | `/admin/kyc` | Review and approve/reject KYC submissions |
| Damage Approval | `/admin/damage` | Review damage claims, trigger refunds |

---

##  Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- RentShare Backend running locally or deployed

### Installation

```bash
# Clone the frontend repo
git clone https://github.com/yourusername/rentshare-frontend.git
cd rentshare-frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### Fill in your `.env` file (see below), then:

```bash
# Start development server
npm run dev
```

App runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

##  Environment Variables

Create a `.env` file in the root of the frontend folder:

```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
```

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |
| `VITE_RAZORPAY_KEY_ID` | Razorpay public key (test or live) |


---

## Deployment

This frontend is deployed on **Vercel** 

### Deploy Steps

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com/)
3. Set environment variables in Vercel dashboard
4. Vercel auto-deploys on every push to `main`

### Vercel Environment Variables

Set these in your Vercel project settings:

```
VITE_API_URL = https://your-backend.railway.app
VITE_RAZORPAY_KEY_ID = rzp_live_xxxxxxxxxxxx
```

---

##  Related

- 🔧 [RentShare Backend](https://github.com/himanshukmwt/rent-share-items) — Node.js + Express + PostgreSQL

---

##  Author

Built with ❤️ from Himanshu Kumawat








