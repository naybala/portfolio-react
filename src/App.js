import React,{Fragment ,useEffect , useState} from "react";
import ScrollTop from "./Component/ScrollTop/ScrollTop";
import Navbar from "./Component/Navbar";
import ShowCase from "./Component/ShowCase";
import SignUp from "./Component/SignUp";
import Document from "./Component/Document/Document";
import Tutorial from "./Component/Tutorial/Tuotrial";
import Blog  from "./Component/Blog/Blog";
import Community from "./Component/Community/Community";
import Footer from "./Component/Footer/Footer";
import Loading from "./Component/Loading/Loading";
import "./App.css"
function App() {
  const [loader , setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },3000);
  })


  return (
    <Fragment>
      {loader ? 
        <div className="App">
        <Loading/>
        </div> 
        : 
        <div className="App">
          <Navbar/>
          <ShowCase/>
          <SignUp/>
          <Document/>
          <Tutorial/>
          <ScrollTop/>
          <Blog/>
          <Community/>
          <Footer/>
        </div>}
    </Fragment>
  );
}
export default App;
