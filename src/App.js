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

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <Postlist posts={posts} remove={removePost} title='Посты про Фронтенд' />
    </div>
  );
}

export default App;
