import React, {useState} from 'react';
import Myinput from "./UI/input/MyInput";
import Mybutton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <Myinput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})} />

            <Myinput type="text"
                     placeholder="Описание поста"
                     value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})} />
            <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
        </form>
    );
};

export default PostForm;