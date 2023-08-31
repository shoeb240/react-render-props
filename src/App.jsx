import Counter from './components/Counter'
import ClickCounter from './components/ClickCounter'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
