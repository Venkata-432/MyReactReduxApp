import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getBooks, deleteBook} from "../redux/actions/bookactions";

class BookStoreComponent extends Component{

    componentDidMount(){
      const booklist= this.props.getBooks();
      console.log(booklist.data);
    }

    deleteBook=(id)=>{
        this.props.deleteBook(id);
    }

    render(){
        const books=this.props.books;

        return(
            <div>
                <div>
                    <h3>Book Depot</h3>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="bg-dark" style={{color: "black"}}>
                            <tr className="notbold">
                                <th>Book Code</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book =>
                                <tr key={book.id}>
                                    <td> {book.bookCode} </td>
                                    <td> {book.bookName} </td>
                                    <td> {book.authorName}</td>
                                    <td> {book.price}</td>
                                    <td> {book.description}</td>
                                    <td>
                                        <Link to={`/books/${book.id}`}>
                                            <button className="btn btn-dark">Edit</button>
                                        </Link>
                                        <Link to={`/books/view/${book.id}`}>
                                            <button className="btn btn-dark">View</button>
                                        </Link>
                                        <button onClick={() => this.deleteBook(book.id)}
                                                className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                             )}
                        </tbody>
                    </table>
            </div>
        </div>
        )
    }
}


BookStoreComponent.propTypes={
    getBooks: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>({
   books:state.books
});

export default connect(mapStateToProps, {getBooks, deleteBook}) (BookStoreComponent);