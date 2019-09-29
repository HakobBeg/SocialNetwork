import React from 'react';
import messages from './Messages.module.css';

import { NavLink} from "react-router-dom";
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

        <div className={messages.messageContent}>
            <span>Hi! how are You?</span>
        </div>
        </div>
    );
}


const MessageCont = (props)=>
{

    return(
      <div className={messages.messageCont}>
            <h1>{props.user.userName + ' ' + props.user.userLastName}</h1>
            <Message/>
      </div>
    );

}


const Messages = (props) => {

    let friendField = props.users.users.map(item => <Friend path={item.id} userName={item.userName} userLastName={item.userLastName}/>);
    return (
        <div className={messages.messageBox}>
            <h1>Messages</h1>

            <div className={messages.messagesContent}>
                <div className={messages.peoples}>
                    {friendField[0]}
                    {friendField[1]}
                    {friendField[2]}
                    {friendField[3]}
                    {friendField[4]}
                    {friendField[5]}
                    {friendField[6]}
                    {friendField[7]}
                    {friendField[8]}


                </div>
                <div className={messages.dialog}>
                    <Route path = '/messages/1'  render={()=><MessageCont user={props.users.users[1]}/>}/>
                    <Route path = '/messages/2'  render={()=><MessageCont user={props.users.users[2]}/>}/>
                    <Route path = '/messages/3'  render={()=><MessageCont user={props.users.users[3]}/>}/>
                    <Route path = '/messages/4'  render={()=><MessageCont user={props.users.users[4]}/>}/>
                    <Route path = '/messages/5'  render={()=><MessageCont user={props.users.users[5]}/>}/>
                    <Route path = '/messages/6'  render={()=><MessageCont user={props.users.users[6]}/>}/>
                    <Route path = '/messages/7'  render={()=><MessageCont user={props.users.users[7]}/>}/>
                    <Route path = '/messages/8'  render={()=><MessageCont user={props.users.users[8]}/>}/>
                    <Route path = '/messages/9'  render={()=><MessageCont user={props.users.users[9]}/>}/>
                </div>
                </div>
            </div>

            );

            }

            export default Messages;