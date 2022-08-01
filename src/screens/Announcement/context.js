import React, { createContext, useState } from "react";

export const CreateImageContext = createContext();

const CreateImageProvider = (props) => {

    const [AllImages, setAllImages] = useState([])
    const [imageSelected,setImageSelected] = useState(null)
    const [textSelected,setTextSelected] = useState(null)

    
    return (
        <CreateImageContext.Provider value={{AllImages,setAllImages,imageSelected,setImageSelected,textSelected,setTextSelected}}>
            {props.children}
        </CreateImageContext.Provider>
    )
}
export default CreateImageProvider
