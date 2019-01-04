import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
    state = {
        comment: ''
    }

    commentInputHandler = (e) => {
        this.setState({ comment: e.target.value })
    }

    formSubmitHandler = event => {
        event.preventDefault();

        // Call an action creator and save the comment
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <h4>Add a Comment</h4>
                <textarea 
                    value={this.state.comment}
                    onChange={this.commentInputHandler} 
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}



export default connect(null, actions )(CommentBox);