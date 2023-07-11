import React, { useState } from "react";
import { Link } from "react-router-dom";

function ButtAPI() {

  return (
    <div>
        <Link to="/api">
            <button className="butAPI"> HELLO</button>   
        </Link>
    </div>

  );
}

export default ButtAPI;
