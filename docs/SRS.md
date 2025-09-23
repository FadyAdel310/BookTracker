# 📑 Software Requirements Specification (SRS)

**Project Name:** BookTrack
**Version:** 1.0
**Date:** 2025-09-23

---

## 1. Introduction

### 1.1 Purpose

The purpose of **BookTrack** is to provide a web-based platform where users can **browse, purchase, and track books** in a digital library. The system allows users to organize their reading activities into three categories: _To Read, Reading, and Finished_. The project targets individual readers, libraries, and educational institutions that want a modern digital solution for book management and reading tracking.

### 1.2 Scope

BookTrack is a **full-stack web application** with the following functionalities:

- Book browsing and searching
- Secure user authentication & account management
- Online book purchasing
- Tracking book reading status (_To Read, Reading, Finished_)
- Admin dashboard for managing users, books, and sales

The system will be accessible via desktop, tablet, and mobile browsers. Future enhancements may include integration with eBook readers, review systems, and social features.

### 1.3 Definitions, Acronyms, and Abbreviations

- **SRS:** Software Requirements Specification
- **UI:** User Interface
- **JWT:** JSON Web Token
- **DB:** Database

### 1.4 References

- IEEE SRS Standard (IEEE 830)
- Stripe / PayPal API documentation (for payments)
- React.js, Node.js, PostgreSQL documentation

---

## 2. Overall Description

### 2.1 Product Perspective

BookTrack will function as a **standalone web application** with a client-server architecture:

- **Frontend (Client):** Built with React/Next.js and TailwindCSS.
- **Backend (Server):** Node.js with Express (or Django as alternative).
- **Database:** PostgreSQL or MongoDB for persistent storage.
- **Payment Gateway:** Stripe or PayPal for online book purchases.

### 2.2 Product Functions

- Browse and view available books with details (title, author, price, category).
- Search books by title, author, or category.
- User authentication (signup, login, logout).
- Secure payment and purchase of books.
- Manage reading status: _To Read, Reading, Finished_.
- Track purchase history and personal library.
- Admin functions: add/edit/remove books, manage users, view transactions.

### 2.3 User Classes and Characteristics

- **End User (Reader):** Can browse, search, purchase, and track books.
- **Admin:** Can manage book collection, transactions, and users.
- **Guest User:** Can browse/search books but must sign up to purchase or track.

### 2.4 Operating Environment

- **Client:** Modern browsers (Chrome, Firefox, Edge, Safari)
- **Server:** Linux or Windows server with Node.js or Django runtime
- **Database:** PostgreSQL or MongoDB
- **Payment System:** Stripe/PayPal integration

### 2.5 Constraints

- Must comply with security best practices (HTTPS, data encryption, password hashing).
- Payments restricted to supported gateways (Stripe/PayPal).
- Scalable to support large collections of books.

### 2.6 Assumptions and Dependencies

- Users have internet access.
- Payment providers (Stripe/PayPal) are available.
- Admin actively maintains the book catalog.

---

## 3. System Features

### 3.1 User Authentication

- Register with email and password.
- Login using JWT-based authentication.
- Password recovery/reset.

### 3.2 Book Browsing & Search

- Browse books by category.
- Search by title, author, or keyword.
- Filter by price, genre, or availability.

### 3.3 Book Purchase

- Add book to cart.
- Checkout and pay via Stripe/PayPal.
- Receive purchase confirmation.

### 3.4 Reading Tracker

- Mark purchased books as _To Read, Reading, Finished_.
- View reading progress dashboard.
- Update book status anytime.

### 3.5 User Dashboard

- View purchased books.
- Manage reading statuses.
- View order history.

### 3.6 Admin Features

- Manage (add, edit, delete) books.
- Manage user accounts.
- View and manage transactions.

---

## 4. Non-Functional Requirements

### 4.1 Performance

- Support at least 500 concurrent users in MVP.
- Average page load time < 2 seconds.

### 4.2 Security

- Use HTTPS for all communications.
- Passwords stored with hashing (bcrypt).
- Role-based access (User vs Admin).

### 4.3 Usability

- Responsive design for desktop, tablet, mobile.
- Simple, intuitive navigation.

### 4.4 Reliability & Availability

- 99% uptime.
- Daily database backups.

### 4.5 Scalability

- Horizontal scaling supported via cloud deployment.

---

## 5. Future Enhancements

- User reviews & ratings for books.
- Recommendation system (ML-based).
- Social reading groups & discussions.
- Integration with eBook readers (Kindle, Kobo).

---
