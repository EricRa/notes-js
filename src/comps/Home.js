import React from "react";

const Home = () => {

    let noteNumber = 1;



    return (
        <div className="home-container">
            <form id="noteForm"></form>
                <label htmlFor="noteTextArea">
                    Note { noteNumber }
                </label>
                <textarea
                    name="Note Text"
                    className="note-text-area"
                    type="text"
                    id="noteText"
                    autoFocus
                    cols="60"
                    rows="20"
                    placeholder="Start your note here!"
                    spellCheck="true"
                >
                </textarea>

        </div>
    )
}

export default Home;