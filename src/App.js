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
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    setLoading(true);


    fetch('https://unilist-b.herokuapp.com', {
      mode: 'cors',
      method: 'GET',
      headers: headers
  })
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
  
 
  return (
    <div className="App">
      <Nav />
      <Hero />
      <UniList data={data} />
    </div>
  );
}

export default App;
