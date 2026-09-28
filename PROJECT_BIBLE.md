# 📘 Money Exchange System - Project Bible

## Student Details

- Name: Poornima
- Project: Money Exchange System
- Role: Team Leader
- Experience: Beginner

---

# Project Goal

Build a web application where users can:

- Register
- Login
- Exchange currencies
- Accept exchange requests
- View exchange history
- Logout

---

# Tech Stack

## Frontend
- React
- Vite
- CSS
- React Router

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Version Control
- Git
- GitHub

---

# Current Folder Structure

Money-Exchange-System

├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public
│   └── package.json
│
├── server
│   └── package.json
│
├── README.md
└── PROJECT_BIBLE.md

---

# Completed

- ✅ Installed Node.js
- ✅ Installed Git
- ✅ Installed VS Code
- ✅ Created GitHub Repository
- ✅ Connected GitHub
- ✅ Installed React + Vite
- ✅ Created Home Page
- ✅ Created Navbar Component
- ✅ Styled Navbar
- ✅ Created About Page
- ✅ Created Login Page
- ✅ Created Register Page
- ✅ Created Backend Folder
- ✅ React Development Server Working

---

# Current Phase

Frontend Development

---

# Current Status

React project is running successfully using:

npm run dev

Local URL:

http://localhost:5173/

---

# Team Distribution

## Poornima
- React
- Routing
- Integration
- Backend Understanding
- Deployment

## Member 2
- Login
- Register
- Dashboard

## Member 3
- Backend APIs
- MongoDB
- Exchange Logic

---

# Roadmap

Phase 1 ✅ Setup

Phase 2 🔄 Frontend

- Home
- Navbar
- Hero Section
- Login
- Register
- Dashboard

Phase 3

Backend

Phase 4

MongoDB

Phase 5

Money Exchange Logic

Phase 6

Deployment

---

# Next Lesson

- Verify routing
- Improve Home Page
- Build Hero Section

---

# Mentor Rules

- Explain concepts before coding.
- Teach step by step.
- Don't skip basics.
- Explain every file created.
- At the end of each lesson provide:
  - Current phase
  - Completed work
  - Next lesson
  - Team responsibilities
  - Viva questions
  ## Lesson 9 (Part 1)

### Topic
Understanding `main.jsx`

### Concepts Learned
- React application startup
- `createRoot()`
- `StrictMode`
- Why `App.jsx` is imported
- Application rendering flow

### Next
Analyze `App.jsx` and verify routing.
## Lesson 9 (Part 2)

### Topic
Understanding App.jsx and React Router

### Concepts Learned
- BrowserRouter
- Routes
- Route
- URL-based navigation
- Why Navbar is outside Routes
- Application flow (main.jsx → App.jsx → Pages)

### Status
✅ Routing verified and understood.

### Next Lesson
Build a professional Hero Section for the Home page.
## Lesson 11

### Topic
Building the Features Section

### Concepts Learned
- Multi-section page layout
- Feature cards
- Flexbox
- Box Shadow
- Hover Animation
- CSS Transition

### Status
✅ Hero Section completed.
✅ Features Section completed.

### Next Lesson
Build a professional Footer and make the Home page look more complete.
roject Phase: Phase 2 – Frontend Development

Completed Work:

Navbar, Home (Hero + Features), Footer structure.

Login, Register UI with state handling (Auth.css).

Dev server running successfully.

Current Task (Lesson 14): Build the Dashboard Page UI outline.

Team Responsibilities:

Member 2 (Primary): Finalizing Frontend User Flow (Dashboard layout where users can create/accept currency exchange listings).

Poornima (Team Lead): Adding the /dashboard route in App.jsx and reviewing layout integrity.
Phase: Transitioning from Phase 2 → Phase 3 (Backend Development)

Completed:

✅ Global Navbar & Footer components (Navbar.jsx, Footer.jsx)

✅ Home Page Hero & Features sections (Home.jsx)

✅ Login & Register Authentication UI with useState (Login.jsx, Register.jsx, Auth.css)

✅ Dashboard UI with offer creation and listing layout (Dashboard.jsx, Dashboard.css)

✅ Full React Router setup verified (App.jsx)
Current Phase: Phase 3 – Backend Development

Completed Work: Created structured API endpoint handling with Express controllers (authController.js) and routes (authRoutes.js).

Next Lesson: Testing backend APIs using Postman or VS Code Thunder Client, and connecting React forms to backend endpoints using axios or fetch
Current Phase: Phase 3 – Backend Development & API Setup

Completed Work:

✅ Created server/index.js with Express, CORS, and JSON middleware.

✅ Created Express controllers (authController.js) for register and login logic.

✅ Set up API route mappings (authRoutes.js).

✅ Fixed package.json syntax and running server on Port 5000.

Current Task (Lesson 16): Test our Backend API and connect the React Frontend forms to the Express server!

Team Responsibilities:

Member 3 (Primary): Express API logic & endpoints.

Poornima (Team Lead): Connecting React frontend useState submit handlers to backend API routes using fetch / axios.
Phase: Transitioning from Phase 3 → Phase 4 (Database Integration)

Completed:

✅ Register.jsx sending live POST requests to Express (http://localhost:5000/api/auth/register)

✅ Login.jsx sending live POST requests and redirecting users to the Dashboard

✅ Form state handling, error messaging, and navigation flow (useNavigate)

Current Task (Lesson 17): MongoDB & Mongoose Schema Setup.

Team Responsibilities:

Member 3 / Member 4: Designing MongoDB schemas for Users & Exchange Requests and connecting Mongoose in server/index.js.

Poornima (Team Lead): Code review, verifying database connection strings, and ensuring clean repository commits.
Summary of Progress
Database Integration: Configured Express server to connect asynchronously to MongoDB Atlas using mongoose.connect() via the standard .env configuration (MONGO_URI).

Environment & Security:

Encapsulated Atlas database credentials within .env.

Updated MongoDB Atlas IP Access List (0.0.0.0/0) to allow global network connectivity.

DNS & Connection Fixes:

Resolved querySrv ECONNREFUSED issues by setting custom IPv4 DNS resolvers (dns.setServers(['8.8.8.8', '8.8.4.4'])) directly inside server/index.js.

Verification: Confirmed active server listening status on port 5000 with direct database connectivity (Successfully connected to MongoDB! 🍃).

Current Tech Stack Status
Backend Framework: Node.js / Express

Database & ODM: MongoDB Atlas / Mongoose

Server Status: Running on http://localhost:5000 via nodemon
---

## Lesson 20

### Topic
Dashboard Authentication & Route Protection

### Concepts Learned

- Browser Local Storage
- localStorage.setItem()
- localStorage.getItem()
- useEffect Hook
- useNavigate Hook
- Protected Routes
- React Component Lifecycle

### Work Completed

✅ Added Dashboard route to App.jsx

✅ Added Dashboard page (Dashboard.jsx)

✅ Created Dashboard layout with:
- Create Exchange Offer Form
- Active Market Offers
- Local React State (useState)

✅ Implemented login persistence using localStorage

✅ Protected the Dashboard page:
- Redirects unauthenticated users to Login
- Allows authenticated users to access Dashboard

### Current Status

Frontend:
- Home Page ✅
- About Page ✅
- Login Page ✅
- Register Page ✅
- Dashboard Page ✅ (Needs debugging)

Backend:
- Express Server Running
- Authentication API Connected
- MongoDB Connected

### Current Issue

Dashboard route opens, but the page content is not displaying correctly.
Need to debug the authentication flow and Dashboard rendering.

### Next Lesson

- Debug Dashboard rendering
- Add Logout functionality
- Protect all private pages
- Display logged-in user information
- Begin connecting Dashboard with MongoDB exchange offers

---

## Project Progress

### Phase 1
✅ Project Setup

### Phase 2
✅ React Frontend

### Phase 3
✅ Express Backend

### Phase 4
🔄 MongoDB Integration (In Progress)

### Overall Progress

Project Completion:
Approximately **70%**

Remaining Work:

- Dashboard debugging
- Logout
- User Session Management
- CRUD for Exchange Offers
- Accept Exchange Requests
- Exchange History
- User Profile
- Final UI Polish
- Testing
- Deployment

---

## Mentor Notes

Things learned so far:

- React Components
- JSX
- Props
- CSS Modules
- React Router
- Hooks (useState)
- Hooks (useEffect)
- useNavigate()
- Browser Local Storage
- Express.js
- REST APIs
- MongoDB Atlas
- Mongoose
- Client-Server Communication
- Git & GitHub Workflow

Next focus:
Making the application behave like a real-world money exchange platform with persistent data.
### Lesson 20 Summary: Dashboard Debugging & Auth Resolution
- **Issue Resolved:** Fixed React Router import/export error (`export default Dashboard`) preventing route rendering.
- **Auth Flow Verified:** Verified `localStorage` session handling to securely protect `/dashboard`.
- **UI Rendered:** Successfully rendered active exchange offers, form inputs, and dynamic state updates.
- **Next Up:** Backend API integration for real-time MongoDB currency exchange offers & Logout session management.# 📘 Money Exchange System - Project Bible

## Student Details

- Name: Poornima
- Project: Money Exchange System
- Role: Team Leader
- Experience: Beginner

---

# 1. Project Goal

Build a web application where users can:

- Register
- Login
- Create currency exchange offers
- Browse available exchange offers
- Accept/match exchange offers
- View exchange history
- Logout

### Important Project Scope

The application manages the currency exchange matching/lifecycle.

The application DOES NOT directly transfer real money.

Actual payment can happen outside the application through:

- UPI
- Bank transfer
- Cash
- Other external payment methods

The system records and manages the exchange request/status.

---

# 2. How the Project Works

Basic user flow:

Register
   ↓
Login
   ↓
Dashboard
   ↓
Create Exchange Offer
   ↓
Browse Available Offers
   ↓
Find/Accept Matching Offer
   ↓
Exchange Status Updated
   ↓
Exchange History
   ↓
Logout

---

# 3. Example

Suppose:

User A has:
100 USD

and wants:
INR

User B has:
INR

and wants:
USD

The application allows both users to post their requirements.

The system helps users find suitable exchange offers.

Once a suitable offer is accepted:

- The exchange request status is updated.
- The application records the exchange.
- Actual money transfer happens outside the application.

---

# 4. Tech Stack

## Frontend

- React
- Vite
- CSS
- React Router
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## API Testing

- Postman / Thunder Client

## Version Control

- Git
- GitHub

---

# 5. Architecture

React Frontend
      ↓
React Router
      ↓
Express REST API
      ↓
Mongoose
      ↓
MongoDB Atlas

---

# 6. Current Folder Structure

Money-Exchange-System

├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services
│   │   ├── styles
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── Auth.css
│   │   │   └── Dashboard.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   │   └── authController.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── offerRoutes.js
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── README.md
└── PROJECT_BIBLE.md

---

# 7. Completed Work

## Setup

- ✅ Installed Node.js
- ✅ Installed Git
- ✅ Installed VS Code
- ✅ Created GitHub Repository
- ✅ Connected GitHub
- ✅ Installed React + Vite

## Frontend

- ✅ Home Page
- ✅ Hero Section
- ✅ Features Section
- ✅ Navbar
- ✅ Navbar Styling
- ✅ Footer
- ✅ About Page
- ✅ Login Page
- ✅ Register Page
- ✅ Dashboard UI
- ✅ React Router
- ✅ Protected Dashboard logic

## Backend

- ✅ Created Node.js backend
- ✅ Created Express server
- ✅ Added CORS
- ✅ Added JSON middleware
- ✅ Created authentication controller
- ✅ Created authentication routes
- ✅ Created offer routes
- ✅ Added dotenv
- ✅ Added Nodemon
- ✅ Server configured for port 5000

## Database

- ✅ Created MongoDB Atlas database
- ✅ Added Mongoose
- ✅ Created `.env`
- 🔄 MongoDB connection being verified/fixed
- 🔄 Exchange offer persistence still in progress

---

# 8. Current Backend Configuration

`.env` contains:

PORT=5000
MONGO_URI=<MongoDB Atlas connection string>

IMPORTANT:
Never commit `.env` to GitHub.

`.gitignore` should contain:

node_modules/
.env

---

# 9. Current server/index.js MongoDB Logic

The server must load `.env`:

require("dotenv").config();

MongoDB URI is obtained using:

const MONGO_URI = process.env.MONGO_URI;

Mongoose connects using:

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err);
  });

---

# 10. Current Issue Being Fixed

Previous error:

MongoParseError:
Invalid scheme, expected connection string to start with
"mongodb://" or "mongodb+srv://"

Cause:

server/index.js was using:

const MONGO_URI = 'YOUR_MONGODB_ATLAS_CONNECTION_STRING';

instead of reading the value from `.env`.

Fix:

Use:

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

Then:

mongoose.connect(MONGO_URI)

---

# 11. Current Phase

## Phase 3 → Phase 4

Backend Development & Database Integration

Current immediate goal:

Verify successful connection between:

Node.js / Express
        ↓
Mongoose
        ↓
MongoDB Atlas

---

# 12. Dashboard Current Status

Dashboard currently contains mock exchange requests using React state.

Example:

const [requests, setRequests] = useState([...]);

Creating an offer currently updates React state only.

Therefore:

- ⚠️ Offers are NOT yet permanently stored in MongoDB.
- ⚠️ Refreshing the page can remove locally created offers.

Next task is to replace mock data with real API/database data.

---

# 13. Next Development Plan

## Lesson 21

Verify MongoDB connection.

## Next

Create Exchange Request Mongoose Model.

Possible fields:

- user
- fromCurrency
- toCurrency
- amount
- rate
- status
- createdAt

## Then

Create Exchange Controller:

- createExchangeRequest()
- getExchangeRequests()
- acceptExchangeRequest()

## Then

Connect Exchange Routes:

POST /api/offers
GET /api/offers
PUT /api/offers/:id/accept

## Then

Connect Dashboard to backend using fetch/axios.

## Then

Store offers permanently in MongoDB.

## Then

Implement matching/acceptance logic.

## Then

Implement exchange history.

## Then

Improve authentication/session handling.

## Then

Testing.

## Then

Deployment.

---

# 14. Team Distribution

## Poornima — Team Leader

- React
- Routing
- Frontend/backend integration
- Backend understanding
- Database verification
- Deployment
- Code review

## Member 2

- Login
- Register
- Dashboard frontend
- User flow

## Member 3

- Backend APIs
- MongoDB
- Exchange logic

---

# 15. Important Project Rule

This project is NOT a real banking/payment application.

The system:

- Finds suitable exchange offers
- Allows users to create offers
- Allows users to accept/match offers
- Tracks status
- Maintains exchange history

The actual financial transaction occurs outside the application.

---

# 16. Mentor Rules

- Explain concepts before coding.
- Teach step by step.
- Don't skip basics.
- Explain every file created.
- Explain why each piece of code is needed.
- Don't give large amounts of code without explanation.
- Verify existing code before modifying it.
- Don't create duplicate files unnecessarily.
- Don't switch technologies without a reason.

At the end of each major lesson provide:

- Current phase
- Completed work
- Current problem/task
- Next lesson
- Team responsibilities
- Viva questions

---

# 17. Current Exact Starting Point

When continuing this project in a new chat:

1. Open VS Code.
2. Open Money-Exchange-System.
3. Terminal 1:
   cd server
   npm run dev
4. Terminal 2:
   cd client
   npm run dev
5. Frontend:
   http://localhost:5173/
6. Backend:
   http://localhost:5000/

Current immediate task:

VERIFY MONGODB CONNECTION.

Do not rebuild the project.

Do not create another backend.

Do not switch to Flask.

Continue using:

React
+
Node.js
+
Express
+
MongoDB
+
Mongoose
Real Authentication ✅ COMPLETE
Verified MongoDB Atlas connection (server/index.js reads MONGO_URI from .env correctly)
Built User model with proper validation (name, email unique/lowercase, password, createdAt)
Rewrote authController.js:
registerUser — validates input, checks duplicate email, hashes password with bcrypt.hash(), saves real user to MongoDB
loginUser — verifies email/password against hash, issues a real JWT via jwt.sign() using JWT_SECRET
Verified end-to-end via Postman (201 Created on register, 200 OK with real token on login) and confirmed in MongoDB Atlas (hashed password visible, not plain text)
Updated frontend Login.jsx to store the real JWT (localStorage.setItem("token", data.token)) instead of just a loggedIn flag
Verified full browser login flow — confirmed token, user, loggedIn all present in Local Storage via DevTools

Bugs debugged along the way (valuable real-world lessons):

bcryptjs installed under wrong package name initially → MODULE_NOT_FOUND crash
Editing .env does not hot-reload with nodemon — requires full Ctrl+C + restart
MongoDB Atlas bad auth error → root-caused to database user password; resolved by creating a fresh database user with an autogenerated password
Built checkdb.js, a standalone diagnostic script to verify database state directly, independent of Postman/Atlas UI
Phase 4 — Exchange Offer System ✅ COMPLETE (original version)
Built ExchangeOffer model — user (linked via ObjectId + ref), fromCurrency, toCurrency, amount, rate, status (enum: pending/matched/accepted/completed/cancelled)
Built middleware/auth.js — verifies JWT on protected routes, attaches req.userId
Built offerController.js — createOffer (protected, validates currencies differ, amount > 0), getOffers (public, populates user name/email), acceptOffer (blocks accepting your own offer, checks offer still pending)
Wired offerRoutes.js — POST /, GET /, PUT /:id/accept
Replaced an older, insecure offer route/model that stored plain-text userName/userEmail with no authentication
Fully rewired Dashboard.jsx — removed all mock useState data; now fetches real offers, posts real offers (with JWT header), and calls Accept Match against the real backend
Bug fixed: duplicate module.exports block and a missing acceptOffer export caused an Express startup crash (Route.put() requires a callback function but got undefined) — resolved by fully replacing offerController.js with a single clean export block
Bug fixed: querySrv ECONNREFUSED MongoDB DNS resolution failure — resolved using the project's own previously-documented fix (dns.setServers(["8.8.8.8", "8.8.4.4"]) in index.js)
Verified end-to-end in the browser: register → login → post offer → browse offers → Accept Match correctly blocks accepting your own offer (confirmed working with real alert message)
Deliverable — Presentation
Built and delivered Beyond_Borders_Presentation.pptx — 12 slides covering project overview, problem statement, solution concept, architecture, features, tech stack, progress checklist, completion %, live screenshots, and roadmap
Project Renamed
Renamed from "Money Exchange System" to "Beyond Borders" (per instructor), kept as subtitle for continuity
Concept Correction — Remittance Matching (IN PROGRESS)

Clarified the real product idea is not a personal currency swap. It's remittance netting:

Person A (India) wants to send money to a recipient in Dubai. Person C (Dubai) wants to send money to a recipient in India. The system matches them so both transfers settle locally — A pays C's recipient in India, C pays B (A's recipient) in Dubai. No money crosses the border.

Agreed to build in 3 stages:

Session 1 (started, not confirmed complete): add recipientName + recipientCountry to ExchangeOffer schema; update createOffer controller; update Dashboard form + offer list display
Session 2 (not started): matching endpoint — find offers with opposite currency direction; "Find Matches" UI
Session 3 (not started): Exchange History page; demo polish

Noted as a stretch goal beyond Session 1–3: partial/multi-party netting (e.g. two ₹50 offers combining to fulfill one ₹100 request) — deferred as a more advanced feature to build after exact 1:1 matching is solid.

✅ Updated Roadmap Status
PHASE 1 — SETUP                          ✅ Complete
PHASE 2 — FRONTEND                       ✅ Complete
PHASE 3 — BACKEND                        ✅ Complete
PHASE 4 — DATABASE & AUTH                ✅ Complete
PHASE 5 — OFFER SYSTEM (original)        ✅ Complete
PHASE 6 — REMITTANCE REDESIGN
  Add recipient fields to schema         🔄 In progress — needs confirmation
  Update createOffer controller          ⬜
  Update Dashboard form + offer display  ⬜
  Matching endpoint (opposite currency)  ⬜
  Exchange History page                  ⬜
  Multi-party/partial netting (stretch)  ⬜
PHASE 7 — SECURITY & VALIDATION          🔄 Ongoing
PHASE 8 — TESTING                        🔄 Ongoing (Postman-based)
PHASE 9 — DEPLOYMENT                     ⬜ Not started

Immediate next step: confirm whether server/models/ExchangeOffer.js already has recipientName/recipientCountry added, then proceed to update offerController.js accordingly.
Backend implemented:

Node.js + Express server
MongoDB Atlas connection through .env
Authentication APIs
JWT-based protected routes
ExchangeOffer model
Create exchange/remittance request
Retrieve pending requests
Accept request
Recipient name and recipient country fields

Frontend implemented:

React + Vite dashboard
Login protection
Exchange request form
Currency selection
Amount input
Recipient details
Active remittance request listing
Authenticated request creation
Authenticated request acceptance

Database/testing:

MongoDB Atlas successfully connected
Exchange requests successfully stored
Requests successfully retrieved
Tested with multiple users
Tested User 1 creating a request and User 2 accepting it
Basic request lifecycle currently works
Current limitation

The current Accept Match functionality only changes the request status to accepted. It does not yet create a true two-sided currency exchange match, automatically connect two compatible users, generate payment directions, notify both users, or complete the transaction.

Next Development Goal

Implement the two-sided matching system:

User Request
     ↓
Find Opposite Request
     ↓
Create Match
     ↓
Both Users Confirm
     ↓
Generate "Who Pays Whom"
     ↓
Payment Confirmation
     ↓
Transaction Completed

Then add email verification, user verification/risk detection, notifications, transaction history, reporting and admin management.