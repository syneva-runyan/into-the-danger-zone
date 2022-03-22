const getProfileInfo = async function() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    } 

    const response = await fetch("http://localhost:8080" , requestOptions);
    try {
        const body = await response.json();
        return body?.profileInfo;
    } catch (e) {
        console.log(e);
    }
};

export default getProfileInfo;
