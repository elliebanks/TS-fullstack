import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Compose = () => {

    const history = useHistory();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [content, setContent] = useState<string>('');

    //does this need to be useState('') or useState<Chirp[]>([]); ?

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setContent(e.target.value);

    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //console.log({ user, message });
        let res = await fetch("/api/chirps", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, content })
        });
        if (res.ok) {
            history.push('/');
        } else {
            console.log("Error!")
        }
    };

    return (
        <main className="container bg-light">
            <section>
                <div className="d-flex flex-column w-50 ">
                    <div className="input-group mt-3">
                        <input
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Name"
                            id="name"
                            className="form-control"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
                            id="email"
                            className="form-control"
                        />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div>
                    <textarea className="d-flex flex-column mb-3 w-75 h-25 form-control"
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Tell me your thoughts..."
                        id="content"
                        


                    />
                    {/* <br /> */}
                    <button className="btn btn-primary shadow" onClick={submitChirp}>Submit!</button>
                </div>
            </section>
        </main>
    );
};
// export interface ComposeProps {

// }

export default Compose;