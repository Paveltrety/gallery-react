import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchUsers, setActiveUser } from '../redux/actions/usersAction';
import { usersType } from '../redux/reducers/usersReducer';
import { stateType } from '../redux/store';

const Users = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: stateType) => ({
        users: state.usersPage.users,
        activeUser: state.usersPage.activeUser
    }))

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);
    return (
        <header className="header">
            <div className="users">
                <nav className="users__nav">
                    <ul className="users__list">
                        {
                            state.users.map((item: usersType) => {
                                return (
                                    <li
                                        className="users__list-item"
                                        key={item.id}
                                        onClick={() => dispatch(setActiveUser(item.id))}>
                                        <NavLink to={`/user/${item.id}`} className={state.activeUser === item.id ? 'user__list-link-active' : "user__list-link"}   > {item.username}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header> 
    )
}

export default Users
