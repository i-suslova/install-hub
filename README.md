# Install Hub

Demo page for installing a mobile application using QR codes and automatic device detection.

This page helps users quickly choose the correct installation method depending on their device (iOS, Android, Desktop, etc.).

Live demo:  
https://kovidiet.crossapp.pro

---

## Features

- Automatic device detection
- Recommended installation option highlighted
- QR codes for quick installation
- Responsive design for desktop and mobile
- Clean UI built with React
- Static deployment via GitHub Pages

---

## Installation Options

The page currently supports four installation methods:

1. **iPhone / iPad**
   - Install via App Store

2. **Android**
   - Install APK or open Play Store

3. **Desktop**
   - Scan QR code using your mobile device

4. **Alternative method**
   - Additional installation source

---

## Technology Stack

- React
- Vite
- CSS
- GitHub Pages (deployment)
- GitHub Actions (CI/CD)

---

## Local Development

Clone the repository:

git clone https://github.com/i-suslova/install-hub.git
cd install-hub

Install dependencies: npm install

Run development server: npm run dev

Open in browser: http://localhost:5173

Create a production build: npm run build

---

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions.

Every push to the main branch triggers the build and deployment workflow.

Configuration is located in: .github/workflows/deploy.yml

---

## Project Structure

install-hub
├── public
│   ├── qr-ios.png
│   ├── qr-android.png
│   ├── qr-desktop.png
│   └── qr-alt.png
│
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets
│
├── index.html
├── vite.config.js
└── package.json

---

## Use Cases

This page can be used for:

mobile app landing pages

quick install pages

QR-based onboarding

app distribution hubs

internal corporate app distribution

---

## Preview

![Install Hub Preview](preview-install-hub.png)