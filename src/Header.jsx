import React from "react";

export default function Header({ onReset }) {
    return (
        <div className="header">
            <h1>Hanging Man</h1>
            <button onClick={onReset}>restart</button>
        </div>
    );
}
