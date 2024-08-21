export default function Letter({ children, isHidden }) {
    return (
        <div className="letter">
            <h1 className={`${isHidden ? "hide" : ""}`}>{children}</h1>
            <div className="underline"></div>
        </div>
    );
}
