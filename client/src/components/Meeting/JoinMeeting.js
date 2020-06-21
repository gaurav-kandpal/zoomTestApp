import React from 'react';
import StartMeeting from './StartMeeting';

import './JoinMeeting.css';

class JoinMeetingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                display_name: '',
                meeting_number: '',
                meeting_pwd: '',
                meeting_role: '',
            },
            startMeeting: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ startMeeting: true });
    }

    handleChange(event) {
        const formData = { ...this.state.form };
        formData[event.target.name] = event.target.value;
        this.setState({ form: formData });
    }

    render() {
        if (!this.state.startMeeting) {
            return (
                <div className='join-meeting-form'>
                    < form >
                        <input type="text" name="display_name" id="display_name" value={this.state.form.display_name} placeholder='Your name' onChange={this.handleChange} />
                        <input type="text" name="meeting_number" id="meeting_number" value={this.state.form.meeting_number} placeholder='Meeting Number' onChange={this.handleChange} />
                        <input type="text" name="meeting_pwd" id="meeting_pwd" value={this.state.form.meeting_pwd} placeholder='Meeting Password' onChange={this.handleChange} />
                        <button type="submit" id="join_meeting" onClick={this.handleClick}>Join</button>
                    </form >
                </div >
            );
        }

        return <StartMeeting formData={this.state.form} />;
    }
}

export default JoinMeetingForm;