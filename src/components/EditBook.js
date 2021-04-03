import axios from "../axios"
import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"

function EditBook() {
   const history = useHistory()
   const [title, setTitle] = useState("")
   const [author, setAuthor] = useState("")
   const [desc, setDesc] = useState("")
   const [file, setFile] = useState("")
   const [book, setBook] = useState({})
   const { id } = useParams()

   useEffect(() => {
      axios.get("/books/" + id).then((res) => {
         console.log("book details >>> ", res.data)
         setBook(res.data)
      })
   }, [id])

   const addBook = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("image", file)
      formData.append("title", title)
      formData.append("author", author)
      formData.append("description", desc)
      axios.put("/books/" + id, formData).then(() => {
         setTitle("")
         setAuthor("")
         setDesc("")
         history.push("/")
      })
   }

   return (
      <div className="bg-light">
         <div className="container p-4">
            <Link to="/">
               <button className="btn btn-success text-center">Home</button>
            </Link>
         </div>

         <h1 className="text-center pb-4">Edit book</h1>
         <form className="container form bg-light">
            <div className="image">
               <input
                  type="file"
                  name="image"
                  onChange={(e) => setFile(e.target.files[0])}
               />
            </div>
            <div className="title">
               <label>Title</label>
               <input
                  name="title"
                  value={title}
                  placeholder={book.title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
               />
            </div>
            <div className="author">
               <label htmlFor="">Author</label>
               <input
                  name="author"
                  value={author}
                  placeholder={book.author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
               />
            </div>
            <div className="description">
               <label htmlFor="">Description</label>
               <input
                  name="description"
                  value={desc}
                  placeholder={book.description}
                  onChange={(e) => setDesc(e.target.value)}
                  type="text"
               />
            </div>
            <button onClick={addBook} type="submit" className="btn btn-danger">
               Submit
            </button>
         </form>
      </div>
   )
}

export default EditBook
