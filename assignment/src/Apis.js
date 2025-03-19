import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Apis = () => {
  const [data, setData] = useState([]); // State to store fetched data

  async function apiData() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data); // Set the data in the state
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    apiData(); // Call apiData on component mount
   
  }, []); // Empty dependency array to call only once when the component mounts

  return (
    <div>
      <h1>API Data</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <div style={{border:"1px black", color:"lightblue"}}>
              <li>key={item.id}{item.title}</li> 
              </div> // Display titles of posts
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Apis;
