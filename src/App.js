import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";
import BookingPage from './BookingPage.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchAPI, submitAPI } from './api.js';

function App() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookedTimes, setBookedTimes] = useState([]);

  const initializeTimes = async (date = new Date().toISOString().split("T")[0]) => {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
      console.error("Invalid date:", date);
      return [];
    }

    console.log("Fetching available times for:", dateObj);
    const times = await fetchAPI(dateObj);
    const filteredTimes = times.filter(time => !bookedTimes.includes(time));
    setAvailableTimes(filteredTimes);
    return filteredTimes;
  };


  const updateBookedTimes = (time) => {
    setBookedTimes((prevBookedTimes) => [...prevBookedTimes, time]);
  };


  useEffect(() => {
    initializeTimes();
  }, [bookedTimes]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlights />
              <Testimonials />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/bookingpage"
          element={
            <BookingPage
              initializeTimes={initializeTimes}
              setAvailableTimes={setAvailableTimes}
              availableTimes={availableTimes}
              bookedTimes={bookedTimes}
              updateBookedTimes={updateBookedTimes}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
