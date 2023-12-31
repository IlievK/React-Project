const host = process.env.NODE_ENV === "development" 
? "http://localhost:3030"
: "http://localhost:3031" ; // Deployment host

// console.log(process.env.NODE_ENV);
async function request(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem("user"));

    // TO DO ACCESSTOKEN /   USER
    // console.log(user);
    if (user) {
        options.headers["X-Authorization"] = user.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            console.log(response.status);
            return {}
        }
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        // TO DO - to be checked if it's working for logout!
        return await response.json();
    } catch (error) {
        // alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");

// Result:

//>>>  const data = await request(method, url, data);
// await request("GET", '...', {...});

// const get = request.bind(null, 'GET')
// ...
// const data = await get('/ideas')