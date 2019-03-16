import React, { Component } from "react";
import BookRow from "./BootRow/BookRow";

class BookTable extends Component {

    componentWillMount() {
        this.setState({...this.state, newBooks: []})
    }

    createNewBook = () => {
        this.setState({...this.state, newBooks: [...this.state.newBooks, {temporaryId: new Date().getTime()}]});
    };

    saveNewBooks = (savedBooks) => {
        const newBooks = this.state.newBooks.filter((book) => {
           return savedBooks.findIndex(item => item.temporaryId === book.temporaryId) === -1;
        });
        this.setState({...this.state, newBooks});
        this.props.createBooks(savedBooks);
    };

    deleteNewBooks = (deletedBooks) => {
        const newBooks = this.state.newBooks.filter((book) => {
            return deletedBooks.findIndex (item => {
                return item.temporaryId === book.temporaryId
            }) === -1
        });
        this.setState({...this.state, newBooks});
    };

    updateNewBook(updatedBook){
        const newBooks = this.state.newBooks.map(
            (book) => {
                if(book.temporaryId === updatedBook.temporaryId) {
                    return updatedBook
                }
                else {
                    return book;
                }

            }
        );
        this.setState({...this.this.state, newBooks});
    }

    renderRow = (book, updateBooks, deleteBooks) => {
        return (
            <BookRow
                updateBooks={updateBooks}
                key={book.id || book.temporaryId}
                book={book}
                deleteBooks={deleteBooks}
            />);
    };

    render() {
        const {books, createBooks, updateBooks, deleteBooks} = this.props;
        const {createBook, newBooks} = this.state;
        return (
        <div>
            <table id="booksTable">
              <thead>
                <tr>
                  <th>Идентификатор</th>
                  <th>Наименование</th>
                  <th>Автор</th>
                  <th>Дата выхода</th>
                  <th>В публичном каталоге</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                    {books && books.map((book) => this.renderRow(book, updateBooks, deleteBooks))}
                    {newBooks && newBooks.map((book) => this.renderRow(book, this.saveNewBooks, this.deleteNewBooks))}
              </tbody>
            </table>
            <button onClick={this.createNewBook}>Добавить</button>
            </div>
        );
    }
}

export default BookTable