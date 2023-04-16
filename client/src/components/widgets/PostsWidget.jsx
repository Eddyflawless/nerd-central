import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import { getPosts } from "../../api/axios/post";
import PostsWidget from "./PostWidget";
import AppConfig from "../../app.config"; 
import Mocks from "../../mocks"; 

const MyPostsWidget = ({ userId, isProfile = false}) => {

    const dispatch = useDispatch();
    const [posts, token ] = useSelector((state) => [state.posts, state.token]);
    console.log("Posts ", posts);
    const { assets, isMockMode } = AppConfig;

    const fetchPosts = async () => {

        try{

            const response = await getPosts(token);
            const data = response.json();
            dispatch(setPosts({
                posts: data
            }))
        }catch(err){
            console.error(err);
        }

    }

    const fetchUserPosts = async () => {

        try{

            const response = await getPosts(token,`${userId}/posts`);
            const data = response.json();
            dispatch(setPosts({
                posts: data
            }))
        }catch(err){
            console.error(err);
        }

    }

    useEffect(() => {

        if(isMockMode){

        }else{

            if(isProfile){
    
                fetchUserPosts();
            }else{
                fetchPosts();
            }
        }

    },[])

    return (
        <>
            { posts.map( ( {
                _id,
                userId,
                name,
                description,
                location,
                picturePath,
                userPicturePath,
                likes,
                comments
            })=> ( 
                <PostsWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                name={ name }
                description={description}
                location={location}
                picturePath={picturePath}
                userPicturePath={userPicturePath}
                likes={likes}
                comments={comments}
                >

                </PostsWidget>
            )) }
        </>
    )
}

export default MyPostsWidget;