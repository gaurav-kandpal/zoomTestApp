import React from 'react';
import Api from '../../services/Api';
import JoinMeeting from './JoinMeeting';

class ApproveMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedData: null,
            timeSlot: this.props.formData.timeSlot,
            showButton: false,
            isJoined: false,
            data: JSON.parse(localStorage.getItem('testObject')),
        }
        this.handleClick = this.handleClick.bind(this);

    }

    tick() {
        const UTC_hours = new Date().getHours();     
        // const day = new Date().getUTCDay();

        if (this.state.timeSlot <= UTC_hours) {
            this.setState({ showButton: true })

        } else {
            this.setState({ showButton: false })
        }
    };

    async componentDidMount() {
        await Api().post('/meeting/create')
            .then(res => this.setState({ 
                submittedData: res
            }));
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({isJoined: true});
        console.log('Handle CLick', this.state.timeSlot);
    }

    render() {
        const formData = {
            display_name: this.state.data && this.state.data.name,
            meeting_number: this.state.submittedData && this.state.submittedData.id,
            meeting_pwd: this.state.submittedData && this.state.submittedData.password
        }

        if (!this.state.isJoined) {
            return (
                <div className='app-container'>
                    Appoinment has been approved!!!
                <br />
                    <br />
                    Video Link ---->>> {this.state.submittedData && this.state.submittedData.join_url}
                    <br />
                    <br />
                    {this.state.showButton ? <button type="submit" id="join_meeting_button" onClick={this.handleClick}>Join</button> : ''}
                </div>
            );
        }
        return <StartMeeting formData={formData} data={this.state}/>
    }
}

export default ApproveMeeting;