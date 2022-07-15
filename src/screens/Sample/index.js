import React from "react";
import { Sample } from "./sample"
import { withNavBars } from "../../HOCs";
import  CreateSampleContext  from "./context";


const SampleParent = () =>{
   
        return(
            <CreateSampleContext>
                <Sample />
            </CreateSampleContext>
        )
    
}

export default withNavBars(SampleParent);