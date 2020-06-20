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
    // const [role, setRole] = useState('');
    const [patientName, setPatientName] = useState('');
    
    function ValidateEmail() { setError('Required') }
    function handleChange(e) { setEmail(e.target.value) }
    function onChangePatient(e) { setPatientName(e.target.value) }

    function loadUserData(data) {
        props.loadUserData(data);
    }

    async function onLoginAsDoctor(e) {
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
            localStorage.setItem("role", 'doctor');
            localStorage.removeItem("patient");
        }
        else {
            console.log('User Does not Exist!!!');
        }
    }

    async function onLoginAsPatient(e) {
        e.preventDefault();
        props.onLoginRequest(true);
        const email = 'sanjeev.dhawan@rsystems.com'

        const response = await Api().post('user/app', { email });

        if (response.account_id) {
            loadUserData(response);
            props.onPatientLogin(patientName);
            props.onLoginSuccess(true);
            props.redirectReferrer(true);
            localStorage.setItem("user", response.email);
            localStorage.setItem("id", response.account_id);
            localStorage.setItem("role", 'patient');
            localStorage.setItem("patient", patientName);
        }
        else {
            console.log('User Does not Exist!!!');
        }
    }

    if (props.authState.redirectToReferrer) {
        return <Redirect to='/app' />
    }

    function onDropDownChange(e) { props.onRoleChange(e.target.value) }

    return (
        <div className='login-form'>
            <div>
                <label htmlFor="role">Login as:</label>
                <select name="role" id="role" onChange={onDropDownChange}>
                    <option value="select" defaultChecked>Select</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
            </div>    
            {props.userState.role === 'doctor' ? (
                <div>
                <form>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={handleChange} placeholder='username@email' required autoComplete="off" />
                    {error && <span>{error}</span>}
                    <button type='submit' onClick={onLoginAsDoctor}>Login</button>
                    </form>
            </div>) : ''}

            { props.userState.role === 'patient' ? (
                <div>
                    <form>
                    <label htmlFor='patientName'>Name</label>
                    <input type='text' name='patientName' value={patientName} onChange={onChangePatient} placeholder='Enter your name' required autoComplete="off" />
                    <button type='submit' onClick={onLoginAsPatient}>Continue</button> 
                    </form>
                </div>
            ) : '' }    
        </div >
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