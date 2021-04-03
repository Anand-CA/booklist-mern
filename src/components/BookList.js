import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "../axios"
import "./BookList.css"

function Booklist() {
   const [books, setBooks] = useState([])
   const [deleted, setDeleted] = useState(false)

   useEffect(() => {
      let mounted = true
      const loadData = async () => {
         const res = await axios.get("/books")
         if (mounted) {
            console.log("mounted")
            setBooks(res.data)
            setDeleted(false)
         }
      }
      loadData()
      return () => {
         mounted = false
      }
   }, [deleted])

   return (
      <div className="bookList ">
         <div className="bookList__container">
            <div className="booklist__header p-3">
               <h1 className="">Book List</h1>
               <Link to="/add-book">
                  <button className="btn btn-primary">add book</button>
               </Link>
            </div>
            <div className="booklist__body">
               {books.map((book) => (
                  <div className="card animate__animated animate__fadeIn">
                     <img
                        className="card__image"
                        src={`https://booklist-mern-mongodb.herokuapp.com/${book.photoImage}`}
                        alt=""
                     />

                     <div className="button__container ">
                        <div className="info">
                           <h2 style={{ color: "black" }}>
                              Title:{book.title}
                           </h2>
                           <h3>Author:{book.author}</h3>
                           <p>
                              {book.description}
                           </p>
                        </div>

                        <Link to={`/edit-book/${book._id}`}>
                           <button className="btn btn-primary card__button">
                              Edit
                           </button>
                        </Link>

                        <button
                           onClick={() => {
                              axios.delete("/books/" + book._id).then(() => {
                                 setDeleted(true)
                              })
                           }}
                           className="btn btn-danger card__button"
                        >
                           delete
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            
         </div>
      </div>
   )
}

export default Booklist
