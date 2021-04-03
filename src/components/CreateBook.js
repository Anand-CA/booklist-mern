import axios from "../axios"
import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./CreateBook.css"
function CreateBook() {
   const history = useHistory()
   const [title, setTitle] = useState("")
   const [author, setAuthor] = useState("")
   const [desc, setDesc] = useState("")
   const [file, setFile] = useState(null)

   const addBook = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("image", file)
      formData.append("title", title)
      formData.append("author", author)
      formData.append("description", desc)
      console.log(formData)
      axios.post("/books", formData).then(() => {
         setTitle("")
         setAuthor("")
         setDesc("")
         history.push("/")
      })
   }

   return (
      <div className="createBook bg-light">
         <div className="container ">
            <Link to="/">
               <button className="btn btn-success">Home</button>
            </Link>
            <h1 style={{ textAlign: "center", padding: "15px" }}>Add Book</h1>

            <form className="form ">
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
                     onChange={(e) => setTitle(e.target.value)}
                     type="text"
                  />
               </div>
               <div className="author">
                  <label htmlFor="">Author</label>
                  <input
                     name="author"
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
                     type="text"
                  />
               </div>
               <div className="description">
                  <label htmlFor="">Description</label>
                  <input
                     name="description"
                     value={desc}
                     onChange={(e) => setDesc(e.target.value)}
                     type="text"
                  />
               </div>
               <button
                  onClick={addBook}
                  type="submit"
                  className="btn btn-danger"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   )
}

export default CreateBook
