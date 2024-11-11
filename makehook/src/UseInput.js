import './App.css';
import { useState } from 'react';

function UseInput() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
      const {
        target : {value}
      } = event
      let willUpate = true;
      if(typeof validator === "function"){
        willUpate = validator(value)
      }
      if(willUpate) {
        setValue(value);
      }
    }
    return {value, onChange}
  }
  // const maxLen = (value) => !value.includes("@");
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>HELLO</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default UseInput;