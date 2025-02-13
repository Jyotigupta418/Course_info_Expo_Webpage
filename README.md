# Course Web Page

A React Native + Expo web application for displaying and editing course information. This project includes a course details page and an editable form interface.

## Features

- Responsive design for both desktop and mobile views
- Course details display with sections for:
  - Course overview
  - Duration and schedule
  - Course curriculum
  - Instructor information
- Editable form interface for course details
- Modern UI with Material Design components

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

## Running the Application

To start the development server:

```bash
npm start
```

Then choose your preferred platform:
- Press `w` to open in web browser
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator (requires macOS)

## Project Structure

```
src/
  ├── components/
  │   └── CourseForm.js
  ├── screens/
  │   └── CourseDetails.js
  └── assets/
App.js
```

## Technologies Used

- React Native
- Expo
- React Native Paper
- React Navigation
