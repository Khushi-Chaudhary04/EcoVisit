[View Live Demo](https://ecovisit.onrender.com/)
# EcoVisit: Monitor, Compare & Predict AQI 🌍

Welcome to **EcoVisit**, a smart and environment-friendly platform designed to help users monitor, compare, and predict the Air Quality Index (AQI) of tourist destinations in India. By integrating real-time AQI data, AI-driven predictions, and historical trends, EcoVisit empowers travelers to make eco-conscious decisions when planning their trips. ✈️🌱

---

![image](https://github.com/user-attachments/assets/c4d600e6-c858-47d5-bbec-2701d4ec8fee)
 <div align="center">
  <b>Home Page of the website</b>
   <br>
   The introductory page of a website, typically serving as a table of contents for the site.
</div>
<br>

---

![image](https://github.com/user-attachments/assets/3499d562-b015-4aa9-a145-deaa04f64155)
<div align="center">
  <b>Map showing the AQI of different Indian states</b>
   <br>
   An interactive map with color coded according to AQI values.
</div>
<br>

---

![image](https://github.com/user-attachments/assets/36757bd1-71e2-4fb2-9799-85f30bb1ac58)
<div align="center">
  <b>Map showing the AQI of different Indian states</b>
   <br>
   An interactive map with color coded according to AQI values.
</div>
<br>

 ---
 
![image](https://github.com/user-attachments/assets/b86e5808-28a8-4b8c-8ba3-714907b6428b)
<div align="center">
  <b>Page for AQI prediction for different months</b>
   <br>
   Prediction feature for efficient travel planning according to the weather forecast
</div>
<br>

---

 ![image](https://github.com/user-attachments/assets/580071f0-9183-4f5f-8dc6-23e8e23d82d1)
<div align="center">
  <b>News Section of the site</b>
   <br>
   Displaying the national and international news related to the environment
</div>
<br>

---
        
![image](https://github.com/user-attachments/assets/54d21c21-dc78-4934-85a5-048c8ee7f0c2)
<div align="center">
  <b>About Us page</b>
   <br>
   Provides details about the project and also the founders of the site
</div>
<br>

--- 

## 🔍 Project Overview

**EcoVisit** serves as a comprehensive AQI solution with the following features:
- **Monitor:** Real-time AQI data for major tourist destinations in India, presented on an interactive map.
- **Compare:** Historical AQI comparison for the past 12 months, offering insights into the air quality trends.
- **Predict:** AI-powered AQI predictions for the upcoming year to help users plan visits based on future air quality.

---

## 🎯 Problem Statement

In recent years, air pollution has become a growing concern for tourists looking to explore different parts of India. Eco-conscious travelers are seeking reliable information about air quality before making decisions on where and when to travel. **EcoVisit** addresses this problem by providing real-time and predictive AQI insights, helping users plan trips to destinations with optimal air quality.

---

## 🌟 Key Features

1. **Interactive Map:** Displays real-time AQI data for major tourist locations across India. States are color-coded based on AQI levels for easy interpretation (green = good, red = hazardous).
   
2. **AQI Predictions:** Uses AI models to predict AQI for the upcoming year. Users can select a month and destination to receive AQI forecasts and recommendations for the best time to visit.

3. **Comparison Table:** Allows users to compare AQI trends from the last 12 months, highlighting destinations with significant changes.

4. **News and Highlights:** Alerts and news updates related to significant AQI changes or environmental events affecting air quality.

---

## 🚀 Installation Guide

### Prerequisites:
- Node.js
- Python (for running AI models)
- Firebase account and API keys for OpenWeatherMap & AirVisual

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/[YourUsername]/EcoVisit.git
   cd EcoVisit
   ```

2. Install dependencies for the frontend and backend:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file at the root of your project with the following:
   ```bash
   REACT_APP_AIRVISUAL_API_KEY=your_airvisual_api_key
   REACT_APP_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 🌿 Environmental Impact

EcoVisit promotes eco-conscious travel decisions by providing travelers with transparent and easy-to-understand AQI data. By helping users plan trips during months with better air quality, **EcoVisit** contributes to reducing the harmful impacts of pollution and encourages more sustainable travel patterns.

---

## 💻 Project Architecture

1. **Frontend:** The client-side is built using React.js and communicates with the backend to fetch real-time AQI data and prediction results.
2. **Backend:** The Node.js server processes requests, manages API interactions, and stores historical data in Firebase.
3. **AI Model:** Python scripts run AI models to generate AQI predictions based on historical data.
4. **Database:** Firebase Realtime Database stores user inputs, prediction results, and historical AQI data.
5. **APIs:** AQI data is fetched using OpenWeatherMap and AirVisual APIs.

---

## 🌟 Highlights

- Predicts AQI for future trips.
- Provides real-time AQI for major tourist spots in India.
- Allows users to compare AQI trends over time.
- Contributes to environmental sustainability by promoting eco-friendly travel planning.

---

## 🛠️ Future Improvements

- Expand AQI coverage to international tourist destinations.
- Integrate additional environmental metrics like weather conditions and pollution sources.
- Enhance the AI model with more sophisticated algorithms for higher accuracy.

---

## 🤝 Contributions

We welcome contributions! Feel free to fork the repository, create a branch, and submit a pull request. You can also report any issues or suggest new features.

---

Let's create a sustainable future, one eco-conscious trip at a time!

---

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
