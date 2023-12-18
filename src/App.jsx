import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostLists from  "./components/PostLists"

function App() {
  const [post,setPost]=useState([
    {id:1, title:'JavaScript',body:'Description'},
    {id:2, title:'JAVA',body:'Description'},
    {id:3, title:'Python',body:'Description'}
  ])

  return (
    <div className="App">
        <PostLists posts={post}></PostLists>
    </div>
  );
}

export default App;
