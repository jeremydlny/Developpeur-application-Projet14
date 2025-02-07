# Developpeur-application-Projet14

# HRnet React Application

## Description

HRnet is a React-based employee management system that allows you to create and view employee records. This is a modern version of an old jQuery application, rebuilt using React and modern web technologies.

## Features

- Create new employee records
- View current employees in a sortable and searchable table
- Form validation
- Responsive design
- Custom modal component (@jeremydlny/custommodal)

## Technologies Used

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Ant Design for UI components
- Vite as build tool
- CSS for styling

## Installation

1. Clone the repository

git clone [your-repository-url]

2. Navigate to the frontend directory

cd frontend

3. Install dependencies

npm install

4. Start the development server

npm run dev

The application will be available at `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── _Redux/         # Redux store and slices
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── styles/         # CSS styles
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Dependencies

- @reduxjs/toolkit
- react-redux
- react-router-dom
- antd
- @jeremydlny/custommodal
- [autres dépendances importantes]
