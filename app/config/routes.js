import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

const Other = ({ history }) =>
  <button onClick={() => history.push('/hello/world')}>Go to Hello World</button>

export default (
  <Route path="/" component={Main}>
  	<Route path="profile/:username" component={Profile} />
    <Route path="hello/world" component={() => <h1>Hello World</h1>}/>
    <Route path="other" component={Other}/>
    <IndexRoute component={Home} />
  </Route>
)
