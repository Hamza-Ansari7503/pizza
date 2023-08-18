import "./App.css";
import React from "react";
// import Header from "./component/Header";
import Header2 from "./component/Header2";
import Slider from "./component/Slider";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Header2/>
      <section className="home" id="home">
       <div className="container"  >
       <h4>slider here will replace after</h4>
       </div>
      </section>
      <section className="home" id="home">
       <Slider/>
      </section>
    </>
  );
}

export default App;
