# WTWR (What to Wear?): Front End

(Backend: https://github.com/KalebRyan/se_project_express)

## Project Description

WTWR is a front-end application designed to complement the WTWR back-end server. This React-based project allows users to manage their wardrobe and get clothing recommendations based on the current weather. Users can add, view, like, and delete clothing items, as well as update their profile information. The application integrates with a weather API to provide real-time weather data and recommendations.

## Features

- User authentication and authorization
- Add, view, and delete clothing items
- Like and unlike clothing items
- Real-time weather-based clothing recommendations
- Profile management with avatar and name updates
- Responsive design for various screen sizes

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **React Router**: For handling navigation and routing
- **Vite**: A fast build tool for modern web projects
- **CSS Modules**: For styling components
- **OpenWeather API**: For fetching real-time weather data
- **LocalStorage**: For managing user authentication tokens

## Running the Project

- `npm run dev` — Starts the development server with hot reload
- `npm run build` — Builds the project for production
- `npm run preview` — Previews the production build locally

## Deployment

The project is configured for deployment using GitHub Pages. Run `npm run deploy` to build and deploy the application.

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file to store your API keys (e.g., OpenWeather API key).
4. Start the development server using `npm run dev`.

## Author

Developed by Kaleb Walter.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
