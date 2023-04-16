import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     mode: "light",
//     user: null,
//     token: null,
//     posts: []
// }

// DEV
const initialState = {
    mode: "light",
    user: { _id: 19378, picturePath: "http://localhost/assets/images/19378.jpg"},
    token: null,
    posts: [],
    hashTags: []
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) =>  { state.mode = state.mode === "light" ? "dark" : "light"; },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends;
            }else{
                console.error("user friends non-existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setHashTags: (state, action) => {
            state.hashTags = action.payload.hashTags;
        },
        setPost: (state, action) => {
            state.posts = state.posts.map((post)=> {
                if(post._id === action.payload.post._id) {
                    return action.payload.post;
                }
                return post;
            });

        }  
    }
})


export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setHashTags } = authSlice.actions;

export default authSlice.reducer;