import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state";

const FriendListWidget = ({ userId}) => {

    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state?.user?.friends || [])

    const getFriends = async () => {

        //Todo:  implement fetch implementation
        const data= [
            {
                picturePath: "https://static.dc.com/2023-02/Char_WhosWho_GreenLantern20200721_5f173adcedb982.94529743.jpg?w=160",
                name: "Ezekiel_aluta",
                occupation: "Painter",
                isFriend: true,
                _id: 1201
            },
            {
                picturePath: "https://static.dc.com/2023-02/Char_WhosWho_Superman_20190116_5c3fc71f524f38.28405711.jpg?w=160",
                name: "Richard_bygone",
                occupation: "Street Artist",
                isFriend: true,
                _id: 1202
            },
            {
                picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Arsenal_5c4112b0d08271.33719915.jpg?w=160",
                name: "Excuse_tommy",
                occupation: "Artiste",
                isFriend: true,
                _id: 1203
            },
            {
                picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_CaptainBoomerang_5c47c75f492368.02277336.jpg?w=160",
                name: "Dayummexx",
                occupation: "Art collector",
                isFriend: true,
                _id: 1204
            }
        ]
        dispatch(setFriends({
            friends: data
        }))
    }

    useEffect(()=> {
        getFriends();
    },[userId]);


    return (
        <WidgetWrapper mt="2rem">
            <Typography
            color={ palette.neutral.dark}
            variant="h4"
            fontWeight="500"
            sx={{ mb: "1.5rem"}}
            >
                Friend List
            </Typography>

            <Box
            display="flex"
            flexDirection="column"
            gap="1.5rem"
            >
                {
                    friends.map(({ _id, name, occupation, picturePath }) => (
                        <Friend
                        key={_id}
                        friendId={_id}
                        name={`${name}`}
                        location={ occupation}
                        userPicturePath={ picturePath}
                        />
                    ))
                }

            </Box>
        </WidgetWrapper>
    )
}

export default FriendListWidget;