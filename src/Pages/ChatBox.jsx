import { Avatar, Box, Divider, Fab, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { ArrowBack } from "@mui/icons-material";

const ChatBox = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >

            {/* Chat Header */}
            <Grid container sx={{
                padding: '0 10px 5px 10px',
                borderBottom: '1px solid gray',
                mb: '2px',
                alignItems: 'center'
            }}>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }} >
                    <IconButton>
                        <Avatar
                            alt="John Doe"
                            src="/static/images/avatar/2.jpg"
                        />
                    </IconButton>
                    <Typography
                        variant="body1"
                    >
                        John Doe
                    </Typography>
                </Grid>
                <Grid item align="right" sx={{ flex: '1',  display: { sm: 'none'}}} >
                    <Fab color="primary" aria-label="back" size="small"><ArrowBack /></Fab>
                </Grid>
            </Grid>

            {/* Chat Messages */}
            <Box
                sx={{
                    flex: '1 1 auto',
                    overflow: 'auto'
                }}                
            >
                <List>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText
                                    align="right"
                                    primary="Hey man, What's up ?"
                                ></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText
                                    align="right"
                                    secondary="09:30"
                                ></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2" alignItems="flex-start">
                        <ListItemAvatar
                            sx={{
                                minWidth: '0',
                                mr: '6px'
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: 'Orange',
                                    width: 24,
                                    height: 24
                                }}
                            >
                                J
                            </Avatar>
                        </ListItemAvatar>
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText
                                    align="left"
                                    primary="Hey, Iam Good! What about you ?"
                                ></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText
                                    align="left"
                                    secondary="09:31"
                                ></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </Box>

            {/* Message Input */}
            <Box>
                <Box sx={{ display: 'flex', gap: '6px', padding: '0 6px 6px 6px'}}>
                    <Box sx={{ flex: '1 0 auto'}}>
                        <TextField
                            id="outlined-basic-email"
                            label=""
                            placeholder="Send message"
                            fullWidth
                            multiline
                            maxRows={5}
                        />
                    </Box>
                    <Box xs={1} align="right">
                        <Fab color="primary" aria-label="add" size="small"><SendIcon /></Fab>
                    </Box>
                </Box>
            </Box>

           
        </Box>
    )
}

export default ChatBox;
