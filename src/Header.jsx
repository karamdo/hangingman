export default function Header({ onReset, children }) {
    return (
        <div className="header">
            <h1>Hanging Man</h1>
            {children}
            <button onClick={onReset}>restart</button>
        </div>
    );
}
