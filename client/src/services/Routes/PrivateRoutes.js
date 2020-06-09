import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = localStorage.getItem('id');
    console.log('LoggedIn', loggedIn);
    return (
        <Route {...rest} render={props => (
            loggedIn ?
                <Component {...props} />
                : <div> </div>
        )} />
    );
};

const mapStateToProps = state => ({
    authenticated: state.AuthReducer
})

export default connect(mapStateToProps, null)(PrivateRoute);