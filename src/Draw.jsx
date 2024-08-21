export default function Draw({ onWrong }) {
    return (
        <div className="draw">
            <div className="DrawContainer">
                <div id="d1"></div>
                <div id="d2"></div>
                <div id="d3"></div>
                <div id="d4"></div>
                <div id="d5"></div>
                <div className={`${onWrong < 1 ? "hide" : ""}`} id="d6"></div>
                <div className={`${onWrong < 2 ? "hide" : ""}`} id="d7"></div>
                <div className={`${onWrong < 3 ? "hide" : ""}`} id="d8"></div>
                <div className={`${onWrong < 4 ? "hide" : ""}`} id="d9"></div>
                <div className={`${onWrong < 5 ? "hide" : ""}`} id="d10"></div>
            </div>
        </div>
    );
}
