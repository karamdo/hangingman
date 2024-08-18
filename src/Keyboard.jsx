import React from "react";
import Key from "./Key.jsx";

const alphaBet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
);

let isDisable = alphaBet.reduce((crr, res) => ({ ...crr, [res]: false }), {});

export default function Keyboard({ onChecking, onEnd }) {
    if (onEnd) {
        isDisable = alphaBet.reduce(
            (crr, res) => ({ ...crr, [res]: false }),
            {}
        );
    }

    function handleClick(letter) {
        isDisable[letter] = true;
        onChecking(letter);
    }

    return (
        <div className="keyboard">
            {alphaBet.map((letter) => (
                <Key
                    key={letter}
                    onClick={handleClick}
                    onEnd={onEnd}
                    isDisable={isDisable[letter]}
                >
                    {letter}
                </Key>
            ))}
        </div>
    );
}
