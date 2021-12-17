import React, {useState} from 'react';
import Postlist from './components/PostList';
import Myinput from './components/UI/input/MyInput';
import './styles/App.css';
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'HTML', body: 'Description 2'},
    {id: 3, title: 'CSS', body: 'Description 3'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const getSortedPosts = () => {
    console.log("Отработала функция сортировки постов")
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }

    return posts;
  }

  const sortedPost = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Myinput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length
        ?
        <Postlist posts={sortedPost} remove={removePost} title='Посты про Фронтенд'/>
        :
        <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }

    </div>
  );
}

export default App;
