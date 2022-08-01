import React from "react"
import { Example } from "./example"
import  CreateSampleProvider  from "./context";
 const ExampleParent = () =>{
    return(
        <CreateSampleProvider>
        <Example/>
        </CreateSampleProvider>
    )
}
export default ExampleParent;