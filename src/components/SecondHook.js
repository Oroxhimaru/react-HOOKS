import React, { useEffect, useState } from 'react';

const SecondHook = () => {
    const [resourceType, setResourceType] = useState("users");
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
      }, [resourceType])
 
      useEffect(() => {
        console.log("This is my side effect")
      
        return () => {
          console.log("This is my clean up")
        }
      }, [resourceType])
 
    return (
    <>
    <h1>UseEffect</h1>
      <div>
        <button onClick={() => {setResourceType('posts')}}>Posts</button>
        <button onClick={() => {setResourceType('users')}}>Users</button>
        <button onClick={() => {setResourceType('comments')}}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
      {items.map((item) => {
         return (
            <pre> {JSON.stringify(item)} </pre>
         )
      })}
    </>
  )
}

export default SecondHook