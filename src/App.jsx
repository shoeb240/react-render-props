import Counter from './components/Counter'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  return (
    <>
    <h3>Click Counter</h3>
    <Counter inc="1">
      {(count, incrementCount, inc) => (
        <ClickCounter count={count} incrementCount={incrementCount} inc={inc} />
      )}
    </Counter>
    <br />
    <Counter inc="5">
      {(count, incrementCount, inc) => (
        <ClickCounter count={count} incrementCount={incrementCount}  inc={inc} />
      )}
    </Counter>

    <h3>Hover Counter</h3>
    <Counter inc="1">
      {(count, incrementCount, inc) => (
        <HoverCounter count={count} incrementCount={incrementCount} inc={inc} />
      )}
    </Counter>
    <br />
    <Counter inc="5">
      {(count, incrementCount, inc) => (
        <HoverCounter count={count} incrementCount={incrementCount}  inc={inc} />
      )}
    </Counter>
    </>
  )
}

export default App
