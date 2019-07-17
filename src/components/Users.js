import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
            {this.props.users.map(user => {
              return <li>{user.username}</li>
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, usersLength: state.users.length }
}

export default connect(mapStateToProps)(Users)
