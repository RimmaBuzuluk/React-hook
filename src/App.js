import React, { useState } from "react";
import Find from "./Find";
import NewState from "./NewState";
import MobX from "./MobX";
import PersonList from "./PersonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListRandomNumber from "./ListRandomNumber";
import Page from "./Page";
import CardPerson from "./CardPerson";
import APIPage from "./APIPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/person/:id" element={<CardPerson />} />
        <Route path="/api" element={<APIPage/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
