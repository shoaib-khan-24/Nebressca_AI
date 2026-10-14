# Nebressca AI

Nebressca AI is a lightweight AI chatbot web app built with React and Vite. It allows users to ask questions in a chat-style interface and receive responses from the Gemini API. The app also keeps a local search history and supports both dark and light themes.

Live demo: https://nebressca-km4makc76-shoaib-4742.vercel.app/

## Overview

This project demonstrates:
- Frontend development with React
- API integration with Google Gemini
- Real-time chat UI
- Local storage for user history
- Responsive UI with Tailwind CSS
- Error handling and loading states

## Features

- Ask questions and receive AI-generated responses
- Chat-like interface with message history
- Search history stored in browser localStorage
- Reuse previous prompts from history
- Dark/light mode toggle
- Loading spinner while waiting for the API response
- Graceful fallback when the AI service is unavailable

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Gemini API
- LocalStorage for persistence

## Project Structure

```bash
src/
├── App.jsx            # Main app logic and AI request handling
├── main.jsx           # App entry point
├── index.css          # Global styling
├── helper.js          # Utility/helper functions
├── components/        # Reusable UI components
│   ├── Answer.jsx
│   ├── Question.jsx
│   ├── History.jsx
│   ├── Head.jsx
│   ├── ThemeButton.jsx
│   └── index.js
├── config/
│   └── config.js      # API config and environment variables
└── assets/            # Static assets
```

## API Configuration

This app uses the Gemini API through environment variables.

Create a `.env` file in the project root:

```env
VITE_GEMINI_URL=your_gemini_endpoint
VITE_GEMINI_API_KEY=your_api_key
```

The app reads these values from `src/config/config.js` and sends requests using the Gemini endpoint.

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm run dev
```

4. Open the local development URL shown in the terminal.

## Scripts

```bash
npm run dev     # start the app
npm run build   # production build
npm run preview # preview production build
npm run lint    # run ESLint
```

## Why This Project Is Valuable

This project highlights practical frontend engineering skills:
- API integration with external AI services
- State management using React hooks
- Writing reusable UI components
- Managing asynchronous requests and app loading states
- Building a user-friendly interface with responsive design
- Handling real-world issues like failed API calls and user history persistence

## License

This project is for personal and portfolio/demo use.
