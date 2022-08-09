import React, { useState } from 'react'
import { InputDetails } from '../action';
import styles from "./form.module.css";
import {v4} from "uuid"
type FormProps={
    addDetails:Function;
}
const Form = ({addDetails}:FormProps) => {
    const [details,setDetails] = useState<InputDetails>({
        model:"",
        year:0,
        os:"",
        screenHeight:0,
        screenWeidth:0,
        price:0,
        id:v4()
    
    })
    let handleChange =(e:any)=>{ //type?
      let {name,value} = e.target;
      setDetails({
        ...details,[name]:value
      })
    }

    let handleSubmit=(e:any)=>{ //type?
      e.preventDefault();
      addDetails(details)
      setDetails({
        model:"",
        year:0,
        os:"",
        screenHeight:0,
        screenWeidth:0,
        price:0,
        id:v4()
    
    })
     
    }
  return (
    <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} >
            <br/>
            <label>Model</label>
            <br/>
            <input name='model' value={details.model} type={"text"} placeholder="model name" onChange={handleChange}/>
            <br/>
            
            <label>Year</label>
            <br/>
            <input name='year' value={details.year} type={"number"} placeholder="year" onChange={handleChange}/>
            <br/>
            
            <label>OS</label>
            <br/>
            <input  name='os' value={details.os} type={"text"} placeholder="os" onChange={handleChange}/>
            <br/>
         
            <label>Screen Height</label>
            <br/>
            <input  name='screenHeight' value={details.screenHeight} type={"number"} placeholder="Screen Height" onChange={handleChange}/>
            <br/>
         
            <label>Screen Weidth</label>
            <br/>
            <input  name='screenWeidth' value={details.screenWeidth} type={"number"} placeholder="Screen Weidth" onChange={handleChange}/>
            <br/>
          
            <label>Price</label>
            <br/>
            <input  name='price' value={details.price} type={"number"} placeholder="Price" onChange={handleChange}/>
            <br/>
            <br/>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Form