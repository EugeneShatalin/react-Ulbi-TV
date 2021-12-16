import React, { useState} from 'react';
import Postlist from './components/PostList';
import Mybutton from './components/UI/button/MyButton';
import './styles/App.css';


function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description 1' },
    { id: 2, title: 'HTML', body: 'Description 2' },
    { id: 3, title: 'CSS', body: 'Description 3' },
  ]); 


  return (    
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <Mybutton disabled>Создать пост</Mybutton>
      </form>
      <Postlist posts={posts} title='Посты про Фронтенд'/>    
    </div>
  );
}

export default App;
