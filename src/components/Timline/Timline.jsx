import React from 'react';
import tmLine from './Timline.module.css'
import Post from "../Post/Post";
import nav from "../Navigation/Navigarion.module.css";


const Timline = (props) => {

    let postElements = props.posts.posts.map(item => <Post user = {item.user} text = {item.postTxt} addPost = {props.addPost}/>)

    return (
        <div className={tmLine.timline}>
            <h1>Timline</h1>

            <div className={tmLine.addPost}>
                <textarea></textarea>
                <button onClick={()=>{alert();}}>Add Post</button>
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