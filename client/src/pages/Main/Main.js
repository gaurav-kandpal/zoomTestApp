import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Api from '../../services/Api';
import { isEmpty } from '../../services/common';
import JoiningForm from '../../components/Meeting/Forms/JoinMeeting';
import CreateMeeting from '../../components/Meeting/CreateMeeting';

import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

// Custom Hook to get previous props and state
// function usePrevious(value) {
//     const ref = useRef();

//     useEffect(() => {
//         ref.current = value;
//     }, [value]);

//     return ref.current;
// }

function Main(props) {
    const [user, setUser] = useState({});
    const [role, setRole] = useState('');
    const [loadJoinForm, setLoadJoinForm] = useState(false);
    const [scheduleAMeeting, setScheduleAMeeting] = useState(false);
    
    useEffect(() => {
        async function getUserInfo() {
            const res = await Api().get('/user/details');
            setUser(res);
        }
        getUserInfo();
        setRole(localStorage.getItem('role'));
    }, [props.user]);

    async function createNewMeeting() {
        setLoadJoinForm(false);
    }

    function onClickScheduleMeeting() {
        setScheduleAMeeting(true);
    }

    function onRequestVideoConsult() {
        setLoadJoinForm(true);
    }

    console.log('main', props.user, scheduleAMeeting)
    if (loadJoinForm) {
        return (
            <JoiningForm />
        );
    }
    if (scheduleAMeeting) {
        return (
            <CreateMeeting/>
        )
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
            {role === 'doctor' ? (
                <div className="doc_profile">
                    <div>Hi Doc, please click below to Create a Meeting</div>
                    <button type='submit' onClick={onClickScheduleMeeting}>Schedule a Meeting</button> 
                </div>    
            ) : (
                // <div>Hi {props.user.patient},</div>
                <div className="profile">
                    <div className="profile_left">
                        <img className="profile_image" src="data:image/jpeg;base64,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" alt="Profile Image"/>
                    </div>    
                    <div className="profile_right">
                        <div className="profile_name">Dr. James Miller</div>
                        <div className="profile_speciality">Pediatrician</div>
                        <div className="profile_location"><i class="fa fa-map-marker" style={{color: 'green'}} aria-hidden="true"/> Downers Grove, Illinois</div>
                    </div>
                    <div className="profile_bottom">
                        <div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
                        </div>
                        <div className="profile_button">
                            <button type='submit' onClick={onRequestVideoConsult}>Request Video Consult</button> 
                            <button type='submit' disabled style={{background: 'rgb(42, 133, 86)', cursor: 'not-allowed', marginLeft: '10px'}}>Request In-Person Consult</button> 
                        </div>    
                    </div>       
                </div>
            )}
        </div>
    );

}

const mapStateToProps = state => ({
    user: state.UserReducer
});

export default connect(mapStateToProps, null)(Main);
