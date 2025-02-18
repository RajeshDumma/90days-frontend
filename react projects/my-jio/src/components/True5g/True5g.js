import React from 'react';

function True5g({ name }) {  // Ensure correct destructuring
 
  const { userName, age, study } = name; // Correct destructuring

  return (
    <>
      <div>True5g</div>
      <h4>Welcome to My World!</h4>
      <p> userName: {userName}</p>
      <p>Age: {age}</p>
      <p>Study: {study}</p>
    </>
  );
}

export default True5g;
