import axios from "axios"

const instance = axios.create({
   baseURL: "https://booklist-mern-mongodb.herokuapp.com",
})

export default instance
