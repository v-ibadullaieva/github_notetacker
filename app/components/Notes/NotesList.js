import React from 'react';

class NotesList extends React.Component{
  render() {
    const { notes } = this.props;
    return(
      <ul className="group-list" style={{'paddingLeft': 0}}>
        {notes.map((note, index) => <li className="list-group-item" key={index}>{note}</li>)}
      </ul>
    )
  }
};

export default NotesList;
