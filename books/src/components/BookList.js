import React from "react";
import Book from "./Book";
import { BookContent } from '../context/BookContext';

class BookList extends React.Component {
    render() {
        return (
            <BookContent.Consumer>
                {value => {
                    return <div className="BooklistKapsa" >
                        <h2 style={{ marginTop: "50px" }}>BOOKFOLIO</h2>
                        <h4 style={{ marginBottom: "20px" }}>Kitap okumak onun yazarı ile konuşmaktır.</h4>
                        <div className="ortala">
                            {
                                value.books.map((book, i) => {
                                    return <Book book={book} key={i} />
                                })}</div>
                    </div>
                }}
            </BookContent.Consumer>
        )
    }
}
export default BookList;