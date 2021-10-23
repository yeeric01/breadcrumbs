import React, { Component } from 'react'
import Video from './Video'
import VideoFooter from "./VideoFooter"
export class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="videoList">
                    <Video></Video>
                    <Video></Video>
                    <Video></Video>
                    <Video></Video>
                    <Video></Video>
                    <Video></Video>
                </div>
                <VideoFooter></VideoFooter>
            </div>
        )
    }
}

export default Home
