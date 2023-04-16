import { Box, Typography } from '@mui/material';

const NotFound = () => {

    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            // backgroundColor: primary,
        }}
        >

        <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt=""
            width={300} height={150}
        />  
        <Box>
            
            <Typography variant="h4" style={{ color: 'black', marginTop: "1.0rem" }}>
                The page you’re looking for doesn’t exist.
            </Typography>
        </Box>   
    </Box>
    )
}

export default NotFound;