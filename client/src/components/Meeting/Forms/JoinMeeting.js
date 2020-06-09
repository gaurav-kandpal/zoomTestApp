import React from 'react';
// import StartMeeting from '../StartMeeting';
import ApproveMeeting from '../ApproveMeeting';

import './JoinMeeting.css';

class JoinMeetingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('testObject')),
            startMeeting: false,
            timeSlot: undefined
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ startMeeting: true });
        // console.log('Handle CLick', this.state.form);
    }

    handleChange(event) {
        this.setState({timeSlot: event.target.value})
        console.log('State', this.state);
    }

    render() {
        // if (!this.state.startMeeting) {
        //     return (
        //         <div className='join-meeting-form'>
        //             < form >
        //                 <input type="text" name="display_name" id="display_name" value={this.state.form.display_name} placeholder='Name' onChange={this.handleChange} />
        //                 <input type="text" name="meeting_number" id="meeting_number" value={this.state.form.meeting_number} placeholder='Meeting Number' onChange={this.handleChange} />
        //                 <input type="text" name="meeting_pwd" id="meeting_pwd" value={this.state.form.meeting_pwd} placeholder='Meeting Password' onChange={this.handleChange} />
        //                 <button type="submit" id="join_meeting" onClick={this.handleClick}>Join</button>
        //             </form >
        //         </div >
        //     );
        // }
        // const data = JSON.parse(localStorage.getItem('testObject'));
        // console.log('Print', data);
        if (!this.state.startMeeting) {
            return (
                <div className='app-container'>
                    <div className='user-details'>
                            <div className='user-details-item'>
                                <div className='title'>Name : </div>
                                <div className='description'>{this.state.data.name}</div>
                                <p></p>
                            </div>
                            <div className='user-details-item'>
                                <div className='title'>Appointment Type : </div>
                                <div className='description'>{this.state.data.appointmentType}</div>
                                <p></p>
                            </div>
                            <div className='user-details-item'>
                                <div className='title'>Preferred Appointment Slot : </div>
                                <div className='description'>{this.state.data.preferredTimeSlot}</div>
                                <p></p>
                            </div>
                    </div>
                    <div>
                        <input type="text" name="timeSlot" id="timeSlot" value={this.state.timeSlot} placeholder='Scheduled At' onChange={this.handleChange} />
                        <br/><br/><button type="submit" id="join_meeting" onClick={this.handleClick}>Approve</button>
                    </div>
                </div>
            );
        }
        return <ApproveMeeting formData={this.state} />;
    }
}

export default JoinMeetingForm;