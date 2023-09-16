import { useState } from "react"
import "./app.css"
function App() {

  const [steps, setStpes] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  function dateHandler() {
    const dateFormate = date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const newDate = new Date(date)
    if (count == 0) {
      return dateFormate
    } else {
      newDate.setDate(newDate.getDate() + count);
      const newFormatedDate = newDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      return newFormatedDate
    }
  }

  const increaseStep = () => {
    setStpes(steps + 1)
  }
  const decreaseStep = () => {
    setStpes(steps - 1)

  }
  const increaseCount = () => {
    setCount(count + steps)
  }
  const decreaseCount = () => {
    setCount(count - steps)
  }


  return (
    <div className="mainContainer" style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={decreaseStep}>
            -
          </button>
          <p>steps: {steps}</p>
          <button onClick={increaseStep}>+</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
          <button onClick={decreaseCount}>
            -
          </button>
          <p>count: {count}</p>
          <button onClick={increaseCount}>+</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
          <p>{count} days from today is {dateHandler()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
