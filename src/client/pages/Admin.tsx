import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IChirp } from '../utils/types';

const Admin = () => {

    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [chirp, setChirp] = useState<IChirp>({ id: id, name: '', content: ''});
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const editChirp = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //console.log({ user, message });
        let res = await fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, content })
        });
        if (res.ok) {
            history.push('/');
        } else {
            console.log("Error!")
        }
    };

    const deleteChirp = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        let res = await fetch(`/api/chirps/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            history.push('/');
        } else {
            console.log("Error!")
        }
    };

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        }) ();
    }, []);

    return (
        <main className="container d-flex justify-content-center w-75 bg-light">
            <section>
                <div>
                    <form className="d-flex flex-column">
                        {/* <label htmlFor="user">Username</label> */}
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={chirp.name}
                            id="name"
                            type="text"
                            className="form-control"
                            
                        />
                        {/* <label htmlFor="text">Message</label> */}
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder = {chirp.content}
                            id="content"
                            className="form-control mb-3"
                        />
                        <button type="button"
                            onClick={editChirp}
                            className="mb-3 btn btn-primary btn-sm"

                        >
                            Edit Chirp!
                        </button>
                        <button type="button"
                            onClick={deleteChirp}
                            className="btn btn-primary btn-sm"

                        >
                            Delete Chirp!
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

// interface AdminProps {
    
// }

export default Admin;