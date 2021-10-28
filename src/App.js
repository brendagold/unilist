import React, { useState, useEffect } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import UniList from "./components/UniList";


function App() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('http://universities.hipolabs.com/search?country=Nigeria')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        setLoading(false);
        setError('fetch failed');
      });
  }, []);

  if (loading) {
    return <p>loading..</p>;
  }

  if (error !== '') {
    return <p>ERROR: {error}</p>;
  }
  
 console.log(`This is ${data}`)
  return (
    <div className="App">
      <Nav />
      <Hero />
      <UniList data={data} />
    </div>
  );
}

export default App;
