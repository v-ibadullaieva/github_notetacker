import React from 'react';
import Router from 'react-router';

class AddNote extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  handleSubmit(e) {
    var newNote = this.state.value;
    this.setState({value: ''});
    this.props.addNote(newNote);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render(){
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <div className="input-group">
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control" placeholder="Add New Note" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">Submit</button>
          </span>
        </div>
      </form>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default AddNote;
