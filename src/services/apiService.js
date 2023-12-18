const apiUrl = 'http://localhost:3001/api/v1';

const apiService = {
    login: async (loginData) => {
        try {
            const response = await fetch(`${apiUrl}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw error;
        }
    },

    getUserProfile: async (token) => {
        try {
            const response = await fetch(`${apiUrl}/user/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const responseData = await response.json();
            return responseData.body;
        } catch (error) {
            throw error;
        }
    },

    updateUserProfile: async (token, userProfileData) => {
        try {
            const response = await fetch(`${apiUrl}/user/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(userProfileData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw error;
        }
    },
};

export default apiService;
