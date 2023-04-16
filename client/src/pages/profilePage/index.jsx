import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import UserWidget from "../../components/widgets/UserWidget";
import MyPostWidget from "../../components/widgets/MyPostWidget";
import PostsWidget from "../../components/widgets/PostsWidget";
import FriendListWidget from "../../components/widgets/FriendListWidget";
import HashTagWidget from "../../components/widgets/HashTagsWidget";
import { setUser } from "../../state";


const ProfilePage = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const [ user, setUser ] = useState(null);
    const token = useSelector(( state ) => state.token )

    const getUser = async ( user ) => {

        // TODO: handle api call
        const data = {
            _id: 129372,
            firstName: "John",
            lastName: "Doe",
            picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Flash_20190116_5c3fcaaa18f023.90325986.jpg?w=160"
        };
        setUser(data);
    }

    useEffect(() => { 
        getUser();
    } ,[]);

    if (!user)  return null;

    const { _id, picturePath } = user;
    return (
    <Box>
        <Navbar/>
        <Box 
        width="100%"
        padding="2rem 6%"
        display={ isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        >

            <Box flexBasis={isNonMobileScreens ? "25%" : undefined}>
                <UserWidget userId={_id} picturePath={picturePath} />
                <FriendListWidget userId={_id}/>

            </Box>

            <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={ isNonMobileScreens ? undefined: "2rem"}>
                <MyPostWidget picturePath={picturePath}></MyPostWidget>
                <PostsWidget userId={_id} isProfile={true}></PostsWidget>
            </Box>

            { isNonMobileScreens &&  (
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <HashTagWidget userId={_id}/>
                </Box>
            )}

        </Box>
    </Box>
    )
}
export default ProfilePage;
