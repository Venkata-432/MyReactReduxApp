import {GET_BOOKS,GET_BOOK_BY_ID,DELETE_BOOK} from "./actiontypes";
import axios from "axios";

const bookApiUrl="http://localhost:10432/bookdepot";

export const getBooks=()=>async dispatch =>{
       const resp = await axios.get(bookApiUrl+"/books");
       console.log(resp.data);
        dispatch({
            type:GET_BOOKS,
            payload:resp.data
        })
};

export const getBookById=(bookId)=>async dispatch=>{
    axios.get(bookApiUrl+"/viewBookById/"+bookId).then(res=>{
        let book=res.data;
        dispatch({
            type:GET_BOOK_BY_ID,
            payload:book.data
        })
    })
};

export const deleteBook=(bookId)=>async dispatch=>{
    axios.get(bookApiUrl+"/deleteBook/"+bookId).then(res=>{
        dispatch({
            type:DELETE_BOOK,
            payload:bookId
        })
    })
};



