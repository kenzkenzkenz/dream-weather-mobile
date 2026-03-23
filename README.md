<p align="center">
  <img src="/assets/images/logo.png" width="160" alt="Dream Weather logo"/>
</p>

<h1 align="center">Dream Weather <i>Mobile</i></h1>

<p align="center">
  Weather & Livestream Matching Mobile App
</p>

# Dream Weather Mobile

Dream Weather Mobile is the mobile version of the React + Spring Boot application that matches users with locations based on their ideal weather conditions. The app provides users with a location match complete with title, description, temperature, current weather conditions, and an embedded livestream. It also features an AI-powered weather fact with every request.

---

##  Live Demo

Explore the app by first installing [Expo Go](https://expo.dev/go) (available for both iOS and Android),
then scan the QR code.

## Current Release - Version 03 (Responsive Layout and Embedded YouTube Frame)
<p align="left">
  <img src="/assets/images/mobileQR03.png" width="200" alt="mobile QR 03 code"/>
</p>

## Previous Version - Version 02 (Background Images & Improved Selectors)
<p align="left">
  <img src="/assets/images/mobileQR02.png" width="120" alt="mobile QR 02 code"/>
</p>

## Version 01 (Basic UI)
<p align="left">
  <img src="/assets/images/mobileQR01.png" width="120" alt="mobile QR 01 code"/>
</p>

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

## UI Screen Capture


https://github.com/user-attachments/assets/327f1584-393e-4e22-bb35-af731ad24403



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
  
3. **AI Server**
   - Lightweight Node.js server that fetches fun weather facts from Cohere AI.
   - Provides a random weather fact via the /fact endpoint.
   - Uses Express.js for routing and handling requests.
   - Falls back to a default fact if the API request fails.

---

##  Lessons Learned

* Always **check API capabilities and limitations** before coding — never make assumptions.
* Plan **UI/UX design** before building to reduce rewrites.
* Learned **server-side caching** concepts, even though it wasn’t implemented in the final version.
* Handling **unavailable livestreams, YouTube restrictions, and no-match scenarios** gracefully is crucial for a smooth UX.
* Some APIs (like OpenWebcamDB) require **API keys** and often have **rate limits** (e.g., 50 calls per day).
* Many AI services are **not free**.

---

##  Known Issues

1. **"Livestream not available"** 
    - Some location livestreams no longer broadcast, resulting in empty video players.
    - A manual skip list was previously used but is no longer scalable.
    - Planned: Add a scheduled job to check stream metadata and exclude non-playable streams.

2. **Report Button Not Functioning**
    - The Report button allowed users to flag problematic streams via email.
    - This no longer works due to the expired email service.
    - Next steps: Integrate a new email provider or switch to a logging-based system.

---

## Data Credits

* Webcam data provided by [OpenWebcamDB](https://openwebcamdb.com)
* Weather data provided by [NOAA / NWS](https://weather.gov)
* Fun weather facts provided by [Cohere](https://cohere.com/)

## Image Credits

- **Default scenery**  
  Image by [Salih Altuntaş](https://pixabay.com/users/fromsalih-3094244/) from *Pixabay*

- **Blue sky**  
  Image by [Engin Akyurt](https://pixabay.com/users/engin_akyurt-3656355/) from *Pixabay*

- **Rain**  
  Image by [q839809004](https://pixabay.com/users/q839809004-3593939/) from *Pixabay*

- **Snow**  
  Image by [Jill Wellington](https://pixabay.com/users/jillwellington-334088/) from *Pixabay*

------

##  Setup Instructions

### Backend

1. Clone the repo and navigate to `/backend`.
2. Ensure you have Java v17 installed (Temurin).  
3. Run the Spring Boot app:  
   `mvn spring-boot:run`
4. The backend runs on `http://localhost:8080` by default.


## Instructions for Running the UI on Expo

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
