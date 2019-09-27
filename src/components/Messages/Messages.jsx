import React from 'react';
import messages from './Messages.module.css';

import {BrowserRouter, NavLink} from "react-router-dom";
import {Route} from "react-router-dom";



const Friend = (props) => {
    return (
        <div className={messages.friendItem}>
            <NavLink to={'/messages/' + props.path} activeClassName={messages.active}>
                <img src={props.imgPath}/>
                <span>{props.userName + ' ' + props.userLastName}</span>
            </NavLink>
        </div>


    );
}

const Message = () => {
    return (<div className={messages.mesDiv}>
            <img src='https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg'/>
        <div className={messages.messageContent}>

        </div>
        </div>
    );
}


const Messages = () => {

    return (
        <div className={messages.messageBox}>
            <h1>Messages</h1>

            <div className={messages.messagesContent}>
                <div className={messages.peoples}>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Hakob' userLastName='Beglaryan' path='1'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Nelson' userLastName='Mandela' path='2'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Arnold' userLastName='Babikyan' path='3'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Urukbek' userLastName='Simonyan' path='4'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Antonio' userLastName='Vivaldi' path='5'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Patric' userLastName='Vivaldi' path='6'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Sergio' userLastName='Chishil' path='7'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Gazan' userLastName='Militos' path='8'/>
                    <Friend imgPath='https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                            userName='Valoc' userLastName='Katuyan' path='9'/>

                </div>
                <div className={messages.dialog}>
                    <Route path = '/messages/1' component = {Message}/>
                </div>
                </div>
            </div>

            );

            }

            export default Messages;