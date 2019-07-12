import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    
    const userArray = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })

    console.log(this.props.users)
    return (
      <div>
        <ul>
          Users!
          <br></br>
            <div>
            {userArray}
            </div>
          Total Users:{this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return { 
    users: state.users,
    userCount: state.users.length
   };
};
 
export default connect(mapStateToProps)(Users)
