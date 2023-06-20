import React from 'react';
import './ChatMessage.css';
import Avatar from '../assets/Avatar';


export const ChatMessage = ({ message }) => {
  <div className='chat-message-center'>
     <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
      {message.user === 'gpt' && (<Avatar />)}
     </div>
     <div className="mesage">{message.message}</div>
  </div>
  
   
};

// Definindo os hooks dos estados vamos utilizar 