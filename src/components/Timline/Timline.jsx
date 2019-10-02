import React from 'react';
import tmLine from './Timline.module.css'
import Post from "../Post/Post";





const Timline = (props) => {

    debugger;


    let postElements = props.store.state.posts.map(item => <Post user={item.user} text={item.postTxt}/>)
    let newPostElement = React.createRef();

    let addNewPost = () => {

        let text = newPostElement.current.value;
        newPostElement.current.value = '';
        props.store.addPost(text,'Hakob Beglaryan');
    }

    let newPostTextChange = () =>
    {

        props.store.updateNewPost(newPostElement.current.value);

    }


    return (
        <div className={tmLine.timline}>
            <h1>Timline</h1>

            <div className={tmLine.addPost}>
                <textarea  ref={newPostElement}  value={props.store.state.newPostText.value} onChange={newPostTextChange}/>
                <button onClick={addNewPost}>Add Post</button>
            </div>

            {postElements[0]}
            {postElements[1]}
            {postElements[2]}
            {postElements[3]}
            {postElements[4]}
            {postElements[5]}

        </div>

    );

}

export default Timline