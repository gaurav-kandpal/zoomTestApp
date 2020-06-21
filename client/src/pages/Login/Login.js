import React, {Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';

import * as AuthActions from '../../services/Store/Reducers/Auth';
import * as UserActions from '../../services/Store/Reducers/User';

import Api from '../../services/Api';

import './Login.css';

const useStyles = makeStyles(theme => ({
    SignInRoot: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(1)
        },

        '& .MuiButton-contained': {
            boxShadow: '0px 6px 6px -3px rgba(240, 109, 200, 0.12), 0px 10px 14px 1px rgba(255, 86, 105, 0.24), 0px 4px 18px 3px rgba(255, 178, 21, 0.22)',
        },

        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    accessForm: {
        padding: theme.spacing(3),
        maxWidth: '320px',
        margin: `${ theme.spacing(3) }px auto`
    },
    signInBtn: {
        background: 'linear-gradient(45deg, #f96dc8 1%,#ff5669 50%,#ffb215 100%)',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));

function Login(props) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // MUI styles
    const classes = useStyles();

    function ValidateEmail() { setError('Required') }
    function handleChange(e) { setEmail(e.target.value) }

    function loadUserData(data) {
        props.loadUserData(data);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // ValidateEmail();

        props.onLoginRequest(true);

        const response = await Api().post('user/app', { email });

        if (response.account_id) {
            loadUserData(response);
            props.onLoginSuccess(true);
            props.redirectReferrer(true);
            localStorage.setItem("user", response.email);
            localStorage.setItem("id", response.account_id);
        }
        else {
            console.log('User Does not Exist!!!');
        }
    }

    if (props.authState.redirectToReferrer) {
        return <Redirect to='/app' />
    }

    return (
        <Fragment>
            <Box className={ classes.SignInRoot }>
                <Grid container spacing={ 0 }>
                    <Grid item xs={ 12 }>
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            align="center"
                        >
                            Welcome to Patient Portal
                        </Typography>

                        <Paper className={ classes.accessForm } elevation={ 10 }>
                            <form >
                                <TextField
                                    label="Email"
                                    id="loginEmailInput"
                                    variant="outlined"
                                    fullWidth
                                    onChange={ handleChange }
                                />

                                { error && <span>{ error }</span> }

                                <Button
                                    className={ classes.signInBtn }
                                    onClick={ handleSubmit }
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                >Sign In</Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    authState: state.AuthReducer,
    userState: state.UserReducer
})

const mapDispatchToProps = {
    ...AuthActions,
    ...UserActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);