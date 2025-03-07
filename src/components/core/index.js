import React from 'react';
import "./index.scss";
import config from "../../api/schema.json";

const VideoComponent = () => {
    const { about_us } = config.schema;
    
    return (
        <video src={about_us.video}  autoPlay 
        loop 
        muted 
        playsInline  style={{ width: '100%', height: '100%' }}>
            Tu navegador no soporta el elemento de video.
        </video>
    );
};

export default VideoComponent;
