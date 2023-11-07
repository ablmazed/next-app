'use client'

import { useEffect, useState } from "react";
import Info from "@/app/components/info"

const page = () => {
    const [books, setBooks] = useState([])

    const fetchBook = async () => {
        const response = await fetch("api/book");
        const data = await response.json();
        setBooks(data);
    }

    //useEffect(fetchBook);
    useEffect( () => {
        fetchBook();
    },[] )


    const handleDelete = async (book) => {
        console.log( 'delete clicked', book)

        const confirmed = confirm("Are you sure to delete?");
        if(confirmed){
            try {
                await fetch(`api/book/${book._id.toString()}`, {
                    method : "DELETE"
                })


                const filterBooks = books.filter((item) => item._id != book._id)
                setBooks(filterBooks)


            } catch (error) {
                 console.log(error)
            }
        }

        



        // try {
        //     await fetch(`api/book/${book._id.toString()}`,{
        //         method: "DELETE"
        //     })
     
        //     const filterBooks = books.filter((item) => item._id != book._id)
        //     setBooks(filterBooks)

        // } catch (error) {
        //     console.log("Delete Fail")
        // }



    }


    const handleUpdate = async (book, newBookName) => {
        console.log('update successfully');
        try {
            const response = await fetch(`/api/book/${book._id}`, {
                method: "PATCH",
                body: JSON.stringify(
                    {
                        bookName: newBookName,
                        bookTopic: 'changed'
                    }
                )
            });

            console.log('response ', response)
            if (response.ok) {
                console.log('response2 ', response)
                alert('update successfully');
                fetchBook();

            }


        }
        catch (error) {
            console.log(error)
        }

    }







    return (
        <div>
            <h2> {books.length} </h2>
            <h2> {books.length} </h2>
            <p>{

            books.map(book => <Info 
                key = {book.id} 
                book = {book} 
                handleDelete={handleDelete} 
                handleUpdate = {handleUpdate}
            
            >
            </Info>)
            
            }</p>
        </div>
    );
}

export default page;