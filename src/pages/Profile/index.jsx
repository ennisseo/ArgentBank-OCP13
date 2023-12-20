import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import Account from '../../components/Account';
import apiService from '../../services/apiService';
import { setProfile, updateUserName } from '../../store/reducers/userProfileSlice';

function Profile() {
    const { firstName, lastName } = useSelector((state) => state.userProfile.userProfile);
    const token = useSelector((state) => state.user.value.token);
    const [isEditing, setIsEditing] = useState(false);
    const [editedFirstName, setEditedFirstName] = useState(firstName);
    const [editedLastName, setEditedLastName] = useState(lastName);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const userProfileData = await apiService.getUserProfile(token)
                dispatch(setProfile(userProfileData));

                setEditedFirstName(userProfileData.firstName);
                setEditedLastName(userProfileData.lastName);
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        };

        fetchProfileData();
    }, [dispatch, token]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        dispatch(updateUserName({ firstName: editedFirstName, lastName: editedLastName }));
        setIsEditing(false);

        // allows first and last name modification to be permanent by modifying database
        try {
            await apiService.updateUserProfile(token, { firstName: editedFirstName, lastName: editedLastName });
        } catch (error) {
            console.error('Error updating user profile:', error.message);
        }
    };

    const handleCancelClick = () => {
        // Reset the edited name and close the edit form
        setEditedFirstName(firstName);
        setEditedLastName(lastName);
        setIsEditing(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {isEditing ? (
                    <>
                        <h1>Welcome back</h1>
                        <form className="edit-form">
                            <div className="left-container">
                                <input
                                    type="text"
                                    id="editedFirstName"
                                    placeholder={firstName}
                                    onChange={(e) => setEditedFirstName(e.target.value)}
                                />
                                <button className="save-btn" onClick={handleSaveClick}>Save</button>
                            </div>
                            <div className="right-container">
                                <input
                                    type="text"
                                    id="editedLastName"
                                    placeholder={lastName}
                                    onChange={(e) => setEditedLastName(e.target.value)}
                                />
                                <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h1>Welcome back<br />{`${firstName} ${lastName}!`}</h1>
                        <button className="edit-button" onClick={handleEditClick}>
                            Edit Name
                        </button>
                    </>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                amountDescription="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                amountDescription="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                amountDescription="Current Balance"
            />
        </main >
    );
}

export default Profile;
