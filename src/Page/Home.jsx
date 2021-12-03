import React, { useContext } from "react";
import "./Home.css";

import InputSearch from "../Components/InputSearch";
import User from "../Components/User/User";

import Context from "../Context";

function Home() {
  const context = useContext(Context);

  return (
    <div className="Home">
      <InputSearch />
      {context.state.user ? <User /> : ""}
      <hr className='hr-bottom'/>
    </div>
  );
}

export default Home;
