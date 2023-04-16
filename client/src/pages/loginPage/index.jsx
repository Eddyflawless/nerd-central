import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 100px)");

    return <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt}>
            <Typography 
            fontWeight="bold" 
            fontSize="32px" 
            color="primary" >
                Socialpedia
            </Typography>

        </Box>

        <Box 
        width={isNonMobileScreens ? "50%" : "93%"} 
        p="2rem" m="2rem auto" 
        borderRadius="1.5rem" 
        backgroundColor={theme.palette.background.alt}>
            <Form/>
        </Box>
    </Box>
}
export default LoginPage;
