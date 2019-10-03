import React from 'react';
import tmLine from './Timline.module.css'
import Post from "../Post/Post";
import {AddPostActionCreator} from "../../Redux/AddPostReducer";





const Timline = (props) => {




    let postElements = props.store.state.posts.map(item => <Post user={item.user} text={item.postTxt}/>)
    let newPostElement = React.createRef();

    let addNewPost = () => {



        let text = newPostElement.current.value;
        newPostElement.current.value = '';
        props.store.dispatch(AddPostActionCreator(text,'Hakob Beglaryan'));

    }

    let newPostTextChange = () =>
    {

        props.store.dispatch({type: 'UPDATE-NEW-POST',newText:newPostElement.current.value});

    }


    return (
        <div className={tmLine.timline}>
            <h1>Timline</h1>

            <div className={tmLine.addPost}>
                <textarea  ref={newPostElement}  value={props.store.state.newPostText.value} onChange={newPostTextChange}/>
                <button onClick={addNewPost}>Add Post</button>
            </div>

            {postElements}

        </div>

    );

}

export default Timline