import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SankaVarmekostanden from "./components/SankaVarmekostander/SankaVarmekostanden";
import Luftvarmepump from "./components/Luftvarmepump/Luftvarmepump";
import LuftVattenVarmePump from "./components/LuftVattenVarmePump/LuftVattenVarmePump";
import Bergvarme from "./components/Bergvarme/Bergvarme";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {
  setWeatherData,
  getCustomerData,
} from "./redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWheaterData } from "./api/index";
import { addNews, setBingNews } from "./redux-toolkit/news/newsSlice";
function App() {
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);

  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "SE",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };
  const getTipsSearch = async () => {
    try {
      const resp = fetch(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=s%C3%A4nka%20v%C3%A4rmekostnaden&num=100`,
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(addNews(response.results)))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getBingnews = async () => {
    const options = {
      method: "GET",
      headers: {
        "Accept-Language": "se",
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      },
    };
    try {
      const resp = fetch(
        "https://bing-news-search1.p.rapidapi.com/news/search?q=v%C3%A4rmepump&safeSearch=Off&textFormat=Raw&freshness=Month",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(setBingNews(response.value)))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWheaterData(customerData.coords.lat, customerData.coords.lng).then(
      (data) => {
        dispatch(setWeatherData(data));
      }
    );
    getTipsSearch();
    getBingnews();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sankavarmekostnaden"
            element={<SankaVarmekostanden />}
          />
          <Route path="/luftvarmepump" element={<Luftvarmepump />} />
          <Route
            path="/luftvattenvarmepump"
            element={<LuftVattenVarmePump />}
          />
          <Route path="/bergvarme" element={<Bergvarme />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
