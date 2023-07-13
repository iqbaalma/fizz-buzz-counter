import React from "react";
import { createRoot } from 'react-dom/client';

function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz ({count})</p>;
  }

  if (count % 5 === 0) {
    return <p>Fizz ({count})</p>
  }

  if (count % 7 === 0) {
    return <p>Buzz ({count})</p>
  }

    return <p>{count}</p>;
}
   
  function IncreaseButton({ increase }) {
    return (
      <div>
        <button onClick={increase}>+ increase</button>
      </div>
    );
  }
   
  function ResetButton({ reset }) {
    return (
      <div>
        <button onClick={reset}>- reset</button>
      </div>
    );
  }

class CounterApp extends React.Component {
    constructor (props) {
        super(props);
        
        // initialize count value in state
        this.state = {
            count: 0
        };

        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onIncreaseEventHandler() {
        this.setState((previousState) => {
          return {
            count: previousState.count + 1
          };
        });
      }
      onResetEventHandler() {
        this.setState(() => {
          return {
            count: 0
          };
        });
      }

    render() {
        return (
          <div>
            <IncreaseButton increase={this.onIncreaseEventHandler} />
            <CounterDisplay count={this.state.count} />
            <ResetButton reset={this.onResetEventHandler} />
          </div>
        );
      }
    }

  export default CounterApp;

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);