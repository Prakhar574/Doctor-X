# DoctorX
 
Live preview: https://doctor-xo.vercel.app/

DoctorX is a scalable web application designed for medical professionals to manage patient information and appointments efficiently. This application leverages modern web technologies to deliver a responsive and secure user experience.
![Doctor](https://github.com/user-attachments/assets/dfbd372c-5230-46d7-9013-bfc14be0007f)
![Screenshot 2024-07-22 152928](https://github.com/user-attachments/assets/dc4b196f-56fd-4951-98bc-9fae92ac26ac)
![Screenshot 2024-07-22 153219](https://github.com/user-attachments/assets/30791e88-0601-4ff2-9469-885c3203fdee)

## Features

- **Scalable Architecture**: Developed to handle a large number of users and data efficiently.
- **Responsive Front-End**: Built with React and Vite to provide a fast and responsive user interface.
- **Secure Data Management**: Utilizes MongoDB for secure and efficient data storage.
- **User Authentication and Authorization**: Implements JWT (JSON Web Tokens) for secure user authentication and authorization.
- **Dynamic UI Components**: Advanced CSS styling and animations for a user-friendly interface.
- **Server-Side Rendering (SSR)**: Enhances performance and SEO.
- **Thorough Testing and Debugging**: Ensures a robust and reliable application.

## Tech Stack

- **Front-End**: React, Vite
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)
- MongoDB

### Front-End Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/doctorx.git
    cd doctorx/frontend
    ```

2. Install NPM packages:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

### Back-End Setup

1. Navigate to the backend directory:

    ```bash
    cd ../backend
    ```

2. Install NPM packages:

    ```bash
    npm install
    ```

3. Set up environment variables:
    
    Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:

    ```env
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

Once both the front-end and back-end servers are running, you can access the application at `http://localhost:3000` (or the port specified in your Vite configuration).

## Project Structure

```plaintext
DoctorX/
  ├── backend/
  │   ├── models/
  │   ├── routes/
  │   ├── .gitignore
  │   ├── index.js
  │   ├── package-lock.json
  │   └── package.json
  ├── frontend/
  │   ├── dist/
  │   ├── node_modules/
  │   ├── src/
  │   │   ├── assets/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   ├── App.jsx
  │   │   ├── main.jsx
  │   │   ├── styles.css
  │   │   ├── .eslintrc.cjs
  │   │   └── README.md
  │   ├── .gitignore
  │   ├── index.html
  │   ├── package-lock.json
  │   ├── package.json
  │   ├── vite.config.js
  │   └── vercel.json
