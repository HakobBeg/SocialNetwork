import React from 'react';
import tmLine from './Timline.module.css'
import Post from "../Post/Post";


const Timline = () => {

    return (
        <div className={tmLine.timline}>
            <h1>Timline</h1>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>

    );

}

export default Timline