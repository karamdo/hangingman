import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard.jsx";
import Draw from "./Draw.jsx";
import Word from "./Word.jsx";
import Score from "./Score.jsx";
import Header from "./Header.jsx";
import End from "./End.jsx";
import Loader from "./Loader.jsx";

export default function App() {
    const [word, setWord] = useState([]);
    const [isHidden, setIsHidden] = useState({});
    const [toLose, setToLose] = useState(0);
    const [loader, setLoader] = useState(false);
    const [score, setScore] = useState(0);
    let end = 0;

    function checkWinLose() {
        let countFalse = 0;
        for (let letter in isHidden) {
            if (isHidden[letter]) countFalse++;
        }
        end = toLose === 5 ? -1 : countFalse === 0 ? 1 : 0;
    }
    if (Object.keys(isHidden).length) checkWinLose();

    function checkExisting(letter) {
        if (word.find((el) => el === letter))
            setIsHidden(() => ({ ...isHidden, [letter]: false }));
        else setToLose(toLose + 1);
    }

    function handleReset() {
        setScore((score) => (end === 1 ? score + 1 : 0));
        setIsHidden({});
        setWord([]);
        setToLose(0);
    }

    useEffect(() => {
        async function fetchWord() {
            setLoader(true);
            const res = await fetch(
                "https://api.api-ninjas.com/v1/randomword",
                {
                    headers: {
                        "X-Api-Key": "rjqGmKPWaBI5+38sQ9VXIQ==NaALd3dxUkxDtsA9",
                    },
                }
            );
            const data = await res.json();

            // console.log(data["word"][0].split(""));
            // console.log(data.at("word").toUpperCase().split(""));
            const newWord = data["word"][0].toUpperCase().split("");
            console.log(newWord);
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
            setLoader(false);
        }
        fetchWord();
    }, [score]);

    return (
        <div className="app">
            <Header onReset={handleReset}>
                <Score score={score} />
            </Header>
            <End onEnd={end} />
            <Keyboard onChecking={checkExisting} onEnd={end} />
            <Draw onWrong={toLose} />
            {loader ? <Loader /> : <Word word={word} isHidden={isHidden} />}
        </div>
    );
}
