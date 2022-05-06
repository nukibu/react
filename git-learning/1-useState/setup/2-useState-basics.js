import React, { useState } from 'react';
// useState = Function

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)

  const startValue = 'random title'
  const setValue = 'Hello World'

  const [text, setText] = useState(startValue)

  const handleClick = () => {
    if (text === startValue){
      setText(setValue)
    } else {
      setText(startValue)
    }
    
  }

  return (
      <React.Fragment>
        <h1>{text}</h1>
        <button className = 'btn' onClick={handleClick}>change title</button>
      </React.Fragment>
    )
};

export default UseStateBasics;
