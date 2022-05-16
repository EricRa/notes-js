import React from "react";

const About = () => {

    return (
        <div className="about-container">
            <p>
                Notes-js is a notepad web app created using JS and React.  
            </p>
            <p>
                All of the app's code is run locally in your browser.  Notes are only stored locally on your computer.  No notes are kept on a remote server.  This provides privacy for the notes you create.  The downside is that all notes will disappear if you clear your browser's cache.  So be sure to make backups of any notes before doing this!
            </p>
        </div>
    )
}

export default About;