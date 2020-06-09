import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as AuthActions from '../../services/Store/Reducers/Auth';
import * as UserActions from '../../services/Store/Reducers/User';

import Api from '../../services/Api';

import './Login.css';

function Login(props) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

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
        <div className='login-form'>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' value={email} onChange={handleChange} placeholder='username@email' required autoComplete="off" />
                {error && <span>{error}</span>}
                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
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