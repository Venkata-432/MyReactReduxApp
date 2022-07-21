import logo from './logo.svg';
import './App.css';
import BookStoreComponent from "./components/book-store-component";
// import BookAddComponent from "./components/book-add-component";
// import BookUpdateComponent from "./components/book-update-component";
import BookViewComponent from "./components/book-view-component";
import {Provider} from "react-redux";
import store from "./store";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={BookStoreComponent}/>
                    {/* <Route path="/books/add" exact component={BookAddComponent}/>
                    <Route path="/books/:id" exact component={BookUpdateComponent}/>*/}
                    <Route path="/books/view/:id" exact component={BookViewComponent}/> 
                </Switch>
            </div>
        </Router>
    </Provider>    
  );
}

export default App;
