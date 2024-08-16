import React from "react";

export default function End({ onEnd }) {
    return (
        <div className={`end ${!onEnd ? "hide" : ""}`}>
            {onEnd === -1 && <h1 style={{ color: "tomato" }}>YOU LOSE</h1>}
            {onEnd === 1 && <h1 style={{ color: "lime" }}>YOU WON</h1>}
        </div>
    );
}
