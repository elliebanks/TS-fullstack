import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = () => {

    const history = useHistory();
    const [user, setUser] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    //does this need to be useState('') or useState<Chirp[]>([]); ?

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setUser(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setMessage(e.target.value);

    const sendChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({ user, message });
        let res = await fetch("/api/chirps", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user, message: message})
        });
        if (res.ok) {
            history.push('/');
        } else {
            console.log("Error!")
        }
    };

    return (
        <main className="container">
            <section>
                <div>
                    <form>
                        <label htmlFor="user">Username</label>
                        <input
                            value={user}
                            onChange={handleUserChange}
                            placeholder="Username"
                            id="user"
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="text">Chirp</label>
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="What's up?"
                            id="message"
                            className="form-control"
                        />
                        <button
                            onClick={sendChirp}
                            className="form-control"

                        >
                            Send Chirp!
                        </button>
                    </form>
                </div>
            </section>
        </main>





    )
}
export interface ComposeProps {
    
}

export default Compose;