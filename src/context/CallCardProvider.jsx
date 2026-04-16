import { useState } from "react";
import { CallCardContext } from "./callCardContext";




 const CallCardProvider = ({children}) => {

const [callCards ,setCallCards] = useState([ ]) ;
const [textCards , setTextCards] = useState([ ]) ;
const [videoCards , setVideoCards] = useState([ ]) ;


  const data = {
    callCards ,
    setCallCards,
    textCards , 
    setTextCards ,
    videoCards , 
    setVideoCards

  }


    return <CallCardContext.Provider value={data}> {children}</CallCardContext.Provider>;
};

export default CallCardProvider ;