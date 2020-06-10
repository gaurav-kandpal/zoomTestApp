import React from 'react';
import Api from '../../services/Api';

class CreateMeeting extends React.Component {
    
    // async componentDidMount() {
        //     await Api().post('/meeting/create');
        // }
        
        // componentDidMount() {
        //     localStorage.removeItem('testObject');
        // }
        render() {
        const { patient, data } = this.props;
        const obj = {
            'name': patient[data].name,
            'appointmentType': patient[data].appointmentType,
            'preferredTimeSlot': patient[data].preferredTimeSlot
        }
        // Put the object into storage
        localStorage.setItem('testObject', JSON.stringify(obj));
        return (
            <div className='app-container'>
                <div className='user-details'>
                        <div className='user-details-item'>
                            <div className='title'>Name : </div>
                            <div className='description'>{obj.name}</div>
                            <p></p>
                        </div>
                        <div className='user-details-item'>
                            <div className='title'>Appointment Type : </div>
                            <div className='description'>{obj.appointmentType}</div>
                            <p></p>
                        </div>
                        <div className='user-details-item'>
                            <div className='title'>Preferred Appointment Slot : </div>
                            <div className='description'>{obj.preferredTimeSlot}</div>
                            <p></p>
                        </div>
                </div>
            </div>
        );
    }
}

export default CreateMeeting;