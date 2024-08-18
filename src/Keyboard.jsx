import React from "react";
import Key from "./Key.jsx";

export default function Keyboard({ onChecking, onEnd }) {
    const s = "ABCDEFJHIGKLMNOPQRSTUVWXYZ";
    return (
        <div className="keyboard">
            {s.split("").map((letter) => (
                <Key key={letter} onClick={onChecking} onEnd={onEnd}>
                    {letter}
                </Key>
            ))}
        </div>
    );
}
