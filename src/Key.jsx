import React from "react";

export default function Key({ children, onClick, onEnd }) {
    return (
        <>
            {!onEnd ? (
                <button className="key" onClick={() => onClick(children)}>
                    {children}
                </button>
            ) : (
                <button className="key" disabled>
                    {children}
                </button>
            )}
        </>
    );
}
