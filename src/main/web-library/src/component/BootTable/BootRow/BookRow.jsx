import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toDate, toDateString} from "../../../util/dateUtil";

class BookRow extends Component {



    componentWillMount() {
        const {book} = this.props;
        this.setState({...this.state, editMode: false, book})
    }

    toggleEditMode = () => {
        this.setState({...this.state, editMode: !this.state.editMode})
    };

    updateBook = () => {
        const {book} = this.state;
        const {updateBooks} = this.props;
        updateBooks && updateBooks([book]);
        this.toggleEditMode();
    };

    updateCachedBook = (newBook) => {
        this.setState({...this.state, book: newBook})
    };

    render() {
        const {deleteBooks} = this.props;
        const {editMode, book} = this.state;
        if (editMode) {
            return (
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>
                        <input
                                onChange={(e) => this.updateCachedBook({...book, name: e.target.value})}
                                value={book.name}
                        />
                    </td>
                    <td>
                        <input
                                onChange={(e) => this.updateCachedBook({...book, author: e.target.value})}
                                value={book.author}/>
                    </td>
                    <td>
                        <DatePicker
                                onChange={(date) => this.updateCachedBook({...book, releaseDate: toDateString(date)})}
                                selected={toDate(book.releaseDate)}
                        />
                    </td>
                    <td>
                        <select
                                onChange={(e) => this.updateCachedBook({...book, inPublicCatalogue: e.target.value})}
                                defaultValue={book.inPublicCatalogue}>
                            <option value={true}>да</option>
                            <option value={false}>нет</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => this.updateBook && this.updateBook(book)}>Save</button>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.releaseDate}</td>
                    <td>
                        {book.inPublicCatalogue ? "Да" : "Нет"}
                    </td>
                    <td>
                        <button onClick={this.toggleEditMode}>Edit</button>
                        <button onClick={() => deleteBooks([book])}>Delete</button>
                    </td>
                </tr>
            );
        }
    }
}

export default BookRow