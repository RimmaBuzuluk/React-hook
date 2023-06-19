import React, { useState } from "react";
import Find from "./Find";
import NewState from "./NewState";
import MobX from "./MobX";
import PersonList from "./PersonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListRandomNumber from "./ListRandomNumber";
import Page from "./Page";
import CardPerson from "./CardPerson";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/person/:id" element={<CardPerson />} />
       
      </Routes>
    </Router>
  );
}

export default App;
