import { Box } from "@mui/material";
import Header from "../Components/Header"
import ChatScreen from "./ChatScreen";

const MainPage = () => {
    return (
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Header />
            <ChatScreen />
        </Box>
    )
}

export default MainPage;
