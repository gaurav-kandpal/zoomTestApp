import React from 'react';
import { ZoomMtg } from '@zoomus/websdk';

import Api from '../../services/Api';
import './StartMeeting.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

class StartMeeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sign: '',
            formData: this.props.formData,
            // data: this.props.data
        }

        this.generateSign = this.generateSign.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async start() {

        const { display_name, meeting_number, meeting_pwd, meeting_role } = this.props.formData;
        const signature = this.state.sign;
        const meetConfig = {
            apiKey: process.env.REACT_APP_API_KEY,
            meetingNumber: meeting_number,
            leaveUrl: 'http://localhost:3000/app',
            userName: display_name,
            passWord: meeting_pwd, // if required
            role: meeting_role || 0, // 1 for host; 0 for attendee or webinar
            signature
        };

        console.log(this.props.formData);

        console.log('Meeting-COnfig', meetConfig);
        ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            success() {
                console.log("Meeting-Number", meetConfig);
                ZoomMtg.join(
                    {
                        meetingNumber: meetConfig.meetingNumber,
                        userName: meetConfig.userName,
                        signature: signature,
                        apiKey: meetConfig.apiKey,
                        passWord: meetConfig.passWord,
                        success: function () {
                            console.log('joining meeting success');
                        },
                        error: function (res) {
                            console.log('Error Joining', res);
                        }
                    }
                );
            },
            error: function (res) {
                console.log('Error Init', res);
            },
        });
    }

    async generateSign() {
        const { meeting_number } = this.props.formData;
        const response = await Api().post(`meeting/genSign/${meeting_number}`);
        return response;
    }

    async handleClick() {
        const sign = await this.generateSign();
        this.setState({ sign: sign.sign });
        this.start();
    }

    async componentDidMount() {
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.8/lib', '/av');
        ZoomMtg.prepareJssdk();
        ZoomMtg.preLoadWasm();

        const formData = this.props.formData;

        this.setState({ formData });

        setTimeout(() => this.handleClick(), 1000)

        const x = document.getElementById('zmmtg-root');
        x.style.display = 'block';
    }

    render() {
        return (
            <div className='app-containerStart'>
                Appoinment has been approved!!!
                <br />
                <br />
                {/* Video Link ---->>> {this.state.data.submittedData && this.state.data.submittedData.join_url} */}
                <br />
                <br />
                <VideoPlayer />
                {/* <button onClick={this.handleClick}>Click</button> */}
            </div>
        );
    }
}

export default StartMeeting;