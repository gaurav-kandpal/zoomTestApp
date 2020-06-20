import React from 'react';
// import StartMeeting from '../StartMeeting';
import ApproveMeeting from '../ApproveMeeting';
import StartMeeting from '../StartMeeting';

import './JoinMeeting.css';

class JoinMeetingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startMeeting: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ startMeeting: true });
        // console.log('Handle CLick', this.state.form);
    }

    // handleChange(event) {
    //     this.setState({timeSlot: event.target.value})
    //     console.log('State', this.state);
    // }

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

//         if (!this.state.startMeeting) {
//             return (
//                 <div className='app-container'>
//                     <div className='user-details'>
//                             <div className='user-details-item'>
//                                 <div className='title'>Name : </div>
//                                 {/* <div className='description'>{this.state.data.name}</div> */}
//                                 <div className='description'>Check</div>
//                                 <p></p>
//                             </div>
//                             <div className='user-details-item'>
//                                 <div className='title'>Appointment Type : </div>
//                                 {/* <div className='description'>{this.state.data.appointmentType}</div> */}
//                                 <div className='description'>Test</div>
//                                 <p></p>
//                             </div>
//                             <div className='user-details-item'>
//                                 <div className='title'>Preferred Appointment Slot : </div>
//                                 {/* <div className='description'>{this.state.data.preferredTimeSlot}</div> */}
//                                 <div className='description'>Deliver</div>
//                                 <p></p>
//                             </div>
//                     </div>
//                     {/* <div>
//                         <input type="text" name="timeSlot" id="timeSlot" value={this.state.timeSlot} placeholder='Scheduled At' onChange={this.handleChange} />
//                         <br/><br/><button type="submit" id="join_meeting" onClick={this.handleClick}>Approve</button>
//                     </div> */}
//                 </div>
//             );
//         }
//         return <ApproveMeeting formData={this.state} />;
//     }
// }

// export default JoinMeetingForm;

if (!this.state.startMeeting) {
    return (
        <div className="appointment_profile">
            <div className="appointment_type">
                <div className="start1">Appointment Type <span>Follow up Visit</span></div>
                <div className="start2">Confirmed</div>
            </div>
            <div className="appointment_time">
                <div className="start1">Date &amp; Time</div>
                <div className="start2">Jun 08, 2020, 11:15 AM</div>
            </div>
            <div className="appointment_with">
                <div className="start1">Consultant Name</div>
                <div className="start2">Mark Miller, MD</div>
            </div>
            <div className="appointment_location">
                <div className="start1">Location</div>
                <div className="start2">California Hospital Medical Centre</div>
            </div>
            <div className="appointment_due">
                <div className="start1">In 05 minute</div>
                <div className="start2"><button type='submit' onClick={this.handleClick}>Join</button></div>
            </div>
        </div> );
        }
    return (
        <StartMeeting/>
    );
    }
}
export default JoinMeetingForm;
