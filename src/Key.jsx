import React from "react";

export default function Key({ children, onClick, onEnd, isDisable }) {
    function handleClick() {
        onClick(children);
    }

    return (
        <>
            {!onEnd ? (
                <button
                    className={`key ${isDisable ? "after-click" : ""}`}
                    onClick={handleClick}
                    disabled={isDisable}
                >
                    {children}
                </button>
            ) : (
                <button className="key after-click">{children}</button>
            )}
        </>
    );
}
