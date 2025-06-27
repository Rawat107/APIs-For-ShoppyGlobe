# **ShoppyGlobe Backend: CRUD Operations with Screenshots**

## Overview

This project is a RESTful backend API built with **Node.js**, **Express**, and **MongoDB** to support an e-commerce frontend called ShoppyGlobe. It handles products, user authentication, and cart operations using proper MVC architecture.

### Key Features

- Product listing and detail routes (`GET /products`, `GET /products/:id`)
- JWT-based user authentication (`POST /register`, `POST /login`)
- Cart management (`POST`, `PUT`, `DELETE /cart`)
- MongoDB integration using Mongoose
- Input validation and global error handling
- Import script to populate products from DummyJSON

## Folder Structure (MVC)
<<<<<<< HEAD

=======
```
>>>>>>> c0da69084f2fc251de9eba26abb52150e243d943
├── controllers/
│ ├── productController.js
│ ├── cartController.js
│ └── authController.js
├── models/
│ ├── Product.js
│ ├── Cart.js
│ └── User.js
├── routes/
│ ├── productRoutes.js
│ ├── cartRoutes.js
│ └── authRoutes.js
├── middleware/
│ ├── verifyToken.js
│ └── requestLogger.js
├── scripts/
│ └── importProduct.js
├── .env
├── server.js
<<<<<<< HEAD

=======
```
>>>>>>> c0da69084f2fc251de9eba26abb52150e243d943
---

## Setup Instructions

### 1. Clone and Install

```
<<<<<<< HEAD
git clone https://github.com/Rawat107/APIs-For-ShoppyGlobe.git
=======
git clone https://github.com/yourusername/shoppyglobe-backend.git
>>>>>>> c0da69084f2fc251de9eba26abb52150e243d943
cd shoppyglobe-backend
npm install
```

### 2. Configure Environment Variables

## Create a .env file in the root with:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/shoppyglobe
JWT_SECRET=ShoppyGlobe
```

### 3. Import Product and Start the server

```
npm run dev

```

## **1\. Import Products (via `node importPorduct.js` or `npm run dev`)**

**Description:**  
 Running the import script before the index.js to seed DummyJSON products into MongoDB.

npm run dev \# or node scripts/importProduct.js(seprately)

**Success Example:**

- Imported 30 new products.

![imported-products](screenshots/imported-products.png)

![products-in-compass](screenshots/mongo-products-list.png)

Or:

- All products already imported.

![already-imported](screenshots/all-products-already-imported.png)

**Error Example:**

MongoDB connection failed:  
![connection-error](screenshots/mongo-connection-error.png)

---

## **2. GET - All Products**

**Route:** `GET /products`

**Success Response (200):**

![get-products-success](screenshots/get-products-success.png)

**Error Response (Route not found):**

![get-products-error](screenshots/get-products-error.png)

---

## **3. GET - Single Product by ID**

**Route:** `GET /products/:id`

**Success Response (200):**

![get-product-success](screenshots/get-product-success.png)

**Error Response (404 - Not Found):**

![get-product-not-found](screenshots/get-product-not-found.png)

**Error Response (500 - Invalid ID):**

![get-product-invalid-id](screenshots/get-product-invalid-id.png)

---

## **4. User Authentication**

### **A. Register New User**

**Route:** `POST /register`

**Success Response (201):**

![register-user-success](screenshots/register-user-success.png)

**MongoDB Compass showing added user:**

![mongo-user-added](screenshots/mongo-user-added.png)

**Error Response (400 - Missing Fields):**

![register-user-missing-fields](screenshots/register-user-missing-fields.png)

**Error Response (400 - User already exists):**

![register-user-duplicate](screenshots/register-user-duplicate.png)

---

### **B. Login User**

**Route:** `POST /login`

**Success Response (200):**

![login-success](screenshots/login-success.png)

**Error Response (400 - Missing Fields):**

![login-missing-fields](screenshots/login-missing-fields.png)

**Error Response (401 - Invalid Credentials):**

![login-invalid-credentials](screenshots/login-invalid-credentials.png)

---

## **5. POST to Cart (Add Item)**

**Route:** `POST /cart`  
**Headers:** Authorization: JWT <token>

**Success Response (200):**

![add-cart-success](screenshots/add-cart-success.png)

**Mongo Compass Item has added to the database**  
![mongo-cart-added](screenshots/mongo-cart-added.png)

**Error Response (401 - Unauthorized):**

![add-cart-unauthorized](screenshots/add-cart-unauthorized.png)

**Error Response (400 - Validation Error):**

![add-cart-validation-error](screenshots/add-cart-validation-error.png)

---

## **6. PUT to Cart (Update Quantity)**

**Route:** `PUT /cart/:id`  
**Headers:** Authorization: JWT <token>

**Success Response (200):**

![update-cart-success](screenshots/update-cart-success.png)

**Mongo Compass Updated:**  
![mongo-cart-updated](screenshots/mongo-cart-updated.png)

**Error Response (404 - Not Found):**

![update-cart-not-found](screenshots/update-cart-not-found.png)

**Error Response (403 - Unauthorized):**

![update-cart-unauthorized](screenshots/update-cart-unauthorized.png)

**Error Response (400 - Invalid ID):**

![update-cart-invalid-id](screenshots/update-cart-invalid-id.png)

---

## **7. DELETE Cart Item**

**Route:** `DELETE /cart/:id`  
**Headers:** Authorization: JWT <token>

**Success Response (200):**

![delete-cart-success](screenshots/delete-cart-success.png)

**Mongo Compass item is removed from the cart:**

![mongo-cart-removed](screenshots/mongo-cart-removed.png)

**Error Response (404 - Not Found):**

![delete-cart-not-found](screenshots/delete-cart-not-found.png)

**Error Response (403 - Unauthorized):**

![delete-cart-unauthorized](screenshots/delete-cart-unauthorized.png)

**Error Response (400 - Invalid ID):**

![delete-cart-invalid-id](screenshots/delete-cart-invalid-id.png)
