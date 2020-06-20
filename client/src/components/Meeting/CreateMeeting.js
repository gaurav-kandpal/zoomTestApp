import React from 'react';
import Api from '../../services/Api';
import StartMeeting from './StartMeeting';

class CreateMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedData: null,
            showJoinButton: false,
            isJoined: false,
        }
        // this.handleClick = this.handleClick.bind(this);

    }
    async componentDidMount() {
        await Api().post('/meeting/create')
            .then(res => this.setState({ 
                submittedData: res,
                showJoinButton: true
            }));
    }

        render() {
        if (this.state.showJoinButton) {
            return (
                <StartMeeting/>
            );
        }

        return (
            <div className='app-container'>
                Loading...
            </div>
        );
    }
}

export default CreateMeeting;