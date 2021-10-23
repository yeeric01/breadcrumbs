import React from 'react'
import "./VideoFooter.css"
import addVideo from "../../assets/addVideo.png"
import account from "../../assets/account.png"
import home from "../../assets/home.png"
import search from "../../assets/search.png"
import communications from "../../assets/Communications.png"
function VideoFooter() {
    return (
        <div className="videoFooterContainer">
            <image className="home" src={home}></image>
            <image className="search" src={search}></image>
            <image className="addVideo" src={addVideo}></image>
            <image className="communications" src={communications}></image>
            <image className="account" src={account}></image>
        </div>
    )
}

export default VideoFooter
