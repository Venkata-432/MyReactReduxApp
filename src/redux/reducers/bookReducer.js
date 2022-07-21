import { GET_BOOKS, DELETE_BOOK, GET_BOOK_BY_ID } from "../actions/actiontypes";

const initialState = {
    books: [],
    book: {}
};

export default function(state=initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_BOOKS:
           return {...state,books:payload};
        case GET_BOOK_BY_ID:
           return {...state,book:payload}; 
        case DELETE_BOOK:
           return {...state,books:state.books.filter((book)=>book.id!==payload)};
        default:
           return state;   
    }
}