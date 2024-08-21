import { useEffect, useState } from "react";
import Keyboard from "./Keyboard.jsx";
import Draw from "./Draw.jsx";
import Word from "./Word.jsx";
// eslint-disable-next-line no-unused-vars
import Score from "./Score.jsx";
import Header from "./Header.jsx";
import End from "./End.jsx";
import Loader from "./Loader.jsx";

let score = 0;

export default function App() {
    const [word, setWord] = useState([]);
    const [isHidden, setIsHidden] = useState({});
    const [toLose, setToLose] = useState(0);
    const [loader, setLoader] = useState(false);
    const [reset, setReset] = useState(0);
    let end = 0;

    function checkWinLose() {
        let countFalse = 0;
        for (let letter in isHidden) {
            if (isHidden[letter]) countFalse++;
        }
        end = toLose === 5 ? -1 : countFalse === 0 ? 1 : 0;
        if (end) score = end === 1 ? score + 1 : 0;
    }
    if (Object.keys(isHidden).length) checkWinLose();

    function checkExisting(letter) {
        if (word.find((el) => el === letter))
            setIsHidden(() => ({ ...isHidden, [letter]: false }));
        else setToLose(toLose + 1);
    }

    function handleReset() {
        setReset(reset + 1);
        setIsHidden({});
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

            const newWord = data["word"][0].toUpperCase().split("");
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
    }, [reset]);

    return (
        <div className="app">
            <Header onReset={handleReset}>
                {/* <Score score={score} /> */}
            </Header>
            <End onEnd={end} />
            <div className="main">
                <div className={`${loader ? "loader" : "game"}`}>
                    {loader ? (
                        <Loader />
                    ) : (
                        <>
                            <Keyboard onChecking={checkExisting} onEnd={end} />
                            <Draw onWrong={toLose} />
                            <Word
                                word={word}
                                isHidden={isHidden}
                                onEnd={end}
                                reset={reset}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
