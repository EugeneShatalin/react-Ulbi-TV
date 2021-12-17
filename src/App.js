import React, {useMemo, useState} from 'react';
import Postlist from './components/PostList';
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'HTML', body: 'Description 2'},
    {id: 3, title: 'CSS', body: 'Description 3'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});


  const sortedPosts = useMemo(() => {
    console.log("Отработала функция сортировки постов")
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <Postlist posts={sortAndSearchedPosts} remove={removePost} title='Посты про Фронтенд'/>
    </div>
  );
}

export default App;
