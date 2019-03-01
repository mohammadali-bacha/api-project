import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Users from '../src/pages/List';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Users}/>
          {/* <Route path='/listUsers' component={Users}/> */}
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;

// class App extends Component {
//   state = { users: [] }

//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Users</h1>
//         {this.state.users.map(user =>
//           <div key={user.id}>{user.username}</div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;



