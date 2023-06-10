import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Navigate } from 'react-router-dom';
import { Login } from '../api/graphql/Client/Auth';
import { useMutation } from '@apollo/client';
const crypto = require("crypto-js");
import { setTokenCookies } from '../Utils/cookies';
import Cookies from 'js-cookie';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="index.html">
            Chit Chat
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

export default function SignIn() {
    const [login, { data, loading }] = useMutation(Login);
    const [errorMessage, setErrorMessage] = useState(null);
    const hasUser = Cookies.get('accessToken');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = new FormData(event.currentTarget);
        const email = userData.get('email');
        const password = crypto.AES.encrypt(userData.get('password'), email).toString();

        try {
            setErrorMessage(null);
            const { data } = await login({
                variables: {
                    email,
                    password
                }
            })
            const { accessToken } = data?.login;
            setTokenCookies(accessToken);
        } catch (error) {
            if (error.graphQLErrors && error.graphQLErrors[0].extensions?.code === 'AUTHENTICATION_FAILED') {
                setErrorMessage('Email and password do not match')
            }
        }
    };
    
    if (hasUser) return <Navigate replace to="/" />
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                    { errorMessage &&
                        <Typography variant="caption" color="red">{ errorMessage }</Typography>
                    }

                    <FormControlLabel
                        sx={{display: 'flex', justifyContent: 'left'}}
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/'>
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}