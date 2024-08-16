import React, { useState } from "react";
import Letter from "./Letter.jsx";

export default function Word({ word, isHidden }) {
    return (
        <div className="word">
            {word.map((letter, index) => (
                <Letter isHidden={isHidden[letter]} key={index}>
                    {letter}
                </Letter>
            ))}
        </div>
    );
}
