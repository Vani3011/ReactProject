import React from "react";
import { Sample } from "./sample"
import { withNavBars } from "../../HOCs";
import  CreateSampleProvider  from "./context";


const SampleParent = () =>{
   
        return(
            <CreateSampleProvider>
                <Sample />
            </CreateSampleProvider>
        )
    
}

export default withNavBars(SampleParent);