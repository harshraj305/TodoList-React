import React from "react";
import { useState } from "react";

import submitAudio1 from '../assets/sounds/kuru1.mp3';
import submitAudio2 from '../assets/sounds/kuru2.mp3';

function InputBar({ addTask }) {

    const [inputTask, setInputTask] = useState('');

    const sounds = [submitAudio1, submitAudio2];

    function handleOnChange(e) {
        console.log(e.target.value);
        setInputTask(e.target.value);
    }

    function handleSubmit() {

        addTask(inputTask);
        setInputTask('');

        // play sound on click

        const randomint = Math.floor(Math.random() * sounds.length);
        const submitSound = sounds[randomint];
        const playingSound = new Audio(submitSound);
        playingSound.play();
    }

    function handleEnterOnInput(e) {
        console.log(e.key);

        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="input-section">
            <input
                className="todoinput"
                type="text"
                onKeyDown={handleEnterOnInput}
                value={inputTask}
                onChange={handleOnChange}
            />
            <button
                className="additembutton"
                // type="submit"
                onClick={handleSubmit}
            >
                Add Item</button>
        </div>
    );
}

export default InputBar;