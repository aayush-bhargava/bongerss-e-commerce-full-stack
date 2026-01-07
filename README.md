## 🛍️ Bongerss – Full-Stack E-Commerce Platform

Bongerss is a full-stack e-commerce web application built using modern frontend and backend technologies.
The project focuses on real-world architecture, scalability, and clean separation of concerns rather than just UI.

It simulates a production-ready shopping platform with dynamic product pages, cart management, and database-driven data.

# 🚀 Live Features
## 🧑‍💻 Frontend

Modern UI built with Next.js App Router

Responsive design using Tailwind CSS

Dynamic routing for product pages (/product/[slug])

Reusable components (Navbar, Footer, Product Cards)

SEO-friendly pages

### 🛒 Cart System

Global cart state using React Context API

Add / remove / update product quantities

Subtotal calculation

Cart persistence using localStorage

Cart sync across page reloads

### 📦 Product Management

Products fetched dynamically from MongoDB

Category-based pages (Tshirts, Hoodies, Mugs, Covers)

Slug-based product navigation

Server-side API routes using Next.js

### 🔐 Backend & APIs

MongoDB database integration

Mongoose for schema modeling

REST-style API routes:

Get all products

Add a product

Update product details

Clean API structure using app/api

### 📍 Additional Features

Pincode availability check (API-based)

Checkout flow UI

Order review section

Authentication UI (Login / Signup pages – frontend ready)

## 🧱 Tech Stack
### Frontend

Next.js 16 (App Router)

React

TypeScript

Tailwind CSS

### Backend

Next.js API Routes

Node.js

MongoDB

Mongoose

State & Utilities

React Context API

localStorage

REST APIs

## 📁 Project Structure (Simplified)
bongers/
├── app/
│   ├── api/             # Backend API routes

│      ├── product/[slug]/   # Dynamic product pages

│   ├── tshirts/hoodies/  # Category pages

│   ├── checkout/         # Checkout flow

│   ├── context/          # Cart Context

│   └── data/             # Product constants (fallback)  
│
├── components/           # Reusable UI components  
├── models/               # Mongoose schemas  
├── middleware/           # DB connection  
├── public/               # Static assets    
└── README.md

## ⚙️ Getting Started Locally
### 1️⃣ Clone the Repository
git clone https://github.com/aayush-bhargava/bongerss-e-commerce-full-stack.git
cd bongerss-e-commerce-full-stack

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Environment Variables

Create .env.local:

MONGO_URI=mongodb://localhost:27017/bongers

### 4️⃣ Run the Project
npm run dev


App runs on:

http://localhost:3000


## 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

Next.js App Router architecture

Client vs Server components

API route handling and debugging

MongoDB schema design

State persistence and synchronization

Real-world cart logic

Production-style folder structure

## 🧭 Future Enhancements

Authentication with JWT / NextAuth

Admin dashboard for product management

Payment gateway integration (Razorpay / Stripe)

Order history & user profiles

Server-side caching & optimization

# 👨‍💻 Author

Aayush Bhargava
Aspiring Full-Stack Developer
Focused on building scalable, production-ready applications.

## ⭐ Final Note

This project prioritizes architecture, correctness, and real-world practices over shortcuts.
It is designed to evolve into a complete production e-commerce platform.
