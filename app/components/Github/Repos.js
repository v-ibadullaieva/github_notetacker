import React from 'react';

class Repos extends React.Component{
  render(){
    return (
      <div>
        <h3>User Repos</h3>
        <ul className="list-group">
          {this.props.repos.map(function(repo, index) {
            return (
              <li className="list-group-item" key={index}>
                {repo.html_url && <h3><a href={repo.html_url}>{repo.name}</a></h3>}
                {repo.description && <p>{repo.description}</p>}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos;
