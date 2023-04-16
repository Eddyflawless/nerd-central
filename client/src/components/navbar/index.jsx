import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FlexBetween from "../FlexBetween";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";

import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from "@mui/icons-material";


const Navbar = () => {

    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    
    const userName =`${ user?.username}`;
    const fullName = (user?.firstName && user?.lastName)? `${user.firstName} ${user.lastName}`: "Guest User";
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const { dark, neutralLight }  =  theme.palette.neutral;
    const { alt, background } = theme.palette.background;
    const primaryLight = theme.palette.primary.light;
    
    return <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
            <Typography 
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
                "&:hover": {
                    cursor: "pointer",
                    color: primaryLight,
                }
            }}
            >
            Sociapedia
            </Typography>
            { isNonMobileScreens && (
                <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            ) } 
        </FlexBetween>
        {/* DESKTOP NAV */}
        {
            isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        { theme.palette.mode === "dark" ? (
                            <DarkMode sx={{ fontSize: "25px" }}/>
                        ): (
                            <LightMode sx={{ color: dark, fontSize: "25px"}}/>
                        )}
                    </IconButton>
                    <Message sx={{ fontSize: "25px" }} />
                    <Notifications sx={{ fontSize: "25px" }} />
                    <Help sx={{ fontSize: "25px" }}/>
                    <FormControl variant="standard" value={fullName}>
                        <Select value={fullName} 
                        sx={{ 
                            backgroundColor: neutralLight, 
                            width: "150px", 
                            borderRadius: "0.25rem", 
                            p: "0.25rem 1rem", 
                            "& .MuiSvgIcon-root": {
                                pr: "0.25rem",
                                width: "3rem"
                            },
                            "& .Muielect-select:focus": {
                               backgroundColor: neutralLight,
                            }  
                        }}
                        input={<InputBase />}
                        >

                            <MenuItem value={fullName}>
                                <Typography>{fullName}</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout())}>Log out</MenuItem>

                        </Select>
                    </FormControl>
                </FlexBetween>
            ): (
                <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                    <Menu />
                </IconButton>
            )
        }

        {/* MOBILE NAV*/}

    </FlexBetween>
}
export default Navbar;
