import { useState } from 'react';
import { login, logout } from '../../store/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);

    return (
        <h1>
            {username}
            <input onChange={(e) => {
                setNewUsername(e.target.value);
            }}
            />
            <button onClick={() => dispatch(login({ username: newUsername }))}>submit</button>
            <button onClick={() => dispatch(logout())}>logout</button>
        </h1>
    )
}

export default Login;