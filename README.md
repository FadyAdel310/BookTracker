# 📚 BookTracker

> A smart digital library & reading tracker web application.

<!-- ![BookTrack Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![GitHub License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Made With](https://img.shields.io/badge/Made%20With-React%20|%20Node.js%20|%20PostgreSQL-orange?style=for-the-badge)   -->

---

## 🌟 Overview

**BookTracker** is a modern **digital library and bookstore** platform where users can:

- 🔍 Browse & search books
- 🛒 Buy books securely after authentication
- 📊 Track reading progress (_To Read → Reading → Finished_)
- 👤 Manage personal library & purchases
- ⚡ Admins can manage books, users, and transactions

BookTrack makes it easy to **discover, purchase, and organize books** in one place.

---

## ✨ Features

- 🔐 **Authentication** – secure signup/login with JWT
- 📖 **Book Browsing** – explore by title, author, or category
- 🛒 **Purchase Flow** – cart, checkout, and payment (Stripe/PayPal)
- 📊 **Reading Tracker** – mark books as _To Read, Reading, Finished_
- 👤 **User Dashboard** – personal library & order history
- ⚙️ **Admin Panel** – manage books, users, and sales

---

## 🛠️ Tech Stack

**Frontend:**

- React (Next.js)
- TailwindCSS

**Backend:**

- Node.js (Express)
- JWT Authentication

**Database:**

- MongoDB

**Other Integrations:**

- Stripe / PayPal (payments)

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the repository

```bash
git clone https://github.com/FadyAdel310/BookTracker.git
cd BookTracker
```

2. Install dependencies

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

3. Setup environment variables
   Create a .env file in both backend/ and frontend/ folders with:

```ini
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
STRIPE_KEY=your_stripe_key
```

4. Run the app

```bash
# Run backend
cd backend && npm run dev

# Run frontend
cd frontend && npm run dev
```

---

## 📂 Project Structure

```
BookTrack/
│── frontend/        # React/Next.js client
│── backend/         # Node.js/Express server
│── docs/            # Documentation (SRS, diagrams, etc.)
│── .env.example     # Example environment variables
│── README.md        # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💡 Vision

BookTrack’s mission is to **make book discovery, purchase, and reading progress effortless** for everyone — from casual readers to avid bookworms.

## 📚 _Read more. Track better._
