import "./App.css";
import React, { useState, useMemo } from "react";

function App({ value, onChange }) {
  const [text, setText] = useState();
  const isValid = useMemo(() => {
    return /^\d+$/.test(text);
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text} onChange={(ev) => setText(ev.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={`fas ${isValid ? 'fa-check' : 'fa-times'}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
