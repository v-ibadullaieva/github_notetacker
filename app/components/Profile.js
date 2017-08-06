var React = require('react');
var Router = require('react-router');
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import axios from 'axios'

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      logo: null,
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentDidMount(){
    this.init(this.props.params.username)
  }
  componentWillReceiveProps(nextProps) {
    this.init(nextProps.params.username);
  }
  init(username){
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        this.setState({repos: res.data})
      });
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        this.setState({bio: res.data});
      });
  }
  handleAddNote(newNote){
    this.state.notes.push(newNote);
    this.setState({});
  }
  render(){
    return (
      <div className="row">
        <div className="col-sm-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-sm-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-sm-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Profile;
