import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getBookById} from "../redux/actions/bookactions";

class BookViewComponent extends Component{

    componentDidMount(){
        this.props.getBookById(this.props.match.params.id);
    }

    render(){
        const {bookCode,bookName,authorName,price,description} = this.props.book;

        return(
            <div>
                Book Code<input type="text" value={bookCode}></input>
                Book Name<input type="text" value={bookName}></input>
                Author Name<input type="text" value={authorName}></input>
                Price<input type="text" value={price}></input>
                Description<input type="text" value={description}></input>
            </div>
        )
    }
}
BookViewComponent.protoTypes={
    getBookById:PropTypes.func.isRequired,
    book:PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
    book:state.book
 });

export default connect(mapStateToProps,{getBookById})(BookViewComponent);