import { Box, IconButton , Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const HashTag = ({ name, category, promotedBy, activityCount }) =>  {

    const { palette } = useTheme();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;


    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <Box
                onClick={ () => {
                    navigate(`/search?type=hashtag&q=${name}`)
                    navigate(0);
                }}>

                    { category && (
                        <Typography color={medium} fontSize="0.78rem">
                            Trending in { category } 
                        </Typography>
                    )}
     
                    <Typography
                    color={main}
                    variant="h3"
                    fontWeight="500"
                    sx={{
                        "&:hover": {
                            color: palette.primary.light,
                            cursor: "pointer"
                        }
                    }}
                    >#{ name } </Typography>

                    <Typography color={main} fontSize="0.78rem">
                        { activityCount ?? 0 } posts
                    </Typography>
                    
                    { promotedBy && (
                        <Typography color={main} fontSize="1.08rem">
                        { promotedBy } 
                        </Typography>
                    ) }
                   
                </Box>
            </FlexBetween>

        </FlexBetween>
    )

}

export default HashTag;