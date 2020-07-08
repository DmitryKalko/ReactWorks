import React from 'react';



const OneMem = (props) => {
    const { url, width, height, id, onClick, status } = props;
console.log(props);
    return(
        <>
            <img 
            onClick={()=> onClick(id)} 
            src={url}  
            style={status === true ? {opacity:0.5, width: width / 5, height: height / 5} : {width: width / 5, height: height / 5}}
            />
            
        </>
    )
}

export default OneMem;