import Letter from "./Letter.jsx";

export default function Word({ word, isHidden, onEnd }) {
    return (
        <div className="word">
            {word.map((letter, index) => (
                <Letter
                    isHidden={onEnd ? false : isHidden[letter]}
                    key={index}
                    onEnd={onEnd}
                >
                    {letter}
                </Letter>
            ))}
        </div>
    );
}
