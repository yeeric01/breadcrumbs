import React, {useRef, useState} from 'react'
import "./Video.css"
import VideoSide from "./VideoSide.js"
import videoSource from "./sohard.mp4";
function Video() {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = ()=>{
        if(play){
            videoRef.current.pause();
            setPlay(false);
        }else{
            videoRef.current.play();
            setPlay(true);
        }
        
    };
    return (
        <div className="videoContainer">
            <video className="videoContent" 
            width="100%" 
            height="100%" 
            src={videoSource} 
            ref={videoRef}
            onClick={onVideoPress}
            loop/>
            <VideoSide></VideoSide>
        </div>
    )
}

export default Video
