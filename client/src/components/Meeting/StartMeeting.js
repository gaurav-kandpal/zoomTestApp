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
            meeting_number: undefined,
            meeting_pwd: undefined
        }


    }

    async start() {

        const signature = this.state.sign;
        const meetConfig = {
            apiKey: process.env.REACT_APP_API_KEY,
            meetingNumber: this.state.meeting_number,
            leaveUrl: 'http://localhost:3000/app',
            userName: 'Vishant',
            passWord: this.state.meeting_pwd, // if required
            role: 0, // 1 for host; 0 for attendee or webinar
            signature
        };

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
        // const { meeting_number } = this.props.formData;
        const response = await Api().post('meeting/genSign');
        return response;
    }

    async handleClick() {
        const sign = await this.generateSign();
        this.setState({ sign: sign.sign, meeting_number: sign.meetingId, meeting_pwd: sign.meetingPwd }, () => console.log('check the state', this.state));
        this.start();
    }

    async componentDidMount() {

        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.8/lib', '/av');
        ZoomMtg.prepareJssdk();
        ZoomMtg.preLoadWasm();

        setTimeout(() => this.handleClick(), 1000)

        const x = document.getElementById('zmmtg-root');
        x.style.display = 'block';
    }

    render() {
        return (
            <div className='app-containerStart'>
                <VideoPlayer />
            </div>
        );
    }
}

export default StartMeeting;