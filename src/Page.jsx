import React, { useState } from "react";
import Find from "./Find";
import NewState from "./NewState";
import MobX from "./MobX";
import PersonList from "./PersonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListRandomNumber from "./ListRandomNumber";
import ButtAPI from "./ButtAPI";
import Editing from "./Editing";

function Page() {

  return (
        <div>
            <ListRandomNumber/>
            <NewState/>
            <Find/>
            <MobX/>
            <PersonList/> 
            <ButtAPI/>
            <Editing/>
         </div>

  );
}

export default Page;