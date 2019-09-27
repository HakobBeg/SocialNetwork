import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navigation/Navigation";
import TopNews from "./components/TopNews/TopNews";
import Friends from "./components/Friends/Friends";
import Timline from "./components/Timline/Timline";
import {BrowserRouter,Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";

function App() {
    return (
        <BrowserRouter>
        <div>
            <div className="navbarHeader">
                <Header/>
                <NavBar/>
            </div>
            <TopNews/>
            <Friends/>




                <Route path = '/home' component = {Timline}/>
                <Route path = '/messages' component = {Messages}/>


        </div>

        </BrowserRouter>
    );
}


export default App;
