import { NavLink } from 'react-router-dom'
import './index.css';
import logo from '../../assets/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/userSlice';
import { clearProfile } from '../../store/reducers/userProfileSlice';
import { ReactComponent as LogoutIcon } from '../../assets/icons/arrow-right-from-bracket-solid.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/circle-user-solid.svg';


function Header() {
    const { username } = useSelector((state) => state.user.value);
    const { firstName } = useSelector((state) => state.userProfile.userProfile);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearProfile());
    };

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {username ? (
                        <>
                            <NavLink to="/profile" className="main-nav-item">
                                <UserIcon />
                                {firstName}
                            </NavLink>
                            <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
                                <LogoutIcon />
                                Sign Out
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="main-nav-item">
                                <UserIcon />
                                Sign In
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;