import React from 'react';
import CreateMeeting from '../CreateMeeting';

import './JoinMeeting.css';

// class createMeetingForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             form: {
//                 meeting_topic: '',
//                 meeting_number: '',
//                 meeting_pwd: '',
//                 meeting_role: '',
//             },
//             startMeeting: false
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleClick(e) {
//         e.preventDefault();
//         this.setState({ startMeeting: true });
//         console.log('Handle CLick');
//     }

//     handleChange(event) {
//         const formData = { ...this.state.form };
//         formData[event.target.name] = event.target.value;
//         this.setState({ form: formData });
//         console.log('State', this.state);
//     }

//     render() {
//         if (!this.state.startMeeting) {
//             return (
//                 <div className='join-meeting-form'>
//                     < form >
//                         <input type="text" name="meeting_topic" id="meeting_topic" value={this.state.form.meeting_topic} placeholder='Meeting Topic' onChange={this.handleChange} />
//                         <input type="text" name="meeting_number" id="meeting_number" value={this.state.form.meeting_number} placeholder='Meeting Number' onChange={this.handleChange} />
//                         <input type="text" name="meeting_pwd" id="meeting_pwd" value={this.state.form.meeting_pwd} placeholder='Meeting Password' onChange={this.handleChange} />
//                         <button type="submit" id="join_meeting" onClick={this.handleClick}>Create</button>
//                     </form >
//                 </div >
//             );
//         }

//         return <CreateMeeting formData={this.state.form} />;
//     }
// }

// export default createMeetingForm;


class requestVideoCall extends React.Component {
    state = {
        patient: [
            {
                name: 'Vishant',
                age: 30,
                address: 'Meerut',
                appointmentType: 'Online',
                preferredTimeSlot: '1PM-2PM'
            },
            {
                name: 'Satish',
                age: 50,
                address: 'Noida',
                appointmentType: 'Online',
                preferredTimeSlot: '4PM-5PM'
            },
            {
                name: 'Ramesh',
                age: 24,
                address: 'Mumbai',
                appointmentType: 'Online',
                preferredTimeSlot: '11AM-12PM'
            },
            {
                name: 'Sidhu',
                age: 44,
                address: 'Punjab',
                appointmentType: 'Online',
                preferredTimeSlot: '2PM-3PM'
            },
            {
                name: 'Savita',
                age: 34,
                address: 'Ranchi',
                appointmentType: 'Online',
                preferredTimeSlot: '3PM-4PM'
            }   
        ]
    }
   render() {
    const data = this.state.patient.length;
    const patient = Math.floor((Math.random() * data));
        return <CreateMeeting patient={this.state.patient} data={patient}/>;

   }
}

export default requestVideoCall;
