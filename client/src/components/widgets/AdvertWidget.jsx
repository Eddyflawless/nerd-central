import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = ({ picturePath, description, websiteLink }) => {

    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h4" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>

            </FlexBetween>
            <img 
                width="100%"
                height="auto"
                alt="advert"
                src={ picturePath }
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}
            />
            <FlexBetween>
                
                <Typography color={dark} >MikaCosmetics</Typography>
                <Typography color={medium} >mikacosmetics.com</Typography>
            </FlexBetween>
            <Typography color={main} m="0.5rem 0">Your pathway to stunning and immaculate beauty and made for your skin</Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget;
