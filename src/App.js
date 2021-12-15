import React, { useState} from 'react';
import Postlist from './components/PostList';
import './styles/App.css';


function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description 1' },
    { id: 2, title: 'HTML', body: 'Description 2' },
    { id: 3, title: 'CSS', body: 'Description 3' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description 1' },
    { id: 2, title: 'PHP', body: 'Description 2' },
    { id: 3, title: 'Node.js', body: 'Description 3' },
  ]);


  return (    
    <div className="App">
      <Postlist posts={posts} title='Посты про Фронтенд'/>
      <Postlist posts={posts2} title='Посты про Бэкенд' />
    </div>
  );
}

export default App;
