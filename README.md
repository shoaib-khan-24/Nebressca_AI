# Nebressca AI

Nebressca AI is a lightweight AI chatbot web app built with React and Vite. It allows users to ask questions in a chat-style interface and receive responses from the Gemini API, with persistent chat history and a responsive UI.

Live demo: https://nebressca-ai.vercel.app

## Overview

This project demonstrates:
- React frontend development
- Gemini API integration
- Real-time chat interactions
- Local storage for history
- Light/dark mode support
- Error handling and loading states

## Challenge & Solution

During development, the app faced frequent Gemini service-unavailable errors, which caused only about 52% of API requests to succeed. This reduced reliability and made the chatbot feel inconsistent.

To fix this, we introduced a dual-model approach using a basic model and an advanced model. This fallback strategy improved the success rate to around 92%, making the app much more stable and user-friendly.

<!-- Add the API success-rate comparison image here -->

## Features

- AI-powered chat responses
- Persistent chat history in local storage
- Search and reuse previous prompts
- Light/dark mode toggle
- Smooth, responsive interface

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Google Gemini API

## Installation

```bash
npm install
npm run dev
```

## License

This project is for personal and portfolio/demo use.
