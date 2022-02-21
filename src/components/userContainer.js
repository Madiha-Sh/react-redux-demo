import React, { Component, useEffect } from 'react';
import { fetchUsers } from '../redux/user/userActions';
import { connect } from 'react-redux';

const UserContainer = (props) => {
  const { userData, fetchUsers } = props;
  useEffect(() => {
    fetchUsers();
  }, [])
  return userData.isLoading ? (<h2>Loading...</h2>) : userData.error ? (<h2>{userData.error}</h2>) : (
    <div>
      <h2>User list</h2>
      <div>
        {userData && userData.users && userData.users.map((user, index) => <p key={index}>{user.name}</p>)}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);