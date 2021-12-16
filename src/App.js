import React, { useState } from 'react';
import Postlist from './components/PostList';
import Mybutton from './components/UI/button/MyButton';
import Myinput from './components/UI/input/MyInput';
import './styles/App.css';
import PostForm from "./components/PostForm";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description 1' },
    { id: 2, title: 'HTML', body: 'Description 2' },
    { id: 3, title: 'CSS', body: 'Description 3' },
  ]);

    const create = (newPost) => {
        setPosts([...posts, newPost]);
    }


  return (
    <div className="App">
      <PostForm create={create}/>
      <Postlist posts={posts} title='Посты про Фронтенд' />
    </div>
  );
}

export default App;
