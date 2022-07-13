import React from "react";
import ScrollTop from "./Component/ScrollTop/ScrollTop";
import Navbar from "./Component/Navbar";
import ShowCase from "./Component/ShowCase";
import SignUp from "./Component/SignUp";
import Document from "./Component/Document/Document";
import Tutorial from "./Component/Tutorial/Tuotrial";
import Blog  from "./Component/Blog/Blog";
import Community from "./Component/Community/Community";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShowCase/>
      <SignUp/>
      <Document/>
      <Tutorial/>
      <ScrollTop/>
      <Blog/>
      <Community/>
    </div>
  );
}
export default App;
