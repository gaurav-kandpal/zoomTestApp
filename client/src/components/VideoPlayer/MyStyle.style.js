import { css } from '@emotion/core';

const myStyle = css`
        position: absolute;
        margin: 40px 0 100px 0;
        min-width: 600px;
        min-height: 400px;
        width: 100%;
        height: 100%;
    
        .meeting-app {
            height: 100% !important;
            width: 100% !important;
    
            .meeting-client {
                position: relative;
            }
    
            .meeting-client-inner {
                position: relative;
    
                #wc-content {
                    display: flex;
                    border: 1px solid black;
                }
            }
    }
    
    // #wc-content #wc-container-left {
    //     .main-layout {
    //         height: 100%;
    
    //         .active-main {
    //             height: 100% !important;
    
    //             .active-avatar {
    //                 width: 100px;
    //                 height: 100px;
    //             }
    //         }
    //     }
    // }
    
    // #wc-content #wc-container-right {
    //     height: 100%;
    //     min-width: 40%;
    // }
    
    // // Chat Container
    // #wc-content #wc-container-right .chat-container {
    //     height: 100%;
    //     display: flex;
    //     flex-direction: column;
    // }
    
    // #wc-content #wc-container-right {
    //     #wc-header {
    //         min-width: 100%;
    //     }
    
    //     .text-center {
    //         padding: 0 0 10px 0;
    //         position: relative;
    //         justify-content: center;
    //         align-items: center;
    //         padding: 50px 10px;
    //         background-color: white;
    //     }
    
    //     .circle-sm-loading {
    //         margin: 0;
    //     }
    
    //     #wc-footer span {
    //         display: inline;
    //     }
    
    //     span.img-mute {
    //         background: green !important;
    //     }
    
    //     .img-unmute {
    //         background: red !important;
    //     }
    
    //     span.img-start-video {
    //         background: red !important;
    //     }
    
    //     .img-stop-video {
    //         background: green !important;
    //     }
    // }
    
    // /* Main Content */
    
    // /* .wc-content {
    //     height: 100%;
    //     /* position: relative; */
    
    // /* overflow: hidden; */
    
    // /* display: flex; */
    
    // /* } */
    
    // #wc-container-left > div {
    //     height: 100%;
    // }
    
    // .suspension-content {
    //     display: none;
    // }
    
    // #dialog-join {
    //     width: 100% !important;
    // }
    
    // .meeting-info-icon__recreate-paper {
    //     position: relative;
    //     width: 80%;
    //     font-size: 10px;
    // }
    
    // /* Footer */
    
    // footer {
    //     width: 100% !important;
    
    //     #wc-footer {
    //         display: flex;
    //         justify-content: space-evenly;
    //         width: 100% !important;
    //         height: 80px;
    //         bottom: 0px;
    //         padding: 5px 20px 0 20px;
    //     }
    // }
    
    // footer #wc-footer > div {
    //     display: flex;
    // }
    
    // .security-option-menu {
    //     display: none;
    // }
    
    // .more-button {
    //     display: none;
    // }
    
    // .btn-toolbar {
    //     display: none;
    // }
    
    // #wc-footer-left {
    //     display: flex;
    //     width: 200px;
    //     justify-content: space-evenly;
    // }
    
    // #wc-footer-left .left-tool-item {
    //     display: flex;
    //     flex-direction: column;
    // }
    
    // #wc-footer-left .join-audio {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-evenly;
    // }
    
    // /* .zm-modal-body {
    //     background: black;
    // } */
    
    // #sv-active-video {
    //     width: 100%;
    //     height: 100%;
    // }
    
    // .img-layer > span {
    //     display: inline;
    //     background-image: none;
    // }
    
    // /* ChatBox */
    
    // /* participants */
    // .participants-footer .bottom-btn-container {
    //     width: 100%;
    //     display: flex;
    //     flex-direction: column;
    // }
    
`;

export default myStyle;