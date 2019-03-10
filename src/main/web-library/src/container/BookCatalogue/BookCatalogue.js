import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../actionCreators/index"
import {bindActionCreators} from 'redux'

class BookCatalogue extends Component {
    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.props.books)}</h1>
            </div>
        );
    }

    componentWillMount() {
        this.props.getBooks()
        console.log(this.props)
    }
}

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