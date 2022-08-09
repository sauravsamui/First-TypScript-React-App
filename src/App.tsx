import React, { useEffect, useState } from 'react';
import { getDetails, InputDetails, OutputDetails, postDetails } from './action';
import styles from "./component/form.module.css"
import './App.css';
import Form from './component/Form';
import Table from './component/Table';

function App() {
  const [allDetails,setAllDetails] = useState<OutputDetails[]>([])
  function addDetails(details:InputDetails){
     postDetails(details)
     .then((res)=>setAllDetails([...allDetails,res]))
    return []
  }
  useEffect(() => {
   getDetails().then((detail)=>setAllDetails(detail))
  
    return () => {
  
    }
  }, [])
  
  function sortby<T>(arr:T[],value:keyof T):T[]{
     arr.sort((a:any,b:any)=>(a[value] - b[value]))//? type and how to use for string also
        return arr
      
    }

  return (
    <div className="App">
      <Form addDetails={addDetails}/>
      <div>
        <select className={styles.sort} onChange={(e:any)=>{
          let a =sortby<OutputDetails>(allDetails,e.target.value)
          setAllDetails([...a])}}>
        <option hidden>Sort by</option>
          <option value="screenHeight">Screen Height</option>
          <option value="price">Price</option>
          <option value="year" >Year</option> 
          <option value="screenWeidth">Screen Width</option>
        </select>
      </div>
      <Table data={allDetails}/>
    </div>
  );
}

export default App;
