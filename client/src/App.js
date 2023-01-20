import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";



const App = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3030/")
      .then((response) => response.json())
      .then((data) => {
      console.log(data.animalList);
        setPosts(data.animalList);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

  return (
    <table>
 
  <thead >
    <tr>
      <th scope="col">Name/Age</th>
      <th className="especial"></th>
      <th className="especial">Species</th>
    </tr>
  </thead>
 
  {posts.map((post)=>{return(
  <tbody>{
    
    <>
    <tr>
      <td className="conjunto">{post.name} </td>
      <td className="conjunto">{post.age} </td>
      <td className="especie">{post.species} </td>
   
    </tr>
   

   
   </>
  
   
   }
  </tbody>
      )})}
</table>
  
  );
};

export default App;
