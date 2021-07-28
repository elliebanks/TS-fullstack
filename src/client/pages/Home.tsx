import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChirpCard from "./ChirpCard";
//import Details from "./Details";
//import Compose from "./Compose";

const Home: React.FC<HomeProps> = () => {
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/chirps");
      let chirps = await res.json();
      setChirps(chirps);
    })();
  }),
    [];

  return (
    <>
      <div className="container">
        <h3 className="">Chirper!</h3>
        <Link to="/compose">
          <button className="btn btn-primary">Create a Chirp!</button>
        </Link>
      </div>
      <br />
      <div className="container">
        <div className="row justify-content-center">
          {chirps.map((chirp) => (
            <ChirpCard key={chirp.id} chirp={chirp} />
          ))}
        </div>
      </div>
    </>
  );
};
interface HomeProps {}

export default Home;
