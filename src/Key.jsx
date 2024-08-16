import React from "react";

export default function Key({ children, onClick, isEnd }) {
    return (
        <>
            {!isEnd ? (
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
