# React POS Application
Demo: [Click to view](https://pos-system-mauve.vercel.app/)
## Overview

This is a simple Point of Sale (POS) system for order management. The application allows users to:  
- **Take Orders:** Quickly add customer orders with an intuitive interface.  
- **View Order History:** Access a complete list of past orders for easy tracking and reference.
It utilizes React for building a dynamic interface, React Router DOM for navigation, and Vite for a fast development environment.

---
   ![image](https://github.com/user-attachments/assets/01a7ebcc-c3df-431f-b22b-b0485f8d9563)

## Features

- **Data Collection**: A simple page to collect user information like name and gender.
- **Dashboard**: Displays user-specific information, including the name collected during login.
- **Persistent Navigation**: A fixed navigation bar ensures seamless access to all pages.
- **Settings**: A dedicated page for user or application settings.
- **History**: A section for viewing historical data or transactions.

![image](https://github.com/user-attachments/assets/151deef7-b6cd-4dfa-8bde-ede4811e0361)


---

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Context API
- **Styling**: Tailwind CSS

---

## Project Structure

```plaintext
src/
├── App.jsx
├── main.jsx
├── Components/
│   ├── DataCollection.jsx
│   ├── Dashboard.jsx
│   ├── Menu.jsx
│   ├── Settings.jsx
│   ├── History.jsx
│   ├── TopBar.jsx
├── context/
│   └── UserContext.jsx
└── assets/
    └── Images
```
## How It Works

1. **Data Collection**  
   - Users enter their name and gender on the initial data collection page.  
   - This data is captured and stored globally using React's Context API.

2. **Global State Management**  
   - The Context API ensures that user data is accessible across all components without prop drilling.  

3. **Navigation**  
   - React Router DOM is used to manage navigation between different pages like the Dashboard, Menu, Settings, and History.      

---

## Future Enhancements Possibility

- **Backend Integration**  
  - Connect the application to a backend service for storing and managing user data in real-time.

- **User Authentication**  
  - Add login and registration functionality for better data security.

- **Advanced POS Features**  
  - Implement inventory tracking, payment gateways, and receipt generation to make it a fully functional POS system.

---

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NilanshuBasnet/POSsystem.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Navigate to the project directory:
   ```bash
   cd YourProjectFolder
   ```
4. Start the development server:
    ```bash
   npm run dev
   ```

All the images and Icons used in this project are fetched from [Flaticon]() and [Pixabay](https://pixabay.com/).
