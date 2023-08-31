export default function HoverCounter({count, incrementCount, inc}) {
    return (
        <button onMouseOver={incrementCount}>Increment {inc} Count - {count}</button>
    );
}