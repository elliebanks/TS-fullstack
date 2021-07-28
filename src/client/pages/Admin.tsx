import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IChirp } from '../utils/types';

const Admin: React.FC<AdminProps> = () => {

    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [chirp, setChirp] = useState<IChirp>({ id: id, user: '', message: ''});
    const [user, setUser] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const editChirp = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //console.log({ user, message });
        let res = await fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, message })
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
            setUser(chirp.user);
            setMessage(chirp.message);
        }) ();
    }, [id]);

    return (
        <main className="container">
            <section>
                <div>
                    <form>
                        <label htmlFor="user">Username</label>
                        <input
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Username"
                            id="user"
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="text">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            className="form-control"
                        />
                        <button
                            onClick={editChirp}
                            className="form-control"

                        >
                            Edit Chirp!
                        </button>
                        <button
                            onClick={deleteChirp}
                            className="form-control"

                        >
                            Delete Chirp!
                        </button>
                    </form>
                </div>
            </section>
        </main>







    )




}

interface AdminProps {
    
}

export default Admin;