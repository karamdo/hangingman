import React from "react";
import Key from "./Key.jsx";

export default function Keyboard({ onChecking, isEnd }) {
    const s = "ABCDEFJHIGKLMNOPQRSTUVWXYZ_";
    return (
        <div className="keyboard">
            {s.split("").map((letter) => (
                <Key key={letter} onClick={onChecking} isEnd={isEnd}>
                    {letter}
                </Key>
            ))}
        </div>
    );
}
