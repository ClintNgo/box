import React, {useState} from 'react'

const BoxDisplay = (props)=> {
    return( 
        <div style ={{display: 'flex'}}>
            {props.color.map((box) => {
                return(
                    <div style={{backgroundColor: box, width:'200px',height:'200px'}}></div>
                )}
            )}
        </div>
    )
}

export default BoxDisplay;