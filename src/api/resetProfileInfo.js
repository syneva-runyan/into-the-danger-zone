const resetProfileInfo = async function() {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
    }; 
    const response = await fetch("http://localhost:8080/resetProfileInfo", requestOptions);
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

export default resetProfileInfo;
