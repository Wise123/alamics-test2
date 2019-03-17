import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../actionCreators/index"
import {bindActionCreators} from 'redux'
import './BookCatalogue.css'
import BookTable from '../../component/BootTable/BookTable';
import PropTypes from 'prop-types';

class BookCatalogue extends Component {

    render() {
        return (
            <BookTable
                updateBooks={this.props.updateBooks}
                deleteBooks={this.props.deleteBooks}
                createBooks={this.props.createBooks}
                books={this.props.books}
            />
        );
    }

    constructor(props) {
        super(props);
        this.props.getBooks();
        this.state = {newBooks: []};
    }
}

BookCatalogue.propTypes = {
    getBooks: PropTypes.func,
    updateBooks: PropTypes.func,
    deleteBooks: PropTypes.func,
    createBooks: PropTypes.func,
    books: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
    ...actionCreators
}, dispatch);

const mapStateToProps = (state) => {
    return {
        books: state.book.books
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookCatalogue)