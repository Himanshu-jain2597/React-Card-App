import React from "react";

import Loader  from "./components/Loader/Loader";
import CardApp from "./pages/CardApp/CardApp";

const  Layout = () =>  {
  return (
    <>
      <CardApp />
      <Loader />
      
    </>
  );
}

export default Layout;
