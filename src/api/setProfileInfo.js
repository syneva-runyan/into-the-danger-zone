const setProfileInfo = async function(updatedProfile, profileKey) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ updatedProfile, profileKey }),
    }; 
    const response = await fetch("http://localhost:8080/updateProfile", requestOptions);
    try {
        const { status, updatedProfiles } = await response.json();
        if (status == 'success') {
            return {
                updatedProfiles,
                status,
            };
        } else {
            return { status: 'error' };
        }
        ; // todo handle error
    } catch (e) {
        // todo handle error
        console.error(e);
        return { status: 'error' };
    }
};

export default setProfileInfo;
