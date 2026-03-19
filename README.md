<p align="center">
  <img src="/assets/images/logo.png" width="160" alt="Dream Weather logo"/>
</p>

<h1 align="center">Dream Weather</h1>

<p align="center">
  Weather & Livestream Matching Mobile App
</p>

# Dream Weather Mobile

Dream Weather Mobile is the mobile version of the React + Spring Boot application that matches users with locations based on their ideal weather conditions. The app provides users with a location match complete with title, description, temperature, current weather conditions, and an embedded livestream.

---

##  Live Demo

Explore the app on Expo Go:
(available for both iOS and Android)

---

##  Technologies Used

- **Stack**: React Native v0.81.5, Expo v~54.0.33
- **APIs**:  
  - [OpenWebcamDB](https://openwebcamdb.com) — for locations and livestreams  
  - [NOAA / NWS API](https://api.weather.gov) — for current weather data
  - [Cohere](https://cohere.com/) — Fun weather facts powered by AI
- **Node & Package Manager**: Node v20.19.6, npm v10.8.2  

---

##  Features

- Select user preferences for temperature and precipitation.  
- Iterates through multiple webcam locations until a match is found.  
- Fetches gridData from NOAA API to get precise current weather.  
- Returns matched location details: title, description, temperature, forecast, and livestream URL.  
- Learn fun weather-related facts powered by Cohere while the app loads data. 
- Fallbacks for unavailable streams or no matches found.

---

##  How It Works

1. **Backend Flow**  
   - Fetches a list of webcam locations from OpenWebcamDB.  
   - Iterates through the list using coordinates to query the NOAA weather API.  
   - Compares the current temperature and forecast with user preferences.  
   - Stops when a matching location is found.  
   - Fetches the webcam livestream URL for that location.  
   - Returns a final object to the frontend with all relevant details.

2. **Frontend Flow**  
   - User submits their weather preferences via a simple form.  
   - Calls the backend and shows a loading state with animated messages.  
   - Displays the matched location with details and embedded livestream.  
   - Provides “Try Again” buttons for errors, no matches, or fetching a new location.  

---

##  Setup Instructions

### Backend

1. Clone the repo and navigate to `/backend`.
2. Ensure you have Java v17 installed (Temurin).  
3. Run the Spring Boot app:  
   `mvn spring-boot:run`
4. The backend runs on `http://localhost:8080` by default.

### Frontend

1. Navigate to `/frontend`.
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`
4. React will open `http://localhost:{port}` in your browser.

>  Notes from setup:
>
> * Initially tried `create-react-app`, but Vite was needed for Node v20+.
> * Used `npm create vite@latest` with React (JavaScript + SWC variant).
> * Updated Node.js to v20.19.6 and npm to v10.8.2 to satisfy Vite requirements.

---

##  Lessons Learned

* Always **check API capabilities and limitations** before coding — never make assumptions.
* Plan **UI/UX design** before building to reduce rewrites.
* Learned **server-side caching** concepts, even though it wasn’t implemented in the final version.
* Handling **unavailable livestreams, YouTube restrictions, and no-match scenarios** gracefully is crucial for a smooth UX.
* Some APIs (like OpenWebcamDB) require **API keys** and often have **rate limits** (e.g., 50 calls per day).

---

## Credits

* Webcam data provided by [OpenWebcamDB](https://openwebcamdb.com)
* Weather data provided by [NOAA / NWS](https://weather.gov)
* Fun weather facts provided by [Cohere](https://cohere.com/)

------
------

## Instructions for Expo##
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
