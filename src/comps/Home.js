import React from "react";

const Home = () => {

    let noteNumber = 1;

    const handleSubmit = () => {

    }

    return (
        <div className="home-container">
            <form id="noteForm" onSubmit={handleSubmit} ></form>
                <label htmlFor="noteTextArea">
                    Note { noteNumber }
                </label>
                <textarea
                    name="noteText"
                    >
                    
                </textarea>

        </div>
    )
}

export default Home;