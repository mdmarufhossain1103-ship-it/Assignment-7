import { useState } from "react";
import { CallContext } from "./CallContext";




const ContextProvider = ({ children }) => {
    const [call, setCall] = useState([]);
    const data = {
        call,
        setCall,
    };
    return (
        <CallContext.Provider value={data}>{children}</CallContext.Provider>
    );
};

export default ContextProvider;