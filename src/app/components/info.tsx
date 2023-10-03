
import React from 'react'

const info = ({book, handleDelete}) => {
    return (
        <div>

                        
            
            <button className="btn" onClick={() => { handleDelete(book) }}>delete</button>
            <p>{book.name}</p> 
            <p>{book.topic}</p> 
            
            <br />           
            
            
            
        </div>
    );


}

export default info;