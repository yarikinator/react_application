import React, { useRef, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostLists from "./components/PostLists"
import ButtonForm from "./components/UI/button/ButtonForm";
import InputForm from "./components/UI/input/InputForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JAVA', body: 'Description' },
    { id: 3, title: 'Spring', body: 'Description' }
  ])
  const [post,setPost]=useState({title:'',body:''})


  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts,{...post,id:Date.now}])
    setPost({title:'',body:''})
  }

  return (
    <div className="App">
      <form action="">
        <InputForm
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />


        <InputForm
         value={post.body}
         onChange={e => setPost({...post,body:e.target.value})}
          type="text"
          placeholder="Описание поста" />
        <ButtonForm onClick={addNewPost}>Добавить пост</ButtonForm>
      </form>
      <PostLists posts={posts} title={"Посты про Java and JS"}></PostLists>
    </div>
  );
}

export default App;
