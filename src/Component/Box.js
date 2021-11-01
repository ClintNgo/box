import React, {useState} from 'react'

const Box = (props)=>{

    const[box,setBox] = useState('')

    const createbox = (e) =>{
        e.preventDefault()
        props.NewBoxColor(box)
        setBox()
    }

        return(
            <form onSubmit={ createbox }>
                <h3>Color:</h3>
                <input type='text' onChange={ (e)=> setBox(e.target.value) }
                value = {box}></input>
                <input type = 'submit' value = 'Add'></input>
            </form>
        )
}

export default Box;