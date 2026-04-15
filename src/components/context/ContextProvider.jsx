import { useState } from "react";
import { CallContext } from "./CallContext";
import { TextContext } from "./TextContext";
import { VideoContext } from "./VideoContext";




const ContextProvider = ({ children }) => {
    const [call, setCall] = useState([]);
    const [text,setText] = useState([]);
    const [video,setVideo] = useState([]);
    const data = {
        call,
        setCall,
        text,
        setText,
        video,
        setVideo,
    };
    return (
        <CallContext.Provider value={data}>
            <TextContext.Provider value={data}>
                <VideoContext.Provider value={data}>
            {children}
                </VideoContext.Provider>
            </TextContext.Provider>
            </CallContext.Provider>
         );
};

export default ContextProvider;