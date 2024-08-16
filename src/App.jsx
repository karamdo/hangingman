import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard.jsx";
import Draw from "./Draw.jsx";
import Word from "./Word.jsx";
import Header from "./Header.jsx";
import End from "./End.jsx";

export default function App() {
    const [word, setWord] = useState("karam Do".toUpperCase().split(""));
    const [isHidden, setIsHidden] = useState(() =>
        word.reduce(
            (crr, letter) => ({
                ...crr,
                [letter]: letter === " " ? false : true,
            }),
            {}
        )
    );
    const [toLose, setToLose] = useState(0);
    let countFalse = 0;
    for (let letter in isHidden) {
        if (isHidden[letter]) countFalse++;
    }
    const end = toLose === 5 ? -1 : countFalse === 0 ? 1 : 0;

    function checkExisting(letter) {
        if (word.find((el) => el === letter))
            setIsHidden(() => ({ ...isHidden, [letter]: false }));
        else setToLose(toLose + 1);
    }

    function handleReset() {
        const newWord = "kokai".toUpperCase().split("");
        setWord(newWord);
        setIsHidden(
            newWord.reduce(
                (crr, letter) => ({
                    ...crr,
                    [letter]: letter === " " ? false : true,
                }),
                {}
            )
        );
        setToLose(0);
    }

    return (
        <div className="app">
            <Header onReset={handleReset} />
            <End onEnd={end} />
            <Keyboard onChecking={checkExisting} isEnd={end} />
            <Draw onWrong={toLose} />
            <Word word={word} isHidden={isHidden} />
        </div>
    );
}
