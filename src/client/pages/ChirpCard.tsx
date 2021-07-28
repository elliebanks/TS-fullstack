import React from "react";
import { Link } from "react-router-dom";

const ChirpCard = ({ chirp }) => {
  return (
    <>
      <div className="card col-lg-10 text-center shadow">
        <div className="card-body">
          <h5 className="card-title">{chirp.user}</h5>
          <p className="card-text">{chirp.message}</p>
          <Link to={`/details/${chirp.id}`} className="card-link">
            Details
          </Link>
          <Link to={`/admin/${chirp.id}`} className="card-link">
            Admin
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChirpCard;
