import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BookList from "./components/BookList"
import CreateBook from "./components/CreateBook"
import EditBook from "./components/EditBook"

function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route path="/add-book">
                  <CreateBook />
               </Route>
               <Route path="/edit-book/:id">
                  <EditBook />
               </Route>
               <Route exact path="/">
                  <BookList />
               </Route>
            </Switch>
         </div>
      </Router>
   )
}

export default App
