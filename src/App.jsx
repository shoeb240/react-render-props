import Counter from './components/Counter'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  return (
    <>
    <h3>Click Counter</h3>
    <Counter inc="1">
      {(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
      )}
    </Counter>
    <br />
    <Counter inc="5">
      {(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
      )}
    </Counter>

    <h3>Hover Counter</h3>
    <Counter inc="1">
      {(count, incrementCount) => (
        <HoverCounter count={count} incrementCount={incrementCount} />
      )}
    </Counter>
    <br />
    <Counter inc="5">
      {(count, incrementCount) => (
        <HoverCounter count={count} incrementCount={incrementCount} />
      )}
    </Counter>
    </>
  )
}

export default App
