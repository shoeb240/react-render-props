export default function ClickCounter({count, incrementCount, inc}) {
    return (
        <button onClick={incrementCount}>Increment {inc} Count - {count}</button>
    );
}