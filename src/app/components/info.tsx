"use client"

import React, { useState } from 'react';


const info = ({book, handleDelete, handleUpdate}) => {

    const [inputText, setInputText] = useState('');

    return (
        <div>

              
            
            <button className="btn" onClick={() => { handleDelete(book) }}>delete</button>
            <br />  
            <button className="btn btn-primary" onClick={() => {handleUpdate(book, inputText)}}>Update</button>
            
            <input type="text" value={inputText} onChange={ (e) =>  setInputText(e.target.value)} />
            

            <br />
            
            <p>{book.name}</p> 
            <p>{book.topic}</p> 
            
            <br />           
            
            
            
        </div>
    );


}

export default info;