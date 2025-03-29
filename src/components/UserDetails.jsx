import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../utils/userDetailsSlice"
import store from '../utils/store';

const UserDetails = () => {

    const dispatch = useDispatch();
  const { users, loading, error } = useSelector((store) => store.userDetails);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

    return (
        <div>
            <h2>User details</h2>
            {JSON.stringify(users)}
        </div>
    )

}

export default UserDetails;