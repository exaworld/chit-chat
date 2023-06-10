import { useLocation } from 'react-router-dom';
import { Grid } from "@mui/material"
import ChatsBar from "../Components/ChatsBar";
import ChatBox from "./ChatBox";
import ChatDetailBar from "../Components/ChatDetailBar";
import { useContext } from 'react';
import { DeviceContext } from '../App';

const MainScreen = () => {
    const devices = useContext(DeviceContext);
    const { isTablet } = devices;

    const path = useLocation().pathname;
    const isChatDetailPage = path === '/chatdetail'

    return (
        <Grid 
            container
            component="main"
            spacing={1}
            sx={{
                flex: '1 1 auto',
                overflowY: 'auto'
            }}
        >
            {/* Left Side Container */}
            <Grid
                item
                xs={12}
                sm={4}
                md={3}
                sx={{ height: '100%' }}
            >
                <ChatsBar />
            </Grid>

            {/* Middle Container */}
            <Grid
                item
                sm={8} //8/12 of screen size on SM screen
                md={6} //half of screen size on MD screen
                sx={{display: {xs: 'none', sm: 'flex'}, height: '100%'}} //Hide on XS Screen
            >
                {
                /* { Modify component depending on the current route. If user is actively on the ChatDetailRoute while on the tablet screen, the ChatDetailBar component will be displayed */
                
                    (isChatDetailPage && isTablet) ?
                        <ChatDetailBar/> :
                        <ChatBox />
                }
            </Grid>

            {/* Right Side Container */}
            <Grid
                item
                sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}}
                md={3}
            >
                <ChatDetailBar />
            </Grid>
        </Grid>
    )
}

export default MainScreen;
