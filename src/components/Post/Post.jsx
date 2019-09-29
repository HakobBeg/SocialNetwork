import React from 'react';
import post from './Post.module.css';

const Post = (props) => {



    return (
        <div className={post.post}>

            <div className={post.user}>
                <img src='https://www.marinamirage.com.au/wp-content/uploads/logo_australia-post.png'/>
                <span>{props.user}</span>
            </div>
            <p>{props.text}</p>
        </div>

    );

}

export default Post;