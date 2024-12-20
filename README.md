
# My TypeScript React Authentication App

This is a simple TypeScript-based React application with an authentication form. The application uses `Formik` for handling form submission and validation, and `Yup` for schema validation. It allows users to log in and optionally save their email for future logins using `localStorage`.

## Features:
- Login form with email and password fields.
- Email is saved to `localStorage` when "Remember Me" is selected.
- Form validation using `Yup` for email and password fields.
- Success message after successful login submission.

## Tech Stack:
- **React**: Frontend library for building UI.
- **TypeScript**: For static typing in the code.
- **Formik**: For managing form state and handling form submissions.
- **Yup**: For form validation.
- **localStorage**: To remember the email for future logins.

## Project Setup

Follow these steps to get the project up and running:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/my-tsx-auth-app.git
cd my-tsx-auth-app
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm start
```

This will start the React development server and open the application in your default web browser. If the page does not open automatically, visit `http://localhost:3000/` in your browser.


## How it works:

1. The `LoginForm` component is the core of the application. It uses **Formik** for managing form state and **Yup** for validation.
2. The form contains two fields, **email** and **password**, and a **Remember Me** checkbox.
3. When the form is submitted:
   - If the **Remember Me** checkbox is checked, the email is saved to `localStorage`.
   - The success message "Login Successful" is displayed after the form submission.
   - If validation fails, error messages are displayed under the respective fields.

## File Structure:

```
/public          - Public files like HTML and images
/src             - Source code for React app
  └── App.tsx    - Main React component
  └── LoginForm.tsx - Form component
  └── index.tsx  - Entry point for React app
  └── App.css    - Optional styles for the app
  └── index.css  - Global styles
/package.json    - NPM configuration file
/tsconfig.json   - TypeScript configuration file
```
