import {React,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Copyright} from '../components/Copyright.js';
import {SimpleDialog} from '../components/SimpleDialog.js';


import { useHistory } from 'react-router-dom';

import { environment } from '../components/env';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



export default function Signup() {
    
    const [serverSideError, setServerSideError] = useState("");
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [showEmailError, setShowEmailError] = useState(false);
    const [emailError, setEmailError] = useState("");

    const history = useHistory();
    const classes = useStyles();

    const [signupSuccessOpen, setSignupSuccessOpen] = useState(false);

    const showSignupSuccess = () => {
        setSignupSuccessOpen(true);
    };

    const hideSignupSuccess = () => {
        setSignupSuccessOpen(false);
    };

    async function handleSignup(event) {
        event.preventDefault();
        //showSignupSuccess();
        //return false;
        setShowError(false);
        setServerSideError("");
        
        setLoading(true);

        const form = event.target;
        const formData = new FormData(form);

        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        var apiUrl = `${environment.apiUrl}`;
        console.log("apiUrl -----> " + apiUrl);
        apiUrl = apiUrl + "/user";
        console.log("apiUrl after append = ----> " + apiUrl);
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: json
        });
        const data = await response.json();
        handleSignupResponse(data);
    }

    function handleSignupResponse(data) {
        setLoading(false);
        if(data.status == "ok") {
            showSignupSuccess();
            setTimeout(function() {
                history.push("/signin");
            }, 3000);
            
        }
        else {
            setShowError(true);
            setServerSideError(data.error);
        }
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateEmail(event) {
        var latestEmail = event.target.value;
        if(latestEmail == undefined || latestEmail.trim() == "") {
            setShowEmailError(true);
            setEmailError("Email is mandatory");
        }
        else if(!isValidEmail(latestEmail)) {
            setShowEmailError(true);
            setEmailError("Email format is not standard");
        }
        else {
            setShowEmailError(false);
            setEmailError("");
        }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <SimpleDialog open={signupSuccessOpen} onClose={hideSignupSuccess} 
            title="Sign Up Complete"
            message={"You will now be redirected to SIGN IN page in seconds."}
        />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={showError ? undefined : 'hidden'}>
                <Alert severity="error">{serverSideError}</Alert>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                type="email"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onBlur={validateEmail}
                error={showEmailError}
                helperText={emailError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}