import { AccountCircle, Directions } from "@mui/icons-material";
import { AppBar, Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";

const ChatsBar = () => {
    const list = new Array(15).fill(null);

    return (
        <Box
            sx={{
                backgroundColor: 'whitesmoke',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >   
            <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0 10px 5px 10px',
                    boxShadow: '-1px 0 4px 0 rgba(0, 0, 0, 0.5)',
                    mb: '2px',
                }}
            >
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                    id="input-seach-name"
                    label="Search"
                    variant="standard"
                    size="small"
                    fullWidth
                />
            </Box>
            <List
                sx={{
                    flex: '1',
                    overflow:'auto',
                }}
            >
                {   list.map((_, index) => {
                        return (
                            <ListItem disablePadding key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Avatar alt="Juan dela Cru" src="/static/images/avatar/2.jpg" />
                                    </ListItemIcon>
                                    <ListItemText primary="Juan dela Cruz" />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
                
            </List>
        </Box>
    )
}

export default ChatsBar;
