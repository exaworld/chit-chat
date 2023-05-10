import { Avatar, Container, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { ArrowBack } from "@mui/icons-material";

const ChatDetailBar = () => {
    return (
        <Container>
            <Grid item align="right" sx={{ flex: '1',  display: { md: 'none'}, mt: '16px'}} >
                <Fab color="primary" aria-label="back" size="small"><ArrowBack /></Fab>
            </Grid>
            <Avatar
                sx={{
                    bgcolor: 'Orange',
                    width: 100,
                    height: 100,
                    margin: 'auto',
                    marginTop: '50px',
                    marginBottom: '20px'
                }}
            >
                J
            </Avatar>
            <Typography variant='h5'>Juan dela Cruz</Typography>
            
            <List sx={{ maxWidth: 'max-content', margin: 'auto'}}>
                <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: '0', marginRight: '6px'}}>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText secondary="juandelacruz@gmail.com" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: '0', marginRight: '6px'}}>
                        <CallIcon />
                    </ListItemIcon>
                    <ListItemText secondary="+63 000 000" />
                </ListItem>
            </List>
        </Container>
    )
}

export default ChatDetailBar;
