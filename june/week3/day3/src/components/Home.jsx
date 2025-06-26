import React from "react";
import "./Home.css";
import HomeChild from "./homeChild";

function Home({ value }) {
    const arr = [1, 2, 3, 4,5]
    const obj = {
        name: 'Sankar',
        age: 20
    }
  return (
    <div>
      <div id="home">
        <h1>Hello {value}</h1>
      </div>
      <HomeChild value={value} arr={arr} obj={obj}/>
    </div>
  );
}

export default Home;
