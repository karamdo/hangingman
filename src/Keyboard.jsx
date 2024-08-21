import { useEffect } from "react";
import Key from "./Key.jsx";

const alphaBet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
);

let isDisable = alphaBet.reduce((crr, res) => ({ ...crr, [res]: false }), {});

export default function Keyboard({ onChecking, onEnd, reset }) {
    useEffect(() => {
        function resetKeys() {
            isDisable = alphaBet.reduce(
                (crr, res) => ({ ...crr, [res]: false }),
                {}
            );
        }
        resetKeys();
        return () => {
            resetKeys();
        };
    }, [onEnd, reset]);

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
