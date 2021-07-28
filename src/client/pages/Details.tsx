import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IChirp } from "../utils/types";
//import { IChirp }

const Details = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [chirp, setChirp] = useState<IChirp>({ id: id, user: "", message: "" });

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        })();
    }, []);

    function handleClick() {
        history.push("/");
    }

    return (
        <div className="container d-flex align-items-left">
            <div className="col-lg-6">
                <div className="card-body">
                    <h5 className="card-title">User: {chirp.user}</h5>
                    <h5 className="card-text text-muted mb-2">Chirp: {chirp.message}</h5>
                </div>
                <button className="btn btn-primary d-flex justify-content-center" onClick={() => handleClick()}>
                    Home
                </button>
            </div>
        </div>
    );
};

export default Details;
