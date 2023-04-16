
function MockUserApiResponse() {

}

function MockPostApiResponse(postId) {

}

const MockApiResponses = ({ path }) => {
    switch(path){
        case "/users":
            return MockUserApiResponse();
        case "/posts":
            return MockUserApiResponse();
        default:
            return {}    
    }
}