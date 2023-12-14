# E-commerce Application

This repository contains three applications for building an E-commerce platform. Each application serves a specific purpose and they are interdependent on each other.

## Applications

**Node.js Backend (Express + Mongoose):**
    - The backend application is responsible for handling API requests, managing the MongoDB database using Mongoose, and handling business logic.

    Setup:

    cd backend
    npm install
    npm start

**Next.js Frontend:**

    The frontend application built with Next.js is responsible for rendering the customer-facing side of the E-commerce platform. It communicates with the Node.js backend for data.
    Setup:

    cd frontend
    npm install
    npm run dev

**React Admin Panel:**

    The admin panel application built with React is designed for managing products, orders, and other administrative tasks. It also communicates with the Node.js backend.
    Setup:

    cd admin
    npm install
    npm start

**Prerequisites**
    Node.js and npm installed.
    MongoDB server running.

**Configuration**
    Update the database connection strings and other configurations in each application's respective configuration files.

**Usage**
    Start the Node.js backend application first.
    Run the Next.js frontend application.
    Launch the React admin panel application.

**Contributing**
    Feel free to contribute to this project by submitting issues or pull requests. Your contributions are welcome!

**License**
    This project is licensed under the MIT License.