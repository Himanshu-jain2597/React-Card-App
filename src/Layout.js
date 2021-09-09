import React from "react";

import Loader  from "./components/Loader/Loader";
import Confirmation from "./components/Confirmation/Confirmation";
import CardApp from "./pages/CardApp/CardApp";

const  Layout = () =>  {
  return (
    <>
      <CardApp />
      <Loader />
      <Confirmation />
      
    </>
  );
}

export default Layout;
