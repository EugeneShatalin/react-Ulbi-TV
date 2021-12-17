import React, {useMemo, useState} from 'react';
import Postlist from './components/PostList';
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import Mybutton from "./components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'HTML', body: 'Description 2'},
    {id: 3, title: 'CSS', body: 'Description 3'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)


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
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <Mybutton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </Mybutton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <Postlist posts={sortAndSearchedPosts} remove={removePost} title='Посты про Фронтенд'/>
    </div>
  );
}

export default App;
