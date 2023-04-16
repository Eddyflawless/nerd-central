import { Box } from "@mui/material";

import Config from "../app.config";

const UserImage = ({ image, size = "60px"}) => {

    let assetBaseUrl ;

    const { assets, baseUrl } = Config;

    assetBaseUrl = assets.sameAsBaseUrl?  `${baseUrl}/${assets?.directory}` : `${assets.src}`;

    return (
        <Box width={size} height={size}>
            <img
            style={{ objectFit: "cover", borderRadius: "50%" }}
            width={size}
            height={size}
            alt="user"
            src={ `${image}` }
            />

        </Box>
    )
}

export default UserImage;