import Api from "./api";

const pathBase = "/posts";

 export const getPost =  async (postId, token) => {


    const response = await Api({ method: 'GET', path: pathBase + postId, token: token})
    
    const data = await response.json();

    return data;
}

export const getPosts = async (token, path=null) => {

    const endpoint = path? pathBase + "/" + path : pathBase;

    const response = await Api({ method: 'GET', path: endpoint, token: token})
    
    const data = await response.json();
    
    return data;
}
