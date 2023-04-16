import { Box, Typography, useTheme } from "@mui/material";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHashTags } from "../../state";
import HashTag  from "../../components/HashTag";

const TrendingHashTagsWidget = ({ userId}) => {

    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
    const hashTags = useSelector((state) => state?.hashTags || [])

    const getHashTags = async () => {

        //Todo:  implement fetch implementation
        const data= [
            {
                name: "watercolorpaints",
                _id: 1201,
               
                activityCount: 120,
                category: "Art"
            },
            {
                name: "SilentKiller",
                activityCount: 12,
                category: "Music",
                _id: 1202
            },
            {
                name: "TheJacksonConnectTown",
                promotedBy: "Daniel Stetter",
                _id: 1203
            },
            {
                name: "SekiroShadowDieTwise",
                activityCount: 12,
                category: "Gaming",
                _id: 1204
            },
        ]
        dispatch(setHashTags({
            hashTags: data
        }));

        console.log("Hash Tags ", data);
    }

    useEffect(()=> {
        getHashTags();
    },[userId]);


    return (
        <WidgetWrapper mt="2rem">
            <Typography
            color={ palette.neutral.dark}
            variant="h4"
            fontWeight="500"
            sx={{ mb: "1.5rem"}}
            >
                Trends for you
            </Typography>

            <Box
            display="flex"
            flexDirection="column"
            gap="1.5rem"
            >
                {
                    hashTags.map(({ _id, name, category, activityCount, promotedBy }) => (
                        <HashTag
                        key={_id}
                        activityCount={activityCount}
                        name={`${name}`}
                        category={ category}
                        promotedBy={ promotedBy}
                        />
                    ))
                }

            </Box>
        </WidgetWrapper>
    )
}

export default TrendingHashTagsWidget;