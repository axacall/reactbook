import React, { Component } from 'react'
import '../css/Style.css'
class Book extends Component {
    render() {
        return (
            <div className="booklist">
                <img src={this.props.book.imageURL} alt="..." />
                <h3>{this.props.book.title}</h3>
                <h5>{this.props.book.author}</h5>
            </div>
        )
    }
}
export default Book;