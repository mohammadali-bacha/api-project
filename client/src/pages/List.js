import React, { Component } from 'react';

class Users extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }))
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>List of users</h1>
        {/* Check to see if any items are found*/}
        {users.length ? (
          <div>
            {/* Render the list of items */}
            {users.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No users Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Users;