import {

    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween  from "../FlexBetween";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state";

const PostWidget = ({ postId,
    postUserId,
    name,
    description,
    location,
    likes,
    picturePath,
    userPicturePath, 
    comments  }) => {

    const [ isComments, setIsComment ] = useState(false);    
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user?._id);    

    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const primary = palette.primary.main;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const isLiked = true;    
    const patchLike = async (e)=> {
        
    }

    return (
        <WidgetWrapper m="2rem 0">
            <Friend 
            friendId={postUserId} 
            name={ name} 
            location={ location }
            userPicturePath={userPicturePath}/>
            <Typography 
            color={main}
            sx={{
                mt: "1rem"
            }}>
                { description }
            </Typography>
            {
                picturePath && (
                    <img 
                    width="100%"
                    height="auto"
                    alt="post"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem"}}
                    src={ picturePath }
                    />
                )
            }

            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={patchLike}>
                            { isLiked ? (
                                <FavoriteOutlined sx={{ color: primary}}/>
                            ): (
                                <FavoriteBorderOutlined sx={{ color: primary}}/>
                            )}
                        </IconButton>

                    </FlexBetween>

                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={()=> setIsComment(!isComments)}>
                           <ChatBubbleOutlineOutlined />
                        </IconButton>
                        <Typography>{ comments?.length }</Typography>
                    </FlexBetween>

                </FlexBetween>

                <IconButton>
                    <ShareOutlined />
                </IconButton>
            </FlexBetween>
            { isComments && (
                <Box mt="0.5rem">
                    {
                        comments.map((comment, i) => (
                            <Box key={`${name}-${i}`}>
                                <Divider />
                                <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                                    { comment }
                                </Typography>
                            </Box>
                            
                        ))
                    }
                     <Divider /> 
                </Box>
            )}

        </WidgetWrapper>
    )
}

export default PostWidget;