import React,{useEffect, useState} from 'react'


// 1st render = [0]
// 2nd render = [1] // here useEffect list will be increment , dependency
export const Dashboard = () => {
// UseEffect(callback , dependencyList)
// component life cycle phases 
// for both functional and class components
// 1.mounting , 2.updating , 3.unmounting phase

const [count , setCount] = useState(0);// here count is state
const[ age , setAge] = useState(22);

// increment the count
// increment the age 
  useEffect(() =>{
    console.log("Count is changed");
  },[count]) // dependence list
  // 1st render = [0]  dependence List
  // 2nd render = [1]  dependence list  changed
  //3rd render = [0] 
  useEffect(() =>{
    console.log("Age is changed");
  },[age]) 
  // 1st render = [22]
  // 2nd render =[22]  not changed
  // 3rd render = [23] is cahnged
  useEffect(() =>{
    console.log("count / age changerd");
  },[count , age]) 
  // 1st render = [0 , 22]
  // 2nd render = [1 , 22]
   // 3rd render = [23] is cahnged
  return (
    <>
  
  <h1>Dashboard page mounting and updating phases</h1>{/* when the sink in UI or painted in UI , the call back will be execuiterd  */}
  <p>Count : {count}</p> 
  <p>Age : {age} </p>
  <button onClick={() => setCount(count+1)} >Increment</button>
   <button onClick={() => setAge(age + 1)}> Increment Age</button>

   </>
  )
}
