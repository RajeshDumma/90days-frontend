import React,  {useState}from 'react'

export const Click = () => {
      
    const [count , setCount] = useState(0);
    const clickHandler = () => {
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }
    
  return (
    <>
   
    <button onClick={clickHandler}>click Me</button>
   <p> {count}</p>
    </>
  )
}
