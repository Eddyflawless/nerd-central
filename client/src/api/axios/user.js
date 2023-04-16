import Api from "api";

const pathBase = "/users";


 export const getUser =  async (userId, token) => {


    const response = await Api({ method: 'GET', path: pathBase + "/" + userId, token: token})
    
    const data = await response.json();

    return data;
}

